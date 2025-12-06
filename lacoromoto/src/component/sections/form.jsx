import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const datos = [
  {
    titulo: "Teléfono",
    // 💡 TIPO 1: Array de strings (para múltiples líneas/ítems)
    descripcion: ["+58 (251) 233-5417", "+58 (412) 850-8821"],
  },
  {
    titulo: "Email",
    // 💡 TIPO 2: String simple
    descripcion: "funerariacoromoto@gmail.com",
  },
  {
    titulo: "Dirección:",
    // 💡 TIPO 2: String simple
    descripcion: "Av. Venezuela esq. Calle 23, Barquisimeto, Lara.",
  },
];

function FormContacto() {
  useEffect(() => {
    if (ScrollReveal) {
      // 1. Título principal: Aparecer desde ABAJO
      ScrollReveal().reveal(".sr-footer-heading", {
        origin: "bottom",
        distance: "50px",
        duration: 900,
        delay: 100,
      });

      // 2. Descripción/Slogan: Aparecer desde ABAJO
      ScrollReveal().reveal(".sr-footer-slogan", {
        origin: "bottom",
        distance: "40px",
        duration: 800,
        delay: 400, // Comienza después del título
      });

      // 3. Bloques de Contacto: Aparecer desde ABAJO secuencialmente
      // NOTA: Usamos un intervalo (interval) para que cada bloque aparezca uno tras otro.
      ScrollReveal().reveal(".sr-contact-item", {
        origin: "bottom",
        distance: "40px",
        duration: 900,
        delay: 800, // Comienza después del slogan
        interval: 200, // Retraso entre la aparición de cada bloque de datos
      });

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
      <section
        id="contacto"
        className="w-dvw h-dvh py-10 px-4 md:px-8 bg-transparent text-white flex flex-col align-middle justify-center items-center"
      >
        <div className="max-w-5xl">
          <div className="text-center mb-12">
            {/* Título (sr-footer-heading) */}
            <h2 className="sr-footer-heading text-7xl font-bold text-blue-200 ">
              Contáctanos
            </h2>
          </div>

          <div className="mx-auto  text-center md:text-left mb-12">
            {/* Descripción (sr-footer-slogan) */}
            <span className="sr-footer-slogan text-2xl">
              Estamos disponibles 24/7 para brindarte el apoyo y la asesoría que
              necesitas en los momentos más difíciles.
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between w-full ">
            {/* Iteramos sobre los datos de contacto */}
            {datos.map((item, index) => (
              <div
                key={index}
                // Bloque de Contacto (sr-contact-item)
                className="sr-contact-item text-center md:text-left my-4 md:my-0"
              >
                <p className="text-blue-300 font-semibold text-2xl mb-1">
                  {item.titulo}
                </p>

                {/* LÓGICA DE VISUALIZACIÓN (sin cambios) */}
                {Array.isArray(item.descripcion) ? (
                  <div className="font-bold text-white/80 text-xl space-y-1">
                    {item.descripcion.map((sub, subIndex) => (
                      <span key={subIndex} className="block">
                        {sub}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="font-bold text-white/80 text-xl block">
                    {item.descripcion}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FormContacto;
