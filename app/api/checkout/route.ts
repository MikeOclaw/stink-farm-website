import { NextResponse } from 'next/server';
import { getStripe, PRODUCT_CONFIG } from '@/lib/stripe';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: Request) {
  // Rate limiting: 5 checkout attempts per IP per minute
  const ip = getClientIp(request);
  const limit = rateLimit(`checkout:${ip}`, {
    maxRequests: 5,
    windowMs: 60 * 1000, // 1 minute
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
        },
      }
    );
  }

  // Parse and validate request body
  let source = 'unknown';
  try {
    const body: unknown = await request.json();
    if (
      body &&
      typeof body === 'object' &&
      'source' in body &&
      typeof (body as { source: unknown }).source === 'string'
    ) {
      // Sanitize source — only allow alphanumeric, dashes, underscores
      source = ((body as { source: string }).source)
        .replace(/[^a-zA-Z0-9\-_]/g, '')
        .slice(0, 64);
    }
  } catch {
    // Body parsing failed — continue with default source
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://stinkfarmgame.com';

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: PRODUCT_CONFIG.currency,
            product_data: {
              name: PRODUCT_CONFIG.name,
              description: PRODUCT_CONFIG.description,
              images: PRODUCT_CONFIG.images.length > 0 ? PRODUCT_CONFIG.images : undefined,
            },
            unit_amount: PRODUCT_CONFIG.price,
          },
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 499, // $4.99
              currency: 'usd',
            },
            display_name: 'USPS First Class (5–10 business days)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 10 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 899, // $8.99
              currency: 'usd',
            },
            display_name: 'USPS Priority Mail (2–3 business days)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 3 },
            },
          },
        },
      ],
      success_url: `${appUrl}/buy/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/buy`,
      metadata: {
        source,
        product: 'stink-farm-base-game',
      },
    });

    if (!session.url) {
      throw new Error('Stripe did not return a checkout URL');
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[Checkout] Stripe error:', error instanceof Error ? error.message : error);

    // Don't expose internal error details
    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again.' },
      { status: 500 }
    );
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
