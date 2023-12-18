import './Footer.scss'
import drakkarLogo from './img/logo-thorvald.svg'

export default function Footer(){
    return(
        <div className='footer-container'>
            <img src={drakkarLogo} alt="drakkar-logo" />
            <span>© 3024 Thorvald Astraforge. All rights reserved.</span>
        </div>
    )
}