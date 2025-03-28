import { ArrowRight } from "lucide-react";

const DetailsRenderer = ({ details }) => {
  return (
    <section className="max-container">
      {/* for small screens */}
      <div data-aos="fade-right" className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            {details.title}
          </h2>
        </div>
        <div className="flex flex-col items-center px-4 py-8 rounded-xl bg-[#020809]/50 border-[1px] border-white/30">
          <div data-aos="zoom-in">
            <img
              src={details.img}
              alt={details.imgAlt}
              width={details.imgWidth}
              className="rounded-3xl"
            />
          </div>
          <p className="text-justify font-montserrat leading-8 text-hc max-lg:max-w-lg max-md:max-w-md mt-8">
            {details.description}
          </p>
          {details.linkTo && (
            <a
              href={details.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-primary group flex items-center"
            >
              <span className="underline underline-offset-8 decoration-primary text-clr-500">
                Follow us on Instagram
              </span>
              <ArrowRight className="w-4 h-4 tracking-normal text-[#2dd2c7]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </a>
          )}
        </div>
      </div>

      {/* for large screens */}
      <div
        data-aos="fade-down"
        className="flex max-lg:hidden rounded-xl bg-[#020809]/50 border-[1px] border-white/30 py-4"
      >
        <div
          data-aos="zoom-in"
          className="min-w-[45%] pl-8 flex justify-center items-center"
        >
          <img
            src={details.img}
            alt={details.imgAlt}
            width={details.imgWidth}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center px-8 py-8">
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            {details.title}
          </h2>
          <p className="text-justify font-montserrat leading-8 text-hc max-w-4xl mt-6">
            {details.description}
          </p>
          {details.linkTo && (
            <a
              href={details.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-primary group flex items-center"
            >
              <span className="underline underline-offset-8 decoration-primary text-clr-500">
                Follow us on Instagram
              </span>
              <ArrowRight className="w-4 h-4 tracking-normal text-[#2dd2c7]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsRenderer;
