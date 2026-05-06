import Image from 'next/image';
import { BuyButton } from '@/components/BuyButton';
import { StatBadge } from '@/components/StatBadge';
import { CardShowcase } from '@/components/CardShowcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stink Farm for Poker Players — Bluff the Whole Family',
  description:
    'You bluff at poker. Now bluff the whole family. Stink Farm is the bluffing card game poker players love. Perfect for game nights, ages 7+.',
};

export default function PokerPage() {
  return (
    <>
      {/* Hero — dark green felt vibe */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a4731 0%, #0d2b1e 50%, #0a1f16 100%)',
        }}
      >
        {/* Felt texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
          }}
          aria-hidden="true"
        />

        {/* Poker chips decoration */}
        <div
          className="absolute top-10 right-10 text-6xl opacity-20 rotate-12"
          aria-hidden="true"
        >
          🎰
        </div>
        <div
          className="absolute bottom-10 left-10 text-5xl opacity-20 -rotate-12"
          aria-hidden="true"
        >
          ♠️
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-green-500 text-green-400 font-headline text-sm px-4 py-1.5 rounded-full mb-6">
                🃏 For Poker Players
              </div>
              <h1 className="font-headline text-5xl md:text-7xl text-white mb-4 leading-tight">
                You Bluff at Poker.
                <br />
                <span className="text-green-400">Now Bluff</span>
                <br />
                the Whole Family.
              </h1>
              <p className="font-body text-xl text-gray-300 mb-8 leading-relaxed">
                Stink Farm takes everything you love about bluffing — the reads, the tells, the
                poker faces — and drops it into a card game the whole family can play.
                No buy-in required.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–8" />
                <StatBadge icon="🎂" label="Ages" value="7+" />
                <StatBadge icon="⏱️" label="Minutes" value="20–40" />
              </div>

              <BuyButton
                label="Pre-Order Now — $19.99"
                source="poker-page"
                className="bg-green-500 text-white hover:bg-green-400 text-2xl"
              />
              <p className="font-body text-gray-400 text-sm mt-3">
                + shipping · Secure Stripe checkout
              </p>
            </div>

            {/* Poker-themed photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-green-700">
                <Image
                  src="/images/photos/Poker theme - 4 players cards face up - top view.png"
                  alt="Top-down view of four players in a Stink Farm game with poker-style card spread"
                  width={800}
                  height={534}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Green felt badge */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white font-headline text-sm px-4 py-2 rounded-full shadow-lg border-2 border-green-300 rotate-3">
                Game Night Ready! 🏆
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The poker connection */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(180deg, #0d2b1e 0%, #1a4731 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-12">
            Why Poker Players Love Stink Farm 🃏
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎭',
                title: 'It\'s All About Reads',
                desc: 'Can you spot a bluff by watching someone\'s face? Your poker instincts work here. Watch the 8-year-old across the table — they have zero poker face.',
              },
              {
                icon: '🧠',
                title: 'Range Thinking',
                desc: 'In poker, you think about ranges. In Stink Farm, you think about what cards have already been played. Sound familiar? It should.',
              },
              {
                icon: '😂',
                title: 'Family-Table Stakes',
                desc: 'No chips on the line — just family honor and farmyard pride. The stakes are lower. The laughs are way higher.',
              },
              {
                icon: '🔥',
                title: 'Action Cards Change Everything',
                desc: 'Stink Sniffer. Barn Burner. Bale Blocker. Action cards shift momentum like a well-timed 3-bet. Stay sharp.',
              },
              {
                icon: '👀',
                title: 'Position Matters',
                desc: 'Playing last has advantages. Sound familiar? Good. Your experience will show — right up until your kid outplays you anyway.',
              },
              {
                icon: '🏆',
                title: 'Bragging Rights',
                desc: 'Win Stink Farm against your family and you\'re the undisputed farmyard champion. Lose and you never hear the end of it.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-green-900 bg-opacity-50 rounded-2xl p-6 border border-green-700"
              >
                <div className="text-4xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-headline text-xl text-white mb-2">{item.title}</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Showcase on dark bg */}
      <section
        className="py-16"
        style={{ background: '#0a1f16' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-white text-center mb-4">
            The Cards 🐄
          </h2>
          <p className="font-body text-gray-400 text-center mb-10">
            65 cards. 11 animals. Infinite bluffing opportunities.
          </p>
          <CardShowcase count={6} className="mb-6" />
        </div>
      </section>

      {/* Poker photo */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(180deg, #0a1f16 0%, #1a4731 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-green-700">
              <Image
                src="/images/photos/Poker theme - player perspective.png"
                alt="Player's perspective in a Stink Farm poker-night style game"
                width={800}
                height={534}
                className="w-full h-auto"
              />
            </div>
            <div className="text-white">
              <h2 className="font-headline text-4xl mb-6">Perfect for Game Night 🌙</h2>
              <div className="space-y-4 font-body text-gray-300">
                <p>
                  Poker night winding down? Deal out Stink Farm. It&apos;s the perfect
                  cooldown game — no math, no chips, just pure bluffing instincts.
                </p>
                <p>
                  Visiting family for the holidays? Stink Farm bridges the gap. Grandma can
                  play. The teenagers can play. The competitive uncle who takes everything too
                  seriously? Absolutely can play.
                </p>
                <p>
                  Games run 20–40 minutes. You can fit in three rounds before dessert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-900 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
            The Table Is Set. <span className="text-green-400">Your Move.</span>
          </h2>
          <p className="font-body text-gray-300 text-xl mb-8">
            $19.99 + shipping. Less than a tournament buy-in. Way more laughs.
          </p>
          <BuyButton
            label="Pre-Order Stink Farm — $19.99"
            source="poker-page-cta"
            className="bg-green-500 text-white hover:bg-green-400 text-2xl"
          />
          <p className="font-body text-gray-400 text-sm mt-4">
            Secure checkout via Stripe · Ships from the USA
          </p>
        </div>
      </section>
    </>
  );
}
