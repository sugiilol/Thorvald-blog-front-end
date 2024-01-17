import "./TravelView.scss"

import {useLoaderData,} from "react-router-dom";

export default function TravelView() {

    const travel = useLoaderData();

    return (
        <div className="travelView-container">  
            <div className="travelView-banner" style={{ backgroundImage: `url(${travel[0].banner})` }}>
                
            </div>
            <div className="travelView-content">
                <div className="travelView-content-top-part">
                    <h1>{travel[0].title}</h1>
                    <h2>{travel[0].subTitle}</h2>
                </div>
                <div className="travelView-content-middle-part">
                    {travel[0].presentationPlanetContent}
                </div>            
            </div>
        </div>    
    )
}