import Image from 'next/image';

const FEATURED_CARDS = [
  { file: 'Kitten 1 (fav).png', alt: 'Kitten card — a smelly kitten ready to bluff' },
  { file: 'Bull 1 (fav 1).png', alt: 'Bull card — strong and stinky' },
  { file: 'Elk 2 (fav).png', alt: 'Elk card — the tall bluffer of the farmyard' },
  { file: 'Chicken 2 (fav).png', alt: 'Chicken card — too chicken to bluff?' },
  { file: 'Goat 1 (fav).png', alt: 'Goat card — the champion chewer and bluffer' },
  { file: 'Hog 4 (fav 2).png', alt: 'Hog card — wallowing in bluffs' },
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
