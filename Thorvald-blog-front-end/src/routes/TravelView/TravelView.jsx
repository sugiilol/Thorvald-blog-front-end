import "./TravelView.scss"

import {useLoaderData,} from "react-router-dom";

export default function TravelView() {

    

    const travel = useLoaderData();
    console.log(travel[0].banner)
    return (
        <div className="travelView-container">  
            <div className="travelView-banner">
                <img src={travel[0].banner} alt="travel-landscape" />
            </div>
            <h2>bienvenue sur {travel[0].planet}</h2>
            <p>{travel[0].title}</p>
        </div>    
    )
}