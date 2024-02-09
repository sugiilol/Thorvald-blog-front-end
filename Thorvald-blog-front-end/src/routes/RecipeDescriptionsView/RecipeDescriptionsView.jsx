import "./RecipeDescriptionsView.scss"
import { useLoaderData, } from "react-router-dom";

export default function RecipeDescriptionsView(){

    const recipe = useLoaderData();
    console.log(recipe.name)
    return(
        <div className="recipe-description-container">
            <h1>{recipe[0].name}</h1>
        </div>
    )
}