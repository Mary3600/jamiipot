import Link from "next/link";
import { GitFork, Clock, Users } from "lucide-react";
import type { Recipe } from "@/lib/types";

interface RecipeCardProps {
  recipe: Recipe;
  replateCount?: number;
}

export default function RecipeCard({
  recipe,
  replateCount = 0,
}: RecipeCardProps) {
  const isReplate = recipe.fork_type !== "canonical";
  const displayCount = replateCount > 0 ? replateCount : isReplate ? 1 : 0;

  // Primary country and ethnic group tags
  const primaryCountry = recipe.countries?.[0] ?? "";
  const ethnicTag = recipe.ethnic_groups?.[0];

  return (
    <Link href={`/recipes/${recipe.id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-200 hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        {/* Visual Media Placeholder matching Figma */}
        <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-surface transition-colors group-hover:bg-[#F2F2F2]">
          <span className="font-sans text-[13px] text-muted">
            {recipe.title} · photo
          </span>

          {/* Terracotta Branch / Fork Badge */}
          {displayCount > 0 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-tint px-3 py-1 text-accent shadow-xs">
              <GitFork className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="font-sans text-[12px] font-bold">
                {displayCount} {displayCount === 1 ? "Replate / Fork" : "Replates"}
              </span>
            </div>
          )}

          {isReplate && (
            <div className="absolute top-3 left-3 rounded-full bg-foreground px-2.5 py-0.5 font-sans text-[11px] font-bold text-background uppercase tracking-wider">
              Replate
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-5">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 font-sans text-[13px] text-muted">
            <span>{recipe.region}</span>
            {primaryCountry && (
              <>
                <span>·</span>
                <span>{primaryCountry}</span>
              </>
            )}
            {ethnicTag && (
              <>
                <span>·</span>
                <span className="text-foreground/80">{ethnicTag}</span>
              </>
            )}
          </div>

          {/* Playfair Display Bold Title */}
          <h3 className="mt-2 font-serif text-[22px] font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
            {recipe.title}
          </h3>

          {/* Cultural Writeup Snippet in Happy Monkey */}
          <p className="mt-2 line-clamp-2 font-sans text-[14px] leading-relaxed text-muted">
            {isReplate && recipe.fork_diff_summary
              ? recipe.fork_diff_summary
              : recipe.cultural_writeup}
          </p>

          {/* Footer Metadata */}
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/60">
            <div className="flex items-center gap-3 font-sans text-[13px] text-muted">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-muted" />
                {recipe.prep_time_mins > 0 ? `${recipe.prep_time_mins} min` : "Overnight prep"}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-muted" />
                {recipe.servings} servings
              </span>
            </div>

            <span className="font-sans text-[14px] font-bold text-foreground transition-colors group-hover:text-accent">
              {isReplate ? "View replate →" : "View recipe →"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
