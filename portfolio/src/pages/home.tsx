import "../css/home.css";
import heroimg from "/IMG_2357.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const slideVariant = {
  start: {
    transform: "translateX(-100%)",
    opacity: 0,
  },
  end: {
    transform: "translateX(0%)",
    opacity: 1,
  },
};

function HomeHero() {
  return (
    <>
      <section id="home">
        <div className="hero">
          <motion.img
            src={heroimg}
            alt="img-hero"
            className="z-1 scale-x-[-1] "
            variants={slideVariant}
            initial={{
              transform: "translateX(-100%)",
              opacity: 1,
            }}
            animate={{
              transform: "translateX(0%)",
              opacity: 0.5,
            }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
            }}
          ></motion.img>
          <motion.div
            className="absolute bottom-1/3 sm:bottom-0 lg:relative bg-gray-900/50 w-full z-2 "
            variants={slideVariant}
            initial="start"
            animate="end"
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delayChildren: 1.5,
            }}
          >
            <div className="max-w mx-3 sm:container sm:mx-10 lg:mx-15 2xl:mx-auto">
              <motion.h2
                initial={{
                  transform: "translateX(-100%)",
                }}
                animate={{
                  transform: "translateX(0)",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 1.5,
                }}
                className="
                text-shadow-[1px_1px_rgb(0,0,0,0.7)] 
                z-3 
                m-0
                relative 
                font-medium
                text-2xl
                sm:text-4xl
                lg:text-6xl 
                "
              >
                Leonardo Navarro
              </motion.h2>
              <motion.p
                className="
                text-shadow-[1px_2px_rgb(0,0,0,0.7)] 
                z-3
                mb-2
                relative 
                font-medium
                text-lg
                sm:text-xl
                lg:text-4xl
                "
                variants={slideVariant}
                initial="initial"
                animate="end"
                transition={{
                  ease: "easeInOut",
                  duration: 1.5,
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Programador Full-Stack",
                    3000,
                    "Desarrollador de Software",
                    1200,
                    "Desarrollador Front-End",
                    1200,
                    "Desarrollador Back-End",
                    1200,
                    "Desarrollador Movil (Android, iOs)",
                    1200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  preRenderFirstString={true}
                ></TypeAnimation>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;
