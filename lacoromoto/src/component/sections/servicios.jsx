import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

// Componente auxiliar para dividir el título en palabras animables (Sin cambios)
const AnimatedTitleServicios = () => {
  const parts = [
    { text: "No hay una manera correcta, ", classes: "text-blue-100" },
    { text: "solo tu manera", classes: "font-bold text-blue-600" },
  ];

  return (
    <h1 className="text-7xl font-semibold leading-tight">
      {parts.map((part, partIndex) =>
        part.text
          .split(/(\s+)/)
          .filter((w) => w.length > 0)
          .map((word, index) => {
            if (word.match(/\s/)) {
              return <span key={`${partIndex}-${index}`}>{word}</span>;
            }
            return (
              <span
                key={`${partIndex}-${index}`}
                className={`sr-servicios-word inline-block ${part.classes}`}
              >
                {word}
              </span>
            );
          })
      )}
    </h1>
  );
};

function Servicios({ setGlobalBackgroundClass }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Lógica del IntersectionObserver (sin cambios)
    const backgroundObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (setGlobalBackgroundClass) {
            setGlobalBackgroundClass(
              "bg-gradient-to-br from-white to-blue-800"
            );
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      backgroundObserver.observe(sectionRef.current);
    }

    // 1. LÓGICA DE SCROLLREVEAL ACTUALIZADA
    if (ScrollReveal) {
      // Título principal: Palabra por palabra desde ABAJO (Sin cambios)
      ScrollReveal().reveal(".sr-servicios-word", {
        origin: "bottom",
        distance: "40px",
        duration: 800,
        delay: 50,
        interval: 60,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      });

      // Contenedor Card: Aparece primero (animación base)
      ScrollReveal().reveal(".sr-servicios-card", {
        origin: "bottom",
        distance: "80px",
        duration: 1200,
        delay: 800,
        opacity: 0,
      });

      // Contenido secuencial dentro del Card: Aparece progresivamente desde ABAJO
      // Usaremos una clase genérica '.sr-card-content' en los elementos internos
      ScrollReveal().reveal(".sr-card-content", {
        origin: "bottom",
        distance: "30px",
        duration: 800,
        delay: 1400, // Comienza después de que el card haya entrado
        interval: 200, // Retraso entre H2, P, y UL
      });

      // Opcional: Si quieres animar cada <li> de forma secuencial, mantenemos la clase específica
      ScrollReveal().reveal(".sr-list-item", {
        origin: "bottom",
        distance: "10px",
        duration: 600,
        delay: 2000, // Comienza después del Párrafo principal
        interval: 100, // Animación secuencial de cada punto
      });
    }

    return () => {
      if (sectionRef.current) {
        backgroundObserver.unobserve(sectionRef.current);
      }
    };
  }, [setGlobalBackgroundClass]);

  return (
    <>
      <section
        id="servicios"
        ref={sectionRef}
        className="w-dvw pt-10 px-4 md:px-8 bg-transparent"
      >
        <div className="w-dvw h-dvh flex align-middle text-center items-center justify-center">
          {/* Encabezado */}
          <div className="max-w-5xl">
            <div className="px-20 mx-20 text-center mb-12">
              <AnimatedTitleServicios />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contenedor Card */}
          <div className="sr-servicios-card bg-white rounded-xl shadow-xl h-full overflow-hidden flex flex-col">
            <div className="flex flex-col md:flex-row flex-grow">
              <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4 flex flex-col justify-start bg-white">
                {/* H2 - Elemento 1 (sr-card-content) */}
                <h2 className="sr-card-content md:text-4xl 2xl:text-7xl font-bold text-gray-800 leading-tight px-4">
                  Vale la pena{" "}
                  <span className="text-blue-500">
                    planificar con antelación
                  </span>
                </h2>

                {/* Párrafo - Elemento 2 (sr-card-content) */}
                <p className="sr-card-content text-gray-900 px-4 xl:text-xl text-justify">
                  Planifique sus propios arreglos finales en línea en minutos,
                  brindándole a usted y a sus seres queridos tranquilidad en sus
                  momentos finales.
                </p>

                {/* Lista UL - Elemento 3 (sr-card-content, si no se usa item por item) */}
                <ul className="space-y-2 text-justify px-4">
                  {/* Si quieres que cada LI aparezca secuencialmente, NO uses sr-card-content aquí */}
                  <li className="sr-list-item flex items-start text-gray-700">
                    {/* SVG OMITIDO */} Organiza todo en línea en minutos y
                    continua con tu vida.
                  </li>
                  <li className="sr-list-item flex items-start text-gray-700">
                    {/* SVG OMITIDO */} Fije sus planes para asegurarse de que
                    se cumplan sus deseos finales
                  </li>
                  <li className="sr-list-item flex items-start text-gray-700">
                    {/* SVG OMITIDO */} Proteja a sus seres queridos de costos
                    funerarios inesperados
                  </li>
                  <li className="sr-list-item flex items-start text-gray-700">
                    {/* SVG OMITIDO */} Tu plan, a tu manera. Planes de pago
                    flexibles que se adaptan a tus necesidades.
                  </li>
                </ul>
              </div>
              <div
                className="w-full h-48 md:h-auto md:w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: `url('./src/assets/familia2.jpg')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;
