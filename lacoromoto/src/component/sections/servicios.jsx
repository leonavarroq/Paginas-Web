import React from "react";

function Servicios() {
  return (
    <section
      id="servicios"
      className="w-full my-20 py-20 px-4 md:px-8 bg-gray-800/70 backdrop-blur-sm shadow-2xl rounded-3xl mt-12 max-w-screen-xl mx-auto border border-gray-700/50"
    >
      <h2 className="text-4xl font-bold text-blue-300 mb-12 text-center">
        Nuestros Servicios Principales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Servicio 1 */}
        <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50 transform hover:scale-105 transition duration-300">
          <div className="text-blue-400 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M22 17H2L12 3Z"></path>
              <path d="M12 22L22 17"></path>
              <path d="M2 17L12 22"></path>
              <path d="M12 17L22 12"></path>
              <path d="M2 12L12 17"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-200 mb-3">
            Planificación Integral
          </h3>
          <p className="text-gray-400 text-lg">
            Asesoría completa y personalizada para cada detalle del servicio,
            desde el inicio hasta el final.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50 transform hover:scale-105 transition duration-300">
          <div className="text-green-400 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-200 mb-3">
            Documentación y Trámites
          </h3>
          <p className="text-gray-400 text-lg">
            Gestión eficiente de toda la documentación legal y administrativa
            requerida.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50 transform hover:scale-105 transition duration-300">
          <div className="text-purple-400 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M6 9H2V15H6L10 18V6L6 9Z"></path>
              <path d="M17 12H22"></path>
              <path d="M19 9V15"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-blue-200 mb-3">
            Soporte Emocional
          </h3>
          <p className="text-gray-400 text-lg">
            Acompañamiento y orientación profesional para la familia en cada
            etapa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
