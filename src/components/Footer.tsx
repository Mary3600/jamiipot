import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#1A1A1A] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        {/* Brand Lockup & Tagline */}
        <div className="flex flex-wrap items-center gap-2">
          <BrandLogo size="footer" variant="dark" />
          <span className="font-sans text-[14px] text-white/60">
            {" "}· Preserving the Heritage
          </span>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-wrap items-center gap-7 font-sans text-[14px] text-white/70">
          <Link
            href="/about"
            className="transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/guidelines"
            className="transition-colors hover:text-white"
          >
            Community guidelines
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-white"
          >
            Privacy &amp; terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
