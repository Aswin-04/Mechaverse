import React from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import ParticlesBg from "./components/Particles";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import FAQs from "./pages/FAQs";
import { eventDetailRoutes } from "./pages/EventDetails";

// Root Layout Component
function RootLayout({ children }) {
  return (
    <div className="relative h-screen">
      <ScrollRestoration />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Define the routes
const routes = [
  {
    path: "/",
    element: (
      <RootLayout>
        <HomePage />
      </RootLayout>
    ),
  },
  {
    path: "/events",
    element: (
      <RootLayout>
        <EventsPage />
      </RootLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <RootLayout>
        <AboutUs />
      </RootLayout>
    ),
  },
  {
    path: "/our-team",
    element: (
      <RootLayout>
        <OurTeam />
      </RootLayout>
    ),
  },
  {
    path: "/faqs",
    element: (
      <RootLayout>
        <FAQs />
      </RootLayout>
    ),
  },
];

// Add event detail routes
Object.keys(eventDetailRoutes).forEach((id) => {
  routes.push({
    path: `/events/${id}`,
    element: (
      <RootLayout>
        {React.createElement(eventDetailRoutes[id])}
      </RootLayout>
    ),
  });
});

// Create the router
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ParticlesBg />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
