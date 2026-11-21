"use client";

interface FilterPillsProps {
  label?: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function FilterPills({
  label,
  options,
  selected,
  onSelect,
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && (
        <span className="mr-2 font-sans text-[13px] font-bold uppercase tracking-wider text-muted">
          {label}:
        </span>
      )}
      {options.map((option) => {
        const isActive = selected === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`rounded-full border px-4 py-1.5 font-sans text-[14px] transition-all duration-150 ${
              isActive
                ? "border-accent bg-accent-tint text-accent font-bold shadow-xs ring-1 ring-accent/20"
                : "border-border bg-background text-foreground hover:border-accent/40 hover:bg-surface"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
