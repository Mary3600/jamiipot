import type { Recipe } from "./types";

export const SEED_RECIPES: Recipe[] = [
  // 1. Jollof Rice (Root / Canonical)
  {
    id: "jollof-rice",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Jollof rice",
    aliases: ["Benachin", "Jollof", "Nigerian Jollof", "Party Rice"],
    region: "West Africa",
    countries: ["Nigeria", "Ghana", "Senegal"],
    ethnic_groups: ["Yoruba", "Igbo", "Hausa", "Wolof"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "A West African favourite, Jollof rice brings long-grain rice and a rich tomato-pepper stew together in one pot. Gentle steaming gives each grain its flavour. Revered across celebrations, weddings, and weekend family tables, authentic party-style Jollof is distinguished by a subtle smoky aroma achieved by allowing the base layer to slightly caramelize against the pot.",
    prep_time_mins: 60,
    servings: 4,
    ingredients: [
      { name: "long-grain rice", quantity: "2 cups" },
      { name: "tomatoes, blended", quantity: "4" },
      { name: "red bell peppers", quantity: "2" },
      { name: "onion, chopped", quantity: "1" },
      { name: "tomato paste", quantity: "3 tbsp" },
      { name: "vegetable oil", quantity: "3 tbsp" },
      { name: "vegetable stock", quantity: "3 cups" },
      { name: "thyme", quantity: "1 tsp" },
      { name: "Salt and pepper to taste", quantity: "To taste" },
    ],
    steps: [
      {
        title: "Build the base",
        body: "Blend the tomatoes and peppers. Heat the oil, soften the onion, then fry the tomato paste for 3 minutes.",
      },
      {
        title: "Cook the stew",
        body: "Add the blended vegetables and thyme. Simmer for 15 minutes, stirring until the mixture thickens.",
      },
      {
        title: "Steam the rice",
        body: "Rinse the rice and stir it into the stew with the stock. Cover and cook gently for 25 minutes. Rest for 5 minutes before fluffing.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Grandma Kemi",
  },

  // 2. Amina's Smoky Jollof Rice (Replate of Jollof Rice)
  {
    id: "aminas-smoky-jollof-rice",
    parent_recipe_id: "jollof-rice",
    branch_name: "amina-smoky-twist",
    fork_type: "replate",
    title: "Amina's smoky Jollof rice",
    aliases: ["Smoky Party Jollof", "Amina Twist"],
    region: "West Africa",
    countries: ["Nigeria"],
    ethnic_groups: ["Hausa", "Yoruba"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "A diaspora adaptation designed to replicate the signature open-woodfire flavor inside an apartment. By blending Spanish smoked paprika into the tomato base and using heavy cast iron with foil sealing, this replate achieves restaurant-grade smokiness without needing outdoor firewood.",
    prep_time_mins: 60,
    servings: 4,
    ingredients: [
      { name: "long-grain rice", quantity: "2 cups" },
      { name: "tomatoes, blended", quantity: "4" },
      { name: "red bell peppers, charred", quantity: "2", modified: true },
      { name: "onion, chopped", quantity: "1" },
      { name: "tomato paste", quantity: "3 tbsp" },
      { name: "smoked paprika", quantity: "1 tsp", modified: true },
      { name: "vegetable oil", quantity: "3 tbsp" },
      { name: "vegetable stock", quantity: "3 cups" },
      { name: "dried thyme", quantity: "1 tsp" },
      { name: "Salt and pepper to taste", quantity: "To taste" },
    ],
    steps: [
      {
        title: "Char peppers & build base",
        body: "Char the peppers lightly under a broiler before blending. Fry onions, tomato paste, and 1 tsp smoked paprika in hot oil for 3 minutes to bloom the aromatics.",
      },
      {
        title: "Cook the smoky stew",
        body: "Stir in the charred pepper puree, thyme, and stock. Simmer for 15 minutes until deep red and fragrant.",
      },
      {
        title: "Double-seal steam",
        body: "Fold in washed long-grain rice. Seal tightly with aluminium foil before placing the heavy lid on. Simmer on low heat for 25 minutes and let the bottom form a golden smoky crust.",
      },
    ],
    fork_diff_summary: "Her twist: 1 tsp smoked paprika added to the stew.",
    author_handle: "Amina Yusuf",
  },

  // 3. Diaspora UK/US Basmati Swap (Fork of Jollof Rice)
  {
    id: "diaspora-uk-us-swap",
    parent_recipe_id: "jollof-rice",
    branch_name: "diaspora-uk-us-swap",
    fork_type: "fork",
    title: "Diaspora UK/US Jollof Swap",
    aliases: ["Golden Sella Jollof", "Oven Jollof"],
    region: "West Africa",
    countries: ["Nigeria", "United Kingdom"],
    ethnic_groups: ["Diaspora"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "Engineered for diaspora kitchens where Golden Sella Basmati is readily available in local groceries. Basmati cooks with perfectly separated grains that resist turning mushy, making this variation ideal for meal-prep and oven-baking methods.",
    prep_time_mins: 55,
    servings: 6,
    ingredients: [
      { name: "Golden Sella Basmati rice (swapped from long-grain)", quantity: "2.5 cups", modified: true },
      { name: "canned plum tomatoes + sweet pointed peppers", quantity: "1 can + 2 peppers", modified: true },
      { name: "habanero pepper (scotch bonnet swap)", quantity: "1", modified: true },
      { name: "yellow onion, finely diced", quantity: "1" },
      { name: "tomato puree tube", quantity: "3 tbsp" },
      { name: "rapeseed / vegetable oil", quantity: "3 tbsp" },
      { name: "vegetable stock cube dissolved in boiling water", quantity: "3 cups", modified: true },
      { name: "dried thyme & bay leaf", quantity: "1 tsp + 2 leaves" },
      { name: "Sea salt and ground black pepper", quantity: "To taste" },
    ],
    steps: [
      {
        title: "Puree canned plum tomatoes and aromatics",
        body: "Blend the canned plum tomatoes with roasted sweet pointed peppers and habanero until glossy and uniform.",
      },
      {
        title: "Fry base in saucepan",
        body: "Saute diced onions, bay leaf, and tomato puree. Pour in the puree and simmer until thick.",
      },
      {
        title: "Oven steam technique",
        body: "Rinse Golden Sella Basmati and combine with hot stock and sauce. Cover tightly with foil and bake at 180°C (350°F) for 40 minutes for effortless non-stick grains.",
      },
    ],
    fork_diff_summary: "Swapped long-grain rice for Golden Sella Basmati and added canned plum tomatoes for diaspora convenience.",
    author_handle: "Kemi In London",
  },

  // 4. Pilau (Canonical)
  {
    id: "pilau",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Pilau",
    aliases: ["Swahili Pilau", "East African Pilau", "Pilau ya Nyama"],
    region: "East Africa",
    countries: ["Kenya", "Tanzania"],
    ethnic_groups: ["Swahili"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "A coastal East African celebration dish deeply tied to the Indian Ocean spice trade. Fragrant with freshly pounded cumin seeds, cloves, cinnamon, and whole cardamom pods, Pilau achieves its distinctive deep brown color from thoroughly caramelized onions.",
    prep_time_mins: 50,
    servings: 4,
    ingredients: [
      { name: "Basmati or Pishori rice", quantity: "2 cups" },
      { name: "beef cubes or goat meat", quantity: "500g" },
      { name: "red onions, thinly sliced", quantity: "2 large" },
      { name: "garlic & ginger paste", quantity: "2 tbsp" },
      { name: "ground cumin (pilau masala)", quantity: "1.5 tbsp" },
      { name: "cinnamon stick, cloves, cardamom", quantity: "1 stick + 4 each" },
      { name: "potatoes, peeled and halved", quantity: "3 medium" },
      { name: "meat stock", quantity: "3.5 cups" },
      { name: "vegetable oil", quantity: "3 tbsp" },
      { name: "salt to taste", quantity: "1.5 tsp" },
    ],
    steps: [
      {
        title: "Boil the meat and reserve broth",
        body: "Boil beef cubes with ginger, garlic, and salt until tender. Strain and keep the broth hot.",
      },
      {
        title: "Caramelize the onions dark brown",
        body: "In a heavy pot, fry sliced onions slowly in oil until dark mahogany brown. This gives Pilau its signature rich amber tone.",
      },
      {
        title: "Bloom whole spices and steam rice",
        body: "Add pilau masala spices, garlic, potatoes, and cooked meat. Stir in rinsed rice and meat stock. Cook covered on low heat until broth is absorbed and potatoes are tender.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Coast Kitchen",
  },

  // 5. Chakalaka (Canonical)
  {
    id: "chakalaka",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Chakalaka",
    aliases: ["Braai Relish", "Soweto Chakalaka"],
    region: "Southern Africa",
    countries: ["South Africa"],
    ethnic_groups: ["Zulu", "Xhosa"],
    meal_category: "Stews & Grills",
    cultural_writeup:
      "Born in the gold-mining township kitchens around Johannesburg. Gold miners assembled fresh chillies, peppers, grated carrots, and canned baked beans into a fiery, nutritious relish that has become the indispensable soul of South African braais and Sunday spreads.",
    prep_time_mins: 35,
    servings: 4,
    ingredients: [
      { name: "canned baked beans in tomato sauce", quantity: "1 can (400g)" },
      { name: "carrots, coarsely grated", quantity: "3 large" },
      { name: "green and red bell peppers, diced", quantity: "2" },
      { name: "hot chillies, finely chopped", quantity: "2" },
      { name: "onion, finely chopped", quantity: "1" },
      { name: "curry powder (medium)", quantity: "1 tbsp" },
      { name: "garlic cloves, minced", quantity: "3" },
      { name: "vegetable oil", quantity: "2 tbsp" },
    ],
    steps: [
      {
        title: "Saute aromatics and curry",
        body: "Fry onions, minced garlic, and curry powder in hot oil until aromatic and translucent.",
      },
      {
        title: "Soften carrots and peppers",
        body: "Toss in diced bell peppers and grated carrots. Cook for 8 minutes until tender-crisp.",
      },
      {
        title: "Fold in beans and simmer",
        body: "Stir in the canned baked beans, season with salt and pepper, and simmer gently for 5 minutes. Serve warm or room temperature alongside pap or grilled meats.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Mama Zola",
  },

  // 6. Thandi's Chakalaka (Replate of Chakalaka)
  {
    id: "thandis-chakalaka",
    parent_recipe_id: "chakalaka",
    branch_name: "thandi-extra-chilli",
    fork_type: "replate",
    title: "Thandi's Chakalaka",
    aliases: ["Extra Spicy Chakalaka", "Fiery Braai Relish"],
    region: "Southern Africa",
    countries: ["South Africa"],
    ethnic_groups: ["Zulu"],
    meal_category: "Stews & Grills",
    cultural_writeup:
      "Thandi's house replate turns up the heat for true spice lovers. Incorporating flame-charred bird's eye chillies and roasted red peppers alongside Rajah extra hot curry powder, this version packs a lingering punch designed to cut through rich grilled boerewors.",
    prep_time_mins: 35,
    servings: 4,
    ingredients: [
      { name: "canned baked beans in tomato sauce", quantity: "1 can (400g)" },
      { name: "carrots, coarsely grated", quantity: "3 large" },
      { name: "green and red bell peppers, diced", quantity: "2" },
      { name: "flame-charred bird's eye chillies", quantity: "4", modified: true },
      { name: "onion, finely chopped", quantity: "1" },
      { name: "Rajah extra hot curry powder", quantity: "1.5 tbsp", modified: true },
      { name: "smoked cayenne pepper", quantity: "1/2 tsp", modified: true },
      { name: "garlic cloves, minced", quantity: "3" },
      { name: "vegetable oil", quantity: "2 tbsp" },
    ],
    steps: [
      {
        title: "Toast chillies and curry",
        body: "Char chillies over open gas flame before slicing. Fry with onions and extra hot curry powder until oils release red tint.",
      },
      {
        title: "Saute crunchy vegetables",
        body: "Add peppers, grated carrots, and cayenne. Fry until vegetables gloss without turning soft.",
      },
      {
        title: "Simmer with beans",
        body: "Fold in baked beans and rest 15 minutes before serving for flavors to marry.",
      },
    ],
    fork_diff_summary: "Her twist: Extra chilli with charred bird's eye chillies and Rajah extra hot curry powder.",
    author_handle: "Thandi M",
  },

  // 7. Egusi Soup (Canonical)
  {
    id: "egusi-soup",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Egusi soup",
    aliases: ["Obe Egusi", "Ofe Egusi", "Melon Seed Stew"],
    region: "West Africa",
    countries: ["Nigeria"],
    ethnic_groups: ["Yoruba", "Igbo", "Efik"],
    meal_category: "Soups & Swallows",
    cultural_writeup:
      "Rich protein-packed soup thickened with ground indigenous melon seeds (egusi). Simmered in cold-pressed red palm oil with dried smoked catfish, crayfish, fermented locust beans (iru), and garden-fresh bitterleaf or fluted pumpkin leaves (ugu). Served with swallows like pounded yam, eba, or amala.",
    prep_time_mins: 50,
    servings: 4,
    ingredients: [
      { name: "ground melon seeds (egusi)", quantity: "2 cups" },
      { name: "red palm oil", quantity: "1/2 cup" },
      { name: "assorted meats & tripe", quantity: "500g" },
      { name: "smoked catfish, deboned", quantity: "2 pieces" },
      { name: "fluted pumpkin leaves (ugu) or spinach", quantity: "2 cups" },
      { name: "ground crayfish", quantity: "3 tbsp" },
      { name: "scotch bonnet peppers, blended", quantity: "2" },
      { name: "fermented locust beans (iru)", quantity: "1 tbsp" },
      { name: "seasoning cubes & salt", quantity: "To taste" },
    ],
    steps: [
      {
        title: "Precook proteins & stock",
        body: "Simmer assorted meats and smoked fish with onions and seasoning until tender. Strain stock and reserve.",
      },
      {
        title: "Form egusi curds in palm oil",
        body: "Mix ground egusi with warm water to form paste. Drop spoonfuls into warm palm oil, frying gently without stirring for 5 minutes until fluffy egusi lumps set.",
      },
      {
        title: "Simmer with greens",
        body: "Add meat stock, crayfish, peppers, and iru. Simmer 12 minutes, then stir in fresh sliced leafy greens for the final 3 minutes.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Mama Chidi",
  },

  // 8. Ada's Egusi Soup (Replate of Egusi Soup)
  {
    id: "adas-egusi-soup",
    parent_recipe_id: "egusi-soup",
    branch_name: "ada-leafy-twist",
    fork_type: "replate",
    title: "Ada's Egusi soup",
    aliases: ["Double Greens Egusi", "Garden Fresh Egusi"],
    region: "West Africa",
    countries: ["Nigeria"],
    ethnic_groups: ["Igbo"],
    meal_category: "Soups & Swallows",
    cultural_writeup:
      "Ada's lighter weeknight variation incorporates double the quantity of crisp waterleaf and fluted pumpkin, while paring back the palm oil for a vibrant, mineral-rich soup that doesn't feel heavy after supper.",
    prep_time_mins: 50,
    servings: 4,
    ingredients: [
      { name: "ground melon seeds (egusi)", quantity: "1.5 cups", modified: true },
      { name: "unrefined red palm oil", quantity: "3 tbsp", modified: true },
      { name: "steamed fish fillets & smoked mackerel", quantity: "400g", modified: true },
      { name: "fresh waterleaf & ugu leaves", quantity: "4 cups", modified: true },
      { name: "ground crayfish & iru", quantity: "2 tbsp" },
      { name: "yellow scotch bonnet peppers", quantity: "2" },
      { name: "bone broth", quantity: "2 cups" },
    ],
    steps: [
      {
        title: "Light saute of egusi paste",
        body: "Cook egusi with modest palm oil until light curds form without deep-frying.",
      },
      {
        title: "Broth infusion",
        body: "Add aromatic yellow habanero reduction and seasoned bone broth with deboned smoked fish.",
      },
      {
        title: "Generous double greens wilting",
        body: "Toss in generous mounds of fresh shredded waterleaf and ugu, turning off the heat as soon as leaves wilt to preserve bright green vitamins.",
      },
    ],
    fork_diff_summary: "Her twist: Leafy twist with double greens (waterleaf + ugu) and reduced palm oil.",
    author_handle: "Ada Okafor",
  },

  // 9. Injera (Canonical)
  {
    id: "injera",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Injera",
    aliases: ["Tayta", "Ethiopian Sourdough Flatbread"],
    region: "East Africa",
    countries: ["Ethiopia", "Eritrea"],
    ethnic_groups: ["Amhara", "Tigray", "Oromo"],
    meal_category: "Soups & Swallows",
    cultural_writeup:
      "The spongy sourdough foundation of Ethiopian and Eritrean cuisine. Naturally gluten-free and crafted from nutrient-dense teff flour, the batter undergoes a multi-day wild fermentation that yields its pleasant sour tang and characteristic airy cratered pockets ('eyes') that scoop up rich stews.",
    prep_time_mins: 40,
    servings: 6,
    ingredients: [
      { name: "brown or ivory teff flour", quantity: "3 cups" },
      { name: "lukewarm water", quantity: "4 cups" },
      { name: "active starter (ersho)", quantity: "1/4 cup" },
      { name: "pinch of salt", quantity: "1/2 tsp" },
    ],
    steps: [
      {
        title: "Wild ferment the batter",
        body: "Whisk teff flour with water and starter into thin crêpe consistency. Rest in warm corner for 2-3 days until bubbly and sour.",
      },
      {
        title: "Cook the absit binder",
        body: "Boil a portion of the batter with boiling water to gelatinize (absit). Whisk back into the rest of batter to guarantee pliable bubble structure.",
      },
      {
        title: "Steam on circular griddle",
        body: "Pour outward-to-inward spiral on heated nonstick skillet or mitad. When hundreds of eyes form across surface, cover with domed lid for 2 minutes until cooked through without flipping.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Selamawit",
  },

  // 10. Couscous (Canonical)
  {
    id: "couscous",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Couscous",
    aliases: ["Kseksu", "Moroccan Seven Vegetable Couscous"],
    region: "North Africa",
    countries: ["Morocco", "Algeria", "Tunisia"],
    ethnic_groups: ["Amazigh (Berber)", "Maghrebi"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "Celebrated on UNESCO's Intangible Cultural Heritage list. Semolina granules hand-rolled with salted spring water and triple-steamed over a simmering fragrant broth of tender lamb, pumpkin, turnips, zucchini, and chickpeas in a tiered steamer (couscoussier).",
    prep_time_mins: 45,
    servings: 4,
    ingredients: [
      { name: "semolina couscous grains", quantity: "500g" },
      { name: "lamb shoulder or shank", quantity: "600g" },
      { name: "carrots, turnips, zucchini, pumpkin", quantity: "Assorted" },
      { name: "chickpeas, soaked", quantity: "1 cup" },
      { name: "saffron, ginger, turmeric & cinnamon", quantity: "1 tsp each" },
      { name: "smen (aged clarified butter) or olive oil", quantity: "2 tbsp" },
    ],
    steps: [
      {
        title: "First gentle steam",
        body: "Moisten semolina with salted water and olive oil, aerating between palms. Steam in top basket over simmering spiced lamb stew for 20 minutes.",
      },
      {
        title: "Rake, cool, and hydrate",
        body: "Tip out into broad wooden bowl, break up any clumps with a fork, sprinkle with cold water, and let grains swell for 10 minutes.",
      },
      {
        title: "Second steam & smen finish",
        body: "Return to steamer until feather-light. Toss with aged smen butter, pile high onto platter, and crown with simmered vegetables and lamb broth.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Laila Marrakech",
  },

  // 11. Thieboudienne (Canonical)
  {
    id: "thieboudienne",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Thieboudienne",
    aliases: ["Ceebu Jën", "Senegalese Red Rice & Fish"],
    region: "West Africa",
    countries: ["Senegal"],
    ethnic_groups: ["Wolof"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "Senegal's culinary masterpiece, originated in the port city of Saint-Louis. Broken jasmine rice simmered in a deep tamarind-tomato broth steeped with whole white fish stuffed with herbaceous rof paste, accompanied by cassava, bitter eggplant, cabbage, and fermented dried fish.",
    prep_time_mins: 90,
    servings: 6,
    ingredients: [
      { name: "broken jasmine rice (ceeb)", quantity: "3 cups" },
      { name: "white grouper or red snapper fillets", quantity: "1.2 kg" },
      { name: "rof stuffing (parsley, garlic, bird's eye chillies, scallions)", quantity: "1 cup" },
      { name: "cassava, cabbage, carrot, eggplant", quantity: "Assorted chunks" },
      { name: "tomato paste concentrate", quantity: "4 tbsp" },
      { name: "guedj (fermented fish) & tamarind pulp", quantity: "2 tbsp" },
    ],
    steps: [
      {
        title: "Stuff fish with green rof paste",
        body: "Pound parsley, chillies, and garlic into a pungent green paste. Slit fish deeply and press rof inside.",
      },
      {
        title: "Brown fish and simmer aromatic stock",
        body: "Sear fish in peanut oil, remove. Brown onions and tomato paste, add water, fermented fish, tamarind, and vegetables until sweet and fork-tender.",
      },
      {
        title: "Cook broken rice in red broth",
        body: "Steam broken rice grains over the stew, then submerge into the reduced crimson sauce so every rice pebble absorbs the rich seafood essence.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Fatou Dakar",
  },

  // 12. Coconut Rice (Canonical)
  {
    id: "coconut-rice",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Coconut rice",
    aliases: ["Nigerian Coconut Rice", "Coastal Fragrant Rice"],
    region: "West Africa",
    countries: ["Nigeria"],
    ethnic_groups: ["Yoruba", "Efik"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "A coastal staple where parboiled long-grain rice absorbs freshly pressed coconut milk, dried crayfish, hot habaneros, and seasoned meat broth. Subtly sweet and deeply savory.",
    prep_time_mins: 40,
    servings: 4,
    ingredients: [
      { name: "long-grain parboiled rice", quantity: "2 cups" },
      { name: "fresh coconut milk", quantity: "2.5 cups" },
      { name: "ground dried crayfish", quantity: "3 tbsp" },
      { name: "onion & scotch bonnet peppers", quantity: "1 onion + 2 peppers" },
      { name: "chicken broth", quantity: "1 cup" },
      { name: "salt to taste", quantity: "1 tsp" },
    ],
    steps: [
      {
        title: "Fry aromatics and crayfish",
        body: "Saute diced onions and blended peppers in vegetable oil with ground crayfish until sweet.",
      },
      {
        title: "Pour in rich coconut milk",
        body: "Add coconut milk and chicken broth, bringing to a gentle simmer so coconut fat separates slightly.",
      },
      {
        title: "Steam rice gently",
        body: "Stir in washed rice, seal with foil, and cook on low heat for 25 minutes until all liquid is absorbed and grains are glossy.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Chef Kemi",
  },

  // 13. Waakye (Canonical)
  {
    id: "waakye",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Waakye",
    aliases: ["Ghanaian Rice and Beans", "Waache"],
    region: "West Africa",
    countries: ["Ghana"],
    ethnic_groups: ["Hausa", "Akan"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "Ghana's iconic morning and market meal. Rice and black-eyed peas boiled together with indigenous dried red sorghum leaves (waakye leaves) which infuse the grains with a distinctive royal purple-brown tone and earthy aroma. Served on banana leaves with fiery black shito sauce, spaghetti, and fried plantain.",
    prep_time_mins: 75,
    servings: 4,
    ingredients: [
      { name: "long-grain rice", quantity: "2 cups" },
      { name: "black-eyed peas", quantity: "1 cup" },
      { name: "dried sorghum leaf stalks (waakye leaves)", quantity: "5 stalks" },
      { name: "kanwa (limestone / baking soda)", quantity: "1/4 tsp" },
      { name: "sea salt", quantity: "1 tsp" },
    ],
    steps: [
      {
        title: "Soak and boil beans with sorghum stalks",
        body: "Simmer black-eyed peas with waakye leaves in salted water until the beans soften and broth turns deep wine red.",
      },
      {
        title: "Add rice and absorb color",
        body: "Discard leaves, stir in rinsed rice, and simmer covered until grains become tender, fragrant, and deep burgundy.",
      },
      {
        title: "Plate with traditional garnishes",
        body: "Serve hot with shito pepper sauce, boiled egg, spaghetti, and fried sweet plantains.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Kwame Accra",
  },

  // 14. Rice & Peas (Canonical)
  {
    id: "rice-and-peas",
    parent_recipe_id: null,
    branch_name: "main",
    fork_type: "canonical",
    title: "Rice & peas",
    aliases: ["Jamaican Rice and Peas", "Sunday Rice"],
    region: "Southern Africa",
    countries: ["Jamaica"],
    ethnic_groups: ["Afro-Caribbean"],
    meal_category: "Rice & Grains",
    cultural_writeup:
      "The diaspora evolution of West African rice-and-bean cookery. Cooked with creamy coconut milk, gungo peas or red kidney beans, whole unpierced scotch bonnet pepper, aromatic allspice pimento berries, and fresh thyme sprigs.",
    prep_time_mins: 55,
    servings: 4,
    ingredients: [
      { name: "long-grain rice", quantity: "2 cups" },
      { name: "red kidney beans (peas) in liquid", quantity: "1 can (400g)" },
      { name: "coconut milk", quantity: "1 can (400ml)" },
      { name: "whole scotch bonnet pepper (kept whole)", quantity: "1" },
      { name: "pimento berries (allspice)", quantity: "6 berries" },
      { name: "fresh thyme sprigs & scallion stalks", quantity: "4 sprigs + 2 scallions" },
      { name: "garlic cloves, crushed", quantity: "3" },
    ],
    steps: [
      {
        title: "Infuse fragrant coconut broth",
        body: "Simmer coconut milk, beans, bruised scallions, thyme sprigs, pimento, and whole scotch bonnet pepper for 10 minutes.",
      },
      {
        title: "Steam rice without bursting pepper",
        body: "Stir in washed rice. Ensure scotch bonnet remains floating whole without puncturing so its perfume infuses without scorching heat.",
      },
      {
        title: "Rest and fluff",
        body: "Remove pepper and thyme stalks, then fluff grains with a fork.",
      },
    ],
    fork_diff_summary: null,
    author_handle: "Marcus Kingston",
  },
];
