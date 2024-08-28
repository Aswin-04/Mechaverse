import { useEffect } from "react";
import { Footer } from "../sections";
import { allEvents } from "../constants";
import EventCard from "../components/EventCard";
import NavBar from "../components/NavBar";
import GradientHeader from "../components/GradientHeader";

import AOS from "aos"
import "aos/dist/aos.css"

const EventsPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      once: true,
    })
  })

  useEffect(() => {
    // Retrieve the scroll position from sessionStorage
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    // Scroll to the saved position if it exists
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      // Clear the scroll position after restoring
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <section className="relative">
      <NavBar></NavBar>
      <div className="max-container pt-[6.688rem]">
        <div data-aos="fade-down" className="flex justify-center items-center pt-12 lg:p-12">
          <GradientHeader label="Events" className="font-sans" />
        </div>

        <div className="flex flex-wrap justify-center">
          {allEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      <section className="mt-32 max-sm:mt-24">
        <Footer />
      </section>
    </section>
  );
};

export default EventsPage;
