import { supabase } from "./supabase";
import type { Recipe } from "./types";
import { SEED_RECIPES } from "./recipes-data";

export async function getAllRecipes(): Promise<Recipe[]> {
  try {
    const { data, error } = await supabase.from("recipes").select("*");
    if (!error && data && data.length > 0) {
      return data as Recipe[];
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }
  return SEED_RECIPES;
}

export async function getCanonicalRecipes(): Promise<Recipe[]> {
  try {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .is("parent_recipe_id", null);
    if (!error && data && data.length > 0) {
      return data as Recipe[];
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }
  return SEED_RECIPES.filter((r) => r.parent_recipe_id === null);
}

export async function getCommunityReplates(): Promise<Recipe[]> {
  try {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .not("parent_recipe_id", "is", null);
    if (!error && data && data.length > 0) {
      return data as Recipe[];
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }
  return SEED_RECIPES.filter((r) => r.parent_recipe_id !== null);
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  try {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .eq("id", id)
      .single();
    if (!error && data) {
      return data as Recipe;
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }
  return SEED_RECIPES.find((r) => r.id === id) ?? null;
}

export async function getBranchesForRecipe(recipe: Recipe): Promise<Recipe[]> {
  const rootId = recipe.parent_recipe_id ?? recipe.id;

  try {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .or(`id.eq.${rootId},parent_recipe_id.eq.${rootId}`);

    if (!error && data && data.length > 0) {
      return data as Recipe[];
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }

  // Fallback
  return SEED_RECIPES.filter(
    (r) => r.id === rootId || r.parent_recipe_id === rootId
  );
}

export async function getReplateCountForRecipe(recipeId: string): Promise<number> {
  try {
    const { count, error } = await supabase
      .from("recipes")
      .select("*", { count: "exact", head: true })
      .eq("parent_recipe_id", recipeId);

    if (!error && typeof count === "number") {
      return count;
    }
  } catch (err) {
    console.error("Supabase query error:", err);
  }

  return SEED_RECIPES.filter((r) => r.parent_recipe_id === recipeId).length;
}

export interface FilterOptions {
  query?: string;
  region?: string;
  mealCategory?: string;
  country?: string;
}

export async function searchAndFilterRecipes(
  options: FilterOptions
): Promise<Recipe[]> {
  const all = await getAllRecipes();
  const q = options.query?.toLowerCase().trim();
  const region = options.region && options.region !== "All" ? options.region : undefined;
  const category =
    options.mealCategory && options.mealCategory !== "All"
      ? options.mealCategory
      : undefined;
  const country =
    options.country && options.country !== "All" ? options.country : undefined;

  return all.filter((r) => {
    if (region && r.region.toLowerCase() !== region.toLowerCase()) {
      return false;
    }
    if (country && !r.countries.some((c) => c.toLowerCase() === country.toLowerCase())) {
      return false;
    }
    if (
      category &&
      r.meal_category.toLowerCase() !== category.toLowerCase()
    ) {
      return false;
    }
    if (q) {
      const matchTitle = r.title.toLowerCase().includes(q);
      const matchAliases = r.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false;
      const matchCountries = r.countries.some((c) => c.toLowerCase().includes(q));
      const matchEthnic =
        r.ethnic_groups?.some((e) => e.toLowerCase().includes(q)) ?? false;
      const matchIngredients = r.ingredients.some((ing) =>
        ing.name.toLowerCase().includes(q)
      );
      const matchWriteup = r.cultural_writeup.toLowerCase().includes(q);

      if (
        !matchTitle &&
        !matchAliases &&
        !matchCountries &&
        !matchEthnic &&
        !matchIngredients &&
        !matchWriteup
      ) {
        return false;
      }
    }
    return true;
  });
}
