import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

// ==========================================================
// 1. COMPONENTE AUXILIAR para el TÍTULO (Word by Word)
// ==========================================================
const AnimatedFaqTitle = ({ text }) => {
  // Dividimos el texto en palabras para el efecto
  const words = text.split(/(\s+)/).filter((w) => w.length > 0);

  return (
    <h2 className="md:text-center xl:mb-5 font-bold md:mb-6 md:text-5xl xl:text-7xl lg:text-8xl text-white leading-tight drop-shadow-md drop-shadow-black/30">
      {words.map((word, index) => {
        // Si es un espacio, lo devuelve
        if (word.match(/\s/)) {
          return <span key={index}>{word}</span>;
        }
        // Aplica la clase de animación a cada palabra
        return (
          <span key={index} className={`sr-faq-word inline-block`}>
            {word}
          </span>
        );
      })}
    </h2>
  );
};

// ... Tipos y Defaults (mantenidos sin cambios)
type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  questions: QuestionsProps[];
};

export type Faq6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq6Defaults: Props = {
  heading: "Preguntas Frecuentes",
  description: "",
  questions: [
    {
      title: "¿Como puedo Afiliarme?",
      answer:
        "Para afiliarte puedes contactarnos directamente a traves de nuestras redes sociales, o comunicarte a nuestras oficinas a traves del 0251-2335417",
    },
    {
      title: "¿Hasta que Limite de Edad puedo inscribir un Beneficiario?",
      answer:
        "El límite de edad para la inscripción de un beneficiario es hasta los 70 años. Después de esa edad, se aplican términos y condiciones especiales.",
    },
    {
      title: "¿Qué cubre mi plan prepagado?",
      answer:
        "Cada plan incluye un servicio funerario completo, asistencia legal, traslados nacionales y asesoramiento 24/7. Detalles específicos se encuentran en su contrato.",
    },
    {
      title: "¿Puedo transferir mi plan?",
      answer:
        "Sí, nuestros planes son transferibles a un familiar directo bajo ciertas condiciones contractuales. Consulte con un asesor para más detalles.",
    },
    {
      title: "¿Qué documentos necesito para afiliarme?",
      answer:
        "Necesitará su cédula de identidad, la de sus beneficiarios, y el comprobante de pago inicial. Puede completar el proceso en línea o en nuestras oficinas.",
    },
  ],
};

export const Faq6 = (props: Faq6Props) => {
  const { heading, description, questions } = {
    ...Faq6Defaults,
    ...props,
  };

  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id: any) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  // ==========================================================
  // 2. INICIALIZACIÓN DE SCROLLREVEAL
  // ==========================================================
  useEffect(() => {
    if (ScrollReveal) {
      // Título: Palabra por palabra desde ABAJO
      ScrollReveal().reveal(".sr-faq-word", {
        origin: "bottom",
        distance: "30px",
        duration: 700,
        delay: 50,
        interval: 50, // ✨ Efecto palabra por palabra
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      });

      // Contenedor de Preguntas (Cada elemento aparece desde ABAJO secuencialmente)
      ScrollReveal().reveal(".sr-faq-item", {
        origin: "bottom",
        distance: "40px",
        duration: 900,
        delay: 600, // Comienza después de que el título haya entrado
        interval: 150, // Retraso entre la aparición de cada pregunta
        opacity: 0,
      });
    }
  }, []);

  // ==========================================================
  // 3. RENDERIZADO DEL COMPONENTE CON MEJORAS DE DISEÑO
  // ==========================================================
  return (
    <>
      <section
        id="faq"
        // Mantener el fondo azul-oscuro/blanco solicitado
        className="w-dvw py-20 px-4 md:px-8 bg-transparent"
      >
        <div className="max-w-7xl mx-auto">
          {/* TÍTULO */}
          <div className="text-center mb-16">
            <AnimatedFaqTitle text={heading} />
          </div>

          {/* CONTENEDOR DE PREGUNTAS - REDISEÑO PARA ESTILO MODERNISTA */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {questions.map((question, index) => (
              <div
                key={index}
                // CLASE DE SCROLLREVEAL APLICADA AQUÍ (Elemento secuencial)
                className="sr-faq-item rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-blue-100"
              >
                <button
                  id={`faq-${index}`}
                  onClick={() => toggleQuestion(index)}
                  className="font-semibold text-left py-4 px-6 rounded-t-xl transition duration-300 ease-in-out w-full flex justify-between items-center text-gray-800"
                  aria-expanded={openQuestionId === index}
                >
                  <span className="text-lg text-blue-800">
                    {question.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 flex-shrink-0 ${
                      openQuestionId === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {openQuestionId === index && (
                  <div
                    id={`answer-${index}`}
                    // Animación simple de expansión para el contenido
                    className="p-6 pt-0 text-gray-600 border-t border-blue-50 text-base"
                    style={{
                      maxHeight: openQuestionId === index ? "500px" : "0",
                      opacity: openQuestionId === index ? 1 : 0,
                      transition:
                        "max-height 0.4s ease-in-out, opacity 0.4s ease-in-out",
                    }}
                  >
                    {question.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq6;
