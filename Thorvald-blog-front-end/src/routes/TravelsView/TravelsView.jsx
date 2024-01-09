import "./TravelsView.scss"
import planetsList from "../../data/planetsList/planetsList.json"
import ItemCard from "../../Components/ItemCard/ItemCard"
import { Link } from "react-router-dom"

export default function TravelsView() {
    return (
        <>
            <div className="travels-view-banner">

            </div>
            <div className="travels-content-description">
                <h1>Destination de Voyage</h1>
                L'aventure, c'est le souffle même qui anime mes jours dans la galaxie d'Astrumis.
                C'est l'excitation qui étreint mon cœur lorsque je m'élance vers les étoiles,
                l'émerveillement à chaque rencontre avec une planète inexplorée.
                Là où les cartes célestes se terminent, mon voyage commence, car l'aventure est
                bien plus qu'une destination, c'est une quête infinie vers la découverte,
                la compréhension et la redéfinition constante de ce que signifie être un explorateur
                de l'espace. L'aventure, c'est mon hymne intergalactique, une mélodie dont la
                cadence s'accorde aux pulsations du cœur de l'univers.
            </div>
            <div className="grid-wrapper card-travels-list">
                {planetsList.map((planet, index) => {
                    return (
                        <Link to={`/voyages/` + planet.id} key={index}>
                            <ItemCard
                                class='grid-item'
                                key={index}
                                date={planet.date}
                                thumbnail={planet.thumbnail}
                                title={planet.title}
                                planet={planet.planet}
                            />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}