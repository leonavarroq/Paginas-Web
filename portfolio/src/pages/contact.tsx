import React, { useState } from "react";
import Alert from "../component/alert";
import { ScrollRevealEffect } from "../efectos/ScrollReveal";
import { ToastEffect } from "../component/toast";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      nombre: formData.nombre.trim(),
      email: formData.email.trim(),
      mensaje: formData.mensaje.trim(),
    };
    try {
    } catch (error) {}
  };

  return (
    <>
      <section id="contact" className="pt-20 pb-20 px-4 md:px-8 bg-black">
        <ScrollRevealEffect index={0}>
          <div className="grid grid-cols-auto lg:grid-cols-2 gap-20 2xl:mx-[20%]">
            <div className="container" id="form-1">
              <form
                onSubmit={handleSubmit}
                className="w-full bg-white shadow-xl shadow-gray-200 border-2 border-gray-100 rounded px-8 pt-6 pb-8 mb-4"
              >
                <h2 className="text-4xl font-bold text-gray-700 mb-5">Formulario 1</h2>

                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                    type="text"
                    value={formData.nombre}
                    name="nombre"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Correo Electronico
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                    className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    cols={3}
                    rows={3}
                    onChange={handleChange}
                    required
                    className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="text-black border border-blue-500 mx-1 py-2 px-4 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
                >
                  Enviar
                </button>

                <button
                  type="button"
                  onClick={() => {
                    (formData.nombre = ""), (formData.email = ""), (formData.mensaje = "");
                  }}
                  className="text-black border border-red-500 mx-3 py-2 px-4 rounded cursor-pointer hover:bg-red-500 hover:text-white"
                >
                  Borrar
                </button>
              </form>
            </div>
            <div className="container" id="form-2">
              <form
                onSubmit={handleSubmit}
                className="w-full bg-white shadow-2xl shadow-gray-200 border-2 border-gray-100 rounded px-8 pt-6 pb-8 mb-4"
              >
                <h2 className="text-4xl font-bold text-gray-700 mb-5">Formulario 2</h2>

                <div className="mb-4">
                  <input
                    placeholder="Nombre"
                    className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                    type="text"
                    value={formData.nombre}
                    name="nombre"
                    onChange={handleChange}
                    required
                  />
                  <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>
                </div>

                <div className="mb-4">
                  <input
                    placeholder="Correo Electronico"
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                    className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                  />
                  <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    cols={3}
                    rows={3}
                    onChange={handleChange}
                    required
                    className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline"
                  ></textarea>
                  <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </ScrollRevealEffect>
      </section>
    </>
  );
}

export default Contact;
