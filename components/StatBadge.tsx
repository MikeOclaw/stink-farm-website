import Image from 'next/image';

interface StatBadgeProps {
  icon: string;
  label: string;
  value: string;
  iconImage?: string; // optional image path to override emoji
}

export function StatBadge({ icon, label, value, iconImage }: StatBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1 bg-white rounded-xl px-6 py-4 shadow-md border-2 border-cream-dark min-w-[100px]">
      {iconImage ? (
        <div className="relative w-9 h-9" aria-hidden="true">
          <Image src={iconImage} alt="" fill className="object-contain" />
        </div>
      ) : (
        <span className="text-3xl" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="font-headline text-xl text-barn-red leading-none">{value}</span>
      <span className="font-body text-xs text-gray-500 text-center leading-tight">{label}</span>
    </div>
  );
}
