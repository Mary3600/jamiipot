import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-16 pb-20">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-muted">
            About JamiiPot
          </p>
          <h1 className="mt-3 font-serif text-[42px] md:text-[54px] font-bold leading-tight text-foreground">
            GitHub for African Recipes
          </h1>

          <div className="mt-8 space-y-6 font-sans text-[17px] leading-relaxed text-foreground/90">
            <p>
              African food is not a single monolith—it is a tapestry of micro-climates, ethnic traditions, colonial migrations, and diaspora adaptations. For generations, these recipes were passed down orally from mother to daughter, elder to youth, rarely codified in precise gram measurements.
            </p>
            <p>
              <strong>JamiiPot</strong> applies the principles of open-source version control (branches, forks, diffs, pull requests) to African culinary heritage. The canonical root recipe honors traditional methods, while community <em>replates</em> document personal twists, diaspora ingredient swaps, and modern adaptations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 border-y border-border py-10">
            <div>
              <h3 className="font-serif text-[28px] font-bold text-accent">
                100%
              </h3>
              <p className="font-sans text-[14px] text-muted mt-1">
                Authentic community-preserved traditions
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[28px] font-bold text-accent">
                54
              </h3>
              <p className="font-sans text-[14px] text-muted mt-1">
                African nations &amp; diaspora regions
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[28px] font-bold text-accent">
                Zero
              </h3>
              <p className="font-sans text-[14px] text-muted mt-1">
                Gatekeeping of ancestral flavours
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/recipes"
              className="inline-block rounded-full bg-accent px-8 py-3.5 font-sans text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(190,83,56,0.22)] hover:bg-accent-hover"
            >
              Explore the Repository →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
