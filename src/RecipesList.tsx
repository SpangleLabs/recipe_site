import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import {FullRecipe} from "./data";

interface RecipesListProps {
}

export const RecipesList: React.FunctionComponent<RecipesListProps> = () => {
    const [recipes, setRecipes] = useState<FullRecipe[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("http://192.168.1.178:5647/recipes");
            const data = await resp.json() as FullRecipe[]
            setRecipes(data)
        }
        fetchData().then();
    }, [])

    const recipeLastMade = (recipe: FullRecipe) => {
        if (recipe.history.length === 0) {
            return "Not made yet"
        }
        return Math.max.apply(recipe.history.map(e => Date.parse(e.date)))
    }

    return (

        <div>
            <h1>Recipes</h1>
            <Link to="/add_recipe">Add recipe</Link>
            <ul>
            {
                recipes.map(
                    r => <li>
                        <Link to={`/recipes/${r.recipe_id}`}>{r.name}</Link>
                        Last made: {recipeLastMade(r)}
                    </li>
                )
            }
        </ul>
        </div>
    )
}
