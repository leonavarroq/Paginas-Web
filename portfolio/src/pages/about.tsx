import React, { useRef } from "react";
import profile from "/IMG_3839.png";
import "../css/about.css";
import { ScrollRevealEffect } from "../efectos/ScrollReveal";
import { DownRevealEffect } from "../efectos/downReveal";
import { RightRevealEffect } from "../efectos/rightReveal";

type info = {
  title: string;
  descripcion: string;
};

type Props = {
  item: info[];
};

type AboutProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
const personalInfo: Props = {
  item: [
    {
      title: "Cumpleaños",
      descripcion: "14/12/1994",
    },
    {
      title: "Sitio Web",
      descripcion: "www.example.com",
    },
    {
      title: "Telefono",
      descripcion: "+58 (123) 4567890",
    },
    {
      title: "Ciudad",
      descripcion: "Barquisimeto, VE",
    },
    {
      title: "Edad",
      descripcion: "30",
    },
    {
      title: "Profesion",
      descripcion: "Ingeniero",
    },
    {
      title: "Correo",
      descripcion: "example@mail.com",
    },
    {
      title: "Freelance",
      descripcion: "Disponible",
    },
  ],
};

function AboutMe(props: AboutProps) {
  const { item } = {
    ...props,
    ...personalInfo,
  };
  return (
    <>
      <section id="aboutme" className="pt-5 pb-20 lg:px-8">
        <div className="text-black mx-6 sm:mx-10 max-w-full">
          <ScrollRevealEffect index={0}>
            <div className="my-5 xl:my-20">
              <h2 className="text-2xl font-medium pb-2 xl:text-4xl 2xl:text-6xl">Sobre Mi</h2>
              <p className="text-justify text-sm lg:text-xl xl:text-2xl 2xl:text-5xl mt-5 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum esse ea
                nemo voluptatibus, cumque sint consequuntur eveniet vero, temporibus cum
                necessitatibus enim ut? Eligendi velit sint adipisci iusto nihil.
              </p>
            </div>
          </ScrollRevealEffect>

          <div className="relative">
            <div className="mb-5 xl:mb-20 content-center">
              <ScrollRevealEffect index={0}>
                <div>
                  <h5 className="text-2xl font-medium pb-2 xl:text-4xl 2xl:text-6xl">
                    UX/UI Designer & Web Developer
                  </h5>
                </div>
                <p className="text-justify text-sm lg:text-xl xl:text-2xl 2xl:text-5xl mt-5 pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, totam
                  ad architecto rem corporis quaerat obcaecati, atque dolorum accusantium odit
                  laboriosam natus maiores quasi, accusamus molestias minima sapiente sint?
                </p>
              </ScrollRevealEffect>
            </div>
            <div className="lg:flex lg:justify-around">
              <div className="hidden size-1/2 m-auto md:mx-0 lg:block lg:size-1/4">
                <DownRevealEffect>
                  <img src={profile} alt="foto-1" className="w-auto h-auto rounded-2xl" />
                </DownRevealEffect>
              </div>
              <div className="mx-auto 2xl:mx-10 content-center mobile-padding">
                <RightRevealEffect>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-1 2xl:gap-8 gap-4">
                    {item.map((texto, index) => (
                      <div key={index} className="grid grid-flow-col">
                        <div className="flex">
                          <span className="mr-2 lg:ml-5 content-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4 2xl:size-12"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </span>
                          <span className="lg:text-md xl:text-2xl 2xl:text-5xl mr-2 xl:mr-5 content-center text-nowrap font-bold">
                            {texto.title}:
                          </span>
                          <span className="lg:text-md xl:text-2xl 2xl:text-5xl text-right content-center w-full ">
                            {texto.descripcion}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </RightRevealEffect>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
