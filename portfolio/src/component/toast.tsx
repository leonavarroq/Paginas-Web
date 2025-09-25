import { motion } from "motion/react";
import { useRef } from "react";

const variants = {
  initial: {
    transform: "transformY(-100%)",
  },
  animate: {
    transform: "transformY(0)",
    transition: {
      duration: 1,
    },
  },
};

export const ToastEffect = ({ data }: any) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      custom={data}
      initial="initial"
      animate="animate"
      className="px-5 fixed z-[999] rounded bottom-0 right-0 m-5 px-5 text-white bg-green-900"
    >
      <div className="border-b pt-3">
        <p>{data.estado}</p>
      </div>
      <div className="py-5">
        <p>{data.mensaje}</p>
      </div>
    </motion.div>
  );
};
