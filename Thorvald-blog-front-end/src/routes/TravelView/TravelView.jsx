import "./TravelView.scss"
import { useLoaderData, } from "react-router-dom";

export default function TravelView() {

    const travel = useLoaderData();
    console.log(travel[0].banner)
    return (
        <div className="travelView-container">
            <div className="travelView-banner">
                <img src={travel[0].banner} alt="travel-landscape" />
            </div>
            <div className="travelView-content">
                <h1>bienvenue sur {travel[0].planet}</h1>
                <h2>{travel[0].subTitle}</h2>
            </div>
        </div>
    )
}