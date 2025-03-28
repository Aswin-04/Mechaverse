import React from "react";
import NavBar from "./NavBar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventDetailsRenderer1 = ({ event }) => {
  return (
    <main className="relative">
      <NavBar />
      <section className="max-container mx-auto text-white">
        <div className="flex justify-center items-center md:h-screen padding-x max-md:pt-[6.688rem]">
          <div className="mt-12 flex flex-col md:flex-row md:h-[calc(100vh-20rem)] overflow-hidden bg-card text-hc pl-6 max-md:px-4 max-md:pb-8">
            <div className="md:flex-shrink-0 md:w-1/3 md:min-w-[300px] md:h-full flex items-center justify-center p-4 bg-card max-md:max-w-[400px] max-md:self-center max-md:mt-8 max-xs:mt-4">
              <img
                src={event.logo}
                alt={event.title}
                className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-0 border border-white/30"
              />
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-card max-md:p-0 font-sans">
              <h2 className="text-primary font-montserrat tracking-tight text-3xl font-bold my-8 max-xs:text-xl max-md:text-center">
                {event.title}
              </h2>
              <div className="text-justify bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
                <h3 className="h3-text">Description</h3>
                <p className="mb-2">{event.description}</p>
              </div>

              {event.guidelines && (
                <div className="text-justify bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
                  <h3 className="h3-text">Guidelines</h3>
                  <ol className="list-decimal list-inside pl-4">
                    {event.guidelines.map((rule, index) => (
                      <li
                        className="mb-2"
                        key={index}
                        style={{ listStylePosition: "outside" }}
                      >
                        {rule}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {/* <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
                <h3 className="h3-text">Venue</h3>
                <p>{event.venue || "To be announced"}</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="h3-text">Timing</h3>
                <p>{event.timing || "To be announced"}</p>
              </div> */}
              {/* <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="h3-text">Date</h3>
                <p>18/09/24</p>
              </div>{" "} */}

              {event.coordinators && (
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Coordinators</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {event.coordinators.map((coordinator, index) => (
                      <div
                        className="flex flex-col items-start md:items-start lg:items-center"
                        key={index}
                      >
                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mt-4 mb-4 max-xs:w-[85px] max-xs:h-[85px]">
                          <img
                            src={coordinator.img}
                            alt={coordinator.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mb-2 max-xs:text-sm text-center self-center">
                          {coordinator.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {event.coordinators && (
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Contact</h3>
                  <div className="flex flex-col gap-4">
                    {event.coordinators.map(
                      (coordinator, index) =>
                        coordinator.phoneNumber && (
                          <div
                            key={index}
                            className="flex flex-col max-sm:text-xxs"
                          >
                            {/* <p className="mb-1 whitespace-nowrap">
                            {coordinator.name}
                          </p> */}
                            <p className="text-bold text-primary">
                              {coordinator.phoneNumber}
                            </p>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {/* Note Section for Registration */}
              {!event.hideNote && (
                <div className="text-justify bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Note</h3>
                  <ul className="list-disc list-inside pl-4">
                    <li
                      className="mb-2 text-clr-500"
                      style={{ listStylePosition: "outside" }}
                    >
                      The confirmation mail will be sent to participants, and
                      they will be added to a WhatsApp group for communication.{" "}
                    </li>
                    <li
                      className="mb-2"
                      style={{ listStylePosition: "outside" }}
                    >
                      Please note that the registration for this event is
                      handled through a common Google Form.
                    </li>
                    <li
                      className="mb-2"
                      style={{ listStylePosition: "outside" }}
                    >
                      You will be redirected to the same form regardless of the
                      event you are registering for.
                    </li>
                    <li
                      className="mb-2"
                      style={{ listStylePosition: "outside" }}
                    >
                      You can click{" "}
                      <span className="font-bold text-md font-montserrat  whitespace-nowrap">
                        Go Back
                      </span>{" "}
                      to return to the events page and explore other events, or{" "}
                      <span className="font-bold text-md font-montserrat whitespace-nowrap">
                        Register Now
                      </span>{" "}
                      to proceed with registration.
                    </li>
                  </ul>
                </div>
              )}
              <div className="flex mt-5 max-lg:flex-col gap-4">
                <Link
                  to="/events"
                  className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group"
                  preventScrollReset
                >
                  <ArrowLeft className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:-translate-x-1 transition-transform duration-150 ease-in-out mr-1" />
                  Go Back
                </Link>

                {!event.hideRegistration && (
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTk20UsqPw8VIEcU6d1e8wsyXtaLJ7QMfdN8QBbeXZRUCAuA/viewform?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group"
                  >
                    Register Now
                    <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsRenderer1;
