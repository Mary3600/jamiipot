import Link from "next/link";

interface BrandLogoProps {
  size?: "header" | "footer";
  variant?: "dark" | "light";
}

export default function BrandLogo({
  size = "header",
  variant = "light",
}: BrandLogoProps) {
  const isHeader = size === "header";
  const jamiiColor = variant === "dark" ? "text-white" : "text-[#1A1A1A]";

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      {/* Minimalist Pot + Branch SVG */}
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-lg ${
          isHeader ? "h-9 w-9" : "h-6 w-6"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Pot body */}
          <path
            d="M6 14C6 21 9 26 16 26C23 26 26 21 26 14H6Z"
            fill="#BE5338"
            className="transition-transform duration-200 group-hover:scale-[1.03]"
          />
          {/* Pot rim */}
          <rect
            x="4"
            y="12"
            width="24"
            height="2.5"
            rx="1.25"
            fill={variant === "dark" ? "#FFFFFF" : "#1A1A1A"}
          />
          {/* Pot handles */}
          <path
            d="M3 15C3 17 4.5 18 5 18M29 15C29 17 27.5 18 27 18"
            stroke={variant === "dark" ? "#FFFFFF" : "#1A1A1A"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Branch / Sprout rising from pot */}
          <path
            d="M16 12V4M16 7C14 5.5 11 6 11 6M16 9C18 7.5 21 8 21 8"
            stroke="#BE5338"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="11" cy="6" r="1.2" fill="#BE5338" />
          <circle cx="21" cy="8" r="1.2" fill="#BE5338" />
          <circle cx="16" cy="3.5" r="1.2" fill="#BE5338" />
        </svg>
      </div>

      {/* Wordmark */}
      <span
        className={`font-brand font-bold leading-none tracking-tight ${
          isHeader ? "text-[28px] md:text-[32px]" : "text-[18px]"
        }`}
      >
        <span className={jamiiColor}>Jamii</span>
        <span className="text-[#BE5338]">Pot</span>
      </span>
    </Link>
  );
}
