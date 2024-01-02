import HomepageView from '../View/HomePageView/HomePageView'
import AboutView from '../View/AboutView/AboutView'
import LastItemView from '../View/LastItemView/LastItemView'
import Footer from '../Components/Footer/Footer'
import SectionDescriptionView from '../View/SectionDescriptionView/SectionDescriptionView'

export default function Root() {

    return (
        <>
            <section>
                <HomepageView />
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
            <footer>
                <Footer />
            </footer>
        </>
    )
}

