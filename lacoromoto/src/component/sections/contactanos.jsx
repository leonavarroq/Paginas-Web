import React from "react";

function Contactanos() {
  return (
    <section
      id="contacto"
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 text-white shadow-2xl border-blue-900/50"
    >
      <h2 className="text-4xl font-bold text-blue-200 mb-12 text-center">
        Contáctanos
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-lg md:text-xl">
            Estamos disponibles 24/7 para brindarte el apoyo y la asesoría que
            necesitas en los momentos más difíciles.
          </p>
          <p className="text-lg">
            <strong className="text-blue-300">Teléfono:</strong> +58 (251)
            233-5417
          </p>
          <p className="text-lg">
            <strong className="text-blue-300">Email:</strong>{" "}
            funerariacoromoto@gmail.com
          </p>
          <p className="text-lg">
            <strong className="text-blue-300">Dirección:</strong> Av. Venezuela
            esq. Calle 23, Barquisimeto, Lara.
          </p>
        </div>
        <div className="md:w-1/2">
          {/* Placeholder para un formulario de contacto o mapa */}
          <div className="bg-gray-700/60 rounded-xl p-8 shadow-inner border border-gray-600/50 text-gray-400">
            <p className="text-center text-xl">
              Formulario de Contacto (Próximamente)
            </p>
            <div className="h-48 w-full bg-gray-800/50 rounded-lg mt-4 flex items-center justify-center">
              <span className="text-sm">Mapa o Formulario aquí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactanos;
