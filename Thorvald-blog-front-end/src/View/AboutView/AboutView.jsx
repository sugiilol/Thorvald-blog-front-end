import './AboutView.scss'
import thorvaldAvatar from "./img/Thorvald-avatar.png"

export default function AboutView(){
    return(
        <div className='about-container'>
            <h2>"Thorvald Astraforge : Explorateur Viking de l'Espace, Narrateur des Étoiles"</h2>
            <div className='about-content'>
                <div className='about-content__left-part'>
                Dans les confins infinis de l'univers, je suis Thorvald Astraforge, un viking intrépide qui a échangé les fjords gelés 
                pour les étoiles scintillantes.<br />
                Embarquez avec moi à bord de "L'Éclat Céleste" et plongez dans les mystères de l'espace, 
                où chaque étoile raconte une histoire, chaque planète révèle un secret, et chaque galaxie offre une aventure nouvelle.<br />
                Bienvenue dans le récit interstellaire de mon exploration, où la magie des étoiles rencontre la force viking dans un ballet 
                cosmique sans fin.<br />
                Que la lumière des étoiles guide notre chemin !
                </div>
                <div className='about-content__right-part'>
                    <img src={thorvaldAvatar} alt="Thorvald-avatar" />
                </div>
            </div>
        </div>
    )
}