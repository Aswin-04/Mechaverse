import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import DetailsRenderer from "../components/DetailsRenderer";
import { aboutClg } from "../constants";
import ImageSlider from "../components/ImageSlider";
import GradientHeader from "../components/GradientHeader";

const AboutUs = () => {
  return (
    <section className="relative">
      <NavBar></NavBar>
      <div className="max-container">
        <ImageSlider></ImageSlider>
        <section className="padding">
          <DetailsRenderer details={aboutClg} />
        </section>
      </div>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default AboutUs;
