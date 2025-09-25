import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Children, type ReactNode, useRef } from "react";

export default function Parallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const hero = Children.toArray(children)[0];
  const section = Children.toArray(children).map((item: any) => {
    return item;
  });

  //if (Children.count(children) < 2) return;
  // motion stuff
  const { scrollYProgress } = useScroll({ target });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  // scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale2 = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]));
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <motion.div ref={target}>
      <motion.div
        style={{
          y,
          scale,
          opacity,
        }}
      >
        {hero}
      </motion.div>
      <motion.div style={{ scale: scale2, y: -1 }}>{section}</motion.div>
    </motion.div>
  );
}
