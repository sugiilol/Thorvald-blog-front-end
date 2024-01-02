import './LastItemView.scss'
import ItemCard from '../../Components/ItemCard/ItemCard'
import planetList from "../../data/planetsList/planetsList.json"


const last3Planets = planetList.slice((planetList.length - 3), planetList.length)
const first3Planets = planetList.slice(0, 3)

export default function LastItemView() {
    return (
        <div className='last-item-container'>
            <div className='last-item-header'>
                <h2>Les Derniers Voyages</h2>
            </div>
            <div className='last-item-content'>
                {first3Planets.map((planet, index) => {
                    return (
                        <ItemCard key={index} thumbnail={planet.thumbnail} title={planet.title} planet={planet.planet} date={planet.date} />
                    )
                })}
            </div>

        </div>
    )
}