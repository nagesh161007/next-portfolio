"use client"; // Only this component will be a client-side component

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  // eslint-disable-next-line no-unused-vars
  const [_, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }} // Start from the left
      whileInView={{ opacity: 1, x: 0 }} // Move to original position
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
