"use client";

import React from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children, className, id, priority = false }) => {
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    inView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
        // Remove delay if it's a priority item to ensure immediate visibility
        delay: priority ? 0 : 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col gap-8 w-full ${className || ""}`}
      id={id}
      variants={cardVariants}
      initial="initial"
      // FIX: If priority is true, force animation immediately.
      // Otherwise, wait for scroll intersection.
      animate={priority ? "inView" : undefined}
      whileInView={priority ? undefined : "inView"}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
