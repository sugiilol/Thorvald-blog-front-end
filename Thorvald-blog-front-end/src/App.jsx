import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomepageView from './View/HomePageView/HomePageView'
import AboutView from './View/AboutView/AboutView'
import LastItemView from './View/LastItemView/LastItemView'
import Footer from './Components/Footer/Footer'
import SectionDescriptionView from './View/SectionDescriptionView/SectionDescriptionView'

export default function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
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

