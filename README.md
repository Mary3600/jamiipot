# JamiiPot 🍲
**GitHub for African Recipes — A Version-Controlled Living Culinary Repository**

JamiiPot is a community-driven, culturally indexed web application designed to preserve, learn, and adapt African recipes. Named after the Swahili word *Jamii* (community/society), JamiiPot treats culinary traditions as living, version-controlled knowledge.

Rather than flat, unmeasured social media posts or Westernized platforms that erase indigenous pantry staples, JamiiPot provides:
- **Canonical Dishes (`main` branch):** Time-tested, ancestral root recipes with cultural context, ethnic custodians, regional origins, and traditional measurements.
- **Recipe Branching ("Replate / Fork"):** Community cooks can fork/replate any canonical dish to document personal twists, diaspora supermarket swaps, or dietary adaptations with clear ingredient diff highlighting.
- **Cultural Context Cards:** Historical background, cross-border aliases (e.g., *Jollof*, *Benachin*, *Thieboudienne*), and regional traditions.
- **Hands-Free Kitchen Mode:** Distraction-free, high-contrast step-by-step cooking interface with ingredient checklists and step progress.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** TypeScript 5
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (configured via `@theme inline` in `globals.css`)
- **Typography:** Google Fonts via `next/font/google`:
  - **Playfair Display (Bold 700):** Landing hero (64px), page headings (44px), section and recipe card titles (`font-serif`)
  - **Happy Monkey (Regular 400):** Body copy, inputs, recipe instructions, and metadata (`font-sans`)
  - **Inter (Bold 700):** JamiiPot brand wordmark and user avatar badge initials (`font-brand`)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Backend & Database:** [Supabase](https://supabase.com/) PostgreSQL via `@supabase/supabase-js` (with in-memory fallback seed data for offline / permission resilience)

---

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Mary3600/jamiipot.git
cd jamiipot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify production build and type-checking:
```bash
npm run build
npm run lint
```

---

## 📂 Exact Project Structure (`src/`)

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx                # About JamiiPot story and mission page
│   ├── community/
│   │   └── page.tsx                # Jamii community pillars & replate discussions
│   ├── login/
│   │   └── page.tsx                # User authentication sign-in screen
│   ├── recipes/
│   │   ├── [id]/
│   │   │   ├── replate/
│   │   │   │   └── page.tsx        # 3-step recipe fork / replate creation wizard
│   │   │   └── page.tsx            # Recipe detail view with GitHub-style branch switcher & diffs
│   │   └── page.tsx                # Recipe discovery and search results feed
│   ├── signup/
│   │   └── page.tsx                # User account registration screen
│   ├── globals.css                 # Tailwind v4 theme inline tokens and root font variables
│   ├── icon.png                    # App icon
│   ├── layout.tsx                  # Root layout loading Playfair Display, Happy Monkey & Inter
│   └── page.tsx                    # Landing page with dual-axis discovery and hero feed
├── components/
│   ├── AccountSidebar.tsx          # Slide-over "Your Kitchen" drawer matching Figma UI
│   ├── BranchSwitcher.tsx          # GitHub-style dropdown toggling canonical vs replate branches
│   ├── BrandLogo.tsx               # JamiiPot minimalist clay pot & sprout SVG brand lockup
│   ├── FilterPills.tsx             # Interactive filter pill controls (Region, Category)
│   ├── Footer.tsx                  # Site-wide dark footer with brand lockup and links
│   ├── Header.tsx                  # Site-wide header with brand, nav links, and AY avatar button
│   ├── HomeDiscovery.tsx           # Interactive client discovery feed with real-time filtering
│   ├── KitchenModeModal.tsx        # Full-screen step-by-step cooking guide with checklist
│   ├── RecipeCard.tsx              # Editorial recipe card with terracotta replate badges
│   ├── RecipeDetailView.tsx        # Complete recipe view with story, diffs, and action CTAs
│   ├── ReplateEditor.tsx           # Multi-step replate editor (Twist, Ingredients, Publish)
│   └── SearchBar.tsx               # Multi-field search bar with auto-navigation
└── lib/
    ├── recipes-data.ts             # Rich seed dataset with 14 canonical dishes & community replates
    ├── recipes.ts                  # Supabase query functions with automatic seed data fallback
    ├── supabase.ts                 # Supabase client helper initialization
    └── types.ts                    # TypeScript interfaces matching public.recipes schema
```

---

## 🗺️ Project Roadmap & Current Status

### ✅ Completed
- **Next.js 16 + Supabase Setup:** App Router configured with TypeScript, Tailwind CSS v4 (`@theme inline`), and `@supabase/supabase-js` client helper.
- **Database Schema & Data Layer:** Complete TypeScript schema (`Recipe`, `Ingredient`, `Step`) matching `public.recipes` with parent-child fork relationships.
- **Initial Seed Catalog:** 14 detailed dishes across West, East, North, and Southern Africa (including Jollof rice, Pilau, Chakalaka, Egusi soup, Injera, Couscous, Thieboudienne, Waakye) with pre-configured community replates.
- **Core UI & Typography System:** Configured `Playfair Display` (Bold), `Happy Monkey` (Regular 400), and `Inter` (Bold) mapped to the visual design tokens (`#BE5338` Burnt Terracotta, `#FFFFFF`, `#1A1A1A`, `#F8F8F8`).
- **Core Pages & Views:**
  - Landing & Discovery Feed (`src/app/page.tsx` & `HomeDiscovery.tsx`) with dual-axis filtering (Culture/Region + Meal Category).
  - Recipe Detail (`src/app/recipes/[id]/page.tsx` & `RecipeDetailView.tsx`) with Cultural Context, ingredient diff highlighting, and serving scaling.
  - GitHub-Style Branch Switcher (`BranchSwitcher.tsx`) seamlessly swapping between `main (Canonical)` and child forks.
  - Interactive Kitchen Mode (`KitchenModeModal.tsx`) providing distraction-free cooking steps.
  - Replate Creation Wizard (`ReplateEditor.tsx`) enabling 3-step recipe forking and diff tagging.
  - Brand header with slide-over kitchen menu (`AccountSidebar.tsx`) and responsive footer.

### 🟡 In Progress / Next
- **Authentication & User State:** Connecting live Supabase Auth sessions to the Login/Signup forms and the Account sidebar.
- **Recipe Photography & Storage:** Integrating Supabase Storage buckets for uploading dish and ingredient photography.
- **Navigation & Sub-routes:** Hooking up remaining tertiary sub-links (e.g. comment threads, full user profile page).
- **Catalog Expansion:** Expanding canonical entries across Central and Southern African nations and adding diaspora family archives.
- **AI-Powered Replate Importer:** Video / caption-to-recipe parser turning social media clips into structured recipe branches.

---

## 📄 License
This project is licensed under the terms included in the [LICENSE](./LICENSE) file.
