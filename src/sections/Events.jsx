import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { eventsContent } from "../constants";

const Events = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Navigate to the events page
    navigate(eventsContent.linkTo);
  };

  return (
    <section className="max-container ">
      {/* for small screens */}
      <div data-aos="fade-right" className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            {eventsContent.title}
          </h2>
        </div>
        <div className="flex flex-col items-center px-4 py-8 rounded-xl bg-[#020809]/50 border-[1px] border-white/30">
          <div data-aos="zoom-in">
            <img
              src={eventsContent.img}
              alt={eventsContent.imgAlt}
              width={eventsContent.imgWidth}
              className="rounded-3xl"
            />
          </div>
          <p className="text-justify font-montserrat leading-8 text-hc max-lg:max-w-lg max-md:max-w-md mt-8">
            {eventsContent.description}
          </p>
          <div className="inline-flex max-w-sm mx-auto mt-6">
            <button
              onClick={handleExploreClick}
              className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group"
            >
              {eventsContent.linkLabel}{" "}
              <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* for large screens */}
      <div data-aos="fade-down" className="flex max-lg:hidden rounded-xl bg-[#020809]/50 border-[1px] border-white/30 py-4">
        <div data-aos="zoom-in" className="min-w-[45%] pl-8 flex justify-center items-center">
          <img
            src={eventsContent.img}
            alt={eventsContent.imgAlt}
            width={eventsContent.imgWidth}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center px-8 py-8">
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            {eventsContent.title}
          </h2>
          <p className="text-justify font-montserrat leading-8 text-hc max-w-4xl mt-6">
            {eventsContent.description}
          </p>
          <div className="inline-flex max-w-sm mx-auto mt-10">
            <button
              onClick={handleExploreClick}
              className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group"
            >
              {eventsContent.linkLabel}{" "}
              <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
