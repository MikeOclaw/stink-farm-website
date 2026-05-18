'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-cream border-b-4 border-barn-red shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          {/* Farm barn illustration — double the original size */}
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src="/images/logo/Stink Farm Logo - just Farm.png"
              alt="Stink Farm barn logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* "STINK FARM" wordmark — wide/thin, so fix height and let width be auto */}
          <div className="relative h-7 w-48 flex-shrink-0">
            <Image
              src="/images/logo/Stink Farm Logo - just Name.png"
              alt="Stink Farm"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/how-to-play"
            className="font-body font-semibold text-near-black hover:text-barn-red transition-colors"
          >
            How to Play
          </Link>
          <Link
            href="/about"
            className="font-body font-semibold text-near-black hover:text-barn-red transition-colors"
          >
            Our Story
          </Link>
          <Link
            href="/buy"
            className="font-body font-semibold text-barn-red border-2 border-barn-red px-5 py-2 rounded-full hover:bg-barn-red hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Order Stink Farm</span>
            <span className="font-body text-sm opacity-75">$19.99</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-near-black hover:bg-cream-dark transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 py-4 flex flex-col gap-4">
          <Link
            href="/how-to-play"
            className="font-body font-semibold text-near-black hover:text-barn-red transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            How to Play
          </Link>
          <Link
            href="/about"
            className="font-body font-semibold text-near-black hover:text-barn-red transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/buy"
            className="font-body font-semibold text-barn-red hover:text-barn-red-dark transition-colors py-2 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span>Order Stink Farm</span>
            <span className="font-body text-sm text-gray-500">$19.99</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
