import { eventsImg } from "../assets/images"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react";


const Events = () => {
  return (

    <section className="max-container ">
      {/* for small screens */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">Exciting Events</h2>
        </div>
        <div className="flex flex-col items-center  px-4 py-8 rounded-xl  bg-[#020809]/50 border-[1px] border-white/30">
          <div className="">
            <img src={eventsImg} alt="events" width={320} className="rounded-3xl"/>
          </div>
          <p className="font-montserrat leading-8 text-hc max-lg:max-w-lg max-md:max-w-md mt-8">Explore the fascinating world of 3D printing with us! Our events focus on Mechanical Engineering, Robotics, and more, ensuring you gain a deep understanding of these cutting-edge fields. Secure your spot by filling out the registration form and embark on this exciting journey into innovation and creativity.</p>
          <div className="inline-flex max-w-sm mx-auto mt-6">
            <Link to={'/events'} className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group">Explore Events{" "}
            <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1"/></Link>
          </div>
        </div>
      </div>

      {/* for large screens */}
      <div className="flex max-lg:hidden rounded-xl  bg-[#020809]/50 border-[1px] border-white/30 py-4">
        <div className="min-w-[45%] pl-8 flex justify-center items-center">
            <img src={eventsImg} alt="events" width={320} className="rounded-3xl"/>
        </div>
        <div className="flex flex-col items-center  px-8 py-8">
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">Exciting Events</h2>
          <p className="font-montserrat leading-8 text-hc max-w-4xl mt-6">Explore the fascinating world of 3D printing with us! Our events focus on Mechanical Engineering, Robotics, and more, ensuring you gain a deep understanding of these cutting-edge fields. Secure your spot by filling out the registration form and embark on this exciting journey into innovation and creativity.</p>
          <div className="inline-flex max-w-sm mx-auto mt-10">
            <Link to={'/events'} className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-950 bg-gradient-to-r from-tc/80 via-tc to-tc/80 hover:bg-hc group">Explore Events{" "}
            <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1"/></Link>
          </div>
        </div>
      </div>
    </section>

    
  )
}

export default Events
