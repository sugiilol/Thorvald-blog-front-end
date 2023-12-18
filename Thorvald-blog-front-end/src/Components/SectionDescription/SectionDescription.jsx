import './SectionDescription.scss'
import poisson from './img/poisson-thumbnail.png'
import hammer from './img/hammer-thumbnail.png'
import voyage from './img/voyage-thumbnail.png'
import book from './img/book-thumbnail.png'

export default function SectionDescription(props) {

    console.log(props.data)

    const classList = ["section-description-container", props.class]

    return (
        <div className={classList.join(" ")}>
            <div className='section-description-img-part'>
                {/* <img src={props.data.thumbnail} alt={props.data.thumbnailAlt} /> */}
                <img src={voyage} alt={props.data.thumbnailAlt} />
            </div>
            <div className='section-description-text-part'>
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
                <a className="button-section-description" href="#">Rubrique " {props.data.category} "</a>
            </div>
        </div>
    )
}