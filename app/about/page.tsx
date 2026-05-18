import Image from 'next/image';
import Link from 'next/link';
import { BuyButton } from '@/components/BuyButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — Stink Farm',
  description:
    'Learn how Stink Farm was born. A dad, four boys, and a kitchen table obsession turned into a card game the whole family will love.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl text-barn-red mb-4 flex items-center justify-center gap-4">
            <span className="relative inline-block w-14 h-14" aria-hidden="true">
              <Image src="/images/animals/Windmill.png" alt="" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} sizes="56px" />
            </span>
            How Stink Farm Was Born
            <span className="relative inline-block w-14 h-14" aria-hidden="true">
              <Image src="/images/animals/Windmill.png" alt="" fill className="object-contain" sizes="56px" />
            </span>
          </h1>
          <p className="font-body text-xl text-gray-600">
            A dad. Four boys. A kitchen table. And a whole lot of farmyard chaos.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <article className="font-body text-near-black space-y-6 text-lg leading-relaxed">
            <p>
              Mike&apos;s grandfather grew up on a farm and never lost his love for the country
              smell. On road trips, he&apos;d roll down every window the moment the fields opened
              up — convinced the whole family needed to breathe it in. Mike&apos;s grandmother
              took it one step further: she&apos;d scoop a cow pie right out of the field and
              box it up to bring a little country home with her. That&apos;s the kind of family
              this game comes from.
            </p>

            <p>
              Growing up, Mike loved a bluffing card game called BS. The core mechanic was
              brilliant — play cards face-down, declare what you played, and dare someone to
              call you out. But it always felt like it was missing something. More strategy.
              More chaos. More laughs. And definitely a theme the whole family could get into.
            </p>

            <p>
              The idea was simple:{' '}
              <strong>take the bluffing mechanic everyone loves, give it a farmyard
              makeover, and build something with real strategy and real silliness baked in.</strong>{' '}
              Animals. Action cards. And enough stink to keep everyone honest.
            </p>

            <div className="my-8 relative rounded-2xl overflow-hidden shadow-xl border-4 border-cream-dark">
              <Image
                src="/images/photos/4 players cards face up - top view b.png"
                alt="Four players mid-game with Stink Farm cards spread across the table"
                width={800}
                height={534}
                className="w-full h-auto"
              />
            </div>

            <p>
              The first version of Stink Farm was hand-drawn cards at the kitchen table. Rough,
              fast, and immediately hilarious. The family played it that same night. They loved
              shouting &ldquo;Cow Pie!&rdquo; to bust each other&apos;s bluffs. Ideas for funny
              animals and awesome action cards were flowing fast. It was clear this thing had
              something.
            </p>

            <p>
              Over months of playtesting, the game got tighter. New card types. Better balance.
              Actual rules written down instead of &ldquo;you know, the rules.&rdquo; The
              family became the most ruthless focus group on the planet — if a card mechanic
              wasn&apos;t fun, they said so. If a card was boring, it got cut.
            </p>

            <p>
              The 65-card deck you&apos;re holding today is the version that survived every
              kitchen table test. It&apos;s the version that made a teenager put down his phone.
              That made grandparents snort-laugh. That turned a normal Tuesday night into a
              memory.
            </p>

            <div className="bg-cream rounded-2xl p-6 border-2 border-cream-dark my-8">
              <blockquote className="font-body text-xl italic text-near-black text-center">
                &ldquo;The goal was simple: make something the whole family would actually want
                to play. Something funny. Something fair. Something that made bluffing feel like
                an art form.&rdquo;
              </blockquote>
            </div>

            <p>
              Stink Farm is named for the obvious reason. On the farm, things smell. In the
              game, your lies smell worse. The person holding the most stink at the end?
              They&apos;ve got some explaining to do.
            </p>

            <p>
              This is a family game, built by a family, tested on a family. If your family is
              anything like ours, you&apos;re about to find out exactly who the biggest bluffer
              in the house is.
            </p>

            <p className="font-semibold text-barn-red">
              (Spoiler: it&apos;s probably not who you think.)
            </p>
          </article>
        </div>
      </section>

      {/* Photo row */}
      <section className="bg-cream-dark py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: '/images/photos/hand holding cards b.png',
                alt: 'A player carefully choosing which card to bluff with',
              },
              {
                src: '/images/photos/Player perspective b.png',
                alt: 'Player\'s view of a Stink Farm game in progress',
              },
              {
                src: '/images/photos/4 players cards face up - perspective view.png',
                alt: 'Four players in a heated round of Stink Farm',
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
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

      {/* Box art */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl text-barn-red mb-6">
            Built with Love (and Livestock) 🐄
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-cream-dark mb-8">
            <Image
              src="/images/box/Stink Farm - 2.0 Box Bottom.png"
              alt="Back of the Stink Farm box showing game details and credits"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="font-body text-gray-600 leading-relaxed">
            Every detail of Stink Farm — from the card art to the rules to the box design —
            was crafted with the same goal: make something your family will actually want to
            play again and again.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-barn-red py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl text-white mb-4">
            Become Part of the Farmyard Story
          </h2>
          <p className="font-body text-red-100 text-lg mb-8">
            Every copy sold is a new kitchen table, a new set of bluffs, and a new family
            memory. We&apos;d love for yours to be next.
          </p>
          <BuyButton
            label="Pre-Order Stink Farm — $19.99"
            source="about-page"
            className="bg-white text-barn-red hover:bg-cream text-2xl"
          />
        </div>
      </section>
    </>
  );
}
