import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed — Stink Farm',
  description: 'Thank you for your Stink Farm order!',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Header banner */}
        <div className="bg-barn-red rounded-3xl px-8 py-10 mb-6 shadow-xl">
          <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
          <h1 className="font-headline text-4xl md:text-5xl text-white mb-3">
            Order Confirmed!
          </h1>
          <p className="font-body text-lg text-white/90 leading-relaxed">
            You&apos;re officially part of the farmyard family.<br />
            Your Stink Farm game is on its way!
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 text-left border-2 border-hay-gold">
          <h2 className="font-headline text-2xl text-barn-red mb-5 text-center">What Happens Next?</h2>
          <ul className="space-y-4 font-body text-gray-700">
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">✅</span>
              <span>
                <strong className="text-near-black">Order confirmed:</strong> You&apos;ll receive an email receipt from Stripe.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">📦</span>
              <span>
                <strong className="text-near-black">We pack your order:</strong> Every game is packed with care — and just the right amount of stink.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">🚚</span>
              <span>
                <strong className="text-near-black">Ships via USPS:</strong> 5–10 business days delivery. We&apos;ll send a tracking number when your order ships.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">
                <Image
                  src="/images/cards/Back of stink and action cards.png"
                  alt="Stink Farm card back"
                  width={36}
                  height={50}
                  className="rounded-md shadow-md"
                />
              </div>
              <span>
                <strong className="text-near-black">Game time!</strong> Gather the family, deal the cards, and let the bluffing begin.
              </span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mb-6">
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

        <p className="font-body text-xs text-gray-400">
          Questions? Email us at{' '}
          <a href="mailto:hello@stinkfarmgame.com" className="underline hover:text-barn-red">
            hello@stinkfarmgame.com
          </a>
        </p>
      </div>
    </section>
  );
}
