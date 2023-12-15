import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomepageView from './View/HomePageView/HomePageView'
import AboutView from './View/AboutView/AboutView'
import LastItemView from './View/LastItemView/LastItemView'

export default function App() {
  
  return (
    <>
      <Navbar />
      <HomepageView />
      <AboutView />
      <LastItemView />
    </>
  )
}

