'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EmailSignupProps {
  className?: string;
  variant?: 'light' | 'dark'; // light = cream bg, dark = dark bg (poker page)
}

export function EmailSignup({ className = '', variant = 'light' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  const isDark = variant === 'dark';

  if (status === 'success') {
    return (
      <div className={`text-center py-4 ${className}`}>
        <div className="relative inline-block w-16 h-16 mb-2" aria-hidden="true">
          <Image src="/images/animals/Windmill.png" alt="" fill className="object-contain" sizes="64px" />
        </div>
        <p className={`font-headline text-xl ${isDark ? 'text-white' : 'text-barn-red'}`}>
          You&apos;re in the Farmyard!
        </p>
        <p className={`font-body text-sm mt-1 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
          Check your inbox for a welcome from us.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Title with windmill images on each side */}
      <h2 className={`font-headline text-4xl md:text-5xl mb-3 text-center flex items-center justify-center gap-3 ${isDark ? 'text-white' : 'text-barn-red'}`}>
        <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
          <Image src="/images/animals/Windmill.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
        </span>
        Join the Farmyard
        <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
          <Image src="/images/animals/Windmill.png" alt="" fill className="object-contain" sizes="56px" />
        </span>
      </h2>
      {/* Subtitle line */}
      <p className={`font-body text-lg text-center mb-6 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
        Stay in the loop on deals, updates, and all things Stink Farm
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
          className="flex-1 font-body px-4 py-3 rounded-full border-2 border-hay-gold focus:outline-none focus:border-barn-red text-near-black bg-white disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="font-headline text-lg bg-barn-red text-white px-6 py-3 rounded-full border-2 border-white btn-cta disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining…' : 'Join Free'}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-body text-sm text-barn-red text-center mt-2" role="alert">
          {errorMsg}
        </p>
      )}
      <p className={`font-body text-xs text-center mt-2 ${isDark ? 'text-white/60' : 'text-gray-400'}`}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
