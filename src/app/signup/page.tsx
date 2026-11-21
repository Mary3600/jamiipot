import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignUpPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <h1 className="font-serif text-[32px] font-bold text-foreground">
            Join the Jamii Circle
          </h1>
          <p className="mt-2 font-sans text-[15px] text-muted">
            Preserve ancestral heritage, share family twists and replate classic recipes.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block font-sans text-[14px] font-bold text-foreground">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Amina Yusuf"
                className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 font-sans text-[15px] text-foreground focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-sans text-[14px] font-bold text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="amina@example.com"
                className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 font-sans text-[15px] text-foreground focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-sans text-[14px] font-bold text-foreground">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 font-sans text-[15px] text-foreground focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="mt-2 w-full rounded-full bg-accent py-3 font-sans text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(190,83,56,0.22)] hover:bg-accent-hover transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center font-sans text-[14px] text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-accent hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
