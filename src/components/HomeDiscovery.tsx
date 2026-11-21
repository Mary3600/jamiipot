"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import FilterPills from "./FilterPills";
import type { Recipe } from "@/lib/types";

interface HomeDiscoveryProps {
  initialMainRecipes: Recipe[];
  initialCommunityReplates: Recipe[];
}

const REGION_OPTIONS = [
  "All",
  "West Africa",
  "East Africa",
  "North Africa",
  "Southern Africa",
  "Nigeria",
  "Ghana",
  "Senegal",
];

const MEAL_CATEGORIES = [
  "All",
  "Rice & Grains",
  "Soups & Swallows",
  "Stews & Grills",
  "Street Food",
  "Drinks",
];

export default function HomeDiscovery({
  initialMainRecipes,
  initialCommunityReplates,
}: HomeDiscoveryProps) {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter regional dishes
  const filteredRegionalDishes = useMemo(() => {
    return initialMainRecipes.filter((recipe) => {
      // Region / Country Filter
      if (selectedRegion !== "All") {
        const matchesRegion =
          recipe.region.toLowerCase() === selectedRegion.toLowerCase();
        const matchesCountry = recipe.countries.some(
          (c) => c.toLowerCase() === selectedRegion.toLowerCase()
        );
        if (!matchesRegion && !matchesCountry) return false;
      }

      // Meal Category Filter
      if (
        selectedCategory !== "All" &&
        recipe.meal_category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Multi-field search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = recipe.title.toLowerCase().includes(q);
        const matchAliases =
          recipe.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false;
        const matchCountry = recipe.countries.some((c) =>
          c.toLowerCase().includes(q)
        );
        const matchEthnic =
          recipe.ethnic_groups?.some((e) => e.toLowerCase().includes(q)) ?? false;
        const matchIngredients = recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(q)
        );
        const matchWriteup = recipe.cultural_writeup.toLowerCase().includes(q);

        if (
          !matchTitle &&
          !matchAliases &&
          !matchCountry &&
          !matchEthnic &&
          !matchIngredients &&
          !matchWriteup
        ) {
          return false;
        }
      }

      return true;
    });
  }, [initialMainRecipes, selectedRegion, selectedCategory, searchQuery]);

  // Filter community favourites
  const filteredCommunityFavourites = useMemo(() => {
    return initialCommunityReplates.filter((recipe) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = recipe.title.toLowerCase().includes(q);
        const matchCountry = recipe.countries.some((c) =>
          c.toLowerCase().includes(q)
        );
        const matchIngredients = recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(q)
        );
        if (!matchTitle && !matchCountry && !matchIngredients) return false;
      }
      return true;
    });
  }, [initialCommunityReplates, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pb-14 pt-16 text-center md:pt-20">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-muted">
          Discover · Cook · Share
        </p>

        {/* 64px Playfair Display Bold Landing Headline */}
        <h1 className="mt-4 font-serif text-[48px] font-bold leading-[1.08] tracking-tight text-foreground md:text-[64px]">
          Preserving the Heritage
        </h1>

        <p className="mx-auto mt-4 max-w-xl font-sans text-[17px] leading-relaxed text-muted">
          Find your craving and replicate just the way your grandma did.
        </p>

        {/* Multi-field search bar */}
        <div className="mx-auto mt-8 max-w-2xl">
          <SearchBar
            placeholder="Search a dish, ingredient, country, or ethnic origin"
            onSearchChange={(val) => setSearchQuery(val)}
          />
        </div>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/recipes"
            className="rounded-full bg-foreground px-7 py-3 font-sans text-[15px] font-bold text-background transition-all hover:bg-foreground/80 active:scale-95"
          >
            Explore recipes
          </Link>
          <Link
            href="/recipes/jollof-rice"
            className="rounded-full border border-border px-7 py-3 font-sans text-[15px] text-foreground transition-all hover:border-foreground hover:bg-surface active:scale-95"
          >
            Make a recipe your own
          </Link>
        </div>
      </section>

      {/* Dual-Axis Filters Section */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-2xl border border-border/80 bg-surface/50 p-6 space-y-4">
          {/* Axis 1: Culture / Region / Country */}
          <FilterPills
            label="Culture / Region"
            options={REGION_OPTIONS}
            selected={selectedRegion}
            onSelect={(val) => setSelectedRegion(val)}
          />

          {/* Axis 2: Meal Category */}
          <FilterPills
            label="Meal Category"
            options={MEAL_CATEGORIES}
            selected={selectedCategory}
            onSelect={(val) => setSelectedCategory(val)}
          />
        </div>
      </section>

      {/* Regional Dishes Section */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-foreground">
              Regional dishes
            </h2>
            <p className="font-sans text-[14px] text-muted mt-1">
              {filteredRegionalDishes.length} canonical dishes from across the continent
            </p>
          </div>

          <Link
            href="/recipes"
            className="font-sans text-[14px] font-bold text-accent hover:text-accent-hover"
          >
            See all →
          </Link>
        </div>

        {filteredRegionalDishes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRegionalDishes.slice(0, 6).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} replateCount={recipe.id === "jollof-rice" ? 32 : 1} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-surface p-12 text-center">
            <h3 className="font-serif text-[22px] font-bold text-foreground">
              No matching regional dishes found
            </h3>
            <p className="mt-2 font-sans text-[15px] text-muted">
              Try adjusting your filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedRegion("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 rounded-full bg-accent px-6 py-2 font-sans text-[14px] text-white hover:bg-accent-hover"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>

      {/* Community Favourites / Popular Replates */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-foreground">
              Community favourites &amp; replates
            </h2>
            <p className="font-sans text-[14px] text-muted mt-1">
              Cooks adding personal heritage twists to traditional classics
            </p>
          </div>

          <Link
            href="/recipes"
            className="font-sans text-[14px] font-bold text-accent hover:text-accent-hover"
          >
            Explore replates →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCommunityFavourites.slice(0, 6).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} replateCount={1} />
          ))}
        </div>
      </section>

      {/* Dark Story Callout Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] px-8 py-14 sm:px-14 sm:py-16 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold leading-tight">
              Every recipe has a story.
            </h2>
            <p className="mt-3 font-sans text-[16px] sm:text-[18px] leading-relaxed text-white/70">
              Keep the dishes you grew up with alive. Start with a main recipe, add your twist and share a replate with the global African diaspora.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="rounded-full bg-accent px-8 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(190,83,56,0.3)] transition-all hover:bg-accent-hover active:scale-95"
              >
                Join the community
              </Link>
              <Link
                href="/recipes/jollof-rice"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-sans text-[15px] text-white transition-all hover:bg-white/10"
              >
                View sample replate
              </Link>
            </div>
          </div>

          {/* Subtle background glow */}
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        </div>
      </section>
    </>
  );
}
