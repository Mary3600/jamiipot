"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import AccountSidebar from "./AccountSidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xs">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Brand Logo & Wordmark */}
          <BrandLogo size="header" />

          {/* Navigation links in Happy Monkey (font-sans) */}
          <nav className="hidden items-center gap-9 font-sans text-[16px] md:flex">
            <Link
              href="/recipes"
              className="text-foreground transition-colors hover:text-accent font-normal"
            >
              Recipes
            </Link>
            <Link
              href="/community"
              className="text-muted transition-colors hover:text-accent font-normal"
            >
              Community
            </Link>
            <Link
              href="/about"
              className="text-muted transition-colors hover:text-accent font-normal"
            >
              About
            </Link>
          </nav>

          {/* Right Action Elements: Log In, Sign Up & AY Avatar */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden font-sans text-[15px] text-foreground transition-colors hover:text-accent sm:block"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="rounded-full bg-accent px-5 py-2.5 font-sans text-[15px] text-white shadow-[0_6px_18px_rgba(190,83,56,0.22)] transition-all hover:bg-accent-hover active:scale-[0.98]"
            >
              Sign Up
            </Link>

            {/* User Avatar Badge: AY in Inter Bold (16px) */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open your kitchen menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent-tint text-accent transition-transform hover:scale-105 active:scale-95"
              title="Amina Yusuf (AY) - Your kitchen"
            >
              <span className="font-brand text-[16px] font-bold leading-none">
                AY
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Account Drawer */}
      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
