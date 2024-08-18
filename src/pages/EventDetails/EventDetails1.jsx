import React from 'react';
import { eventsById } from "../../constants";
import aadhiImg from '../../assets/icons/aadhi-Img.jpeg';

const eventId = 1;
const event = eventsById[eventId];

const EventDetails1 = () => {
  return (

    <div className='max-container border flex justify-center items-center md:h-screen mx-auto padding'>

      <div className="flex flex-col md:flex-row md:h-[calc(100vh-6rem)] overflow-hidden bg-gray-900 text-gray-100">
        <div className="md:flex-shrink-0 md:w-1/3 md:min-w-[300px] md:h-full flex items-center justify-center p-4 bg-card">
          <img src={event.logo} alt={event.title} className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-0" />
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-card">
          <h2 className="text-3xl font-bold mb-5">3D Printing - Workshop</h2>

          <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
            <h3 className="text-xl mb-2">Description</h3>
            <p className="mb-2">
              Step into the future of technology at our immersive 3D Printing Workshop! Whether you're a tech enthusiast, a creative professional, or just curious about the world of 3D printing, this workshop is designed for you.
            </p>
            <ul className="list-disc list-inside">
              <li>Learn the Basics: Get an overview of 3D printing technology, including how it works and its various applications.</li>
              <li>Hands-On Demonstrations: Watch live demonstrations of different 3D printers and materials in action.</li>
              <li>Interactive Sessions: Engage in interactive activities to understand the design process and how to create your own 3D models.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
            <h3 className="text-xl mb-2">Guidelines</h3>
            <ol className="list-decimal list-inside">
              <li>Each participant is instructed to register through Google Form provided.</li>
              <li>First come first served (Only first 30 members are expected).</li>
              <li>After the workshop, a quiz will be conducted to test your knowledge.</li>
              <li>No team participation is allowed for the quiz, only individual participation.</li>
              <li>Winners will be provided with certificates and cash awards.</li>
              <li>Participation certificates will be provided to all.</li>
            </ol>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-sm mb-5">
            <h3 className="text-xl mb-2">Venue</h3>
            <p>VRR Hall</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl mb-2">Timing</h3>
            <p>10:30 AM</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-sm mt-5">
            <h3 className="text-xl mb-4">Coordinator</h3>
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mb-2">
                  <img src={aadhiImg} alt="Raj Kumar" className="w-full h-full object-cover" />
                </div>
                <p>Raj Kumar</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mb-2">
                  <img src={aadhiImg} alt="Praveen Kumar" className="w-full h-full object-cover" />
                </div>
                <p>Praveen Kumar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails1;
