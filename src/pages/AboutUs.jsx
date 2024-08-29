import { useEffect } from "react"
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import DetailsRenderer from "../components/DetailsRenderer";
import { aboutClg, aboutDepartment, aboutSecMotorSports } from "../constants";
import ImageSlider from "../components/ImageSlider";

import AOS from "aos"
import "aos/dist/aos.css"

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      once: true,
    })
  })

  return (
    <section className="relative">
      <NavBar></NavBar>
      <div className="max-container">
        <ImageSlider></ImageSlider>
        <section className="padding">
          <DetailsRenderer details={aboutClg} />
        </section>
        <section className="padding">
          <DetailsRenderer details={aboutDepartment} />
        </section>
        <section className="padding">
          <DetailsRenderer details={aboutSecMotorSports} />
        </section>
      </div>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default AboutUs;
