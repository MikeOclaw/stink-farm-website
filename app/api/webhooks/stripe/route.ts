import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getStripe } from '@/lib/stripe';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import Stripe from 'stripe';

export async function POST(request: Request) {
  // Rate limiting: 100 webhook calls per IP per minute (Stripe sends from their IPs)
  const ip = getClientIp(request);
  const limit = rateLimit(`webhook:${ip}`, {
    maxRequests: 100,
    windowMs: 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[Webhook] STRIPE_WEBHOOK_SECRET is not configured');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  // Get raw body for signature verification
  const body = await request.text();

  // Get Stripe signature header
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    console.error('[Webhook] Missing stripe-signature header');
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature — this is critical for security
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Webhook] Signature verification failed:', message);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle events
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        void paymentIntent;
        console.log('[Webhook] Payment failed:', paymentIntent.id);
        break;
      }

      default:
        // Acknowledge but don't process unknown events
        console.log('[Webhook] Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[Webhook] Handler error:', error instanceof Error ? error.message : error);
    // Return 200 to prevent Stripe from retrying — log the error internally
    return NextResponse.json({ received: true });
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const orderId = session.id;
  const customerEmail = session.customer_details?.email ?? 'unknown';
  const amountTotal = session.amount_total ?? 0;
  const source = session.metadata?.source ?? 'unknown';

  console.log('[Webhook] Order completed:', {
    orderId,
    customerEmail: customerEmail.replace(/(.{2}).*(@.*)/, '$1***$2'), // Partial mask for logs
    amountTotal: `$${(amountTotal / 100).toFixed(2)}`,
    source,
  });

  // V1: Order data lives in Stripe. No database needed.
  // Future: Could send to fulfillment system, CRM, or email service here.
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
