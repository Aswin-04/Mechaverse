import { Logo3, Logo, realLogo } from "../assets/images";
import CountDown from "../components/CountDown";

const Hero = () => {
  return (
    <section className="flex flex-col  max-container min-h-screen w-full pt-[6.688rem]">
      <div className="flex flex-col-reverse justify-center items-center gap-6 max-lg:text-center lg:flex-row lg:gap-20">
        <div className="lg:pt-12">
          <p
            className=" text-hc"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Sri Sai Ram Engineering College Presents
          </p>
          <div className="mt-6 flex flex-col">
            <p className="font-poppins font-semibold text-xl text-transparent bg-clip-text bg-custom-gradient-120 self-start max-lg:self-center">Sai-Mech'24</p>
            <h1
              className="h1 text-transparent bg-clip-text bg-custom-gradient-120"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Mechaverse
            </h1>
          </div>  
          <p
            className="text-justify mt-4 lg:max-w-lg md:max-w-md  text-md leading-8 text-zinc-400"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            National Level Technical Symposium by Department of Mechanical Engineering,
            Sri Sai Ram Engineering College on September 18th, 2024.{" "}
          </p>
        </div>

        <div className="" data-aos="fade-down">
          <img src={Logo} alt="logo" width={420} />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-32 lg:mt-12 ">
        <h2
          className="text-center h3 font-grotesk font-bold  tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary to-hc"
          data-aos="fade-out"
          data-aos-delay="200"
        >
          countdown
        </h2>
        <div
          className="w-full grid grid-cols-counter-card justify-center items-center md:max-w-3xl self-center mt-8  gap-2 md:gap-3"
          data-aos="fade-out"
          data-aos-delay="250"
        >
          <CountDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
