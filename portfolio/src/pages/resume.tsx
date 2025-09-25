import SkillCard from "../component/skillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/resume.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { UpRevealEffect } from "../efectos/upReveal";
import { LeftRevealEffect } from "../efectos/leftReveal";
import { RightRevealEffect } from "../efectos/rightReveal";

function Resume() {
  const currentSkills = [
    {
      id: 1,
      title: "service-icon-1.webp",
      description: "Diseño UX/UI",
      specializations: [
        "Landing Pages",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "Mobile App Desing",
        "Animaciones",
      ],
    },
    {
      id: 2,
      title: "programador.png",
      description: "Desarrollador",
      specializations: [
        "Wordpress",
        "HTML/CSS",
        "Javascript",
        "Bases de Datos",
        "Desarrollo Front-End",
        "Desarrollo Back-End",
      ],
    },
    {
      id: 3,
      title: "service-icon-2.webp",
      description: "Frameworks",
      specializations: ["React", "AngularJs", "ExpressJs", "Sequelize", "Django", "PhalconPHP"],
    },
    {
      id: 4,
      title: "service-icon-1.webp",
      description: "Diseño UX/UI",
      specializations: [
        "Landing Pages",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "Mobile App Desing",
        "Animaciones",
      ],
    },
    {
      id: 5,
      title: "programador.png",
      description: "Desarrollador",
      specializations: [
        "Wordpress",
        "HTML/CSS",
        "Javascript",
        "Bases de Datos",
        "Desarrollo Front-End",
        "Desarrollo Back-End",
      ],
    },
  ];

  return (
    <section id="services" className="max-w-full pt-5 lg:px-8 text-gray-200 bg-black">
      <div className="mx-6 sm:mx-10 max-w-full">
        <UpRevealEffect>
          <h5 className="text-2xl font-medium pb-2 xl:text-4xl 2xl:text-6xl">Experiencia</h5>
        </UpRevealEffect>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
      >
        {currentSkills.map((skill, index) => (
          <SwiperSlide>
            {index == 0 ? (
              <LeftRevealEffect>
                <SkillCard key={skill.id} skill={skill} />
              </LeftRevealEffect>
            ) : index == 1 ? (
              <UpRevealEffect>
                <SkillCard key={skill.id} skill={skill} />
              </UpRevealEffect>
            ) : index == 2 ? (
              <RightRevealEffect>
                <SkillCard key={skill.id} skill={skill} />
              </RightRevealEffect>
            ) : (
              <SkillCard key={skill.id} skill={skill} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Resume;
