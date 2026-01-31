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
        src="https://static.wixstatic.com/media/9f6194_a8f7ca7f2858404d9f599ef6eec407d7~mv2.png/v1/crop/x_36,y_80,w_180,h_88/fill/w_252,h_123,al_c,lg_1,q_85,enc_avif,quality_auto/Transparent%20black%20Text.png"
        alt={alt}
        className={cn("h-full w-auto object-contain", invertImg && "invert")}
      />
    </span>
  );
}

