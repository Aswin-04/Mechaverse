import { contactUsImg } from "../assets/images";

const phoneNumbers = [
  "+91 98847 17979",
  "+91 97908 17205",
  "+91 80560 88096",
];

const Contact = () => {
  return (
    <section className="max-container">
      <div data-aos="fade-right" className="flex flex-col gap-8 lg:hidden">
        <div className="flex flex-col items-center">
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
            Contact Us
          </h2>
        </div>
        <div className="rounded-xl bg-[#020809]/50 border-[1px] border-white/30 p-4 ">
          <div data-aos="zoom-in" className="flex justify-center items-center">
            <img
              src={contactUsImg}
              alt="events"
              width={350}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-center py-12 px-4 gap-6 justify-center max-sm:text-center">
            {phoneNumbers.map((phone, index) => (
              <p key={index} className="underline underline-offset-8 decoration-primary text-clr-500">
                {phone}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* for large screens */}
      <div
        data-aos="fade-down"
        className="flex max-lg:hidden rounded-xl bg-[#020809]/50 border-[1px] border-white/30 py-4 justify-center"
      >
        <div data-aos="zoom-in" className="min-w-[40%] px-4 flex justify-center items-center">
          <img
            src={contactUsImg}
            alt="events"
            width={350}
            className="rounded-3xl"
          />
        </div>
        <div className="py-8 px-4">
          <div className="flex flex-col items-center">
            <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
              Contact Us
            </h2>
          </div>
          <div className="flex flex-col items-center py-12 px-4 gap-6 justify-center">
            {phoneNumbers.map((phone, index) => (
              <p key={index} className="text-lg underline underline-offset-8 decoration-primary text-clr-500">
                {phone}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
