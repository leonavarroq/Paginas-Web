import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ANIMATION_DURATION = 500; // 500ms
const SignUpModal = ({ showModal, closeModal }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (showModal) {
      // ENTRADA: Inicia el renderizado, luego aplica la visibilidad (con 10ms de retraso)
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 2000);
    } else if (isRendered) {
      // SALIDA: Desactiva la visibilidad (inicia la animación CSS de 500ms)
      setIsVisible(false);

      // Espera 500ms (ANIMATION_DURATION) antes de desmontar el componente del DOM
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [showModal, isRendered]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleClose();
    }
  };

  const handleClose = () => {
    closeModal();
    setErrorMsg(null);
    setIsSuccess(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const apiUrl = `${
      process.env.REACT_APP_API_URL || "http://localhost:3000"
    }/api/auth/register`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al crear la cuenta");
      }

      // Éxito:
      console.log("Usuario creado en CODIPAS:", data);
      setIsSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error("Error de conexión:", error);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 1. SOLUCIÓN: Solo confiamos en isRendered para el unmount.
  // if (!showModal) return null; <--- ESTA LÍNEA FUE ELIMINADA.
  if (!isRendered) return null;

  const modalContentClasses = `
    bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md relative text-gray-800 
    transition-all duration-${ANIMATION_DURATION} ease-in-out transform
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
  `;

  // Clases dinámicas para el fondo (fading)
  const modalOverlayClasses = `
    fixed inset-0 flex items-center justify-center z-[9999]
    transition-opacity duration-${ANIMATION_DURATION} 
    // Usamos opacity-0 y bg-black/70 para que el fondo haga un fade out
    ${
      isVisible
        ? "opacity-100 bg-black/70"
        : "opacity-0 bg-black/70 pointer-events-none"
    }
  `;

  return ReactDOM.createPortal(
    <div
      className={modalOverlayClasses} // Overlay con animación de opacidad
      id="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div
        className={modalContentClasses} // Contenido con animación slide-up/down y opacidad
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-semibold"
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center text-indigo-700">
          ¡Únete Ahora!
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center italic">
          Registra tus datos y afiliate con nosotros.
        </p>

        {/* Feedback de éxito o error */}
        {isSuccess ? (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-sm"
            role="alert"
          >
            ¡Registro exitoso! Redirigiendo...
          </div>
        ) : (
          errorMsg && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm"
              role="alert"
            >
              {errorMsg}
            </div>
          )
        )}

        {/* Ocultamos el formulario si el registro fue exitoso */}
        {!isSuccess && (
          <form onSubmit={handleSubmit}>
            {/* Email Group */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password Group */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-150 ease-in-out ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              }`}
            >
              {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default SignUpModal;
