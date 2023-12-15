import './ItemCard.scss'
import fjordThumbnail from './img/thumbnail-fjord.png'

export default function ItemCard(){
    return(
        <div className='item-card-container'>
            <img src={fjordThumbnail} alt="fjord-thumb" />
            <h2>Bienvenue sur Atronia</h2>
            <span>Le 15.12.3023 sur Astronia</span>
        </div>
    )
}