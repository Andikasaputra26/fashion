"use server";

import { motion, useScroll } from "framer-motion";

function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "#FFDC58",
          transformOrigin: "0%",
        }}
      ></motion.div>
    </>
  );
}
