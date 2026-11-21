"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GitBranch, GitFork, Check, ChevronDown } from "lucide-react";
import type { Recipe } from "@/lib/types";

interface BranchSwitcherProps {
  currentRecipe: Recipe;
  branches: Recipe[];
}

export default function BranchSwitcher({
  currentRecipe,
  branches,
}: BranchSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCanonical = currentRecipe.parent_recipe_id === null;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Branch selector trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 font-sans text-[14px] text-foreground transition-all hover:border-accent/50 hover:bg-background"
      >
        <GitBranch className="h-4 w-4 text-accent" />
        <span className="font-bold text-foreground">
          {currentRecipe.branch_name}
        </span>
        {isCanonical && (
          <span className="rounded-md bg-accent-tint px-1.5 py-0.5 text-[11px] font-bold text-accent">
            Canonical
          </span>
        )}
        <ChevronDown
          className={`h-4 w-4 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* GitHub-style dropdown popup */}
      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-80 rounded-2xl border border-border bg-background p-2 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          <div className="border-b border-border px-3 py-2">
            <p className="font-sans text-[12px] font-bold uppercase tracking-wider text-muted">
              Select Recipe Branch / Replate
            </p>
          </div>

          <div className="mt-1 max-h-72 overflow-y-auto space-y-1">
            {branches.map((b) => {
              const isSelected = b.id === currentRecipe.id;
              const isBranchCanonical = b.parent_recipe_id === null;

              return (
                <Link
                  key={b.id}
                  href={`/recipes/${b.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-start gap-3 rounded-xl p-2.5 transition-colors ${
                    isSelected
                      ? "bg-accent-tint/70 text-foreground"
                      : "hover:bg-surface text-foreground"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isBranchCanonical ? (
                      <GitBranch
                        className={`h-4 w-4 ${
                          isSelected ? "text-accent" : "text-muted"
                        }`}
                      />
                    ) : (
                      <GitFork
                        className={`h-4 w-4 ${
                          isSelected ? "text-accent" : "text-muted"
                        }`}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans text-[14px] font-bold truncate">
                        {b.branch_name}
                      </span>
                      {isBranchCanonical && (
                        <span className="shrink-0 rounded-md bg-accent/10 px-1.5 py-0.2 text-[10px] font-bold text-accent">
                          Canonical
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-[12px] text-muted truncate mt-0.5">
                      {b.title} {b.author_handle && `· ${b.author_handle}`}
                    </p>
                  </div>

                  {isSelected && (
                    <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-2 border-t border-border pt-2 px-2">
            <Link
              href={`/recipes/${currentRecipe.id}/replate`}
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-surface py-2 font-sans text-[13px] font-bold text-accent hover:bg-accent-tint transition-colors"
            >
              <GitFork className="h-3.5 w-3.5" />
              <span>Create new branch / replate</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
