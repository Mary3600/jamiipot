"use client";

import Link from "next/link";
import { X, BookOpen, Bookmark, ChefHat, LogOut } from "lucide-react";

interface AccountSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountSidebar({ isOpen, onClose }: AccountSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="relative z-10 flex h-full w-full max-w-sm flex-col border-l border-border bg-background p-8 shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-[28px] font-bold text-foreground">
            Your kitchen
          </h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 rounded-full border border-border px-4 py-1.5 font-sans text-[14px] text-foreground hover:border-foreground"
          >
            <X className="h-4 w-4" />
            <span>Close</span>
          </button>
        </div>

        {/* User Info */}
        <div className="mt-8 flex flex-col items-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-accent-tint/60 text-accent">
            <span className="font-brand text-[22px] font-bold">AY</span>
          </div>
          <h3 className="mt-4 font-serif text-[24px] font-bold text-foreground">
            Amina Yusuf
          </h3>
          <p className="font-sans text-[14px] text-muted">amina@example.com</p>
        </div>

        {/* Navigation list */}
        <div className="mt-8 space-y-3 font-sans">
          <Link
            href="/recipes?filter=my-replates"
            onClick={onClose}
            className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-[15px] text-foreground transition-all hover:border-accent hover:bg-surface"
          >
            <span className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-accent" />
              My replates
            </span>
            <span className="rounded-full bg-accent-tint px-2 py-0.5 text-[12px] font-bold text-accent">
              3
            </span>
          </Link>

          <Link
            href="/recipes?filter=saved"
            onClick={onClose}
            className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-[15px] text-foreground transition-all hover:border-accent hover:bg-surface"
          >
            <span className="flex items-center gap-3">
              <Bookmark className="h-4 w-4 text-accent" />
              Saved recipes
            </span>
            <span className="rounded-full bg-surface px-2 py-0.5 text-[12px] text-muted">
              12
            </span>
          </Link>

          <Link
            href="/recipes"
            onClick={onClose}
            className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-[15px] text-foreground transition-all hover:border-accent hover:bg-surface"
          >
            <span className="flex items-center gap-3">
              <ChefHat className="h-4 w-4 text-accent" />
              My kitchen
            </span>
          </Link>
        </div>

        {/* Bottom Logout */}
        <div className="mt-auto pt-6 border-t border-border">
          <button
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-sans text-[15px] text-white hover:bg-accent-hover shadow-[0_6px_18px_rgba(190,83,56,0.22)]"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
