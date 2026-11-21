"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2, Utensils } from "lucide-react";
import type { Recipe } from "@/lib/types";

interface KitchenModeModalProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
}

export default function KitchenModeModal({
  recipe,
  isOpen,
  onClose,
}: KitchenModeModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const totalSteps = recipe.steps.length;
  const currentStep = recipe.steps[currentStepIndex];

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#1A1A1A] text-white">
      {/* Top Bar */}
      <header className="flex h-20 items-center justify-between border-b border-white/10 px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
            <Utensils className="h-5 w-5" />
          </div>
          <div>
            <span className="font-sans text-[12px] uppercase tracking-widest text-accent font-bold">
              Kitchen Mode
            </span>
            <h2 className="font-serif text-[20px] font-bold text-white leading-tight">
              {recipe.title}
            </h2>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-sans text-[14px] text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4" />
          <span>Exit Kitchen Mode</span>
        </button>
      </header>

      {/* Main Interactive Stage */}
      <main className="flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* Left Side: Ingredients checklist */}
        <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-white/10 p-6 overflow-y-auto">
          <h3 className="font-serif text-[22px] font-bold text-white mb-4">
            Ingredients ({recipe.servings} Servings)
          </h3>
          <div className="space-y-2.5">
            {recipe.ingredients.map((ing, i) => {
              const isChecked = !!checkedIngredients[i];
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleIngredient(i)}
                  className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all ${
                    isChecked
                      ? "bg-white/5 text-white/40 line-through"
                      : "bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      isChecked
                        ? "border-accent bg-accent text-white"
                        : "border-white/30"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </div>
                  <span className="font-sans text-[15px] leading-snug">
                    <strong className="text-white font-bold">{ing.quantity}</strong>{" "}
                    {ing.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Step-by-Step Cooking Guide */}
        <div className="flex flex-1 flex-col justify-between p-8 lg:p-14 overflow-y-auto">
          <div className="max-w-3xl">
            {/* Step Progress */}
            <div className="flex items-center gap-2 mb-6">
              {recipe.steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    i === currentStepIndex
                      ? "bg-accent"
                      : i < currentStepIndex
                      ? "bg-white/50"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <p className="font-sans text-[14px] uppercase tracking-widest text-accent font-bold">
              Step {currentStepIndex + 1} of {totalSteps}
            </p>

            <h3 className="mt-2 font-serif text-[36px] lg:text-[44px] font-bold text-white leading-tight">
              {currentStep?.title}
            </h3>

            <p className="mt-6 font-sans text-[20px] lg:text-[24px] leading-relaxed text-white/90">
              {currentStep?.body}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-sans text-[15px] text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Previous Step</span>
            </button>

            {currentStepIndex < totalSteps - 1 ? (
              <button
                onClick={() =>
                  setCurrentStepIndex((prev) => Math.min(totalSteps - 1, prev + 1))
                }
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-sans text-[16px] font-bold text-white shadow-[0_6px_18px_rgba(190,83,56,0.3)] hover:bg-accent-hover transition-colors"
              >
                <span>Next Step</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 font-sans text-[16px] font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                <span>Finish Cooking 🎉</span>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
