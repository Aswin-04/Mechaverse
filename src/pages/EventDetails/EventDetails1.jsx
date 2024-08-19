// import NavBar from "../../components/NavBar";
// import { eventsById } from "../../constants";
// import aadhiImg from "../../assets/icons/aadhi-Img.jpeg";

// const eventId = 1;
// const event = eventsById[eventId];

// const EventDetails1 = () => {
//   return (
//     <main className="relative">
//       <NavBar></NavBar>
//       <section className="max-container mx-auto">
//         <div className=" flex justify-center items-center md:h-screen padding-x max-md:pt-[6.688rem]">
//           <div className="mt-12 flex flex-col md:flex-row md:h-[calc(100vh-20rem)] overflow-hidden bg-card text-hc pl-6 max-md:px-4 max-md:pb-8">
//             <div className="md:flex-shrink-0 md:w-1/3 md:min-w-[300px] md:h-full flex items-center justify-center p-4 bg-card max-md:max-w-[400px] max-md:self-center max-md:mt-8 max-xs:mt-4">
//               <img
//                 src={event.logo}
//                 alt={event.title}
//                 className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-0  border border-white/30"
//               />
//             </div>
//             <div className="flex-1 overflow-y-auto p-4 bg-card max-md:p-0 font-montserrat">
//               <h2 className="text-primary font-sans tracking-tight text-3xl font-bold my-8 max-xs:text-xl max-md:text-center">
//                 3D Printing Workshop
//               </h2>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Description</h3>
//                 <p className="mb-2">
//                   Step into the future of technology at our immersive 3D Printing
//                   Workshop! Whether you're a tech enthusiast, a creative
//                   professional, or just curious about the world of 3D printing,
//                   this workshop is designed for you.
//                 </p>
//                 <p className="mb-2">
//                   Join us for a hands-on experience where you'll:
//                 </p>
//                 <ul className="list-disc list-inside">
//                   <li className="mb-2">
//                     Learn the Basics: Get an overview of 3D printing technology,
//                     including how it works and its various applications.
//                   </li>
//                   <li className="mb-2">
//                     Hands-On Demonstrations: Watch live demonstrations of
//                     different 3D printers and materials in action.
//                   </li>
//                   <li className="mb-2">
//                     Interactive Sessions: Engage in interactive activities to
//                     understand the design process and how to create your own 3D
//                     models.
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Guidelines</h3>
//                 <ol className="list-decimal list-inside">
//                   <li className="mb-2">
//                     Each participant is instructed to register through Google Form
//                     provided.
//                   </li>
//                   <li className="mb-2">
//                     First come first served (Only first 30 members are expected).
//                   </li>
//                   <li className="mb-2">
//                     After the workshop, a quiz will be conducted to test your
//                     knowledge.
//                   </li>
//                   <li className="mb-2">
//                     No team participation is allowed for the quiz, only individual
//                     participation.
//                   </li>
//                   <li className="mb-2">
//                     Winners will be provided with certificates and cash awards.
//                   </li>
//                   <li className="mb-2">
//                     Participation certificates will be provided to all.
//                   </li>
//                 </ol>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Venue</h3>
//                 <p>VRR Hall</p>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
//                 <h3 className="h3-text">Timing</h3>
//                 <p>10:30 AM</p>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
//                 <h3 className="h3-text">Coordinators</h3>
//                 <div className="flex gap-5">
//                   <div className="flex flex-col items-center">
//                     <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mt-4 mb-4 max-xxs:w-[100px] max-xxs:h-[100px]">
//                       <img
//                         src={aadhiImg}
//                         alt="Raj Kumar"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="mb-2 max-xxs:text-sm text-center">Raj Kumar</p>
//                   </div>

//                   <div className="flex flex-col items-center">
//                     <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mt-4 mb-4 max-xxs:w-[100px] max-xxs:h-[100px]">
//                       <img
//                         src={aadhiImg}
//                         alt="Praveen Kumar"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <p className="mb-2 max-xxs:text-sm text-center">
//                       Praveen Kumar
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default EventDetails1;


import EventDetailsRenderer2 from "../../components/EventDetailsRenderer2";
import { tdPrintingEvent } from "../../constants";

const EventDetails1 = () => {
  return <EventDetailsRenderer2 event={tdPrintingEvent} />;
};

export default EventDetails1;
