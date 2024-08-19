import ParticlesBg from "./components/Particles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";

import { eventDetailRoutes } from "./pages/EventDetails";
import React from "react";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/events",
    element: <EventsPage />,
  },

  {
    path: "/about",
    element: <AboutUs />,
  },

  {
    path: "/our-team",
    element: <OurTeam />,
  },
];

Object.keys(eventDetailRoutes).forEach((id) => {
  routes.push({
    path: `/events/${id}`,
    element: React.createElement(eventDetailRoutes[id]),
  });
});

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="relative h-screen">
      <ParticlesBg />
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
