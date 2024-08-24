const DetailsRenderer = ({ details }) => {
  return (
    <section className="max-container">
      {/* for small screens */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            {details.title}
          </h2>
        </div>
        <div className="flex flex-col items-center px-4 py-8 rounded-xl bg-[#020809]/50 border-[1px] border-white/30">
          <div>
            <img
              src={details.img}
              alt={details.imgAlt}
              width={details.imgWidth}
              className="rounded-3xl"
            />
          </div>
          <p className="font-montserrat leading-8 text-hc max-lg:max-w-lg max-md:max-w-md mt-8">
            {details.description}
          </p>
        </div>
      </div>

      {/* for large screens */}
      <div className="flex max-lg:hidden rounded-xl bg-[#020809]/50 border-[1px] border-white/30 py-4">
        <div className="min-w-[45%] pl-8 flex justify-center items-center">
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
          <p className="font-montserrat leading-8 text-hc max-w-4xl mt-6">
            {details.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsRenderer;
