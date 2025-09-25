import { useInView, motion } from "motion/react";
import { useRef } from "react";

const variants = {
  inicial: {
    opacitiy: 0,
    scale: 0,
  },
  animate: () => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  }),
};

export const ScrollRevealEffect = ({ children, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="inicial"
      animate={isInView ? "animate" : ""}
      variants={variants}
      custom={{ index }}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(100px)",
        transition: "all .3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {children}
    </motion.div>
  );
};
