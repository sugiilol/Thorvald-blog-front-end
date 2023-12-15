import './LastItemView.scss'
import ItemCard from '../../Components/ItemCard/ItemCard'

export default function LastItemView(){
    return(
        <div className='last-item-container'>
            <div className='last-item-header'>
                <h2>Les Derniers articles</h2>
            </div>
            <div className='last-item-content'>
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            
        </div>
    )
}