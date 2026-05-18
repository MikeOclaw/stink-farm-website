import Image from 'next/image';
import { BuyButton } from '@/components/BuyButton';
import { StatBadge } from '@/components/StatBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Stink Farm — $19.99 | The Bluffing Card Game',
  description:
    'Order Stink Farm today for $19.99 + shipping. The bluffing card game for families, ages 6–100. 62 cards, 2–6 players, 15–30 min.'
};

// 11 animals (A–K) + Wild + all 8 action cards (A–Z) = 20 cards
const CARD_GALLERY = [
  { file: 'Alpaca 2 (fav).png', alt: 'Alpaca card — fluffy outside, stinky inside' },
  { file: 'Bull 1 (fav 1).png', alt: 'Bull card — the powerhouse of the farmyard' },
  { file: 'Chicken 2 (fav).png', alt: 'Chicken card — feathers and fibs' },
  { file: 'Duck 2 (fav).png', alt: 'Duck card — quacking up with bluffs' },
  { file: 'Elk 2 (fav).png', alt: 'Elk card — big rack, bigger bluffs' },
  { file: 'Fish 2 (fav 1).png', alt: 'Fish card — smells like a bluff' },
  { file: 'Goat 1 (fav).png', alt: 'Goat card — chewing through your bluffs' },
  { file: 'Hog 4 (fav 2).png', alt: 'Hog card — wallowing in deception' },
  { file: 'Insect 1 (fav 1).png', alt: 'Insect card — the tiny troublemaker' },
  { file: 'Jackrabbit 1 (fav).png', alt: 'Jackrabbit card — fast and sneaky' },
  { file: 'Kitten 1 (fav).png', alt: 'Kitten card — if stink were cute' },
  { file: 'Wild 1.png', alt: 'Wild card — play as any animal' },
  { file: 'Bale Blocker 1.png', alt: 'Bale Blocker action card — block a challenge' },
  { file: 'Barn Burner 1.png', alt: 'Barn Burner action card — burn it all down' },
  { file: 'Farmer Favor 1.png', alt: 'Farmer Favor action card' },
  { file: 'Fortified Fence 1.png', alt: 'Fortified Fence action card' },
  { file: 'Out to Pasture 1.png', alt: 'Out to Pasture action card' },
  { file: 'Picky Pitchfork 1.png', alt: 'Picky Pitchfork action card' },
  { file: 'Plop Plow 1.png', alt: 'Plop Plow action card' },
  { file: 'Stink Sniffer 1.png', alt: 'Stink Sniffer action card — sniff out the bluffer' },
];

