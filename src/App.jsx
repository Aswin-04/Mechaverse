import ParticlesBg from './components/Particles'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import EventDetails1 from './pages/EventDetails/EventDetails1';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/events",
      element: <EventsPage/>,
    },

    {
      path: "/events/:id",
      element: <EventDetails1/>,
    },

    {
      path: "/about",
      element: <AboutUs/>,
    },
    {
      path: "/our-team",
      element: <OurTeam/>,
    },
  ]);

  return (
    <div className="relative h-screen">
      <ParticlesBg />
      <div className='relative z-10'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
