import NavBar from "../components/NavBar"
import { Footer } from "../sections"
import ProfileCard from "../components/ProfileCard"

const OurTeam = () => {
  return (
    <main className="relative">
      <NavBar/>

      <section className="max-container pt-[6.688rem]">

        <section className="padding">
          <ProfileCard></ProfileCard>

        </section>


      </section>

{/* 
      <section>
        <Footer />
      </section> */}
    </main>
  )
}

export default OurTeam
