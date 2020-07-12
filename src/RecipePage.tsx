import React from "react";
import {useParams} from "react-router-dom";


export const RecipePage: React.FunctionComponent = () => {
    const {recipeId} = useParams()
    return (
        <div>Specific recipe {recipeId}</div>
    )
}