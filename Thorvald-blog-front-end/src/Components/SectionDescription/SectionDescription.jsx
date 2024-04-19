import './SectionDescription.scss'
import { Link } from 'react-router-dom'

export default function SectionDescription(props) {

    const classList = ["section-description-container", props.class]

    return (
        <div className={classList.join(" ")}>
            <div className='section-description-img-part'>
                <img src={props.data.thumbnail} alt={props.data.thumbnailAlt} />
            </div>
            <div className='section-description-text-part'>
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
                {/* <a className="button-section-description" href="#">Rubrique " {props.data.category} "</a> */}
                <li className="button-section-description"><Link className='link-section-description' to={props.data.link}>{props.data.category}</Link></li>
            </div>
        </div>
    )
}