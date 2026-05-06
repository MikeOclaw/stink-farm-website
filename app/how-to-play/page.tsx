import Image from 'next/image';
import Link from 'next/link';
import { BuyButton } from '@/components/BuyButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Play Stink Farm — Rules & Card Guide',
  description:
    'Learn to play Stink Farm in minutes! Simple rules, hilarious bluffing mechanics. Perfect for families, ages 7+. Full rules, card types, and tips.',
};

const CARD_TYPES = [
  {
    type: 'Animal Cards',
    icon: '🐄',
    color: 'bg-hay-gold',
    textColor: 'text-near-black',
    description:
      'The heart of the game. Each animal has a stink value. Play them face-down and claim any animal you want — lie, lie, lie!',
    examples: ['Kitten (low stink)', 'Bull (high stink)', 'Goat', 'Hog', 'Duck', 'Elk', 'Fish', 'Insect'],
    cardFile: 'Kitten 1 (fav).png',
    cardAlt: 'Kitten animal card example',
  },
  {
    type: 'Action Cards',
    icon: '⚡',
    color: 'bg-barn-red',
    textColor: 'text-white',
    description:
      'Play these to change the game! Challenge bluffs, block challenges, burn the pile, or grant yourself a special advantage.',
    examples: ['Stink Sniffer', 'Barn Burner', 'Bale Blocker', 'Out to Pasture', 'Plop Plow', 'Picky Pitchfork'],
    cardFile: 'Stink Sniffer 1.png',
    cardAlt: 'Stink Sniffer action card example',
  },
  {
    type: 'Wild Cards',
    icon: '🌟',
    color: 'bg-grass-green',
    textColor: 'text-white',
    description:
      'Play as any animal you choose. The ultimate bluffing tool — no one will see it coming.',
    examples: ['Wild (any animal)'],
    cardFile: 'Wild 1.png',
    cardAlt: 'Wild card example',
  },
  {
    type: 'Farmer Favor',
    icon: '🌾',
    color: 'bg-hay-gold-dark',
    textColor: 'text-white',
    description:
      'Special cards that give you a unique farmyard advantage. Use them wisely — you only get a few per game.',
    examples: ['Farmer Favor (draw extra)', 'Special abilities'],
    cardFile: 'Farmer Favor 1.png',
    cardAlt: 'Farmer Favor card example',
  },
];

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
            Learn in 5 minutes, bluff like a pro in 10. Here&apos;s everything you need to know
            to run the most chaotic farmyard this side of the county fair.
          </p>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-8 text-center">
            Quick Setup ⚙️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-headline text-2xl text-near-black mb-3">You&apos;ll Need</h3>
              <ul className="font-body text-gray-600 space-y-2">
                <li>• 2–8 players (more = more chaos)</li>
                <li>• The 65-card Stink Farm deck</li>
                <li>• A flat table (or floor, we don&apos;t judge)</li>
                <li>• A willingness to embrace the stink</li>
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-headline text-2xl text-near-black mb-3">Setup</h3>
              <ul className="font-body text-gray-600 space-y-2">
                <li>• Shuffle the deck</li>
                <li>• Deal 5 cards to each player</li>
                <li>• Place remaining cards face-down as draw pile</li>
                <li>• Youngest player goes first</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Rules */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-10 text-center">
            The Rules 📜
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'On Your Turn — Play a Card',
                icon: '🃏',
                content:
                  'Choose one card from your hand and play it face-down to the center pile. Announce which animal you\'re playing — but here\'s the twist: you don\'t have to tell the truth. You can claim any animal, even if that\'s not what you played. The lie is the game.',
              },
              {
                step: '2',
                title: 'Everyone Decides — Believe or Challenge',
                icon: '👃',
                content:
                  'After you play, any other player can say "I call your bluff!" (or more accurately, "I smell your stink!"). They\'re betting that you lied about the card you played. Only ONE player can challenge per turn — first one to speak wins the challenge right.',
              },
              {
                step: '3',
                title: 'The Reveal',
                icon: '🔍',
                content:
                  'If someone challenges, flip the card face-up. Was it what you claimed? If YES — you told the truth! The challenger takes the entire center pile. If NO — you lied! You take the entire center pile. The pile = your stink score.',
              },
              {
                step: '4',
                title: 'No Challenge? Keep Going',
                icon: '✅',
                content:
                  'If nobody challenges you, great — the card stays face-down in the pile and play moves to the next player. The pile grows. The stakes get higher.',
              },
              {
                step: '5',
                title: 'Draw Back Up',
                icon: '🤲',
                content:
                  'After your turn (challenge or not), draw back up to 5 cards from the draw pile if you have fewer than 5.',
              },
              {
                step: '6',
                title: 'Winning',
                icon: '🏆',
                content:
                  'The game ends when the draw pile is empty and a player runs out of cards. The player with the FEWEST cards in their stink pile wins. Fewest stink cards = least stinky = winner!',
              },
            ].map((rule) => (
              <div
                key={rule.step}
                className="bg-white rounded-2xl p-6 md:p-8 border border-cream-dark shadow-sm flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-barn-red text-white font-headline text-2xl rounded-full flex items-center justify-center shadow-md">
                  {rule.step}
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-near-black mb-2">
                    <span className="mr-2" aria-hidden="true">{rule.icon}</span>
                    {rule.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">{rule.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-4 text-center">
            Card Types 🐔
          </h2>
          <p className="font-body text-gray-600 text-center mb-10">
            65 cards across four types — each one a different way to bluff, block, or burn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CARD_TYPES.map((ct) => (
              <div
                key={ct.type}
                className="bg-cream rounded-2xl p-6 border border-cream-dark shadow-sm flex gap-4 items-start"
              >
                <div className="relative flex-shrink-0 w-24 rounded-xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src={`/images/cards/${ct.cardFile}`}
                    alt={ct.cardAlt}
                    width={675}
                    height={1050}
                    className="w-full h-auto"
                    style={{ aspectRatio: '675/1050' }}
                  />
                </div>
                <div>
                  <div
                    className={`inline-block ${ct.color} ${ct.textColor} font-headline text-sm px-3 py-1 rounded-full mb-2`}
                  >
                    {ct.icon} {ct.type}
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-2">
                    {ct.description}
                  </p>
                  <p className="font-body text-xs text-gray-400">
                    <em>Examples: {ct.examples.join(', ')}</em>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card back */}
      <section className="bg-cream-dark py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl text-barn-red mb-6">The Card Back 🎴</h2>
          <p className="font-body text-gray-600 mb-8">
            Every Stink Farm card uses the same back — so no one can cheat by peeking at the
            pattern!
          </p>
          <div className="flex justify-center">
            <div className="relative w-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/cards/Back of stink and action cards.png"
                alt="Back of Stink Farm cards — the same design on every card to prevent cheating"
                width={675}
                height={1050}
                className="w-full h-auto"
                style={{ aspectRatio: '675/1050' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-barn-red mb-8 text-center">
            Pro Bluffing Tips 🧠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tip: 'Sometimes tell the truth — it\'s the best bluff.', icon: '😇' },
              { tip: 'Watch how players react when challenged. They\'ll tell on themselves.', icon: '👀' },
              { tip: 'High-stink animals (Bull, Hog) are tempting to bluff. Everyone knows it.', icon: '🐂' },
              { tip: 'Challenge early and often. Big piles late game can end you.', icon: '⚡' },
              { tip: 'Use Bale Blocker to protect yourself when you\'re telling the truth.', icon: '🛡️' },
              { tip: 'Kids have no poker face. Watch their ears go red.', icon: '😅' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-cream rounded-xl p-4 border border-cream-dark"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="font-body text-gray-600 leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-barn-red py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl text-white mb-4">
            Ready to Run the Farmyard?
          </h2>
          <p className="font-body text-red-100 text-lg mb-8">
            Now that you know the rules, grab your copy and start bluffing!
          </p>
          <BuyButton
            label="Pre-Order Stink Farm — $19.99"
            source="how-to-play-page"
            className="bg-white text-barn-red hover:bg-cream text-2xl"
          />
        </div>
      </section>
    </>
  );
}
