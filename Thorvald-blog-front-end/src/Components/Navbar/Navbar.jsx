import './Navbar.scss'
import { Link } from 'react-router-dom'
import drakkarLogo from './img/logo-thorvald.svg'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

export default function Navbar() {

    return (
        <>
            <div className='navbar-container-desktop'>
                <div className='navbar-left-part'>
                    <Link to={"/"}><img src={drakkarLogo} alt="drakkar-logo" /></Link>
                </div>
                <div className='navbar-middle-part'>
                    <ul>
                        <li><Link to={"/aventure"}>L'aventure</Link></li>
                        <li><Link to={"/voyages"}>Voyages</Link></li>
                        <li><Link to={"/cuisine-dailleurs"}>Cuisine&nbsp;d'ailleurs</Link></li>
                        <li><Link to={"/galerie"}>Galerie</Link></li>
                    </ul>
                </div>
            </div>
            <NavbarMobile />
        </>
    )
}