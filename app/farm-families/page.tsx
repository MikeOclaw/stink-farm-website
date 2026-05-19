import Image from 'next/image';
import { BuyButton } from '@/components/BuyButton';
import { StatBadge } from '@/components/StatBadge';
import { CardShowcase } from '@/components/CardShowcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stink Farm for Farm Families — The Game Made for You',
  description:
    'Stink Farm was born on a family farm and features real farmyard animals. The perfect card game for farm families, petting zoo days, and country kids.',
};

const ANIMALS = [
  { file: 'Bull 1 (fav 1).png', name: 'Bull', alt: 'Bull character card from Stink Farm' },
  { file: 'Chicken 2 (fav).png', name: 'Chicken', alt: 'Chicken character card from Stink Farm' },
  { file: 'Fish 2 (fav 1).png', name: 'Fish', alt: 'Fish character card from Stink Farm' },
  { file: 'Hog 4 (fav 2).png', name: 'Hog', alt: 'Hog character card from Stink Farm' },
  { file: 'Insect 1 (fav 1).png', name: 'Insect', alt: 'Insect character card from Stink Farm' },
  { file: 'Kitten 1 (fav).png', name: 'Kitten', alt: 'Kitten character card from Stink Farm' },
];

export default function FarmFamiliesPage() {
  return (
    <>
      {/* Hero — bright sunny farm vibe */}
      <section className="relative bg-gradient-to-b from-hay-gold to-amber-400 py-20 md:py-32 overflow-hidden">
        {/* Farm decorations */}
        <div className="absolute top-8 right-8 text-8xl opacity-30" aria-hidden="true">☀️</div>
        <div className="absolute bottom-4 left-4 text-6xl opacity-20" aria-hidden="true">🌾</div>
        <div className="absolute bottom-8 right-16 text-5xl opacity-25" aria-hidden="true">🐄</div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white text-barn-red font-headline text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
                Made for Farm Families
              </div>
              <h1 className="font-headline text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-sm">
                The Card Game
                <br />
                <span className="text-near-black">Your Farmyard</span>
                <br />
                Deserves! 🐄
              </h1>
              <p className="font-body text-xl text-amber-900 mb-8 leading-relaxed">
                Stink Farm is a family card game featuring the animals you know and love —
                Bulls, Hogs, Chickens, and more. Bluff your way through the barnyard
                and find out who&apos;s the best liar at the kitchen table.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <StatBadge icon="👨‍👩‍👧‍👦" label="Players" value="2–6" />
                <StatBadge icon="🎂" label="Ages" value="6–100" />
                <StatBadge icon="⏱️" label="Minutes" value="15–30" />
              </div>

              <div className="inline-flex flex-col items-stretch gap-2">
                <BuyButton
                  label="Pre-Order Now — $19.99"
                  source="farm-families-page"
                  className="bg-barn-red text-white hover:bg-barn-red-dark text-2xl"
                />
                <p className="font-body text-amber-800 text-sm text-center">
                  + shipping · Secure Stripe checkout
                </p>
              </div>
            </div>

            {/* Farm photo */}
            <div className="relative">
              <div className="flex justify-end mb-2 px-1">
                <p className="font-body text-xs text-amber-900 flex items-center gap-1.5">
                  <Image src="/images/us-flag.svg" alt="US flag" width={16} height={11} className="inline-block rounded-sm" />
                  Made in the USA
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/photos/4 players cards face up - top view b.png"
                  alt="Top-down view of a family game of Stink Farm with cards spread across the table"
                  width={800}
                  height={534}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-3 -left-3 bg-white text-barn-red font-headline text-sm px-4 py-2 rounded-full shadow-lg border-2 border-cream-dark -rotate-3">
                Real Farm Animals!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animals showcase */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red mb-4 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Your Favorite Animals Are in the Deck!
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Stink Sniffer.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <p className="font-body text-lg text-gray-600 mb-12">
            62 cards. 11 animals — all ready to be lied about with a straight face.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {ANIMALS.map((animal) => (
              <div key={animal.file} className="text-center">
                <div className="bg-white rounded-2xl p-3 shadow-md border-2 border-cream-dark mb-2 card-hover">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={`/images/cards/${animal.file}`}
                      alt={animal.alt}
                      width={675}
                      height={1050}
                      className="w-full h-auto"
                      style={{ aspectRatio: '675/1050' }}
                    />
                  </div>
                </div>
                <span className="font-headline text-base text-near-black">{animal.name}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-gray-500 text-sm">
            Plus: Alpaca, Duck, Elk, Goat, Jackrabbit, and more!
          </p>
        </div>
      </section>

      {/* Why farm families */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-12 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Barn Burner.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Built for Family Tables
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Barn Burner.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '👧',
                title: 'Kids Get It Instantly',
                desc: 'Animals they already know, rules they can learn in 5 minutes. Even little ones can play with a bit of help.',
              },
              {
                icon: '🧓',
                title: 'Adults Love It Too',
                desc: 'The bluffing layer means adults are strategizing while kids are winging it. Often the kids still win.',
              },
              {
                icon: '📵',
                title: 'Phones Get Put Down',
                desc: "A good bluffing game demands eye contact. You can't spot a liar if you're looking at Instagram.",
              },
              {
                icon: '🔄',
                title: 'Play It Again',
                desc: 'No two games are the same. Different bluffs, different challenges, different outcomes. You\'ll want one more round.',
              },
              {
                icon: '🎪',
                title: 'Perfect for County Fairs',
                desc: 'Bring it to the county fair, petting zoo trips, or any time your crew is in the farmyard mood.',
              },
              {
                icon: '🎁',
                title: 'The Gift That Gets Played',
                desc: 'Unlike some games that sit on the shelf, Stink Farm gets requested. "Can we play the farm game?" is a real thing.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-6 border border-cream-dark"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <h3 className="font-headline text-xl text-near-black">{item.title}</h3>
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card showcase */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-4 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            Meet the Farmyard
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Fortified Fence.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <p className="font-body text-lg text-gray-600 text-center mb-10">
            62 cards. 11 animals. Infinite bluffing opportunities.
          </p>
          <CardShowcase count={6} className="mb-6" />
        </div>
      </section>

      {/* A Muddy Good Time — photo section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-10 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            A Muddy Good Time
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Scarecrow.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/photos/hand holding cards b.png"
                alt="Player holding Stink Farm cards, deciding on their next bluff"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                We designed Stink Farm to capture the feel of a farmyard — chaotic,
                unpredictable, and always a little smelly. The card art, the card names,
                the whole vibe is pure farmyard fun.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Whether your family has a real farm, loves animals, or just appreciates a
                good barnyard joke — this game is for you.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Games run 15–30 minutes. Short enough to fit in before chores. Long enough that you'll want one more round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-barn-red text-center mb-12 flex items-center justify-center gap-3">
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            What Families Are Saying
            <span className="relative inline-block w-12 h-12 opacity-100" aria-hidden="true">
              <Image src="/images/animals/Farmer Favor.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'My kids LOVE the animal cards. They have favorite animals and will argue all game about whether the goat or the bull is stinkier.',
                name: 'Jenny M.',
                detail: 'Mom, Nebraska',
              },
              {
                quote:
                  'We played this at Thanksgiving with 8 people ranging from age 8 to 72. Everyone was crying laughing by round two.',
                name: 'The Peterson Family',
                detail: 'Playtester family',
              },
              {
                quote:
                  'Our 8-year-old looked us dead in the eyes and bluffed us all. Repeatedly. We\'re still processing. 10/10.',
                name: 'The Johnson Family',
                detail: 'Playtester family',
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="bg-white rounded-2xl p-6 border-2 border-cream-dark shadow-sm"
              >
                <p className="font-body text-near-black italic mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="font-body text-sm text-gray-500">
                  <span className="font-semibold text-near-black">{t.name}</span>
                  <br />
                  {t.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-hay-gold to-amber-500 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6" aria-hidden="true">🌾</div>
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-4 drop-shadow-sm">
            Bring the Farmyard Home
          </h2>
          <p className="font-body text-amber-900 text-xl mb-8">
            $19.99 + shipping. Hours of farmyard fun. One seriously smelly good time.
          </p>
          <div className="inline-flex flex-col items-stretch gap-2">
            <BuyButton
              label="Pre-Order Stink Farm — $19.99"
              source="farm-families-page-cta"
              className="bg-barn-red text-white hover:bg-barn-red-dark text-2xl shadow-xl"
            />
            <p className="font-body text-amber-800 text-sm text-center">
              Secure checkout via Stripe · Ships from the USA
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
