import "./TravelView.scss"
import { useLoaderData, } from "react-router-dom";

export default function TravelView() {

    const travel = useLoaderData();

    return (
        <div className="travelView-container">
            <div className="travelView-banner" style={{ backgroundImage: `url(${travel[0].banner})` }}></div>
            <div className="travelView-content">
                <div className="travelView-content-top-part">
                    <div className="content-left-part">
                        <h1>{travel[0].title}</h1>
                        <h2>{travel[0].subTitle}</h2>
                        <p>{travel[0].presentationPlanetContent1}</p>
                    </div>
                    <div className="content-right-part">
                        <img src={travel[0].pictures1} alt="placehold" />
                    </div>
                </div>
                <div className="travelView-transition-part">
                    <img src={travel[0].pictures2} alt="placehold" />
                </div>
                <div className="content-detail-planet-part">
                    <h2>{travel[0].titlePresentation}</h2>
                    <p>{travel[0].presentationPlanetContent2}</p>
                    <p>{travel[0].presentationPlanetContent3}</p>
                    <p>{travel[0].presentationPlanetContent4}</p>
                    <p>{travel[0].presentationPlanetContent5}</p>
                </div>
                <div className="content-faune-part">
                    <h2>La faune sur {travel[0].planet}</h2>              
                    {travel[0].faune.map((animal, index) => {
                        return <div className="content-animal-part" key={index}>
                                    <div className="faune-left-part">
                                        <h3>{animal.title}</h3>
                                        <p>{animal.description1}</p>
                                        <p>{animal.description2}</p>
                                        <p>{animal.description3}</p>
                                    </div>
                                    <div className="faune-right-part">
                                        <img src={animal.image} alt="placehold" />
                                    </div>
                                </div>
                        })} 
                </div>
                <div className="content-todo-part">
                    <h2>Que faire sur {travel[0].planet} ?</h2>
                    <p>Ces activités offrent un aperçu riche et varié des merveilles qu'Astronia a à offrir aux voyageurs intrépides. Chacune d'entre elles garantit une expérience unique, ancrée dans la beauté naturelle,
                    la culture et la technologie de cette planète extraordinaire.</p>
                    {travel[0].activities.map((activity, index) => {
                        return <div key={index} className="todo-card-planet">
                                    <div className="todo-card-left-part">
                                        <h3>{activity.name}</h3>
                                        <p>{activity.description}</p>
                                    </div>
                                    <div className="todo-card-rigt-part">
                                        <img src={activity.image} alt="placehold" />
                                    </div>
                                </div>
                    })}            
                </div>
            </div>
        </div>
    )
}