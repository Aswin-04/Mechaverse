import NavBar from "../components/NavBar"
import Footer from "../sections/Footer"
import DetailsRenderer from "../components/DetailsRenderer"
import { aboutClg } from "../constants"

const AboutUs = () => {
  return (
    <section className="relative">
      <NavBar></NavBar>

      <div className="max-container pt-[6.688rem]">
        <section className="padding">
          <DetailsRenderer details={aboutClg}/>
        </section>

      </div>


      <section>
        <Footer/>
      </section>
    </section>
  )
}

export default AboutUs
