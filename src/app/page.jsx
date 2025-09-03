"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import ProjectSlider from "./components/ProjectSlider";
import HeroSingle from "./components/HeroSingle";
import Footer from "./components/Footer";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Hero animation: blur + scale up
  const heroVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      scale: 0.8, // start smaller
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1, // full size
      transition: {
        duration: 1, // adjust for speed
        ease: "easeOut",
      },
    },
  };

  // ProjectSlider slides up after hero animation
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1, // matches hero duration
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-secondaryBg to-primaryBg">
      <Navigation />

      <motion.main className="flex relative z-40 flex-col justify-center items-start w-full h-auto">
        {/* Hero reveal: scale + blur */}

        <HeroSingle />

        {/* ProjectSlider slides up after hero */}
        <motion.div
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          className="z-10 w-full"
        >
          <ProjectSlider setHoveredProject={setHoveredProject} />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
}
