import "./RecipesView.scss"
import RecipeCard from "../../Components/RecipeCard/RecipeCard"
import recipesData from "../../data/recipesData/recipesData.json"

export default function RecipesView() {
    return (
        <div className="recipeList-container">
            <div className="recipeList-banner" style={{ backgroundImage: `url(https://placehold.co/1920x400)` }}>
            </div>
            <h1>Cuisine D'ailleurs</h1>
            {recipesData.map((recipe, index) => {
                return(
                    <RecipeCard key={index} recipeName={recipe.name} type={recipe.type} imgThumb={recipe.imgThumbnail}/>
                )
            })}           
        </div>
    )
}