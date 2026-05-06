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
        className={`relative font-headline text-xl md:text-2xl px-8 py-4 rounded-full shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${
          loading ? 'opacity-70' : 'hover:scale-105 active:scale-95 btn-pulse'
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
          label
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
