import Image from 'next/image';
import Link from 'next/link';
import { BuyButton } from '@/components/BuyButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Play Stink Farm — Rules & Card Guide',
  description:
    'Learn to play Stink Farm! Simple rules for bluffing like a boss. Ages 6–100, 2–6 players, 15–30 minutes.',
};

export default function HowToPlayPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl text-barn-red mb-4">
            How to Play Stink Farm
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Learn the rules in 5 minutes. Master the bluff in 10. Here's everything you need to outbluff your farmyard rivals.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark text-center">
              <div className="text-4xl mb-2">👥</div>
              <p className="font-headline text-2xl text-barn-red mb-1">2–6 Players</p>
              <p className="font-body text-sm text-gray-600">Ages 6–100</p>
            </div>
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark text-center">
              <div className="text-4xl mb-2">⏱️</div>
              <p className="font-headline text-2xl text-barn-red mb-1">15–30 Minutes</p>
              <p className="font-body text-sm text-gray-600">Quick and chaotic</p>
            </div>
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark text-center">
              <div className="text-4xl mb-2">🐄</div>
              <p className="font-headline text-2xl text-barn-red mb-1">62 Cards</p>
              <p className="font-body text-sm text-gray-600">46 Stink + 16 Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-8 text-center">
            Setup ⚙️
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-4">Deck Adjustment</h3>
              <ul className="font-body text-gray-600 space-y-2 ml-4">
                <li><strong>4–6 players:</strong> Use all 62 cards (46 Stink + 16 Action)</li>
                <li><strong>2–3 players:</strong> Remove 1 of each animal Stink Card first, then use remaining cards + all Action Cards</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-4">Deal Cards</h3>
              <ul className="font-body text-gray-600 space-y-2 ml-4">
                <li>Shuffle all cards together</li>
                <li>Deal all cards face-down to players (some may get an extra card)</li>
                <li><strong>For 2-player games:</strong> Deal a third hand and set it aside face-down without peeking (remove from play)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-4">Start</h3>
              <ul className="font-body text-gray-600 space-y-2 ml-4">
                <li>No Stink Stack or Farmyard Dump at the start</li>
                <li>Stinkiest player goes first</li>
                <li>Starting animal is <strong>Alpaca</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-10 text-center">
            How to Play 🎮
          </h2>

          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">1</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">Play Your Cards Face-Down</h3>
                <p className="font-body text-gray-600 leading-relaxed mb-2">
                  Play <strong>1–4 cards</strong> face-down to the center (the Stink Stack). In a 2–3 player game, play <strong>1–3 cards</strong>.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  <strong>Declare the quantity and current animal/letter.</strong> For example: "2 Bulls" or "3 Js". You must follow the alphabetical order: Alpaca → Bull → Chicken → Duck → Elephant → Ferret → Goat → Hog → Insect → Jackalope → Kitten → (back to Alpaca).
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">2</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">You Can Bluff!</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  If you don't have the current animal (and no Wild), you must bluff. Play any cards you want and declare the correct animal anyway. Nobody knows what's face-down.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">3</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">Call a Bluff (Optional)</h3>
                <p className="font-body text-gray-600 leading-relaxed mb-2">
                  Any other player can shout <strong>"That Stinks!", "Cow Pie!", or "Bluff!"</strong> to challenge your cards.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  You can only call a bluff until the next player's turn. The cards are flipped face-up to reveal the truth.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">4</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">Someone Scoops the Pile</h3>
                <p className="font-body text-gray-600 leading-relaxed mb-2">
                  <strong>If you were bluffing (caught):</strong> You take the entire Stink Stack and add it to your hand.
                </p>
                <p className="font-body text-gray-600 leading-relaxed mb-2">
                  <strong>If you were truthful:</strong> The challenger Scoops the Pile instead.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  <strong>Important:</strong> You cannot play a different number of cards than you declared. If you declare "2 Bulls" but only 1 card is face-down, you automatically Scoop the Pile.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">5</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">No Challenge? Continue.</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  If nobody challenges you, the cards stay face-down in the Stink Stack. The pile grows. Play moves clockwise to the next player.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center">6</div>
              <div>
                <h3 className="font-headline text-2xl text-barn-red mb-2">Action Cards (Special Moves)</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Before you play Stink Cards, you can play Action Cards face-up to the Farmyard Dump and perform their special action. Examples: Block a challenge, force someone to call a bluff, peek at cards, gift cards to another player.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winning */}
      <section className="bg-barn-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">🏆 Winning</h2>
          <p className="font-body text-xl leading-relaxed mb-4">
            <strong>First player to play ALL their cards without getting busted wins!</strong>
          </p>
          <p className="font-body text-lg leading-relaxed opacity-90">
            If you go out on a bluff and get called, you Scoop the Pile and keep playing. Your last card can be a Stink Card or an Action Card.
          </p>
        </div>
      </section>

      {/* Card Types */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-4 text-center">
            Card Types 🐄
          </h2>

          <div className="space-y-6 mt-10">
            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-3">🐄 Stink Cards (46 cards)</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-3">
                <strong>11 farm animals, A–K, 4 of each + 2 Wilds.</strong> The main cards you play face-down while declaring which animal. Animals: Alpaca, Bull, Chicken, Duck, Elephant, Ferret, Goat, Hog, Insect, Jackalope, Kitten.
              </p>
              <p className="font-body text-gray-600">
                <strong>Wild Cards count as any animal</strong> — the ultimate bluffing tool if you don't have what you need.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-3">⚡ Action Cards (16 cards)</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                Special cards with powers: Block challenges, force others to call bluffs, clear the pile, peek at cards, gift cards, and more. Play them face-up in the Farmyard Dump before playing your Stink Cards.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-headline text-2xl text-barn-red mb-3">📋 Cheat Sheets (6 included)</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                Reference cards that list all animals (A–K) and all Action Cards. Keep one near each player so nobody forgets what animal comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-8 text-center">
            Pro Bluffing Tips 🧠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Track the Animals',
                desc: 'Use the Cheat Sheet to remember A–K order. Knowing what comes next helps you bluff better.',
              },
              {
                title: 'Watch Your Opponents',
                desc: "Do they hesitate before playing? Are they holding back certain cards? That's your bluff-calling clue.",
              },
              {
                title: 'Bluff with Confidence',
                desc: 'A confident declaration is half the battle. Say it like you mean it!',
              },
              {
                title: 'Save Your Action Cards',
                desc: "Don't burn them early. Hold them for crucial moments when you really need a save.",
              },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-cream-dark">
                <h3 className="font-headline text-xl text-barn-red mb-2">{tip.title}</h3>
                <p className="font-body text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hay-gold py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl text-white mb-4">Ready to Bluff and Bust 'Em?</h2>
          <p className="font-body text-white text-lg mb-8">
            Grab your copy and start the farmyard chaos.
          </p>
          <BuyButton
            label="Pre-Order Now — $19.99"
            source="how-to-play-cta"
            className="bg-barn-red text-white hover:bg-barn-red-dark"
          />
        </div>
      </section>
    </>
  );
}
