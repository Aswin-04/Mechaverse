import NavBar from "../components/NavBar";
import { Footer } from "../sections";
import ProfileCard from "../components/ProfileCard";
import { keyPersonsProfiles } from "../constants";
import GradientHeader from "../components/GradientHeader";

const OurTeam = () => {
  return (
    <main className="relative">
      <NavBar />

      <section className="max-container pt-[6.688rem]">
        <div className="flex justify-center items-center pt-12 lg:p-12">
          <GradientHeader label="Our Team" className="font-sans" />
        </div>

        <section className="padding-x py-12">
          <div className="my-4">
            <h2 className="text-3xl md:text-[36px] text-center uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
              Key Persons
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {keyPersonsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div className="my-4">
            <h2 className="text-3xl md:text-[36px] text-center uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
              Staff  <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {keyPersonsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div className="my-4">
            <h2 className="text-3xl md:text-[36px] text-center uppercase font-sans font-semibold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">
              Student  <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {keyPersonsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} />
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
