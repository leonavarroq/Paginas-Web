import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Footer() {
  useEffect(() => {
    if (ScrollReveal) {
      // 4. Footer final: Aparecer desde ABAJO
      ScrollReveal().reveal(".sr-final-footer", {
        origin: "bottom",
        distance: "20px",
        duration: 700,
        delay: 1500, // Comienza después de los bloques de contacto
      });
    }
  }, []);

  return (
    <>
      {/* Footer (sr-final-footer) */}
      <footer className="sr-final-footer w-full bg-gradient-to-br from-indigo-900/80 to-blue-900/80 text-amber-100 p-2 border-blue-900/50">
        <div className="max-w-screen-xl mx-auto text-center text-sm md:text-base">
          <p>&copy; 2025 Funeraria La Nueva Coromoto.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
