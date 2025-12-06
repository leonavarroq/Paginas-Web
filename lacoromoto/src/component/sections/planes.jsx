import React from "react";
const planesData = [
  {
    title: "Plan Básico",
    price: "5",
    description: "Todo lo que necesitas, nada de lo que no necesitas.",
    features: [],
    isPopular: false,
    colorClass: "bg-blue-700/60 border-gray-600/50",
    textClass: "text-blue-500",
  },
  {
    title: "Plan Cremación",
    price: "12",
    description: "Nuestro plan mas seleccionado por nuestros clientes",
    features: ["Ataud básico para cremación"],
    isPopular: true,
    colorClass: "bg-blue-700/60",
    textClass: "text-blue-500",
  },
  {
    title: "Plan Empresarial",
    price: "10",
    description: "Ideal para equipos y familias extensas. Beneficios premium.",
    features: [],
    isPopular: false,
    colorClass: "bg-blue-700/60 border-gray-600/50",
    textClass: "text-blue-500",
  },
];

const allPlanes = [
  { descripcion: "Ataud básico para velación", colSpan: 1 },
  { descripcion: "Traslado local del difunto", colSpan: 1 },
  { descripcion: "Obituario en Línea", colSpan: 1 },
  { descripcion: "Atención personalizada las 24H", colSpan: 1 },
  { descripcion: "Asesoría de trámites legales", colSpan: 1 },
  {
    descripcion: "Servicio de Velación en Funeraria ó en el Domicilio",
    colSpan: 1,
  },
];

function Planes() {
  return (
    <section id="planes" className="w-dvw pt-10 px-4 md:px-8 bg-transparent">
      <div className="container mx-auto pt-20 px-4">
        <h2 className="text-4xl font-bold text-gray-600 mb-2 text-center">
          Nuestros <span className="font-bold text-blue-800">Planes</span>
        </h2>
        <h5 className="text-xl  text-gray-600 xl:mb-12 text-center italic leading-tight">
          El costo promedio de un servicio funerario puede ser de hasta{" "}
          <span className="text-red-500 font-bold leading-tight">$2,000</span>.
          Con nosotros tienes opciones.
        </h5>

        {/* Contenedor de Tarjetas de Precio */}
        <div className="md:grid md:grid-cols-3 md:w-auto xl:flex xl:items-center md:items-start">
          {/*All Planes*/}
          <div className="bg-white p-8 text-center border h-auto md:col-span-3 rounded-l-4xl">
            <div className="w-full xl:w-100">
              <h1 className="text-xl text-left italic font-semibold text-gray-700 mb-3">
                Todos los planes{" "}
                <span className="font-bold text-blue-800">incluyen</span>
              </h1>

              <div className="text-gray-700 text-left md:grid md:grid-cols-3 md:gap-3 ">
                {allPlanes.map((texto, index) => (
                  <div className={`md:flex md:items-start md:text-sm`}>
                    {/* Icon Phone */}
                    <div className="w-5 xl:h-5 text-green-500 mr-2 flex-shrink-0 xl:mt-1">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    {/* Descripcion */}
                    <div className="text-gray-700">{texto.descripcion}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*Card Planes*/}
          {planesData.map((plan, index) => (
            <div
              key={index}
              // Clases condicionales para destacar el plan popular
              className={`relative rounded-xl py-4 px-8 text-center border-4 h-full flex flex-col transition-all duration-500 hover:shadow-xl md:w-auto
                ${plan.colorClass} 
                ${
                  plan.isPopular
                    ? "text-gray-900 border-blue-800 bg-white shadow-2xl drop-shadow-black/60 drop-shadow-xl scale-105 transform xl:-my-4 z-10 w-1/2"
                    : "text-gray-100 border-transparent w-1/2"
                }
              `}
            >
              {/* Etiqueta de Popular, solo si isPopular es true */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Más Popular
                </div>
              )}

              {/* 2. Encabezado del Plan */}
              <div className="mb-8">
                <h3
                  className={`text-3xl font-extrabold ${
                    plan.isPopular ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.isPopular ? "text-gray-600" : "text-blue-200"
                  }`}
                >
                  A partir de
                </p>
                <div className="mt-0">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.isPopular ? "text-black" : "text-white"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-xl font-medium ${
                      plan.isPopular ? "text-gray-500" : "text-blue-200"
                    }`}
                  >
                    /mes
                  </span>
                  <p
                    className={`mt-2 text-sm ${
                      plan.isPopular ? "text-gray-600" : "text-blue-200"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
              </div>

              <hr className="mb-8 border-blue-500/50" />

              {/* 3. Lista de Características */}
              <ul className="text-left space-y-3 flex-grow mb-10">
                <li className="flex items-start">
                  {/* Ícono de Telefono para todas las características */}
                  <svg
                    className={`w-5 h-5 mr-2 flex-shrink-0 ${
                      plan.isPopular ? "text-green-500" : "text-blue-300"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Path de un teléfono estilo 'handset' */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"
                    />
                  </svg>
                  Llamanos para concertar una cita
                </li>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start italic ${
                      plan.isPopular ? "text-gray-700" : "text-gray-200"
                    }`}
                  >
                    {/* Ícono de Check para todas las características */}
                    <svg
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        plan.isPopular ? "text-green-500" : "text-blue-300"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 4. Botón de Afiliación */}
              <div className="mt-auto xl:pt-6">
                <button
                  className={`w-full py-3 font-semibold rounded-lg transition duration-300 transform hover:scale-[1.02] 
                    ${
                      plan.isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                        : "bg-transparent text-blue-300 border border-blue-300 hover:bg-blue-300 hover:text-blue-900"
                    }`}
                >
                  Afiliarme
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;
