import Image from 'next/image';
import Link from 'next/link';
import { BuyButton } from '@/components/BuyButton';
import { CardShowcase } from '@/components/CardShowcase';
import { StatBadge } from '@/components/StatBadge';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
        {/* Decorative stink clouds */}
        <div
          className="absolute top-8 right-8 text-6xl opacity-20 stink-float"
          aria-hidden="true"
        >
          💨
        </div>
        <div
          className="absolute bottom-16 left-4 text-4xl opacity-15 stink-float"
          style={{ animationDelay: '1s' }}
          aria-hidden="true"
        >
          💨
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-block bg-hay-gold text-white font-headline text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
                🎉 The Farmyard is Calling!
              </div>
              <h1 className="font-headline text-5xl md:text-7xl text-barn-red leading-tight mb-4">
                Outbluff the
                <br />
                Farmyard!
              </h1>
              <p className="font-body text-lg md:text-xl text-near-black mb-6 leading-relaxed">
                The hilarious bluffing card game where you play smelly animals face-down and dare
                your family to call your bluff. Will they sniff out your lie — or hold their nose
                and trust you?
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-3 mb-8">
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–8" />
                <StatBadge icon="🎂" label="Ages" value="7+" />
                <StatBadge icon="⏱️" label="Minutes" value="20–40" />
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

              <p className="font-body text-sm text-gray-500 mt-3">
                + shipping · Made in the USA · Ages 7+
              </p>
            </div>

            {/* Right: Box art */}
            <div className="flex justify-center">
              <div className="relative">
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
                {/* Floating animal badge */}
                <div className="absolute -bottom-4 -right-4 bg-hay-gold text-white font-headline text-lg px-4 py-2 rounded-full shadow-lg border-2 border-white rotate-6">
                  65 Cards! 🐄
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
            <h2 className="font-headline text-4xl md:text-5xl text-barn-red mb-4">
              How to Play
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              It's part bluff, part dare, all farmyard chaos. Simple enough for kids, sneaky
              enough for adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                icon: '🃏',
                title: 'Play a Card Face-Down',
                desc: 'Announce what animal you\'re playing — but you can totally lie. Who\'s going to stop you?',
              },
              {
                step: '2',
                icon: '👃',
                title: 'Call the Bluff',
                desc: 'Think your neighbor just played a "Kitten" that smells suspiciously like a Bull? Call it! Flip the card.',
              },
              {
                step: '3',
                icon: '💨',
                title: 'Someone Stinks!',
                desc: 'If you\'re caught bluffing, you take the pile. If the challenger was wrong, they do. Last one standing wins!',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center bg-cream rounded-2xl p-8 border-2 border-cream-dark shadow-sm"
              >
                <div className="text-5xl mb-4" aria-hidden="true">
                  {item.icon}
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
            <h2 className="font-headline text-4xl md:text-5xl text-barn-red mb-4">
              Meet the Farmyard 🐄🐔🐷
            </h2>
            <p className="font-body text-lg text-gray-600">
              65 cards featuring hilarious animals, action cards, and stink-packed surprises.
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
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-12">
            What the Farmyard is Saying 🌾
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
          <div className="text-5xl mb-6" aria-hidden="true">
            🌾
          </div>
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Born from Real Farmyard Chaos
          </h2>
          <p className="font-body text-xl leading-relaxed mb-8 text-red-100">
            A dad cleaned up after four boys for years. One day he thought: what if the mess
            became the game? Stink Farm was born at the kitchen table and tested by the most
            ruthless critics he knows — his own kids.
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
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-10">
            Looks Good. Smells Worse. 📸
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: '/images/photos/hand holding cards b.png',
                alt: 'Player holding Stink Farm cards — choosing their bluff',
              },
              {
                src: '/images/photos/4 players cards face up - perspective view.png',
                alt: 'Four players around the table with Stink Farm cards spread out',
              },
              {
                src: '/images/photos/Player perspective b.png',
                alt: 'Player perspective view of a Stink Farm game in progress',
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
            Ready to Stink?
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