export default function BuyPage() {
  return (
    <>
      {/* Product Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-dark">
                <Image
                  src="/images/box/Stink Farm - 2.0 Box Top.png"
                  alt="Stink Farm card game box — complete game with 65 cards"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-cream-dark aspect-video">
                  <Image
                    src="/images/photos/4 players cards face up - top view b.png"
                    alt="Top view of four players with Stink Farm cards spread out"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-cream-dark aspect-video">
                  <Image
                    src="/images/photos/hand holding cards b.png"
                    alt="Player holding a hand of Stink Farm cards"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="md:sticky md:top-24">
              <div className="inline-block bg-grass-green text-white font-headline text-sm px-4 py-1 rounded-full mb-4">
                Pre-Order Now — Ships Soon!
              </div>
              <h1 className="font-headline text-4xl md:text-5xl text-near-black mb-2">
                Stink Farm
              </h1>
              <p className="font-headline text-2xl text-barn-red mb-4">
                The Bluffing Card Game
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–6" />
                <StatBadge icon="🎂" label="Ages" value="6–100" />
                <StatBadge icon="⏱️" label="Minutes" value="15–30" />
                <StatBadge icon="🃏" label="Cards" value="62" iconImage="/images/cards/Back of stink and action cards.png" />
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-headline text-5xl text-barn-red">$19.99</span>
                <span className="font-body text-gray-500">+ shipping</span>
              </div>

              {/* Description */}
              <div className="font-body text-near-black leading-relaxed mb-8 space-y-3">
                <p>
                  Stink Farm is the bluffing card game where you outbluff your farmyard rivals! Play animal cards face-down and declare the current animal — or bluff like a boss.
                </p>
                <p>
                  If they catch your bluff, you Scoop the Pile. If they&apos;re wrong, they do. First player to play all their cards wins!
                </p>
              </div>

              {/* What's in the box */}
              <div className="bg-cream rounded-xl p-4 mb-8 border border-cream-dark">
                <h2 className="font-headline text-lg text-near-black mb-2">
                  What&apos;s in the Box 📦
                </h2>
                <ul className="font-body text-sm text-gray-600 space-y-1">
                  <li>✅ 62 hilariously illustrated cards (46 Stink + 16 Action)</li>
                  <li>✅ 11 animal types in alphabetical order (Alpaca–Kitten)</li>
                  <li>✅ Action cards (Bale Blocker, Barn Burner, Stink Sniffer…)</li>
                  <li>✅ 2 Wild cards</li>
                  <li>✅ 6 Cheat sheets (animal order guide for all players)</li>
                </ul>
              </div>

              {/* CTA */}
              <BuyButton
                label="Pre-Order Now — $19.99"
                source="buy-page"
                className="bg-barn-red text-white hover:bg-barn-red-dark w-full justify-center text-2xl mb-3"
              />

              <div className="flex items-center justify-center gap-2 text-gray-500 font-body text-sm">
                <span>🔒</span>
                <span>Secure checkout via Stripe · 100% satisfaction guarantee</span>
              </div>

              {/* Shipping info */}
              <div className="mt-4 bg-hay-gold bg-opacity-10 rounded-xl p-4 border border-hay-gold border-opacity-30">
                <p className="font-body text-sm text-gray-600">
                  <strong className="text-near-black">Shipping:</strong> USPS first-class mail.
                  Delivery in 5–10 business days after order. Pre-orders ship as soon as stock
                  is ready. You&apos;ll get an email confirmation.
                </p>
                <p className="font-body text-sm text-gray-600 mt-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Image src="/images/us-flag.svg" alt="US flag" width={20} height={14} className="inline-block rounded-sm" />
                    <strong className="text-near-black">Made in the USA</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Gallery */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red text-center mb-4 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="48px" />
            </span>
            Meet the Farmyard
            <span className="relative inline-block w-12 h-12" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" sizes="48px" />
            </span>
          </h2>
          <p className="font-body text-gray-600 text-center mb-10">
            62 cards featuring 11 animals + action cards. Every turn is a potential bluff.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CARD_GALLERY.map((card) => (
              <div
                key={card.file}
                className="card-hover"
                style={{ width: 'calc((100% - 1.5rem) / 3)', maxWidth: '160px', minWidth: '80px' }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src={`/images/cards/${card.file}`}
                    alt={card.alt}
                    width={675}
                    height={1050}
                    className="w-full h-auto"
                    style={{ aspectRatio: '675/1050' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-center text-gray-500 text-sm mt-6">
            Your deck is packed with pure farmyard stink — manure not included 😉
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red text-center mb-10 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12" aria-hidden="true">
              <Image src="/images/animals/Picky Pitchfork.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="48px" />
            </span>
            Frequently Asked Questions
            <span className="relative inline-block w-12 h-12" aria-hidden="true">
              <Image src="/images/animals/Picky Pitchfork.png" alt="" fill className="object-contain" sizes="48px" />
            </span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does shipping take?',
                a: 'We ship via USPS. Expect 5–10 business days after your order ships. Pre-orders will ship as soon as production is complete.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Currently we ship within the United States only. International shipping is coming soon!',
              },
              {
                q: 'Is this appropriate for young kids?',
                a: 'Yes! Stink Farm is designed for ages 6 and up. Kids often out-bluff the adults. It\'s simple enough to learn in 5 minutes.',
              },
              {
                q: 'How many players can play?',
                a: '2–6 players. Strategy shifts with the headcount — a 2-player game is two hogs scrapping for the same slop bucket, while a 6-player game is pure farmyard pandemonium. Every count is a different experience.',


              },
              {
                q: 'Can I return it?',
                a: 'If you\'re not happy with your order, contact us at hello@stinkfarmgame.com and we\'ll make it right.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-cream-dark">
                <h3 className="font-headline text-xl text-near-black mb-2">{faq.q}</h3>
                <p className="font-body text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
