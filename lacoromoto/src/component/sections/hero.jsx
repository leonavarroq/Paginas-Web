import React from "react";

function HeroSection(){
    return(
        <section id="inicio" className="w-full py-20 px-4 md:px-8 ">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-12 md:space-y-0">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-200">
                FUNERARIA LA NUEVA COROMOTO
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl">
                Somos Tradicion con Modernismo
              </p>
              <div className='flex'>
              <button className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105 mx-1">Afiliarme</button>
              <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105 mx-1">Sobre Nosotros</button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* Ilustración de un símbolo de infinito o un árbol estilizado con un toque futurista */}
              <div className="w-full max-w-xs h-auto opacity-70 animate-float-hero-icon">
                <img src="./src/assets/logo_coromoto.png" alt="Logo" />
              </div>
            </div>
          </div>
        </section>
    )
}

export default HeroSection