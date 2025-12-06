import React, { useState, useEffect } from "react";

const DynamicBackground = ({ children }) => {
  // Estado para guardar la posición del scroll (un valor entre 0 y 1)
  const [scrollFraction, setScrollFraction] = useState(0);
  let ticking = false;

  const colorBlue = "rgb(30, 64, 175)";
  const colorWhite = "rgb(255, 255, 255)";
  // Define la altura total del patrón de degradado.
  // Es la altura del documento menos la altura visible.
  const gradientHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrolled = scrollY / (documentHeight - windowHeight);

    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Recalculamos dentro de rAF
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        const scrolled = scrollY / (documentHeight - windowHeight);
        setScrollFraction(Math.min(1, Math.max(0, scrolled)));

        ticking = false;
      });
      ticking = true;
    }
  };

  useEffect(() => {
    // Escucha el scroll para actualizar la posición
    window.addEventListener("scroll", handleScroll);

    // Ejecuta handleScroll al inicio para establecer la posición inicial
    handleScroll();

    // Limpia el listener y permite recalcular si el tamaño cambia
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // 3. Estilo Dinámico: Usamos el porcentaje de scroll para manipular el fondo
  const dynamicStyle = {
    // Definimos el degradado. Nota: El tamaño de la imagen es clave.
    // Creamos un degradado que va del azul al blanco y de vuelta al azul/blanco,
    // para crear el patrón repetitivo que solicitas.
    backgroundImage: `linear-gradient(to bottom, 
      ${colorBlue} 0%, 
      ${colorWhite} 25%, 
      ${colorBlue} 50%, 
      ${colorWhite} 75%, 
      ${colorBlue} 100%
    )`,

    // El tamaño del fondo debe ser MUCHO más grande que la ventana para cubrir todo el scroll.
    // Usaremos un tamaño fijo (ej. 5 veces la altura total del documento) para garantizar que el degradado continúe.
    backgroundSize: `100% ${document.documentElement.scrollHeight * 2}px`,

    // Movemos el fondo en dirección opuesta al scroll (con signo negativo)
    // Multiplicamos la fracción de scroll por la altura total del documento.
    backgroundPositionY: `-${scrollFraction * gradientHeight}px`,

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  // Nota: La clase 'min-h-screen' no es necesaria si cubrimos todo el 'body' o el contenedor principal.
  return (
    <div
      style={dynamicStyle}
      className="w-full min-h-screen transition-all duration-300 ease-out"
    >
      {/* Todo el contenido de tu aplicación irá aquí */}
      {children}
    </div>
  );
};

export default DynamicBackground;
