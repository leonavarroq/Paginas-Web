import React, { useState } from "react";

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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};

export const Faq6 = (props: Faq6Props) => {
  const { heading, description, questions } = {
    ...Faq6Defaults,
    ...props,
  };

  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    // Si la pregunta ya está abierta, la cierra (estableciendo a null)
    // De lo contrario, establece el ID de la pregunta clickeada para abrirla
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-amber-50 text-black">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
        </div>
        <div className="grid items-start justify-stretch gap-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 shadow-md p-4 mb-4 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]"
            >
              <button
                id="faq-{index}"
                onClick={() => toggleQuestion(index)}
                className="font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full"
              >
                {question.title}
                <svg
                  className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 float-end ${
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
                  className="p-6 pt-0 text-gray-500 text-lg transition-all duration-500 ease-in-out w-full"
                >
                  {question.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq6;
