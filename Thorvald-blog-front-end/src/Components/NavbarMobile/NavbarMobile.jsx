import './NavbarMobile.scss'
import { Link } from 'react-router-dom'
import drakkarLogoSimple from './img/logo-thorvald2.svg'


export default function NavbarMobile(){
    return(
        <div className='navbarMobile-container'>
            <ul>
                <li><Link to={"/"}><img id='img-drakkar' src={drakkarLogoSimple} alt="drakkar-logo" /></Link></li>
                <li><Link to={"/voyages"} className='zboob'>Voyages</Link></li>
                <li><Link to={"/aventure"}>L'aventure</Link></li>
                <li><Link to={"/cuisine-dailleurs"}>Cuisine&nbsp;d'ailleurs</Link></li>
                <li><Link to={"/galerie"}>Galerie</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    )
}