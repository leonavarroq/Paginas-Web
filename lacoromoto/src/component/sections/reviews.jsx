import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

// Componente principal de Reseñas
function Reviews() {
  const [googleProfileUrl] = useState(
    "https://maps.app.goo.gl/qziGt9zyWy8nZyT37"
  );

  const widgetRef = useRef(null);
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  // 1. LÓGICA DE SCROLLREVEAL
  useEffect(() => {
    if (ScrollReveal) {
      // 1. Título principal (H1) - Aparecer desde ABAJO
      ScrollReveal().reveal(".sr-review-title", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 100,
      });

      // 2. Widget de Reseñas (Contenedor) - Aparecer desde ABAJO
      // Nota: Apuntamos al contenedor (TrustIndexContainer)
      ScrollReveal().reveal(".sr-widget-bottom", {
        origin: "bottom",
        distance: "50px",
        duration: 1200,
        delay: 500, // Retardo para que aparezca después del título
      });

      // 3. Enlace de Google - Aparecer desde ABAJO
      ScrollReveal().reveal(".sr-google-link", {
        origin: "bottom",
        distance: "20px",
        duration: 800,
        delay: 1000, // Retardo para que aparezca después del widget
      });
    }
  }, []); // ScrollReveal se inicializa una vez al montar

  // 2. LÓGICA EXISTENTE PARA INYECCIÓN Y MOVIMIENTO DEL WIDGET TRUSTINDEX
  useEffect(() => {
    const scriptUrl =
      "https://cdn.trustindex.io/loader.js?39edf3b59a1b70118236a7e306c";
    const widgetPid = "39edf3b59a1b70118236a7e306c";

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }

    const moveWidget = () => {
      if (!widgetRef.current) return;

      const globalWidget = document.querySelector(
        `.ti-widget[data-pid="${widgetPid}"]`
      );

      if (globalWidget) {
        if (globalWidget.parentElement === widgetRef.current) {
          if (!isWidgetLoaded) {
            setIsWidgetLoaded(true);
          }
          return;
        }

        // ¡Movimiento!
        widgetRef.current.appendChild(globalWidget);
        setIsWidgetLoaded(true);
        console.log("TrustIndex widget movido a la ubicación correcta.");
      }
    };

    const observer = new MutationObserver((mutationsList, observer) => {
      moveWidget();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    moveWidget();

    return () => {
      observer.disconnect();

      if (!existingScript) {
        const script = document.querySelector(`script[src="${scriptUrl}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      }

      if (widgetRef.current) {
        const insertedWidget = widgetRef.current.querySelector(
          `.ti-widget[data-pid="${widgetPid}"]`
        );
        if (insertedWidget) {
          insertedWidget.remove();
        }
      }
    };
  }, [isWidgetLoaded]);

  // 3. CONTENIDO DEL WIDGET (EL CONTENEDOR ESPECÍFICO)
  const TrustIndexContainer = (
    <div
      ref={widgetRef}
      // AÑADIMOS la clase de ScrollReveal aquí
      className="sr-widget-bottom w-full mx-auto my-8  text-center "
    >
      {!isWidgetLoaded && (
        <div className="text-gray-500 text-sm p-4">Cargando reseñas...</div>
      )}
    </div>
  );

  return (
    <section
      id="reviews"
      className="w-dvw pt-10 px-4 md:px-8 bg-white h-dvh justify-center align-middle items-center flex flex-col"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          {/* Título (Aparecer desde ABAJO) */}
          <h1 className="sr-review-title text-4xl font-extrabold text-gray-900 mb-2">
            El Sentimiento Es Mutuo
          </h1>
          <p className="sr-review-title text-xl text-gray-600 mb-6 italic">
            Descubra por qué las familias aman y confían en nosotros para
            servicios funerarios y planes prepagados.
          </p>
        </div>

        {/* Contenido de las Reseñas */}
        {TrustIndexContainer}

        {/* Enlace de Google (Aparecer desde ABAJO) */}
        <div className="mt-1 text-center">
          <a
            href={googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            // AÑADIMOS la clase de ScrollReveal aquí
            className="sr-google-link inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            aria-label="Ver todas las reseñas en Google"
          >
            Ver más reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
