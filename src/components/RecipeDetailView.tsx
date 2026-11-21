"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  Share2,
  GitFork,
  Utensils,
  Check,
  Star,
} from "lucide-react";
import BranchSwitcher from "./BranchSwitcher";
import KitchenModeModal from "./KitchenModeModal";
import type { Recipe } from "@/lib/types";

interface RecipeDetailViewProps {
  recipe: Recipe;
  branches: Recipe[];
  rootRecipe: Recipe;
}

export default function RecipeDetailView({
  recipe,
  branches,
  rootRecipe,
}: RecipeDetailViewProps) {
  const [isKitchenModeOpen, setIsKitchenModeOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const isReplate = recipe.fork_type !== "canonical";
  const childBranches = branches.filter((b) => b.id !== rootRecipe.id);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <nav className="flex items-center gap-2 font-sans text-[14px] text-muted">
          <Link href="/recipes" className="transition-colors hover:text-accent">
            Recipes
          </Link>
          <span>/</span>
          <Link
            href={`/recipes?region=${encodeURIComponent(recipe.region)}`}
            className="transition-colors hover:text-accent"
          >
            {recipe.region}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">
            {recipe.countries[0]}
          </span>
        </nav>
      </div>

      {/* Main Title, GitHub-Style Branch Switcher & Action Bar */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {/* Branch Switcher & Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <BranchSwitcher currentRecipe={recipe} branches={branches} />

              {isReplate ? (
                <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-tint px-3 py-1 text-accent">
                  <GitFork className="h-3.5 w-3.5" />
                  <span className="font-sans text-[12px] font-bold">
                    Replate of {rootRecipe.title}
                  </span>
                </div>
              ) : (
                <span className="font-sans text-[14px] text-muted">
                  Canonical recipe · 4.8 ★ from 24 reviews · {branches.length - 1} replates
                </span>
              )}
            </div>

            {/* Playfair Display Bold Title */}
            <h1 className="font-serif text-[40px] md:text-[50px] font-bold leading-tight tracking-tight text-foreground">
              {recipe.title}
            </h1>

            <p className="mt-2 font-sans text-[15px] text-muted">
              {isReplate
                ? `Replated by ${recipe.author_handle ?? "Community Cook"} · Based on ${rootRecipe.title}`
                : `Authored by ${recipe.author_handle ?? "Traditional Custodian"}`}
              {" · "}
              {recipe.countries.join(", ")}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[14px] font-bold transition-all ${
                isSaved
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-foreground text-background hover:bg-foreground/85"
              }`}
            >
              <Bookmark className="h-4 w-4" />
              <span>{isSaved ? "Saved" : "Save recipe"}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-sans text-[14px] text-foreground hover:border-foreground transition-all"
            >
              {copiedLink ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Link copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share recipe</span>
                </>
              )}
            </button>

            {/* Prominent Burnt Terracotta Replate CTA */}
            <Link
              href={`/recipes/${recipe.id}/replate`}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-sans text-[14px] font-bold text-white shadow-[0_6px_18px_rgba(190,83,56,0.22)] transition-all hover:bg-accent-hover active:scale-95"
            >
              <GitFork className="h-4 w-4" />
              <span>Replate / Fork Recipe</span>
            </Link>

            {/* Prominent Start Kitchen Mode CTA */}
            <button
              onClick={() => setIsKitchenModeOpen(true)}
              className="flex items-center gap-2 rounded-full border-2 border-accent bg-accent-tint px-6 py-2.5 font-sans text-[14px] font-bold text-accent transition-all hover:bg-accent hover:text-white"
            >
              <Utensils className="h-4 w-4" />
              <span>Start Kitchen Mode</span>
            </button>
          </div>
        </div>

        {/* Replate / Fork Diff Callout Box */}
        {isReplate && recipe.fork_diff_summary && (
          <div className="mt-8 rounded-2xl border border-accent/30 bg-[#FBF0ED] p-6 shadow-xs animate-in fade-in">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#9E412A] px-2.5 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                Branch Diff
              </span>
              <h3 className="font-sans text-[15px] font-bold text-[#9E412A]">
                Replate Variation Summary
              </h3>
            </div>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-foreground">
              {recipe.fork_diff_summary}
            </p>
          </div>
        )}
      </section>

      {/* Visual Media & Cultural Context Section */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Visual Media Placeholder matching Figma */}
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-border bg-surface shadow-xs">
            <div className="text-center p-6">
              <span className="font-sans text-[15px] text-muted">
                {recipe.title} · finished dish photo
              </span>
              <p className="mt-2 font-sans text-[12px] text-muted/70">
                100% authentic community photography
              </p>
            </div>
          </div>

          {/* Cultural Context Section */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-foreground">
              The story behind the dish
            </h2>

            {/* Cultural Writeup in Happy Monkey */}
            <p className="mt-4 font-sans text-[16px] leading-relaxed text-foreground/90">
              {recipe.cultural_writeup}
            </p>

            {/* Cultural Origin Metadata Badges */}
            <div className="mt-6 rounded-2xl border border-border bg-surface/70 p-5 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-sans text-[13px] font-bold uppercase tracking-wider text-muted">
                  Lineage &amp; Origin:
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-sans text-[13px] text-foreground font-medium">
                  {recipe.region}
                </span>
                {recipe.countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-background px-3 py-1 font-sans text-[13px] text-foreground font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {recipe.ethnic_groups && recipe.ethnic_groups.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-sans text-[13px] font-bold uppercase tracking-wider text-muted">
                    Ethnic Custodians:
                  </span>
                  {recipe.ethnic_groups.map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-accent-tint px-3 py-1 font-sans text-[13px] font-bold text-accent"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              )}

              {recipe.aliases && recipe.aliases.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-sans text-[13px] font-bold uppercase tracking-wider text-muted">
                    Traditional Aliases:
                  </span>
                  <span className="font-sans text-[14px] text-muted italic">
                    {recipe.aliases.join(", ")}
                  </span>
                </div>
              )}
            </div>

            {/* Timing & Servings Specs */}
            <div className="mt-6 flex flex-wrap items-center gap-6 font-sans text-[14px] text-muted">
              <span>
                Prep: <strong className="text-foreground font-bold">{recipe.prep_time_mins} min</strong>
              </span>
              <span>·</span>
              <span>
                Servings: <strong className="text-foreground font-bold">{recipe.servings}</strong>
              </span>
              <span>·</span>
              <span>
                Category: <strong className="text-foreground font-bold">{recipe.meal_category}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column: Ingredients Checklist with Diff Highlighting + Numbered Method */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          {/* Left Column: Ingredients */}
          <div>
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="font-serif text-[24px] font-bold text-foreground">
                  Ingredients
                </h3>
                <span className="rounded-full border border-border bg-background px-3.5 py-1 font-sans text-[13px] font-medium text-foreground">
                  Servings: {recipe.servings}
                </span>
              </div>

              {isReplate && (
                <p className="mt-3 font-sans text-[12px] text-muted">
                  Modified or swapped ingredients are highlighted in terracotta.
                </p>
              )}

              <ul className="mt-5 space-y-3">
                {recipe.ingredients.map((ing, i) => {
                  const isChecked = !!checkedIngredients[i];
                  return (
                    <li
                      key={i}
                      onClick={() => toggleIngredient(i)}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl p-2.5 transition-all ${
                        ing.modified
                          ? "bg-[#FBF0ED] border border-accent/20"
                          : "hover:bg-background/80"
                      } ${isChecked ? "opacity-40" : ""}`}
                    >
                      {/* Checkbox square matching Figma */}
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                          isChecked
                            ? "border-accent bg-accent text-white"
                            : ing.modified
                            ? "border-[#9E412A] bg-background"
                            : "border-border bg-background"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 text-white" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <span
                          className={`font-sans text-[15px] leading-snug ${
                            isChecked ? "line-through text-muted" : "text-foreground"
                          }`}
                        >
                          <strong className="font-bold text-foreground">
                            {ing.quantity}
                          </strong>{" "}
                          {ing.name}
                        </span>

                        {/* Modified / Swapped Diff Badge */}
                        {ing.modified && (
                          <span className="ml-2 inline-flex items-center rounded-md bg-[#9E412A] px-2 py-0.2 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                            Modified
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: Numbered Cooking Steps */}
          <div>
            <h3 className="font-serif text-[28px] md:text-[32px] font-bold text-foreground">
              How to make it
            </h3>

            <div className="mt-8 space-y-10">
              {recipe.steps.map((step, idx) => (
                <div key={idx} className="relative pl-2">
                  <h4 className="font-serif text-[22px] font-bold text-foreground">
                    {idx + 1}. {step.title}
                  </h4>
                  <p className="mt-3 font-sans text-[16px] leading-relaxed text-foreground/90">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Versions & Reviews matching Figma 04 */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="font-serif text-[28px] md:text-[34px] font-bold text-foreground">
          Community versions &amp; reviews
        </h3>

        <div className="mt-8 space-y-6">
          {/* Child Fork Cards */}
          {childBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl border border-accent/25 bg-[#FBF0ED]/80 p-8 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-serif text-[22px] font-bold text-foreground">
                    {branch.title}
                  </h4>
                  <p className="mt-1 font-sans text-[14px] text-muted">
                    By {branch.author_handle ?? "Community Cook"} · Based on this main recipe
                  </p>
                  {branch.fork_diff_summary && (
                    <p className="mt-2 font-sans text-[15px] font-bold text-foreground">
                      {branch.fork_diff_summary}
                    </p>
                  )}
                </div>

                <Link
                  href={`/recipes/${branch.id}`}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-background px-6 py-2.5 font-sans text-[14px] font-bold text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  View {branch.author_handle ? `${branch.author_handle}'s replate` : "replate"} →
                </Link>
              </div>
            </div>
          ))}

          {/* Community Review Card matching Figma */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[15px] font-bold text-foreground">
                Wanjiku
              </span>
              <span className="text-muted">·</span>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-muted">·</span>
              <span className="font-sans text-[14px] text-muted">
                Made this yesterday
              </span>
            </div>

            <p className="mt-3 font-sans text-[16px] text-foreground/90">
              The slow steaming made all the difference. Served it with fried plantain!
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-border bg-background px-5 py-2 font-sans text-[14px] text-foreground hover:border-foreground transition-colors">
                Write a review
              </button>
              <Link
                href="/recipes"
                className="rounded-full border border-border bg-background px-5 py-2 font-sans text-[14px] text-foreground hover:border-foreground transition-colors"
              >
                See all {branches.length > 1 ? branches.length * 8 : 32} replates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Mode Step-by-Step Interactive Modal */}
      <KitchenModeModal
        recipe={recipe}
        isOpen={isKitchenModeOpen}
        onClose={() => setIsKitchenModeOpen(false)}
      />
    </>
  );
}
