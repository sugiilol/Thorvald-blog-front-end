import './NavbarMobile.scss'
import { Link } from 'react-router-dom'
import drakkarLogoSimple from './img/logo-thorvald2.svg'
import drakkarLogo from './img/logo-thorvald.svg'
import { useState } from 'react'


export default function NavbarMobile() {

    const [menuPhoneIsOpen, setMenuPhoneIsOpen] = useState(false)

    let classMenuPhone = ["navbarMobile-container"]

    if (menuPhoneIsOpen === true) {
        classMenuPhone = ["navbarMobile-container", "navBarMobile-appear"]
    }

    const phoneMenuAppear = () => {
        setMenuPhoneIsOpen(!menuPhoneIsOpen)
        console.log(menuPhoneIsOpen)
    }

    return (
        <>
            <div className='navbar-container-phone'>
                <div className='navbar-burger-menu-phone'>
                    <button onClick={() => phoneMenuAppear()} className='burger-menu'>
                        <span className="material-symbols-outlined burger-menu-icon">menu</span>
                    </button>
                </div>
                <div className='navbar-logo-phone'>
                    <Link to={"/"}><img src={drakkarLogo} alt="drakkar-logo" /></Link>
                </div>
            </div>
            <div className={classMenuPhone.join(' ')} onClick={() => phoneMenuAppear()}>
                <ul>
                    <li><Link to={"/"}><img id='img-drakkar' src={drakkarLogoSimple} alt="drakkar-logo" /></Link></li>
                    <li><Link to={"/voyages"}>Voyages</Link></li>
                    <li><Link to={"/aventure"}>L'aventure</Link></li>
                    <li><Link to={"/cuisine-dailleurs"}>Cuisine&nbsp;d'ailleurs</Link></li>
                    <li><Link to={"/galerie"}>Galerie</Link></li>
                </ul>
            </div>
        </>
    )
}