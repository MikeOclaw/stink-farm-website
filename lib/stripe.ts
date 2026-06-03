import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }

  _stripe = new Stripe(key, {
    apiVersion: '2023-10-16',
    typescript: true,
  });

  return _stripe;
}

export const PRODUCT_CONFIG = {
  name: 'Stink Farm — The Bluffing Card Game',
  description:
    '62-card bluffing card game for 2–6 players, ages 6–100. Includes animal cards, action cards, wild cards, and cheat sheets. Ships via USPS.',
  price: 2000, // $20.00 pre-launch price (retail: $22.00)
  currency: 'usd',
  images: [] as string[], // Add CDN URL after deploy if desired
};
