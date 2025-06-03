"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import ProjectSlider from "./components/ProjectSlider";
import HeroSingle from "./components/HeroSingle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Navigation />
      <main className="flex flex-col justify-center items-start px-2 w-full md:px-4">
        <HeroSingle />
        <ProjectSlider />
      </main>
      <Footer />
    </AnimatePresence>
  );
}
