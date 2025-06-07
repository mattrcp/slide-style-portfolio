"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import ProjectSlider from "./components/ProjectSlider";
import HeroSingle from "./components/HeroSingle";
import Footer from "./components/Footer";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <AnimatePresence mode="wait">
      <Navigation />
      <main className="flex flex-col items-start justify-center w-full px-4">
        <HeroSingle />
        <ProjectSlider setHoveredProject={setHoveredProject} />
      </main>
      <Footer />
    </AnimatePresence>
  );
}
