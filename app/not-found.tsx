import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Stink Farm',
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center py-16 px-4">
      <div className="max-w-lg text-center">
        <div className="text-8xl mb-6" aria-hidden="true">
          🐄
        </div>
        <h1 className="font-headline text-5xl text-barn-red mb-4">
          Uh oh — the cow got out!
        </h1>
        <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
          This page seems to have wandered off into the pasture. Let&apos;s get you back to
          the farmyard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="font-headline text-xl bg-barn-red text-white px-8 py-4 rounded-full hover:bg-barn-red-dark transition-colors shadow-md"
          >
            Go Home
          </Link>
          <Link
            href="/buy"
            className="font-headline text-xl border-2 border-barn-red text-barn-red px-8 py-4 rounded-full hover:bg-barn-red hover:text-white transition-colors"
          >
            Buy the Game
          </Link>
        </div>
        <p className="font-body text-gray-400 text-sm mt-8">Error 404 — Page not found</p>
      </div>
    </section>
  );
}
