import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeDiscovery from "@/components/HomeDiscovery";
import { getCanonicalRecipes, getCommunityReplates } from "@/lib/recipes";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [mainRecipes, communityReplates] = await Promise.all([
    getCanonicalRecipes(),
    getCommunityReplates(),
  ]);

  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HomeDiscovery
          initialMainRecipes={mainRecipes}
          initialCommunityReplates={communityReplates}
        />
      </main>
      <Footer />
    </div>
  );
}
