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
  price: 1999, // $19.99 pre-launch price (retail: $21.99)
  currency: 'usd',
  images: ['https://stink-farm-website.vercel.app/images/logo/stink-farm-logo-checkout.png'],
};
