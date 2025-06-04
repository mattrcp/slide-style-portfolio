"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children, className }) => {
  return (
    <motion.div
      className={`flex flex-col h-full min-w-full gap-8 px-2 py-8 md:py-16 md:px-0 ${className} overflow-auto`}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
