"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children, className, id }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 }, // Start yd down and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // y to original size and fade in
  };

  return (
    <motion.div
      className={`flex flex-col  min-w-full gap-8 py-8 md:py-16  ${className} overflow-auto`}
      id={id}
      variants={cardVariants} // Apply the defined variants
      initial="initial" // Set the initial state
      whileInView="inView" // Animate to 'inView' when in viewport
      viewport={{ once: true, amount: 0.5 }} // Configure viewport behavior
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
