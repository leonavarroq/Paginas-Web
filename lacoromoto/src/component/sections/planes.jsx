import React from "react";

function Planes() {
  return (
    <section id="planes">
      <div className="w-full py-20 px-4">
        <h2 className="text-4xl font-bold text-blue-300 mb-2 text-center">
          Elige tu Plan Ideal
        </h2>
        <h5 className="text-xl font-bold text-blue-300 mb-12 text-center">
          Compara opciones y asegura tranquilidad hoy.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Plan Basico*/}
          <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50">
            <div className="grid grid-cols-2">
              <div className="text-left">
                <h3 className="text-4xl font-semibold text-blue-200 mb-3">
                  Plan Basico
                </h3>
              </div>
              <div className="text-left mx-5 px-5">
                <h3 className="">Desde</h3>
                <p className="text-gray-400 text-4xl">5$/mes</p>
              </div>
            </div>
            <p className="text-gray-400 text-md">
              Cobertura esencial, servicio confiable y accesible.
            </p>

            <hr className="mt-8 mb-2" />

            <div className="grid grid-cols-2">
              <div className="text-white text-left">
                <ul>
                  <li>Traslado local incluido</li>
                  <li>Atención 24/7</li>
                  <li>Sala de velación estándar</li>
                  <li>Asesoría personalizada</li>
                </ul>
              </div>
              <div className="text-white text-left">
                <ul>
                  <li>Gestión de trámites</li>
                  <li>Cofre básico </li>
                  <li>Ceremonia sencilla</li>
                  <li>Atención familiar</li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <button className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg float-start transform hover:scale-105 transition duration-300">
                Afiliarme
              </button>
            </div>
          </div>
          {/* Plan Empresarial*/}
          <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50">
            <div className="grid grid-cols-2">
              <div className="text-left">
                <h3 className="text-4xl font-semibold text-blue-200 mb-3">
                  Plan Empresarial
                </h3>
              </div>
              <div className="text-left mx-5 px-5">
                <h3 className="">Desde</h3>
                <p className="text-gray-400 text-4xl">10$/mes</p>
              </div>
            </div>
            <p className="text-gray-400 text-md">
              Cobertura esencial, servicio confiable y accesible.
            </p>

            <hr className="mt-8 mb-2" />

            <div className="grid grid-cols-2">
              <div className="text-white text-left">
                <ul>
                  <li>Traslado local incluido</li>
                  <li>Atención 24/7</li>
                  <li>Sala de velación estándar</li>
                  <li>Asesoría personalizada</li>
                </ul>
              </div>
              <div className="text-white text-left">
                <ul>
                  <li>Gestión de trámites</li>
                  <li>Cofre básico </li>
                  <li>Ceremonia sencilla</li>
                  <li>Atención familiar</li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <button className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg float-start transform hover:scale-105 transition duration-300">
                Afiliarme
              </button>
            </div>
          </div>
          {/* Plan Basico*/}
          <div className="bg-gray-700/60 rounded-xl shadow-md p-8 text-center border border-gray-600/50">
            <div className="grid grid-cols-2">
              <div className="text-left">
                <h3 className="text-4xl font-semibold text-blue-200 mb-3">
                  Plan Cremacion
                </h3>
              </div>
              <div className="text-left mx-5 px-5">
                <h3 className="">Desde</h3>
                <p className="text-gray-400 text-4xl">12$/mes</p>
              </div>
            </div>
            <p className="text-gray-400 text-md">
              Cobertura esencial, servicio confiable y accesible.
            </p>

            <hr className="mt-8 mb-2" />

            <div className="grid grid-cols-2">
              <div className="text-white text-left">
                <ul>
                  <li>Traslado local incluido</li>
                  <li>Atención 24/7</li>
                  <li>Sala de velación estándar</li>
                  <li>Asesoría personalizada</li>
                </ul>
              </div>
              <div className="text-white text-left">
                <ul>
                  <li>Gestión de trámites</li>
                  <li>Cofre básico </li>
                  <li>Ceremonia sencilla</li>
                  <li>Atención familiar</li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <button className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg float-start transform hover:scale-105 transition duration-300">
                Afiliarme
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;
