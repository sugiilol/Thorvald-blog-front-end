import "./RecipeCard.scss"

export default function RecipeCard(props){
    return(
        <div className="recipe-card-container">
            <div className="recipe-card-img" style={{backgroundImage : `url(${props.imgThumb})`}}>
                <span className="recipe-pin-description">{props.type}</span>
            </div>
            <div className="recipe-card-content">
                <span>{props.recipeName}</span>
            </div>           
        </div>
    )
}