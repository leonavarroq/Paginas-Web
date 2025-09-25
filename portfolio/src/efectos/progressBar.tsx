import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

interface progressData {
  title: string;
  data: number;
}

export const ProgressBar = ({ title, data }: progressData) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView && progress < data) {
      const timer = setTimeout(() => setProgress((prevProgress) => prevProgress + 1), 10);
      return () => clearTimeout(timer);
    }
  }, [progress, data, isInView]);

  return (
    <motion.div ref={ref} className="w-full my-8 2xl:my-12">
      <span className="float-left 2xl:text-4xl xl:text-2xl lg:text-xl md:text-md text-sm">
        {title}
      </span>
      <div className="text-right transition-all duration-300">
        <span className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-md text-sm">{progress}%</span>
      </div>
      <div className="bg-gray-500/70 rounded-full h-4 my-2">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};
