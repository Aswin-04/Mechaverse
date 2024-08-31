import { useState } from "react";

const Accordion = ({ content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        className="text-justify w-full flex justify-between items-center gap-4 p-8 max-xs:px-4 bg-card text-primary max-xs:text-base text-lg"
        onClick={() => setAccordionOpen((prev) => !prev)}
        aria-expanded={accordionOpen}
        aria-controls="accordion-content"
        aria-label="Toggle Accordion"
      >
        <span className="flex-1 text-left">{content.question}</span>
        <span
          className={`transition-transform duration-300 ease-in-out ${
            accordionOpen ? "rotate-180" : "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`M${
                accordionOpen
                  ? "19.5 8.25 12 15.75 4.5 8.25"
                  : "4.5 15.75 12 9.25 19.5 15.75"
              }`}
            />
          </svg>
        </span>
      </button>

      <div
        id="accordion-content"
        className={`transition-all duration-300 ease-in-out text-lg overflow-hidden ${
          accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-xs:px-4 p-8 max-xs:text-base text-lg text-[#2dd2c7]">{content.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
