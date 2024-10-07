"use client";

import { motion, useScroll } from "framer-motion";

const HeaderScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ scaleX: scrollYProgress, backgroundColor: "#f45d22" }}
    />
  );
};

export default HeaderScrollProgress;
