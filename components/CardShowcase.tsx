import Image from 'next/image';

// Curated 6 for homepage showcase
const FEATURED_CARDS = [
  { file: 'Bull 1 (fav 1).png', alt: 'Bull card — strong and stinky' },
  { file: 'Chicken 2 (fav).png', alt: 'Chicken card — too chicken to bluff?' },
  { file: 'Fish 2 (fav 1).png', alt: 'Fish card — smells like a bluff' },
  { file: 'Hog 4 (fav 2).png', alt: 'Hog card — wallowing in bluffs' },
  { file: 'Insect 1 (fav 1).png', alt: 'Insect card — the tiny troublemaker' },
  { file: 'Kitten 1 (fav).png', alt: 'Kitten card — a smelly kitten ready to bluff' },
];

interface CardShowcaseProps {
  className?: string;
  count?: number;
}

export function CardShowcase({ className = '', count = 6 }: CardShowcaseProps) {
  const cards = FEATURED_CARDS.slice(0, count);

  return (
    <div
      className={`flex flex-wrap justify-center gap-3 md:gap-4 ${className}`}
      aria-label="Sample Stink Farm cards"
    >
      {cards.map((card, i) => (
        <div
          key={card.file}
          className="card-hover relative"
          style={{
            transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 1.5)}deg)`,
          }}
        >
          <div className="relative w-28 md:w-36 rounded-xl overflow-hidden shadow-lg border-2 border-white">
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
  );
}
