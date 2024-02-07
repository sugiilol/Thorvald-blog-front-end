import "./RecipesView.scss"
import RecipeCard from "../../Components/RecipeCard/RecipeCard"
import recipesData from "../../data/recipesData/recipesData.json"

export default function RecipesView() {
    return (
        <div className="recipeList-container">
            <div className="recipeList-banner" style={{ backgroundImage: `url(https://placehold.co/1920x400)` }}>
            </div>
            <h1>Cuisine D'ailleurs</h1>
            <p>Découvrez un univers culinaire extraordinaire ! Parcourez les recettes exotiques 
                et savoureuses dénichées lors de mes voyages intergalactiques à travers les étoiles. 
                Des mets inspirés des cultures et des saveurs des planètes lointaines vous attendent, 
                prêts à vous transporter vers de nouvelles dimensions gustatives. Laissez-vous séduire 
                par la diversité gastronomique de l'univers et embarquez pour un voyage gustatif inoubliable.</p>
            <div className="recipe-galery-container">
            {recipesData.map((recipe, index) => {
                return(
                    <RecipeCard className="recipe-card" key={index} recipeName={recipe.name} type={recipe.type} imgThumb={recipe.imgThumbnail}/>
                )
            })} 
            </div>                    
        </div>
    )
}