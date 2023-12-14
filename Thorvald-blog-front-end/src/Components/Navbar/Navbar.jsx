import './Navbar.scss'
import drakkarLogo from './img/drakkar-logo.png'
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
                        <li><a href="#">Voyages</a></li>
                        <li><a href="#">Voyages</a></li>
                        <li><a href="#">Voyages</a></li>
                        <li><a href="#">Voyages</a></li>
                        
                    </ul>
                </div>
                <div className='navbar-right-part'>
                    <a href="#"><img src={instaLogo} alt="drakkar-logo" /></a>
                </div>
            </div>

        </>
    )
}