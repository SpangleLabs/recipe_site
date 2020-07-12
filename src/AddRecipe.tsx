import React, {useState} from "react";
import {FullRecipe, Ingredient} from "./data";
import { useHistory } from "react-router-dom";

export const AddRecipe: React.FunctionComponent = () => {
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState<Ingredient[]>([{amount: "", item: ""}])
    const [prep, setPrep] = useState("")
    const [recipe, setRecipe] = useState("")

    const history = useHistory();

    const addIngredient = () => {
        setIngredients((ingredients) => {
            return ingredients.concat({
                amount: "",
                item: ""
            })
        })
    }

    const removeIngredient = (removeIndex: number) => {
        setIngredients((ingredients) => {
            return ingredients.filter((value, index) => index !== removeIndex)
        })
    }

    const updateIngredientAmount = (index: number, amount: string) => {
        setIngredients((ingredients) => {
            ingredients[index].amount = amount
            return [...ingredients]
        })
    }

    const updateIngredientItem = (index: number, item: string) => {
        setIngredients((ingredients) => {
            ingredients[index].item = item
            return [...ingredients]
        })
    }

    const addRecipe = () => {
        const createRecipe = async () => {
            const newRecipe = {
                name: name,
                ingredients: ingredients,
                prep: prep,
                recipe: recipe
            }
            const resp = await fetch(
                "http://192.168.1.178:5647/recipes",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newRecipe)
                }
            )
            const data = await resp.json() as FullRecipe
            const newRecipeId = data.recipe_id
            history.push(`/recipes/${newRecipeId}`)
        }
        createRecipe().then();
    }

    return (
        <div>
            <h1>Create new recipe</h1>
            Name: <input value={name} onChange={(e) => setName(e.target.value)}/><br/>
            Ingredients: <span onClick={() => addIngredient()}>+ add</span>
            {ingredients.map((i, index) => <IngredientEntry
                key={index}
                amount={i.amount}
                item={i.item}
                setAmount={(amount) => updateIngredientAmount(index, amount)}
                setItem={(item) => updateIngredientItem(index, item)}
                removeIngredient={() => removeIngredient(index)}
            />)}
            Prep: <input value={prep} onChange={(e) => setPrep(e.target.value)} /><br/>
            Recipe: <textarea onChange={(e) => setRecipe(e.target.value)} value={recipe}/><br/>
            <button onClick={() => addRecipe()}>Add recipe</button>
        </div>
    )
}

interface IngredientEntryProps {
    amount: string
    item: string
    setAmount: (amount: string) => void
    setItem: (item: string) => void
    removeIngredient: () => void
}

const IngredientEntry: React.FunctionComponent<IngredientEntryProps> = (props) => {
    const {amount, item, setAmount, setItem, removeIngredient} = props;
    return (
        <div>
            Amount: <input value={amount} onChange={(e) => setAmount(e.target.value)}/>
            Item: <input value={item} onChange={(e) => setItem(e.target.value)}/>
            <span onClick={() => removeIngredient()}>X</span>
        </div>
    )
}