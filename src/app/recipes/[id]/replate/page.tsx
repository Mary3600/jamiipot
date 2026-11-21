import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReplateEditor from "@/components/ReplateEditor";
import { getRecipeById } from "@/lib/recipes";

export const dynamic = "force-dynamic";

interface ReplatePageProps {
  params: Promise<{ id: string }>;
}

export default async function ReplatePage({ params }: ReplatePageProps) {
  const { id } = await params;
  const baseRecipe = await getRecipeById(id);

  if (!baseRecipe) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ReplateEditor baseRecipe={baseRecipe} />
      </main>
      <Footer />
    </div>
  );
}
