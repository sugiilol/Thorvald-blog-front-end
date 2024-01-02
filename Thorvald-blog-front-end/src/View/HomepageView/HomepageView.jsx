import './HomepageView.scss'
import Navbar from "../../Components/Navbar/Navbar"

export default function HomepageView() {
    return (
        
            <div className='homepage-container'>     
                <Navbar />         
                    <button className='rocket-button'>
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </button>               
            </div>     
    )
}