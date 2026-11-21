import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import RecipeCard from "@/components/RecipeCard";
import {
  searchAndFilterRecipes,
  getCommunityReplates,
} from "@/lib/recipes";

export const dynamic = "force-dynamic";

interface RecipesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  // Next.js 16: Await searchParams Promise
  const resolvedParams = await searchParams;
  const query = typeof resolvedParams.q === "string" ? resolvedParams.q : "";
  const region = typeof resolvedParams.region === "string" ? resolvedParams.region : "";
  const category =
    typeof resolvedParams.category === "string" ? resolvedParams.category : "";

  // Perform multi-field search and filtering
  const filteredRecipes = await searchAndFilterRecipes({
    query,
    region,
    mealCategory: category,
  });

  const replates = await getCommunityReplates();

  const isSearchActive = !!query.trim() || !!region || !!category;

  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Search & Hero Header */}
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-muted">
            {isSearchActive ? "Search" : "Recipe Discovery"}
          </p>

          <h1 className="mt-2 font-serif text-[38px] md:text-[46px] font-bold leading-tight tracking-tight text-foreground">
            {query
              ? `Recipes for "${query}"`
              : region
              ? `${region} Recipes`
              : "What\u2019s the craving today?"}
          </h1>

          <p className="mt-2 font-sans text-[16px] text-muted">
            {isSearchActive
              ? `${filteredRecipes.length} recipes found · Showing the most relevant first`
              : "Find a familiar favourite or try a dish from somewhere new."}
          </p>

          {/* Search Bar matching Figma layout */}
          <div className="mt-6 max-w-3xl">
            <SearchBar
              placeholder="Search recipes, ingredients, regions or countries"
              defaultValue={query}
              targetPath="/recipes"
            />
          </div>

          {/* Quick Filter Pills matching Figma screens 02 & 03 */}
          <div className="mt-5 flex flex-wrap items-center gap-2 font-sans text-[14px]">
            {isSearchActive ? (
              <>
                <Link
                  href="/recipes"
                  className="rounded-full border border-accent bg-accent-tint px-4 py-1.5 font-bold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Clear all filters ✕
                </Link>
                {region && (
                  <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-foreground font-medium">
                    Region: {region}
                  </span>
                )}
                <span className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground">
                  Cook time: Any
                </span>
                <span className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground">
                  Diet: Any
                </span>
                <span className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground">
                  Sort: Relevant
                </span>
              </>
            ) : (
              <>
                <Link
                  href="/recipes"
                  className="rounded-full border border-accent bg-accent-tint px-4 py-1.5 font-bold text-accent"
                >
                  All regions
                </Link>
                <Link
                  href="/recipes?q=30"
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground hover:border-accent/40"
                >
                  Under 30 min
                </Link>
                <Link
                  href="/recipes?q=vegetarian"
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground hover:border-accent/40"
                >
                  Vegetarian
                </Link>
                <Link
                  href="/recipes?region=West%20Africa"
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground hover:border-accent/40"
                >
                  West Africa
                </Link>
                <Link
                  href="/recipes?region=East%20Africa"
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground hover:border-accent/40"
                >
                  East Africa
                </Link>
                <Link
                  href="/recipes?region=North%20Africa"
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground hover:border-accent/40"
                >
                  North Africa
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Recipes Results Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-[28px] md:text-[32px] font-bold text-foreground">
              {isSearchActive ? "Matching recipes" : "Regional dishes"}
            </h2>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  replateCount={recipe.id === "jollof-rice" ? 32 : 1}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <h3 className="font-serif text-[24px] font-bold text-foreground">
                No recipes found
              </h3>
              <p className="mt-2 font-sans text-[15px] text-muted">
                We couldn&apos;t find anything matching &quot;{query}&quot;. Try searching for &quot;rice&quot;, &quot;soup&quot;, or &quot;plantain&quot;.
              </p>
              <Link
                href="/recipes"
                className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 font-sans text-[14px] font-bold text-white hover:bg-accent-hover"
              >
                View all recipes
              </Link>
            </div>
          )}
        </section>

        {/* Popular searches matching Figma screen 03 */}
        {isSearchActive && (
          <section className="mx-auto max-w-7xl px-6 pb-14 border-t border-border pt-10">
            <h3 className="font-serif text-[22px] font-bold text-foreground mb-4">
              Popular searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Jollof rice", "Quick dinners", "Plantain", "Egusi soup", "Pilau"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/recipes?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-border bg-background px-4 py-2 font-sans text-[14px] text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    {term}
                  </Link>
                )
              )}
            </div>
          </section>
        )}

        {/* Popular Replates Section matching Figma screen 02 */}
        {!isSearchActive && replates.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-14 border-t border-border pt-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-[28px] md:text-[32px] font-bold text-foreground">
                  Popular replates
                </h2>
                <p className="font-sans text-[14px] text-muted mt-1">
                  Community twists on grandma&apos;s traditional foundation
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {replates.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} replateCount={1} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
