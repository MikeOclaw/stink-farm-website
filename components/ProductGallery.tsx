'use client';

import Image from 'next/image';
import { useState } from 'react';

const GALLERY_IMAGES = [
  {
    src: '/images/box/Stink Farm - 2.0 Box Top.png',
    alt: 'Stink Farm box — top view',
    thumb: '/images/box/Stink Farm - 2.0 Box Top.png',
  },
  {
    src: '/images/box/Stink Farm - 2.0 Box Bottom.png',
    alt: 'Stink Farm box — back',
    thumb: '/images/box/Stink Farm - 2.0 Box Bottom.png',
  },
  {
    src: '/images/photos/4 players cards face up - top view b.png',
    alt: 'Four players with cards spread out — top view',
    thumb: '/images/photos/4 players cards face up - top view b.png',
  },
  {
    src: '/images/photos/hand holding cards b.png',
    alt: 'Player holding a hand of Stink Farm cards',
    thumb: '/images/photos/hand holding cards b.png',
  },
  {
    src: '/images/photos/Player perspective b.png',
    alt: 'Player perspective at the table',
    thumb: '/images/photos/Player perspective b.png',
  },
];

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = GALLERY_IMAGES[activeIndex];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-dark bg-white aspect-square">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(i)}
            aria-label={img.alt}
            className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              i === activeIndex
                ? 'border-barn-red shadow-md scale-105'
                : 'border-cream-dark opacity-70 hover:opacity-100 hover:border-barn-red'
            }`}
          >
            <Image
              src={img.thumb}
              alt={img.alt}
              fill
              className="object-contain bg-white"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
