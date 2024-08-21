// import NavBar from "../../components/NavBar";
// import { eventDetails } from "../../constants"; // Import the eventDetails object

// const EventDetails2 = () => {
//   return (
//     <main className="relative">
//       <NavBar />
//       <section className="max-container mx-auto text-white">
//         <div className="flex justify-center items-center md:h-screen padding-x max-md:pt-[6.688rem]">
//           <div className="mt-12 flex flex-col md:flex-row md:h-[calc(100vh-20rem)] overflow-hidden bg-card text-hc pl-6 max-md:px-4 max-md:pb-8">
//             <div className="md:flex-shrink-0 md:w-1/3 md:min-w-[300px] md:h-full flex items-center justify-center p-4 bg-card max-md:max-w-[400px] max-md:self-center max-md:mt-8 max-xs:mt-4">
//               <img
//                 src={eventDetails.logo}
//                 alt={eventDetails.title}
//                 className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-0 border border-white/30"
//               />
//             </div>
//             <div className="flex-1 overflow-y-auto p-4 bg-card max-md:p-0 font-montserrat">
//               <h2 className="text-primary font-sans tracking-tight text-3xl font-bold my-8 max-xs:text-xl max-md:text-center">
//                 {eventDetails.title}
//               </h2>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Description</h3>
//                 <p className="mb-4">
//                   {eventDetails.description.split("\n").map((text, index) => (
//                     <span key={index} className="block mb-2">
//                       {text}
//                     </span>
//                   ))}
//                 </p>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Guidelines</h3>
//                 <ol className="list-decimal list-inside pl-4">
//                   {eventDetails.guidelines.map((rule, index) => (
//                     <li className="mb-2" key={index} style={{ listStylePosition: "outside" }}>
//                       {rule}
//                     </li>
//                   ))}
//                 </ol>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
//                 <h3 className="h3-text">Venue</h3>
//                 <p>{eventDetails.venue || "To be announced"}</p>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
//                 <h3 className="h3-text">Timing</h3>
//                 <p>{eventDetails.timing || "To be announced"}</p>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
//                 <h3 className="h3-text">Coordinators</h3>
//                 <div className="flex gap-5">
//                   {eventDetails.coordinators.map((coordinator, index) => (
//                     <div className="flex flex-col items-center" key={index}>
//                       <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mt-4 mb-4 max-xxs:w-[100px] max-xxs:h-[100px]">
//                         <img
//                           src={coordinator.img}
//                           alt={coordinator.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="mb-2 max-xxs:text-sm text-center">{coordinator.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default EventDetails2;



// import EventDetailsRenderer2 from "../../components/EventDetailsRenderer2";
// import { eventDetails } from "../../constants";

// const EventDetailsPage = () => {
//   return <EventDetailsRenderer2 event={eventDetails} />;
// };

// export default EventDetailsPage;

import EventDetailsRenderer1 from "../../components/EventDetailsRenderer2";
import { aquaStrikeEvent } from "../../constants";

const AquaStrikeEvent = () => {
  return <EventDetailsRenderer1 event={aquaStrikeEvent} />;
};

export default AquaStrikeEvent;