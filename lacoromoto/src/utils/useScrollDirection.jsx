// useScrollDirection.js
import { useState, useEffect } from "react";

const useScrollDirection = ({
  initialDirection = "up",
  threshold = 20,
} = {}) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Función de manejo del scroll con throttling (para mejor rendimiento)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Si no nos hemos movido lo suficiente, no hacemos nada (threshold)
      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
      }

      // 2. Determinamos la dirección y actualizamos el estado
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Moviéndose hacia abajo
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        // Moviéndose hacia arriba
        setScrollDirection("up");
      }

      // 3. Actualizamos la posición Y para la próxima comparación
      setLastScrollY(currentScrollY > 0 ? currentScrollY : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Limpieza (Senior pattern)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, threshold]); // Dependencias para la posición anterior

  return scrollDirection;
};

export default useScrollDirection;
