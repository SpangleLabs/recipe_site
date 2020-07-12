import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {FullRecipe} from "./data";


export const RecipePage: React.FunctionComponent = () => {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState<FullRecipe | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://192.168.1.178:5647/recipes/${recipeId}`)
            const data = await resp.json() as FullRecipe
            setRecipe(data)
        }

        fetchData().then();
    }, [recipeId])

    return (
        <div>
            <h1>{recipe?.name}</h1>
            <Link to="/recipes">Back to list</Link>
            <h2>Ingredients</h2>
            <ul>
                {recipe?.ingredients.map(i => <li>{i.amount} {i.item}</li>)}
            </ul>
            <h2>Prep</h2>
            <div>{recipe?.prep}</div>
            <h2>Instructions</h2>
            <div>{recipe?.recipe.split("\n").map((line, key) => <span key={key}>{line}<br/></span> )}</div>
        </div>
    )
}