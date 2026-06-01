'use client';

import { useState } from 'react';

interface BuyButtonProps {
  className?: string;
  label?: string;
  source?: string;
}

export function BuyButton({
  className = '',
  label = 'Pre-Order Now — $19.99',
  source = 'unknown',
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    // Track event in Plausible
    if (typeof window !== 'undefined' && 'plausible' in window) {
      (window as unknown as { plausible: (event: string, opts: object) => void }).plausible(
        'Checkout Started',
        { props: { source } }
      );
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source }),
      });

      const data: unknown = await response.json();

      if (!response.ok) {
        const err = data as { error?: string };
        throw new Error(err.error ?? 'Something went wrong. Please try again.');
      }

      const { url } = data as { url: string };
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received.');
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`relative font-headline text-2xl md:text-3xl px-10 py-4 md:px-12 md:py-5 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${
          loading ? 'opacity-70' : 'btn-cta'
        } ${className}`}
        aria-label={loading ? 'Processing...' : label}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Taking you to checkout…
          </span>
        ) : (
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-6 w-6 md:h-7 md:w-7 flex-shrink-0"
              aria-hidden="true"
              style={{ transform: 'scaleX(-1)', display: 'block' }}
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="ml-3">{label}</span>
          </span>
        )}
      </button>
      {error && (
        <p className="text-barn-red font-body text-sm font-semibold" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
