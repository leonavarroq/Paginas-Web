import React, { useState } from "react";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

// Nuevo componente para encapsular la lógica de un solo formulario.
const ContactForm = ({ title, formType }: { title: string; formType: number }) => {
  // 2. Usamos la interface con useState para tipar el estado.
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Estado para los errores de validación.
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Estado para controlar la visibilidad del modal de éxito.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Maneja los cambios en los inputs del formulario con tipado de evento.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el campo en tiempo real si ya tiene un error.
    if (errors[name as keyof FormData]) {
      let newErrors = { ...errors };
      if (value.trim()) {
        delete newErrors[name as keyof FormData];
      }
      setErrors(newErrors);
    }
  };

  // Función de validación del formulario.
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    // Validación del campo de nombre.
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Este campo es obligatorio.";
    }

    // Validación del campo de email.
    if (!formData.email.trim()) {
      newErrors.email = "Este campo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    // Validación del campo de mensaje.
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Este campo es obligatorio.";
    }

    return newErrors;
  };

  // Maneja el envío del formulario.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
      console.log("Formulario enviado:", formData);
    }
  };

  // Maneja el botón de "Borrar".
  const handleClear = () => {
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
    setErrors({});
  };

  // Cierra el modal y borra los datos del formulario.
  const closeModal = () => {
    setIsModalOpen(false);
    handleClear(); // Borra los datos del formulario al cerrar el modal
  };

  // Renderizado del formulario según el tipo.
  const renderForm = () => {
    // Formulario de tipo 1 (con labels).
    if (formType === 1) {
      return (
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-xl shadow-gray-200 border-2 border-gray-100 rounded-2xl px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-5">{title}</h2>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              className="border-gray-300 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
              type="text"
              value={formData.nombre}
              name="nombre"
              onChange={handleChange}
            />
            {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="border-gray-300 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
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
              className="border-gray-300 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
            ></textarea>
            {errors.mensaje && <p className="text-red-500 text-xs italic">{errors.mensaje}</p>}
          </div>
          <button
            type="submit"
            className="text-black border border-blue-500 mx-1 py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            Enviar
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="text-black border border-red-500 mx-3 py-2 px-4 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white"
          >
            Borrar
          </button>
        </form>
      );
    }
    // Formulario de tipo 2 (sin labels, con placeholders).
    if (formType === 2) {
      return (
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-2xl shadow-gray-200 border-2 border-gray-100 rounded-2xl px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-5">{title}</h2>
          <div className="mb-4">
            <input
              placeholder="Nombre"
              className="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
              type="text"
              value={formData.nombre}
              name="nombre"
              onChange={handleChange}
            />
            {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Correo Electrónico"
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              cols={3}
              rows={3}
              onChange={handleChange}
              className="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-solid outline-blue-500 focus:shadow-outline focus:bg-white"
            ></textarea>
            {errors.mensaje && <p className="text-red-500 text-xs italic">{errors.mensaje}</p>}
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      );
    }
  };

  // Función de utilidad para convertir a "Title Case".
  const toTitleCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  };

  return (
    <>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px white inset !important;
          -webkit-text-fill-color: #374151 !important; /* Tailwind gray-700 */
        }
      `}</style>
      {renderForm()}
      {/* Modal de éxito asociado a este formulario */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto h-full w-full flex justify-center items-center z-50 bg-gray-600/50 backdrop-blur-sm">
          <div className="relative bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">¡Formulario Enviado!</h3>
            <p className="text-gray-700 mb-6">
              ¡Hola, {toTitleCase(formData.nombre)}! Tu formulario ha sido enviado. Hemos recibido
              tu mensaje y te estaremos respondiendo al correo {formData.email}.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Componente principal que renderiza los dos formularios.
const App = () => {
  return (
    <section id="contact" className="pt-20 pb-20 px-4 md:px-8 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:mx-[20%]">
        <div className="container" id="form-1">
          <ContactForm title="Formulario 1" formType={1} />
        </div>
        <div className="container" id="form-2">
          <ContactForm title="Formulario 2" formType={2} />
        </div>
      </div>
    </section>
  );
};

export default App;
