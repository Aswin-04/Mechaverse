import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../sections";
import ProfileCard from "../components/ProfileCard";
import {
  keyPersonsProfiles,
  staffCoordinatorsProfiles,
  mediaTeamProfiles,
  studentCoordinatorsProfiles,
  webDeveloperProfile,
} from "../constants";
import GradientHeader from "../components/GradientHeader";

import AOS from "aos"
import "aos/dist/aos.css"

const OurTeam = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      once: true,
    })
  })
  
  return (
    <main className="relative">
      <NavBar />

      <section className="max-container pt-[6.688rem]">
        <div data-aos="fade-down"className="flex justify-center items-center pt-12 lg:p-12">
          <GradientHeader label="Our Team" className="font-sans" />
        </div>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-accent">
              Key Persons
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {keyPersonsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-accent">
              Faculty <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {staffCoordinatorsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-accent">
              Student <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {studentCoordinatorsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-accent">
              Web <span className="whitespace-nowrap">Developer</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {webDeveloperProfile.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-accent">
              Media <span className="whitespace-nowrap">Team</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {mediaTeamProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>



      </section>

      <section className="mt-8">
        <Footer />
      </section>
    </main>
  );
};

export default OurTeam;
