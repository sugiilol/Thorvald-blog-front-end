import "./AdventureView.scss"
import adventureData from "../../data/adventurePageData/adventurePageData.json"
import { Link } from 'react-router-dom'

console.log(adventureData)

export default function AdventureView() {
    return (
        <div className="adventure-container">
            <div className="adventure-banner" style={{ backgroundImage: `url(${adventureData.bannerImg})` }}></div>
            <div className="adventure-content">
                <h1>{adventureData.title}</h1>
                <div className="adventure-who-iam-content">
                    <div className="who-iam-content-left-part">
                        <h2>Qui suis-je ?</h2>
                        <p>{adventureData.whoIam}</p>
                        <h2>Le gout de l'aventure ?</h2>
                        <p>{adventureData.adventureTaste}</p>
                        <p>{adventureData.whyAdventure}</p>
                    </div>
                    <div className="who-iam-content-right-part" style={{ backgroundImage: `url(${adventureData.imgWhoIam})` }}></div>
                </div>
                <h1>Et celui de mon fidèle compagnon ...</h1>
                <div className="adventure-whos-my-pet-content">
                    <div className="whos-my-pet-content-left-part" style={{ backgroundImage: `url(${adventureData.imgPet})` }}></div>
                    <div className="whos-my-pet-content-right-part">
                        <h2>Qui est-il ?</h2>
                        <p>{adventureData.whosMyPet}</p>
                        <h2>Notre rencontre ?</h2>
                        <p>{adventureData.originOfMyPet}</p>
                        <p>{adventureData.outroPet}</p>
                    </div>
                </div>
                <div className="adventure-outro-content">
                    <p>{adventureData.outro}</p>
                    <Link to={"/voyages"} className="travelButton"><span>Voyages</span></Link>
                </div>
            </div>
        </div>
    )
}