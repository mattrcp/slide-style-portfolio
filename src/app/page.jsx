"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";

// Import the new architecture components
import ProjectSlide from "./components/ProjectSlide";
import { projects } from "./data/content";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Add class to body for scroll snap (fallback for browsers without :has() support)
  useEffect(() => {
    document.body.classList.add("has-snap-container");
    return () => {
      document.body.classList.remove("has-snap-container");
    };
  }, []);

  // Total Segments = Hero (1) + Projects (N) + Footer (1)
  const totalSegments = 1 + projects.length + 1;

  // Hero animation: blur + scale up (Preserved)
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Reduced from 100. Subtle rise is more elegant.
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.6, // Staggered shortly after nav starts
      },
    },
  };
  // Project slides up after hero animation (Preserved)
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Reduced from 100. Subtle rise is more elegant.
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.6, // Staggered shortly after nav starts
      },
    },
  };

  return (
    <main
      id="main-scroll-container"
      className="py-36 md:py-44 snap-container bg-secondaryBg"
    >
      {/* Navigation now tracks total segments for the progress bar */}
      <Navigation totalSegments={totalSegments} />

      {/* --- SLIDE 1: HERO --- */}
      <section className="flex relative z-40 justify-center items-center pb-8 snap-section">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full"
          id="hero"
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* --- SLIDES 2-6: PROJECTS --- */}
      {projects.map((project, index) => {
        // Apply the entrance animation ONLY to the first project slide
        // to mimic your original "Slider slides up" effect.
        const isFirst = index === 0;

        return (
          <motion.section
            key={project.id}
            variants={isFirst ? projectVariants : {}}
            initial={isFirst ? "hidden" : "visible"}
            animate="visible"
            // CRITICAL: snap-section must be on the direct child of snap-container
            className="h-full snap-section"
          >
            <ProjectSlide project={project} />
          </motion.section>
        );
      })}

      {/* --- FINAL SLIDE: FOOTER --- */}
      {/* We wrap the footer in a snap-section so it snaps cleanly at the bottom */}
      <section className="flex justify-center items-end snap-section">
        <div className="flex flex-col justify-end w-full h-full">
          <FooterSection />
        </div>
      </section>
    </main>
  );
}
