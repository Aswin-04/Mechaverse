import { contactUsImg } from "../assets/images"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col gap-8 lg:hidden">
        <div className="flex flex-col items-center"> 
          <p className="text-clr-100 leading-none text-sm font-sans ">Have any queries ?</p>
          <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">Contact Us</h2>
        </div>
        <div className="rounded-xl bg-[#020809]/50 border-[1px] border-white/30 p-4 ">
          <div className="flex justify-center items-center">
                <img src={contactUsImg} alt="events" width={350} className="rounded-3xl"/>
          </div>
          <div className="flex py-12 px-4 gap-20 justify-center max-sm:flex-col max-sm:text-center max-md:gap-10">
            <div className="flex flex-col gap-8">
              <h3 className="font-bold text-2xl font-grotesk text-clr-200 max-md:text-xl">Event Coordinators</h3>
              <div className="flex flex-col gap-12 max-sm:gap-8">
                <div className="flex flex-col gap-4 max-md:text-lg text-xl">
                  <p className=" text-slate-300 font-sans">Lakshman G</p>
                  <p className=" underline underline-offset-8 decoration-primary text-clr-500">+91 97908 17205</p>
                </div>
                <div className="flex flex-col gap-4 max-md:text-lg text-xl">
                  <p className=" text-slate-300 font-sans">Ajay Kumar A</p>
                  <p className=" underline underline-offset-8 decoration-primary text-clr-500">+91 98847 17979</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 max-md:text-lg text-xl">
              <h3 className="font-bold text-2xl font-grotesk text-clr-200 max-md:text-xl">Help Desk</h3>
              <div className="flex flex-col gap-12 max-sm:gap-8">
                <div className="flex flex-col gap-4 max-md:text-lg text-xl">
                  <p className=" text-slate-300 font-sans">Nithish Anand A</p>
                  <p className=" underline underline-offset-8 decoration-primary text-clr-500">+91 80560 88096</p>
                </div>
                <div className="flex flex-col gap-4 max-md:text-lg text-xl">
                  <p className=" text-slate-300 font-sans">Karthick Raja V</p>
                  <p className=" underline underline-offset-8 decoration-primary text-clr-500">+91 93440 02325</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for large screens */}
      <div className="flex max-lg:hidden rounded-xl  bg-[#020809]/50 border-[1px] border-white/30 py-4">
        <div className="min-w-[40%] px-4 flex justify-center items-center">
            <img src={contactUsImg} alt="events" width={350} className="rounded-3xl"/>
        </div>
        <div className=" py-8 px-4">
          <div className="flex flex-col items-center"> 
            <p className="text-clr-100 leading-none text-sm font-sans ">Have any queries ?</p>
            <h2 className="h3 text-center uppercase font-palanquin font-bold tracking-tight text-transparent bg-clip-text bg-radial-primary-secondary">Contact Us</h2>
          </div>
          <div className="flex py-12 px-4 gap-12 justify-center wide:gap-20">
            <div className="flex flex-col gap-8">
              <h3 className="font-bold text-2xl font-grotesk text-clr-200">Event Coordinators</h3>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <p className="text-xl text-slate-300 font-sans">Lakshman G</p>
                  <p className="text-xl underline underline-offset-8 decoration-primary text-clr-500">+91 97908 17205</p>
                </div>
                <div className="flex flex-col gap-4">
                <p className="text-xl text-slate-300 font-sans">Ajay Kumar A</p>
                <p className="text-xl underline underline-offset-8 decoration-primary text-clr-500">+91 98847 17979</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="font-bold text-2xl font-grotesk text-clr-200">Help Desk</h3>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <p className="text-xl text-slate-300 font-sans">Nithish Anand A</p>
                  <p className="text-xl underline underline-offset-8 decoration-primary text-clr-500">+91 80560 88096</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-xl text-slate-300 font-sans">Karthick Raja V</p>
                  <p className="text-xl underline underline-offset-8 decoration-primary text-clr-500">+91 93440 02325</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
