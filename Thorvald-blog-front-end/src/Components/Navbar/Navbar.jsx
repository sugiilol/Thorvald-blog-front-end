import './Navbar.scss'
import { Link } from 'react-router-dom'
import drakkarLogo from './img/logo-thorvald.svg'

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
                        <li><Link to={"/"}>Accueil</Link></li>
                        <li><Link to={"/voyages"}>Voyages</Link></li>
                        <li><Link to={"/aventure"}>L'aventure</Link></li>
                        <li><a href="#">Cuisine d'ailleurs</a></li>
                        <li><a href="#">Galerie</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-container-phone'>
                <div className='navbar-burger-menu-phone'>
                    <button className='burger-menu'>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <div className='navbar-logo-phone'>
                    <Link to={"/"}><img src={drakkarLogo} alt="drakkar-logo" /></Link>
                </div>
            </div>
        </>
    )
}