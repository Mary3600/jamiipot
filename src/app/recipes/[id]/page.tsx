import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeDetailView from "@/components/RecipeDetailView";
import { getRecipeById, getBranchesForRecipe } from "@/lib/recipes";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: PageProps) {
  // Next.js 16 Async Params Rule: Await params before querying
  const { id } = await params;

  const recipe = await getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  // Fetch branches (canonical root + all child forks/replates)
  const branches = await getBranchesForRecipe(recipe);

  // Identify root canonical recipe
  const rootRecipe =
    recipe.parent_recipe_id === null
      ? recipe
      : branches.find((b) => b.id === recipe.parent_recipe_id) ?? recipe;

  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <RecipeDetailView
          recipe={recipe}
          branches={branches}
          rootRecipe={rootRecipe}
        />
      </main>
      <Footer />
    </div>
  );
}
