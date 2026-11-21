import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, GitFork, Heart } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-muted">
            The Jamii Circle
          </p>
          <h1 className="mt-3 font-serif text-[44px] md:text-[56px] font-bold tracking-tight text-foreground">
            A Living Heritage Repository
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[17px] text-muted">
            JamiiPot is built by African cooks, grandmas, aunties, and diaspora home chefs documenting the lineage and evolving variations of our traditional dishes.
          </p>
        </section>

        {/* Community Pillars */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent">
                <GitFork className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-[22px] font-bold text-foreground">
                Branch &amp; Replate
              </h3>
              <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted">
                Fork canonical dishes with your family secrets, regional substitutions, or dietary adaptations without erasing the root.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-[22px] font-bold text-foreground">
                Replate Discussions
              </h3>
              <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted">
                Discuss techniques, ingredient sourcing in diaspora markets, and swap tips for recreating woodfire party flavors.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-tint text-accent">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-[22px] font-bold text-foreground">
                Cultural Preservation
              </h3>
              <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted">
                Document oral cooking wisdom, tribal origins, and sacred ingredients before they are diluted by globalization.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
