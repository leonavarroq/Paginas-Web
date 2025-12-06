import React from "react";
import useScrollDirection from "../../utils/useScrollDirection";

const NavItems = [
  {
    title: "",
    url: "#",
    isButton: false,
  },
  {
    title: "Inicio",
    url: "#inicio",
    isButton: false,
  },
  {
    title: "Servicios",
    url: "#servicios",
    isButton: false,
  },
  {
    title: "Planes",
    url: "#planes",
    isButton: false,
  },
  {
    title: "Contacto",
    url: "#contacto",
    isButton: false,
  },
  {
    title: "Area de Clientes",
    url: "#",
    isButton: true,
  },
];

function Navbar() {
  const scrollDirection = useScrollDirection({ threshold: 50 });
  const navbarClass =
    scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";
  return (
    <nav
      className={`w-dvw bg-blue-800/50 backdrop-blur shadow-lg p-4 md:px-8 rounded-b fixed top-0 left-0 z-20 
                  transform transition-transform duration-300 ease-in-out ${navbarClass}`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {NavItems.map((item, index) => (
          <div key={index}>
            <a
              href={item.url}
              className={`${
                item.isButton
                  ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105"
                  : "text-gray-300 hover:text-blue-200 font-medium rounded-md px-3 py-1 transition duration-300"
              }`}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
