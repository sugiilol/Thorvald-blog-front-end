import './Navbar.scss'
import { Link } from 'react-router-dom'
import drakkarLogo from './img/logo-thorvald.svg'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

export default function Navbar() {

    const navbarLink = [
        {
            name: "HomePage",
            link: "/"
        },
        {
            name: "Voyages",
            link: "/voyages"
        }
    ]

    return (
        <>
            <div className='navbar-container-desktop'>
                <div className='navbar-left-part'>
                    <Link to={"/"}><img src={drakkarLogo} alt="drakkar-logo" /></Link>
                </div>
                <div className='navbar-middle-part'>
                    <ul>
                        <li><Link to={"/voyages"}>Voyages</Link></li>
                        <li><Link to={"/aventure"}>L'aventure</Link></li>
                        <li><Link to={"/cuisine-dailleurs"}>Cuisine&nbsp;d'ailleurs</Link></li>
                        <li><Link to={"/galerie"}>Galerie</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-container-phone'>
                <div className='navbar-burger-menu-phone'>
                    <button className='burger-menu'>
                        <span className="material-symbols-outlined burger-menu-icon">menu</span>
                    </button>
                </div>
                <div className='navbar-logo-phone'>
                    <Link to={"/"}><img src={drakkarLogo} alt="drakkar-logo" /></Link>
                </div>
            </div>
            <NavbarMobile />
        </>
    )
}