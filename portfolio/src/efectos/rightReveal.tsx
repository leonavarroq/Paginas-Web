import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

const variants = {
  inicial: {
    transform: "translateX(100%)",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transform: "translateX(0%)",
    transition: {
      duration: 1,
    },
  },
};

export const RightRevealEffect = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="inicial"
      animate={isInView ? "animate" : ""}
      custom={{ children }}
    >
      {children}
    </motion.div>
  );
};
