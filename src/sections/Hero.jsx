import { Logo3 } from "../assets/images";
import CountDown from "../components/CountDown";

const Hero = () => {
  return (
    <section className="flex flex-col  max-container min-h-screen w-full pt-[6.688rem]">
      <div className="flex flex-col-reverse justify-center items-center gap-6 max-lg:text-center lg:flex-row lg:gap-20">
        <div className="lg:pt-12">
          <p className="font-montserrat text-lg text-tc" data-aos="fade-down" data-aos-delay="50">
            Sri Sairam Engineering College Presents
          </p>
          <h1 className="h1 mt-2 text-transparent bg-clip-text bg-custom-gradient-120" data-aos="fade-down" data-aos-delay="100">
            Mechaverse
          </h1>
          <p className="mt-4 lg:max-w-lg md:max-w-md font-montserrat text-md leading-8 text-white-400" data-aos="fade-down" data-aos-delay="150">
            National level symposium brought forth by the Department of
            Mechanical Engineering of Sri Sairam Engineering College
          </p>
        </div>

        <div className="" data-aos="fade-down">
          <img src={Logo3} alt="logo" width={420} />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-32 lg:mt-12 ">
        <h2 className="text-center h3 font-grotesk font-bold  tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary to-hc"
        data-aos="fade-out" data-aos-delay="200" 
        >
          countdown
        </h2>
        <div className="w-full grid grid-cols-counter-card justify-center items-center md:max-w-3xl self-center mt-8  gap-2 md:gap-3" data-aos="fade-out" data-aos-delay="250">
          <CountDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
