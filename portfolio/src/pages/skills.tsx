import { ProgressBar } from "../efectos/progressBar";
import { UpRevealEffect } from "../efectos/upReveal";

function Skills() {
  return (
    <section id="skills" className="m-auto pt-5 lg:px-8 text-gray-200 bg-black">
      <div className="mx-6 sm:mx-10">
        <UpRevealEffect>
          <div className="content-center mx-auto">
            <h5 className="text-2xl font-medium pb-2 xl:text-4xl 2xl:text-6xl">Habilidades</h5>
          </div>
        </UpRevealEffect>
      </div>
      <div className="mx-6 sm:mx-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 2xl:mx-6">
        <div className="">
          <ProgressBar title={"Responsabilidad"} data={79}></ProgressBar>
          <ProgressBar title={"Liderazgo"} data={77}></ProgressBar>
          <ProgressBar title={"Comunicacion"} data={65}></ProgressBar>
        </div>
        <div className="">
          <ProgressBar title={"Trabajo en Equipo"} data={90}></ProgressBar>
          <ProgressBar title={"Flexibilidad"} data={80}></ProgressBar>
        </div>
      </div>
    </section>
  );
}

export default Skills;
