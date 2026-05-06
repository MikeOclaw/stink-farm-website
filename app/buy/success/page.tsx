import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed — Stink Farm',
  description: 'Thank you for your Stink Farm order!',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-grass-green to-green-800 flex items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Celebration */}
        <div className="text-7xl mb-6" aria-hidden="true">
          🎉
        </div>

        <h1 className="font-headline text-4xl md:text-5xl text-barn-red mb-4">
          Order Confirmed!
        </h1>
        <p className="font-body text-lg text-near-black mb-6 leading-relaxed">
          You&apos;re officially part of the farmyard family. Your Stink Farm game is on its
          way!
        </p>

        <div className="bg-cream rounded-2xl p-6 mb-8 text-left border border-cream-dark">
          <h2 className="font-headline text-xl text-near-black mb-4">What Happens Next?</h2>
          <ul className="space-y-3 font-body text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-grass-green font-bold mt-0.5">✅</span>
              <span>
                <strong className="text-near-black">Order confirmed:</strong> You&apos;ll receive
                an email receipt from Stripe.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-hay-gold font-bold mt-0.5">📦</span>
              <span>
                <strong className="text-near-black">We pack your order:</strong> Mike personally
                packs every game with care (and maybe a little stink).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-barn-red font-bold mt-0.5">🚚</span>
              <span>
                <strong className="text-near-black">Ships via USPS:</strong> 5–10 business days
                delivery. We&apos;ll send a tracking number when your order ships.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-grass-green font-bold mt-0.5">🐄</span>
              <span>
                <strong className="text-near-black">Game time!</strong> Gather the family, deal
                the cards, and let the bluffing begin.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full font-headline text-lg bg-barn-red text-white px-8 py-4 rounded-full hover:bg-barn-red-dark transition-colors shadow-md"
          >
            Back to Home
          </Link>
          <Link
            href="/how-to-play"
            className="block w-full font-headline text-lg border-2 border-barn-red text-barn-red px-8 py-4 rounded-full hover:bg-barn-red hover:text-white transition-colors"
          >
            Learn How to Play →
          </Link>
        </div>

        <p className="font-body text-xs text-gray-400 mt-6">
          Questions? Email us at{' '}
          <a href="mailto:hello@stinkfarmgame.com" className="underline hover:text-barn-red">
            hello@stinkfarmgame.com
          </a>
        </p>
      </div>
    </section>
  );
}
