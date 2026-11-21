"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  targetPath?: string;
  onSearchChange?: (val: string) => void;
}

export default function SearchBar({
  placeholder = "Search a dish, ingredient, country, or ethnic origin...",
  defaultValue = "",
  targetPath,
  onSearchChange,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleExecuteSearch = () => {
    const trimmed = query.trim();
    if (onSearchChange) {
      onSearchChange(trimmed);
      return;
    }
    const destination = targetPath ?? "/recipes";
    if (trimmed) {
      router.push(`${destination}?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push(destination);
    }
  };

  return (
    <div className="relative flex w-full items-center rounded-2xl border border-border bg-background p-1.5 shadow-sm transition-all focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/10">
      <div className="flex flex-1 items-center pl-4">
        <Search className="h-5 w-5 shrink-0 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onSearchChange) {
              onSearchChange(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleExecuteSearch();
            }
          }}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2.5 font-sans text-[16px] text-foreground placeholder:text-muted focus:outline-none"
        />
      </div>

      <button
        type="button"
        onClick={handleExecuteSearch}
        className="shrink-0 rounded-xl bg-foreground px-6 py-2.5 font-sans text-[14px] font-bold text-background transition-colors hover:bg-foreground/85 active:scale-95"
      >
        Search
      </button>
    </div>
  );
}
