'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { BuyButton } from '@/components/BuyButton';
import { CardShowcase } from '@/components/CardShowcase';
import { StatBadge } from '@/components/StatBadge';

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

export default function HomePage() {
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
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
        {/* Decorative stink clouds — click for farmyard sounds! */}
        <button
          onClick={playNextSound}
          className="absolute top-8 right-8 stink-float cursor-pointer hover:scale-110 transition-transform focus:outline-none"
          style={{ background: 'none', border: 'none', padding: 0 }}
          aria-label="Click for a farmyard sound"
        >
          <span className="text-6xl stink-green-cloud" aria-hidden="true">💨</span>
          <p className="text-xs font-body text-gray-500 mt-1 text-center">Click me 😄</p>
        </button>


        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-block bg-hay-gold text-white font-headline text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
                The Farmyard is Calling!
              </div>
              <h1 className="font-headline text-5xl md:text-7xl text-barn-red leading-tight mb-4">
                Outbluff the
                <br />
                Farmyard!
              </h1>
              <p className="font-body text-lg md:text-xl text-near-black mb-6 leading-relaxed">
                Outbluff your farmyard rivals to win! Be the first player to ditch all your cards by bluffing like a boss, busting others' bluffs, and scheming with action cards.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-3 mb-8">
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–6" />
                <StatBadge icon="🎂" label="Ages" value="6–100" />
                <StatBadge icon="⏱️" label="Minutes" value="15–30" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <BuyButton
                  label="Pre-Order Now — $19.99"
                  source="homepage-hero"
                  className="bg-barn-red text-white hover:bg-barn-red-dark"
                />
                <Link
                  href="/how-to-play"
                  className="font-body font-semibold text-barn-red border-2 border-barn-red px-8 py-4 rounded-full hover:bg-barn-red hover:text-white transition-colors text-center"
                >
                  How to Play ↓
                </Link>
              </div>


            </div>

            {/* Right: Box art */}
            <div className="flex justify-center">
              <div className="relative">
                <p className="text-center font-body text-xs text-gray-400 mb-2">Made in the USA</p>
                <div className="relative w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/box/Stink Farm - 2.0 Box Top.png"
                    alt="Stink Farm card game box — the hilarious bluffing game for the whole family"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Floating badges below box */}
                <div className="absolute -bottom-16 -right-6 flex flex-col items-center gap-1">
                  <div className="bg-hay-gold text-white font-headline text-sm px-4 py-2 rounded-full shadow-lg border-2 border-white whitespace-nowrap" style={{ transform: 'rotate(-6deg)' }}>
                    Big Bluffs, Bigger Laughs
                  </div>
                  <div className="bg-blue-500 text-white font-headline text-xs px-3 py-1 rounded-full shadow border-2 border-white" style={{ transform: 'rotate(-6deg)' }}>
                    New in 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play (summary) */}
      <section id="how-to-play" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-barn-red mb-4 flex items-center justify-center gap-3">
              <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
                <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0)', transform: 'scaleX(-1)' }} sizes="40px" />
              </span>
              How to Play
              <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
                <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0)' }} sizes="40px" />
              </span>
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              It's part bluff, part dare, all farmyard chaos. Simple enough for kids, sneaky
              enough for adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: '1',
                icon: 'plop-plow',
                title: 'Play Action Cards',
                desc: 'Before your turn, unleash an action card — block challenges, peek at cards, force a bluff. Chaos is a strategy.',
              },
              {
                step: '2',
                icon: 'card-back',
                title: 'Play Cards Face-Down',
                desc: 'Announce what animal you\'re playing — but you can totally bluff. Who\'s going to stop you?',
              },
              {
                step: '3',
                icon: 'nose-sniff',
                title: 'Call the Bluff',
                desc: 'Watch their face. If their eyes dart, their smile cracks, or they just look guilty — call it! Flip the card.',
              },
              {
                step: '4',
                icon: '😳',
                title: 'Someone Stinks!',
                desc: 'If you\'re caught bluffing, you take the pile. If the challenger was wrong, they do. First to ditch all cards wins!',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center bg-cream rounded-2xl p-6 border-2 border-cream-dark shadow-sm"
              >
                <div className="text-5xl mb-4 flex justify-center" aria-hidden="true">
                  {item.icon === 'plop-plow' ? (
                    <div className="relative w-14 h-20 card-place">
                      <Image
                        src="/images/cards/Plop Plow 1.png"
                        alt="Plop Plow action card"
                        fill
                        className="object-contain rounded-lg shadow-md"
                        sizes="56px"
                      />
                    </div>
                  ) : item.icon === 'card-back' ? (
                    <div className="relative w-14 h-20 card-place" style={{ animationDelay: '0.4s' }}>
                      <Image
                        src="/images/cards/Back of stink and action cards.png"
                        alt="Stink Farm card back"
                        fill
                        className="object-contain rounded-lg shadow-md"
                        sizes="56px"
                      />
                    </div>
                  ) : item.icon === 'nose-sniff' ? (
                    <span className="sniff-nose inline-block">👃</span>
                  ) : item.icon === '😳' ? (
                    <span className="shame-bow inline-block">😳</span>
                  ) : (
                    item.icon
                  )}
                </div>
                <div className="w-10 h-10 bg-barn-red text-white font-headline text-xl rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-headline text-2xl text-near-black mb-2">{item.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-to-play"
              className="font-headline text-xl text-barn-red border-2 border-barn-red px-8 py-3 rounded-full hover:bg-barn-red hover:text-white transition-colors inline-block"
            >
              Full Rules →
            </Link>
          </div>
        </div>
      </section>

      {/* Card Showcase */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-headline text-4xl md:text-5xl text-barn-red mb-4 flex items-center justify-center gap-3">
              <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
                <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="40px" />
              </span>
              Meet the Farmyard
              <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
                <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" sizes="40px" />
              </span>
            </h2>
            <p className="font-body text-lg text-gray-600">
              62 cards featuring hilarious animals, action cards, and stink-packed surprises.
            </p>
          </div>

          <CardShowcase count={6} className="mb-10" />

          <div className="text-center">
            <Link
              href="/buy"
              className="font-headline text-xl text-barn-red border-2 border-barn-red px-8 py-3 rounded-full hover:bg-barn-red hover:text-white transition-colors inline-block"
            >
              See the Full Card Lineup →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-12 flex items-center justify-center gap-3">
            <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="40px" />
            </span>
            What the Farmyard is Saying
            <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" sizes="40px" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'We played this for two hours straight at our last game night. My kids are still arguing about who bluffed the best.',
                name: 'Sarah T.',
                detail: 'Mom of 3, Iowa',
              },
              {
                quote:
                  "If you love Liar's Dice or Bluff — this is the family version you've been waiting for. So much fun.",
                name: 'Marcus D.',
                detail: 'Poker player & dad',
              },
              {
                quote:
                  'My 8-year-old beat all the adults. Multiple times. With zero shame. 10/10.',
                name: 'The Johnson Family',
                detail: 'Playtester family',
              },
            ].map((testimonial, i) => (
              <blockquote
                key={i}
                className="bg-cream rounded-2xl p-6 border-2 border-cream-dark shadow-sm"
              >
                <p className="font-body text-near-black italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="font-body text-sm text-gray-500">
                  <span className="font-semibold text-near-black">{testimonial.name}</span>
                  <br />
                  {testimonial.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story Teaser */}
      <section className="bg-barn-red text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6" aria-hidden="true">
            <span className="relative inline-block w-16 h-16 opacity-90">
              <Image src="/images/animals/Barn Burner.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} sizes="64px" />
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Born from Real Farmyard Chaos
          </h2>
          <p className="font-body text-xl leading-relaxed mb-8 text-red-100">
            Stink Farm started as a simple idea: take the bluffing mechanics everyone loves from classic card games, give them a farmyard makeover, and make them work for the whole family. Mike O'Reilly designed it at home, and his kids were the first playtesters. After rounds of rule-tweaking and lots of laughs, Stink Farm was born.
          </p>
          <Link
            href="/about"
            className="font-headline text-xl bg-white text-barn-red px-8 py-4 rounded-full hover:bg-cream transition-colors shadow-lg inline-block"
          >
            Read the Full Story →
          </Link>
        </div>
      </section>

      {/* Photo section */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-10 flex items-center justify-center gap-3">
            <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)', mixBlendMode: 'multiply' }} sizes="40px" />
            </span>
            Looks Good. Smells Worse.
            <span className="relative inline-block w-10 h-10 opacity-80" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" style={{ mixBlendMode: 'multiply' }} sizes="40px" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                src: '/images/photos/4 players cards face up - perspective view.png',
                alt: 'Four players around the table with Stink Farm cards spread out',
              },
              {
                src: '/images/photos/hand holding cards b.png',
                alt: 'Player holding Stink Farm cards — choosing their bluff',
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-hay-gold py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-6xl text-white mb-4 drop-shadow-sm">
            Ready to Bluff and Bust 'Em?
          </h2>
          <p className="font-body text-white text-xl mb-8 leading-relaxed">
            Grab your copy today and find out who in your family is the biggest bluffer.
          </p>
          <BuyButton
            label="Pre-Order Now — $19.99 + Shipping"
            source="homepage-footer-cta"
            className="bg-barn-red text-white hover:bg-barn-red-dark text-2xl"
          />
          <p className="font-body text-white text-sm mt-4 opacity-80">
            Secure checkout via Stripe · Ships from the USA
          </p>
        </div>
      </section>
    </>
  );
}
