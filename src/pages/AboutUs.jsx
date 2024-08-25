import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import DetailsRenderer from "../components/DetailsRenderer";
import { aboutClg, aboutDepartment, aboutSecMotorSports } from "../constants";
import ImageSlider from "../components/ImageSlider";

const AboutUs = () => {
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
