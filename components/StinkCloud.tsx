'use client';

import { useRef } from 'react';

const FARM_SOUNDS = [
  '/sounds/fart.mp3',
  '/sounds/cow.mp3',
  '/sounds/burp.mp3',
  '/sounds/pig.mp3',
  '/sounds/fart-b.mp3',
  '/sounds/chicken.mp3',
  '/sounds/flies.mp3',
  '/sounds/goat.mp3',
];

export function StinkCloud({ className = '' }: { className?: string }) {
  const soundIndex = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function playNextSound() {
    const src = FARM_SOUNDS[soundIndex.current % FARM_SOUNDS.length];
    soundIndex.current += 1;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.play().catch(() => {/* autoplay policy — silently ignore */});
  }

  return (
    <button
      onClick={playNextSound}
      className={`stink-float cursor-pointer hover:scale-110 transition-transform focus:outline-none ${className}`}
      style={{ background: 'none', border: 'none', padding: 0 }}
      aria-label="Click for a farmyard sound"
    >
      <span className="text-6xl stink-green-cloud" aria-hidden="true">💨</span>
      <p className="text-xs font-body text-gray-500 mt-1 text-center">Click me 🤭</p>
    </button>
  );
}
