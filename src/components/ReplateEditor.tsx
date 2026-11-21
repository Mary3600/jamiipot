"use client";

import { useState } from "react";
import Link from "next/link";
import { GitFork, ArrowLeft, Plus, Trash2, Sparkles } from "lucide-react";
import type { Recipe, Ingredient } from "@/lib/types";

interface ReplateEditorProps {
  baseRecipe: Recipe;
}

export default function ReplateEditor({ baseRecipe }: ReplateEditorProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [title, setTitle] = useState(`Amina's ${baseRecipe.title}`);
  const [branchName, setBranchName] = useState(
    `twist-${baseRecipe.title.toLowerCase().replace(/\s+/g, "-")}`
  );
  const [diffSummary, setDiffSummary] = useState(
    "Added a smoky twist with roasted peppers and smoked paprika."
  );
  const [culturalWriteup, setCulturalWriteup] = useState(
    `A modern take on ${baseRecipe.title} adapted for urban home cooking.`
  );
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    baseRecipe.ingredients.map((ing) => ({ ...ing }))
  );
  const [isPublished, setIsPublished] = useState(false);

  const handleToggleModified = (index: number) => {
    setIngredients((prev) =>
      prev.map((ing, i) =>
        i === index ? { ...ing, modified: !ing.modified } : ing
      )
    );
  };

  const handleUpdateIngredient = (
    index: number,
    field: "name" | "quantity",
    value: string
  ) => {
    setIngredients((prev) =>
      prev.map((ing, i) =>
        i === index ? { ...ing, [field]: value, modified: true } : ing
      )
    );
  };

  const handleAddIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { name: "New ingredient", quantity: "1 tsp", modified: true },
    ]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  if (isPublished) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-tint text-accent">
          <Sparkles className="h-10 w-10 text-accent" />
        </div>

        <h1 className="mt-6 font-serif text-[40px] font-bold text-foreground">
          Replate Published!
        </h1>

        <p className="mt-3 font-sans text-[16px] text-muted">
          Your branch <code className="font-bold text-accent">{branchName}</code>{" "}
          is now live in the JamiiPot repository under{" "}
          <strong>{baseRecipe.title}</strong>.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href={`/recipes/${baseRecipe.id}`}
            className="rounded-full bg-foreground px-7 py-3 font-sans text-[15px] font-bold text-background hover:bg-foreground/80"
          >
            View on {baseRecipe.title}
          </Link>
          <Link
            href="/recipes"
            className="rounded-full border border-border px-7 py-3 font-sans text-[15px] text-foreground hover:border-foreground"
          >
            Explore all recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back button */}
      <Link
        href={`/recipes/${baseRecipe.id}`}
        className="inline-flex items-center gap-2 font-sans text-[14px] text-muted hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to {baseRecipe.title}</span>
      </Link>

      {/* Header */}
      <div className="mt-4 flex items-center justify-between border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <GitFork className="h-5 w-5" />
            <span className="font-sans text-[13px] font-bold uppercase tracking-wider">
              Create a Replate (Recipe Fork)
            </span>
          </div>
          <h1 className="mt-2 font-serif text-[34px] font-bold text-foreground">
            Forking from {baseRecipe.title}
          </h1>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 font-sans text-[13px] font-bold">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step >= 1
                ? "bg-accent text-white"
                : "border border-border text-muted"
            }`}
          >
            1
          </span>
          <span className="h-0.5 w-6 bg-border" />
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step >= 2
                ? "bg-accent text-white"
                : "border border-border text-muted"
            }`}
          >
            2
          </span>
          <span className="h-0.5 w-6 bg-border" />
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step === 3
                ? "bg-accent text-white"
                : "border border-border text-muted"
            }`}
          >
            3
          </span>
        </div>
      </div>

      {/* Step 1: Your Twist */}
      {step === 1 && (
        <section className="mt-8 space-y-6">
          <div>
            <label className="block font-sans text-[14px] font-bold text-foreground">
              Replate Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background p-3.5 font-sans text-[16px] text-foreground focus:border-accent focus:outline-none"
              placeholder="e.g. Amina's Smoky Jollof rice"
            />
          </div>

          <div>
            <label className="block font-sans text-[14px] font-bold text-foreground">
              Branch Name (GitHub format)
            </label>
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background p-3.5 font-mono text-[14px] text-accent focus:border-accent focus:outline-none"
              placeholder="e.g. amina-smoky-twist"
            />
          </div>

          <div>
            <label className="block font-sans text-[14px] font-bold text-foreground">
              What is your twist? (Diff Summary)
            </label>
            <textarea
              rows={3}
              value={diffSummary}
              onChange={(e) => setDiffSummary(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background p-3.5 font-sans text-[15px] text-foreground focus:border-accent focus:outline-none"
              placeholder="Describe your substitution, secret ingredient, or diaspora adaptation..."
            />
          </div>

          <div>
            <label className="block font-sans text-[14px] font-bold text-foreground">
              The Story / Memory Behind this Version
            </label>
            <textarea
              rows={4}
              value={culturalWriteup}
              onChange={(e) => setCulturalWriteup(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background p-3.5 font-sans text-[15px] text-foreground focus:border-accent focus:outline-none"
              placeholder="Who taught you this twist? Why did you adapt it?"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setStep(2)}
              className="rounded-full bg-accent px-8 py-3 font-sans text-[15px] font-bold text-white hover:bg-accent-hover shadow-[0_6px_18px_rgba(190,83,56,0.22)]"
            >
              Next: Customize Ingredients →
            </button>
          </div>
        </section>
      )}

      {/* Step 2: Ingredients */}
      {step === 2 && (
        <section className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-[24px] font-bold text-foreground">
                Customize Ingredients
              </h2>
              <p className="font-sans text-[14px] text-muted">
                Tag modifications, alter quantities, or swap ingredients.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddIngredient}
              className="flex items-center gap-1.5 rounded-full border border-accent bg-accent-tint px-4 py-2 font-sans text-[13px] font-bold text-accent hover:bg-accent hover:text-white"
            >
              <Plus className="h-4 w-4" />
              <span>Add ingredient</span>
            </button>
          </div>

          <div className="space-y-3">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center ${
                  ing.modified
                    ? "border-accent/40 bg-[#FBF0ED]"
                    : "border-border bg-background"
                }`}
              >
                <input
                  type="text"
                  value={ing.quantity}
                  onChange={(e) =>
                    handleUpdateIngredient(i, "quantity", e.target.value)
                  }
                  className="w-full sm:w-28 rounded-lg border border-border bg-background p-2 font-sans text-[14px] font-bold text-foreground"
                  placeholder="Qty"
                />

                <input
                  type="text"
                  value={ing.name}
                  onChange={(e) =>
                    handleUpdateIngredient(i, "name", e.target.value)
                  }
                  className="flex-1 rounded-lg border border-border bg-background p-2 font-sans text-[14px] text-foreground"
                  placeholder="Ingredient name"
                />

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleToggleModified(i)}
                    className={`rounded-lg px-3 py-2 font-sans text-[12px] font-bold transition-colors ${
                      ing.modified
                        ? "bg-[#9E412A] text-white"
                        : "border border-border text-muted hover:border-accent hover:text-accent"
                    }`}
                  >
                    {ing.modified ? "Modified / Twist" : "Mark as Modified"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(i)}
                    className="p-2 text-muted hover:text-rose-600 transition-colors"
                    title="Remove ingredient"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-6 border-t border-border">
            <button
              onClick={() => setStep(1)}
              className="rounded-full border border-border px-6 py-2.5 font-sans text-[14px] text-foreground hover:border-foreground"
            >
              ← Back to Details
            </button>
            <button
              onClick={() => setStep(3)}
              className="rounded-full bg-accent px-8 py-3 font-sans text-[15px] font-bold text-white hover:bg-accent-hover shadow-[0_6px_18px_rgba(190,83,56,0.22)]"
            >
              Next: Review &amp; Publish →
            </button>
          </div>
        </section>
      )}

      {/* Step 3: Review & Publish */}
      {step === 3 && (
        <section className="mt-8 space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h2 className="font-serif text-[28px] font-bold text-foreground">
              {title}
            </h2>
            <p className="font-sans text-[14px] text-muted">
              Branch: <code className="font-bold text-accent">{branchName}</code> ·
              Base: {baseRecipe.title}
            </p>

            <div className="rounded-xl border border-accent/20 bg-[#FBF0ED] p-4">
              <span className="font-sans text-[12px] font-bold uppercase text-[#9E412A]">
                Twist Summary
              </span>
              <p className="mt-1 font-sans text-[14px] text-foreground">
                {diffSummary}
              </p>
            </div>

            <p className="font-sans text-[15px] leading-relaxed text-foreground">
              {culturalWriteup}
            </p>

            <div className="border-t border-border pt-4">
              <h3 className="font-sans text-[14px] font-bold text-foreground">
                Ingredient Changes (
                {ingredients.filter((i) => i.modified).length} modified):
              </h3>
              <ul className="mt-2 space-y-1 font-sans text-[14px]">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        ing.modified ? "bg-[#9E412A]" : "bg-border"
                      }`}
                    />
                    <span
                      className={
                        ing.modified ? "font-bold text-[#9E412A]" : "text-muted"
                      }
                    >
                      {ing.quantity} {ing.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t border-border">
            <button
              onClick={() => setStep(2)}
              className="rounded-full border border-border px-6 py-2.5 font-sans text-[14px] text-foreground hover:border-foreground"
            >
              ← Back to Ingredients
            </button>
            <button
              onClick={() => setIsPublished(true)}
              className="rounded-full bg-accent px-9 py-3.5 font-sans text-[16px] font-bold text-white hover:bg-accent-hover shadow-[0_6px_18px_rgba(190,83,56,0.3)] active:scale-95"
            >
              Publish Replate to Community 🎉
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
