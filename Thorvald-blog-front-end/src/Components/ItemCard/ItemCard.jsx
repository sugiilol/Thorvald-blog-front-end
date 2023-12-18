import './ItemCard.scss'
import fjordThumbnail from './img/thumbnail-fjord.png'

export default function ItemCard() {
    return (
        <div className='item-card-container'>
            <a href="#">
                <img src={fjordThumbnail} alt="fjord-thumb" />
                <h2>Bienvenue sur Astronia</h2>
                <span>Le 15.12.3023 sur Astronia</span>
            </a>
        </div>
    )
}