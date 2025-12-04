"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children, className, id }) => {
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
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      // FIX 1: Removed 'overflow-auto' to prevent layout conflicts.
      // FIX 2: Uses 'w-full' instead of min-w-full to respect parent bounds.
      className={`flex flex-col gap-8  w-full ${className || ""}`}
      id={id}
      variants={cardVariants}
      initial="initial"
      whileInView="inView"
      // FIX 3: Reduced amount to 0.25.
      // Animation triggers when top 25% is visible, not waiting for 50%.
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
