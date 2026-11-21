export interface Recipe {
  id: string
  parent_recipe_id: string | null
  branch_name: string
  fork_type: 'canonical' | 'replate' | 'fork'
  title: string
  aliases: string[] | null
  region: string
  countries: string[]
  ethnic_groups: string[] | null
  meal_category: string
  cultural_writeup: string
  prep_time_mins: number
  servings: number
  ingredients: Ingredient[]
  steps: Step[]
  fork_diff_summary: string | null
  author_handle: string | null
}

export interface Ingredient {
  name: string
  quantity: string
  modified?: boolean
}

export interface Step {
  title: string
  body: string
}
