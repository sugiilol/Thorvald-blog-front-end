import './ItemCard.scss'

export default function ItemCard(props) {

    const date = new Date(props.date).toLocaleDateString()
    const classList = ['item-card-container']
    classList.push(props.class)

    return (
        <div className={classList.join(' ')}>
            <a href="#">
                <img src={props.thumbnail} alt="fjord-thumb" />
                <h2>{props.title}</h2>
                <span>Le {date} sur {props.planet}</span>
            </a>
        </div>
    )
}