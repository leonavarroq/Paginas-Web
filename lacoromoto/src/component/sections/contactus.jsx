import React, { useEffect, useState } from "react";
// Importa ScrollReveal. Si lo instalaste con npm/yarn, puedes importarlo así:
import ScrollReveal from "scrollreveal";

// 1. Componente auxiliar para dividir y envolver las palabras
const AnimatedTitleScrollReveal = () => {
  // Definimos las partes del título para mantener los estilos de Tailwind
  const parts = [
    { text: "Estamos aqui para guiar, ", classes: "text-blue-100" },
    { text: "no para dirigir", classes: "font-bold text-blue-600" },
  ];

  return (
    <h1 className="text-7xl text-center font-semibold leading-tight overflow-hidden">
      {/* Mapeamos y dividimos cada parte del texto */}
      {parts.map((part, partIndex) =>
        // Dividimos la cadena por palabras y filtramos los vacíos
        part.text
          .split(/(\s+)/)
          .filter((w) => w.length > 0)
          .map((word, index) => {
            // Si es un espacio, lo devolvemos sin animación
            if (word.match(/\s/)) {
              return <span key={`${partIndex}-${index}`}>{word}</span>;
            }

            // Cada palabra real se envuelve en un span
            return (
              <span
                key={`${partIndex}-${index}`}
                // Clase de destino para ScrollReveal y estilo Tailwind
                className={`sr-word-reveal inline-block ${part.classes}`}
              >
                {word}
              </span>
            );
          })
      )}
    </h1>
  );
};

// 2. Función principal del componente
function ContactUs() {
  // 3. Inicialización de ScrollReveal con useEffect
  useEffect(() => {
    // Comprueba si ScrollReveal está cargado
    if (ScrollReveal) {
      const config = {
        origin: "bottom",
        distance: "40px",
        duration: 800,
        delay: 50,
        interval: 80, // ⭐ El retardo progresivo entre cada palabra
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      };

      // Aplicar la configuración al selector de palabras para el efecto "poco a poco"
      ScrollReveal().reveal(".sr-word-reveal", config);

      // Opcional: Animar el botón después de que el título termine
      ScrollReveal().reveal(".contact-button", {
        ...config,
        delay: 800,
        interval: 0,
      });
    }
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

  return (
    <>
      <section
        id="contact-us"
        className="w-dvw h-dvh flex justify-center items-center align-middle py-40 px-4 md:px-8 bg-transparent"
      >
        <div className="max-w-4xl">
          {/* Usamos el componente animado en lugar del h1 original */}
          <AnimatedTitleScrollReveal />

          <div className="m-auto xl:pt-20 text-center">
            <button
              // Añadimos una clase para animar este botón
              className={`contact-button px-3 py-3 font-semibold rounded-lg transition duration-300 transform hover:scale-[1.02] bg-blue-600 text-white hover:bg-blue-700 shadow-md`}
            >
              Estamos para ayudarte 24/7
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
