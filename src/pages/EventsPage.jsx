import { Footer } from "../sections";

import { allEvents } from "../constants";
import EventCard from "../components/EventCard";
import NavBar from "../components/NavBar";
import GradientHeader from "../components/GradientHeader";

const EventsPage = () => {
  return (
    <section className="relative">
      <NavBar></NavBar>
      <div className="max-container pt-[6.688rem]">
        <div className="flex justify-center items-center pt-12 lg:p-12">
          <GradientHeader label="Events" className="font-sans" />
        </div>

        <div className="flex flex-wrap justify-center">
          {allEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      <section className="mt-32 max-sm:mt-24">
        <Footer/>
      </section>
    </section>
  );
};

export default EventsPage;
