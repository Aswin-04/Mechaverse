import Accordion from "../components/Accordion";
import NavBar from "../components/NavBar";
import GradientHeader from "../components/GradientHeader";
import { Footer } from "../sections";
import { faqContent } from "../constants";

const FAQs = () => {
  return (
    <section className="relative">
      <NavBar />
      <section className="padding-x h-screen-minus max-container mt-[6.688rem] flex flex-col items-center">
        <div className="flex justify-center items-center p-12">
          <GradientHeader label="FAQs" className="font-sans" />
        </div>
        <div className="grow w-full">
          <ul className=" bg-gray-800 flex-col flex gap-[1px]">
            {faqContent.map((content, index) => (
              <Accordion content={content} key={index} />
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-32 max-sm:mt-24 lg:mt-0">
        <Footer />
      </section>
    </section>
  );
};

export default FAQs;
