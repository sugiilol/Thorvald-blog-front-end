import "./HomePageView.scss"
import FirstHomeBgView from "../../View/FirstHomeBgView/FirstHomeBgView"
import AboutView from "../../View/AboutView/AboutView"
import LastItemView from "../../View/LastItemView/LastItemView"
import SectionDescriptionView from "../../View/SectionDescriptionView/SectionDescriptionView"



export default function HomePageView(){
    return(
        <>
        <section>
            <FirstHomeBgView />
        </section>
        <section>
            <AboutView />
        </section>
        <section>
            <LastItemView />
        </section>
        <section>
            <SectionDescriptionView />
        </section>
        </>
    )
}