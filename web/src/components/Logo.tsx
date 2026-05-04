import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  /** Smaller mark for compact areas (e.g. dashboard sidebar) */
  compact?: boolean;
};

export function Logo({ className = "", compact = false }: Props) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Rent Management System"
        width={compact ? 360 : 560}
        height={compact ? 88 : 120}
        className={
          compact
            ? "h-20 w-auto object-contain sm:h-24"
            : "h-24 w-auto object-contain sm:h-32"
        }
        priority
      />
      <span className="sr-only">RentMS — Home</span>
    </Link>
  );
}
