import React, {useEffect, useState} from "react";

export const RecipesList: React.FunctionComponent = () => {
    const [recipes, setRecipes] = useState<FullRecipeData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("http://192.168.1.178:5647/recipes");
            const data = await resp.json() as FullRecipeData[]
            setRecipes(data)
        }
        fetchData();
    })

    return (

        <div>
            <h1>Recipes</h1>
            <a href="/add_recipe">Add recipe</a>
            <ul>
            {
                recipes.map(
                    r => <li>{r.name}</li>
                )
            }
        </ul>
        </div>
    )
}

interface FullRecipeData {
    recipe_id: number,
    name: string,
    prep: string,
    recipe: string,
}