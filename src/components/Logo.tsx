import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  alt?: string;
  /** Invert the logo image (e.g. for use on dark backgrounds) */
  invertImg?: boolean;
  /** Omit the circular primary background so the logo uses full size */
  noBackground?: boolean;
}

export function Logo({ className, alt = "Streamline Essentials", invertImg, noBackground }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        !noBackground && "rounded-full bg-primary p-1.5",
        className
      )}
    >
      <img
        src="/streamline-essentials-logo.png"
        alt={alt}
        className={cn("h-full w-auto object-contain", invertImg && "invert")}
      />
    </span>
  );
}
