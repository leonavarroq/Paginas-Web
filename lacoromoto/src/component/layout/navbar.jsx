import React from "react";

function Navbar() {
  return (
    <nav className="w-full backdrop-blur shadow-lg p-4 md:px-8 rounded-b fixed top-0 left-0 z-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <a
          href="#"
          className="text-3xl font-extrabold text-blue-300 rounded-md p-2 hover:bg-blue-900/30 transition duration-300"
        ></a>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <a
            href="#inicio"
            className="text-gray-300 hover:text-blue-200 font-medium rounded-md px-3 py-1 transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-gray-300 hover:text-blue-200 font-medium rounded-md px-3 py-1 transition duration-300"
          >
            Servicios
          </a>
          <a
            href="#planes"
            className="text-gray-300 hover:text-blue-200 font-medium rounded-md px-3 py-1 transition duration-300"
          >
            Planes
          </a>
          <a
            href="#contacto"
            className="text-gray-300 hover:text-blue-200 font-medium rounded-md px-3 py-1 transition duration-300"
          >
            Contacto
          </a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105">
          Área de Clientes
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
