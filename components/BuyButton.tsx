'use client';

import { useState } from 'react';

interface BuyButtonProps {
  className?: string;
  label?: string;
  source?: string;
}

export function BuyButton({
  className = '',
  label = 'Pre-Order Now — $19.99 (Save $2)',
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
              viewBox="0 0 576 512"
              fill="white"
              className="h-6 w-6 md:h-7 md:w-7 flex-shrink-0"
              aria-hidden="true"
            >
              {/* Font Awesome cart-shopping — handle on left, basket opens right */}
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
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
