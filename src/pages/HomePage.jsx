import { useEffect } from "react"
import NavBar from "../components/NavBar"
import  {
  About,
  Contact,
  Events,
  Footer,
  Hero
} from '../sections'

import AOS from "aos"
import "aos/dist/aos.css"

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      once: true,
    })
  })

  return (

    <main className="relative">
      
      <NavBar/>
      
      <section className="padding-x">
        <Hero/>
      </section>

      <section className="padding">
        <Events/>
      </section>
      
      <section className="padding">
        <About/>
      </section>


      <section className="padding">
        <Contact/>
      </section>

      <section>
        <Footer/>
      </section>

    </main>
  )
}

export default HomePage
