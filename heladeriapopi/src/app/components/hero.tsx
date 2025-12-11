import React from "react";
export const HeroSection = () => {


    return(<>
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden backdrop-blur-xs">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-20 text-center  px-1">
                {/* Titulo Principal */}
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-6 text-stroke-red">
                        La Explosion del Sabor que <br className="hidden sm:inline" />Siempre Recuerdas
                    </h1>
                    {/* Boton CTA */}
                    <a href="#menu" className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-[#ffff00] text-red-600 hover:bg-yellow-400 transition duration-300 shadow-xl transform hover:scale-105">Explora el Menu</a>
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                    {/* Componente Image superpuesto */}
                    <div className="mx-auto max-w-md mb-8">
                    <img src="/images/helado_cono.png" alt="Delicioso cono de helado Popis!" className="w-full md:w-3/4 lg:w-1/2 h-auto object-contain absolute top-1/6" />
                    </div>
            </div>
        </section>
    </>)
}

export default HeroSection