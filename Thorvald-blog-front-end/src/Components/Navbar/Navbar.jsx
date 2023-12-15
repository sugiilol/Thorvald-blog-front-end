import './Navbar.scss'
import drakkarLogo from './img/logo-thorvald.svg'
import instaLogo from './img/insta-Logo.png'


export default function Navbar() {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-left-part'>
                    <a href="#"><img src={drakkarLogo} alt="drakkar-logo" /></a>
                </div>
                <div className='navbar-middle-part'>
                    <ul>
                        <li><a href="#">Voyages</a></li>
                        <li><a href="#">Journal de bord</a></li>
                        <li><a href="#">L'aventure</a></li>
                        <li><a href="#">Cuisine d'ailleurs</a></li>
                        <li><a href="#">Tutoriels</a></li>
                        <li><a href="#">Galerie</a></li>
                        <li><a href="#">Contact</a></li>                      
                    </ul>
                </div>
                <div className='navbar-right-part'>
                    {/* <a href="#"><img src={instaLogo} alt="insta-logo" /></a> */}
                </div>
            </div>
        </>
    )
}