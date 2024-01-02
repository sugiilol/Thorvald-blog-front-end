import './ItemCard.scss'

export default function ItemCard(props) {

    const date = new Date(props.date).toLocaleDateString()

    return (
        <div className='item-card-container'>
            <a href="#">
                <img src={props.thumbnail} alt="fjord-thumb" />
                <h2>{props.title}</h2>
                <span>Le {date} sur {props.planet}</span>
            </a>
        </div>
    )
}