import { NavLink } from "react-router-dom";
import { Logo3, Logo, menu, close } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full padding-x py-2 fixed top-0 left-0 z-50 backdrop-blur-lg bg-[#020809]/50 border-b-[1px] border-white/30">
      <nav className="max-container flex">
        <NavLink to="/" className="flex items-center mr-auto">
          <img
            src={Logo3}
            alt="logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </NavLink>

        <ul className="flex justify-center items-center gap-16 max-lg:hidden text-lg font-montserrat font-medium">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `p-2 border-b-2 transition-colors duration-500 ease-in-out ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex  flex-1 justify-end items-center">
          <img
            src={isSidebarOpen ? close : menu}
            alt="menu"
            className={`w-[30px] h-[30px] object-contain cursor-pointer transition-transform duration-500 ease-in-out transform ${
              isSidebarOpen ? "rotate-90 scale-100" : "rotate-0 scale-100"
            }`}
            onClick={() => setSidebarOpen((perv) => !perv)}
          />
        </div>

        <div
          className={`${
            isSidebarOpen ? " translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }  flex absolute h-screen top-[6.7rem] right-0  w-full  pb-20  bg-black/90 backdrop-blur-sm lg:hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col justify-center items-center gap-16 text-xl font-montserrat font-medium m-auto ">
            {navLinks.map((item) => (
              <li key={item.label} className="hover:text-white">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-primary border-b-2 p-2 border-primary"
                        : "text-gray-400"
                    } hover:text-white`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
