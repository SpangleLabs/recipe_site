export interface NewRecipe {
    name: string
    ingredients: Ingredient[]
    prep: string
    recipe: string
}

interface RecipeEntry extends NewRecipe {
    recipe_id: number
}


export interface FullRecipe extends RecipeEntry {
    history: HistoryEntryForRecipe[]
    schedule: ScheduleEntryForRecipe[]
}

export interface Ingredient {
    amount: string
    item: string
}

interface HistoryEntryForRecipe {
    date: string,
    start_time: string,
    end_time: string
}

interface ScheduleEntryForRecipe {
    date: string
}

interface ScheduleEntry extends ScheduleEntryForRecipe {
    recipe: RecipeEntry
}

interface HistoryEntry extends HistoryEntryForRecipe {
    recipe: RecipeEntry
}
