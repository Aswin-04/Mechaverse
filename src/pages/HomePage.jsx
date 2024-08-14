import NavBar from "../components/NavBar"
import  {
  About,
  Contact,
  Events,
  Footer,
  Hero
} from '../sections'

const HomePage = () => {
  return (

    <main className="relative">
      
      <NavBar/>
      
      <section className="padding-x">
        <Hero/>
      </section>

      <section className="padding">
        <About/>
      </section>

      <section className="padding">
        <Events/>
      </section>

      <section className="padding">
        <Contact/>
      </section>

      <section className="padding">
        <Footer/>
      </section>

    </main>
  )
}

export default HomePage
