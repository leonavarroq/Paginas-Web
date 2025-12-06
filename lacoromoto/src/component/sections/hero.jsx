import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function HeroSection({ onAffiliateClick }) {
  // Hook para inicializar todas las animaciones de ScrollReveal
  useEffect(() => {
    if (ScrollReveal) {
      // 1. Título principal (H1) - Aparecer desde la IZQUIERDA
      ScrollReveal().reveal(".sr-title-left", {
        origin: "left",
        distance: "100px",
        duration: 1000,
        delay: 200, // Comienza primero
      });

      // 2. Slogan (P) - Aparecer desde el FONDO (Zoom in)
      ScrollReveal().reveal(".sr-slogan-zoom", {
        scale: 0.85, // Escala inicial más pequeña
        opacity: 0,
        duration: 1200,
        delay: 500, // Comienza después del título
      });

      // 3. Botones - Aparecer desde ABAJO con intervalo
      ScrollReveal().reveal(".sr-button-bottom", {
        origin: "bottom",
        distance: "40px",
        duration: 800,
        delay: 1000, // Comienza después del slogan
        interval: 150, // Pequeño retraso entre los dos botones
      });

      // 4. Logo (Imagen) - Aparecer desde la DERECHA
      ScrollReveal().reveal(".sr-logo-right", {
        origin: "right",
        distance: "100px",
        duration: 1000,
        delay: 400, // Comienza mientras el título está animándose
      });
    }
  }, []);

  return (
    <>
      <section
        id="inicio"
        className="w-dvw h-dvh pt-10 px-4 md:px-8 bg-transparent"
      >
        <div className="h-dvh flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-12 md:space-y-0">
          {/* TITULO Y BOTONES */}
          <div className="md:w-1/2 2xl:w-auto text-center md:text-left">
            {/* H1 - Título principal (Aparecer desde la IZQUIERDA) */}
            <h1 className="sr-title-left text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-200 drop-shadow-md drop-shadow-blue-400/50">
              FUNERARIA
              <br />
              LA NUEVA COROMOTO
            </h1>

            {/* P - Slogan (Aparecer desde el FONDO / Zoom in) */}
            <p className="sr-slogan-zoom text-xl md:text-2xl opacity-90 mb-8 max-w-2xl uppercase leading-tight font-extrabold text-shadow-black drop-shadow-md drop-shadow-black/30 ">
              ¡Somos Tradicion con Modernismo!
            </p>

            {/* BOTONES (Aparecer desde ABAJO con intervalo) */}
            <div className="flex">
              {/* Ambos botones usan la misma clase para aplicar el 'interval' */}
              <button
                className="sr-button-bottom bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105 mx-1"
                onClick={onAffiliateClick}
              >
                Afiliarme
              </button>
              <button className="sr-button-bottom bg-white hover:bg-gray-300 text-black font-semibold py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105 mx-1">
                Sobre Nosotros
              </button>
            </div>
          </div>

          {/* LOGO */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-xs h-auto ">
              <img
                // IMAGEN - Logo (Aparecer desde la DERECHA)
                className="sr-logo-right filter drop-shadow-black/20 drop-shadow-xl transition duration-500 hover:drop-shadow-2xl saturate-105 contrast-125 brightness-90"
                src="./src/assets/logo_coromoto.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
