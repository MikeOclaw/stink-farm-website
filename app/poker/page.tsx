import Image from 'next/image';
import { BuyButton } from '@/components/BuyButton';
import { StatBadge } from '@/components/StatBadge';
import { CardShowcase } from '@/components/CardShowcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stink Farm for Poker Players — Bluff the Whole Family',
  description:
    'You bluff at poker. Now bluff the whole family. Stink Farm is the bluffing card game poker players love. Perfect for game nights, ages 6+.',
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

        {/* Suit symbols — all four clustered upper-right */}
        <div className="absolute top-6 right-6 select-none" aria-hidden="true">
          {/* Top row: ♠ ♥ */}
          <div className="flex gap-4 mb-2 justify-end">
            <span
              className="font-headline rotate-6 inline-block"
              style={{ fontSize: '4.5rem', lineHeight: 1, color: '#c8d0c8', opacity: 0.5 }}
            >♠</span>
            <span
              className="font-headline -rotate-6 inline-block"
              style={{ fontSize: '4.5rem', lineHeight: 1, color: '#c8d0c8', opacity: 0.5 }}
            >♥</span>
          </div>
          {/* Bottom row: ♣ ♦ */}
          <div className="flex gap-4 justify-end">
            <span
              className="font-headline -rotate-3 inline-block"
              style={{ fontSize: '3.5rem', lineHeight: 1, color: '#c8d0c8', opacity: 0.4 }}
            >♣</span>
            <span
              className="font-headline rotate-3 inline-block"
              style={{ fontSize: '3.5rem', lineHeight: 1, color: '#c8d0c8', opacity: 0.4 }}
            >♦</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-green-500 text-green-400 font-headline text-sm px-4 py-1.5 rounded-full mb-6">
                For Poker Families
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
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–6" />
                <StatBadge icon="🎂" label="Ages" value="6–100" />
                <StatBadge icon="⏱️" label="Minutes" value="15–30" />
              </div>

              <div className="inline-flex flex-col items-stretch gap-2">
                <BuyButton
                  label="Pre-Order Now — $19.99"
                  source="poker-page"
                  className="bg-green-500 text-white hover:bg-green-400 text-2xl"
                />
                <p className="font-body text-gray-400 text-sm text-center">
                  + shipping · Secure Stripe checkout
                </p>
              </div>
            </div>

            {/* Poker-themed photo */}
            <div className="relative">
              <div className="flex justify-end mb-2 px-1">
                <p className="font-body text-xs text-green-400 flex items-center gap-1.5">
                  <Image src="/images/us-flag.svg" alt="US flag" width={16} height={11} className="inline-block rounded-sm" />
                  Made in the USA
                </p>
              </div>
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
              {/* Green felt badge — left side, tilting up */}
              <div className="absolute -top-3 -left-3 bg-green-500 text-white font-headline text-sm px-4 py-2 rounded-full shadow-lg border-2 border-green-300 -rotate-3">
                Game Night Ready!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The poker connection */}
      <section
        className="py-16 md:py-24"
        style={{ background: '#0d2b1e' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-12 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)', transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Why Poker Players Love Stink Farm
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} sizes="56px" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧐',
                title: "It's All About Reads",
                desc: "Can you read a 10-year-old across the table? Better yet — can they read you? Your poker instincts are about to get tested by someone with zero filter and zero fear.",
              },
              {
                icon: '🤔',
                title: 'Are They Holding What They Say?',
                desc: "In poker you think about the odds they actually have the cards they're representing. In Stink Farm, same question — just with hogs instead of aces.",
              },
              {
                icon: '😂',
                title: 'Family-Table Stakes',
                desc: 'No chips on the line — just family honor and farmyard pride. The stakes are lower. The laughs are way higher.',
              },
              {
                icon: '🔥',
                title: 'Action Cards Change Everything',
                desc: 'Stink Sniffer. Barn Burner. Bale Blocker. Action cards shift momentum like a well-timed re-raise. Stay sharp.',
              },
              {
                icon: '👀',
                title: 'Position Matters',
                desc: "Is it better to sit to the left or right of the big bluffer? You better figure it out quickly.",
              },
              {
                icon: '😎',
                title: 'Future Poker Players',
                desc: "Every round builds real skills — reading faces, masking tells, knowing when to call. Start them young. The farmyard table is the best poker prep there is.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-green-900 bg-opacity-50 rounded-2xl p-6 border border-green-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <h3 className="font-headline text-xl text-white">{item.title}</h3>
                </div>
                <p className="font-body text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Showcase */}
      <section
        id="card-lineup"
        className="py-16"
        style={{ background: '#1a4731' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-4 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)', transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Meet the Farmyard
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} sizes="56px" />
            </span>
          </h2>
          <p className="font-body text-gray-400 text-center mb-10">
            62 cards. 11 animals. Infinite bluffing opportunities.
          </p>
          <CardShowcase count={6} className="mb-6" />
        </div>
      </section>

      {/* Poker photo + Game Night */}
      <section
        className="py-16"
        style={{ background: '#0a1f16' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-10 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)', transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Perfect for Game Night
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} sizes="56px" />
            </span>
          </h2>
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
                  Games run 15–30 minutes. You can fit in three rounds before dessert.
                </p>
                <p>
                  Bonus: every hand your kid plays is a lesson in reading faces, controlling reactions, and thinking one step ahead. Basically poker school — with goats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 md:py-24"
        style={{ background: '#0d2b1e' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-12 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            What Poker Players Are Saying
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "My 9-year-old called my bluff three times in one game. I play poker twice a week. I'm not okay.",
                name: 'Rob T.',
                detail: 'Home game player, Ohio',
              },
              {
                quote:
                  "I brought this to my poker buddy's kid's birthday party. Huge hit. Every parent there wanted to know where to get one.",
                name: 'Dave K.',
                detail: 'Weekly poker night regular',
              },
              {
                quote:
                  "If you love Liar's Dice or Bluff — this is the family version you've been waiting for. So much fun.",
                name: 'Marcus D.',
                detail: 'Poker player & dad',
              },
            ].map((testimonial, i) => (
              <blockquote
                key={i}
                className="bg-green-900 bg-opacity-60 rounded-2xl p-6 border border-green-700"
              >
                <p className="font-body text-gray-200 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="font-body text-sm text-gray-400">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                  <br />
                  {testimonial.detail}
                </footer>
              </blockquote>
            ))}
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
