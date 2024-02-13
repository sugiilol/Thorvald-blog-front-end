import "./RecipeDescriptionsView.scss"
import { useLoaderData, } from "react-router-dom";

export default function RecipeDescriptionsView() {

    const recipe = useLoaderData();

    const ingredientsByColumn = [[], []];

    for (let i = 0; i < recipe.ingredients.length; i++) {
        ingredientsByColumn[i % 2].push(recipe.ingredients[i]);
    }

    return (
        <div className="recipe-description-container">
            <div className="recipe-header">
                <h1>{recipe.name}</h1>
                <img className="recipe-img" src={recipe.imgRecipe} alt="recipe" />
                <div className="recipe-infos">
                    <div className="recipe-picto-infos"><img src="/img/imgRecipes/imgsRecipesPictos/sablier.png" alt="sablier" className="recipe-picto" />{recipe.timeToCook}</div>
                    <div className="recipe-picto-infos"><img src="/img/imgRecipes/imgsRecipesPictos/chef.png" alt="chef" className="recipe-picto" />{recipe.difficulty}</div>
                    <div className="recipe-picto-infos"><img src="/img/imgRecipes/imgsRecipesPictos/billet-de-banque.png" alt="money" className="recipe-picto" />{recipe.budget}</div>
                </div>
            </div>
            <div className="recipe-content">
                <div className="recipe-title-separator">
                    <img src="/img/imgRecipes/imgsRecipesPictos/food.png" alt="food" className="recipe-picto" />
                    Ingrédients<hr />
                </div>
                <div className="recipe-ingredients">
                    {ingredientsByColumn.map((ingredients, index) => {
                        return (
                            <ul key={index}>
                                {ingredients.map((ingredient, index) => {
                                    return (
                                        <li key={index}><input type="checkbox" />{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
                <div className="recipe-title-separator">
                    <img src="/img/imgRecipes/imgsRecipesPictos/ustensiles.png" alt="ustensiles" className="recipe-picto" />
                    Ustensiles <hr />
                </div>
                <div className="recipe-ustensiles-content">
                    {recipe.ustensiles.map((ustensile, index) => {
                        return (
                            <div key={index} className="recipe-card-ustensile">
                                <div className="recipe-picto-infos"><img src="/img/imgRecipes/imgsRecipesPictos/ustensiles.png" alt="sablier" className="recipe-picto" />{ustensile.amount} {ustensile.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="recipe-title-separator">
                    <img src="/img/imgRecipes/imgsRecipesPictos/fouet.png" alt="fouet" className="recipe-picto" />
                    Préparation<hr />
                </div>
                <div className="recipe-step-content">
                    <ul>
                        {recipe.steps.map((step, index) => {
                            return (
                                <li key={index}>
                                    <h4>{step.name}</h4>
                                    <p>{step.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}