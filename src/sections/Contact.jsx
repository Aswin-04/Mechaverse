import { contactUsImg } from "../assets/images";
import ContactDetails from "../components/ContactDetails";
import { contactDetails, contactDetails1 } from "../constants";

const Contact = () => {

  const [firstGroup, secondGroup] = contactDetails1;

  return (
    <section className="max-container">
      <div data-aos="fade-right" className="flex flex-col gap-8 lg:hidden">
        <div className="flex flex-col items-center">
          {/* <p className="text-clr-100 leading-none text-sm font-sans ">
            Have any queries ?
          </p> */}
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
          <div className="flex py-12 px-4 gap-20 justify-center max-sm:flex-col max-sm:text-center max-md:gap-10">
            <ContactDetails contacts={firstGroup} />
            <ContactDetails contacts={secondGroup} />
          </div>
        </div>
      </div>

      {/* for large screens */}
      <div
        data-aos="fade-down"
        className="flex max-lg:hidden rounded-xl  bg-[#020809]/50 border-[1px] border-white/30 py-4 justify-center "
      >
        <div data-aos="zoom-in" className="min-w-[40%] px-4 flex justify-center items-center">
          <img
            src={contactUsImg}
            alt="events"
            width={350}
            className="rounded-3xl"
          />
        </div>
        <div className=" py-8 px-4">
          <div className="flex flex-col items-center">
            {/* <p className="text-clr-100 leading-none text-sm font-sans ">
              Have any queries ?
            </p> */}
            <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
              Contact Us
            </h2>
          </div>
          <div className="flex py-12 px-4 gap-10 justify-center wide:gap-20">
            <ContactDetails contacts={firstGroup} />
            <ContactDetails contacts={secondGroup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
