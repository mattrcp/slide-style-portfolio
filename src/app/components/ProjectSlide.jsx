"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import RevealContent from "./RevealContent";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSlide({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ref for this specific slide section
  const containerRef = useRef(null);

  // Is this slide currently visible? (Threshold 0.6 means 60% visible)
  const isInView = useInView(containerRef, { amount: 0.6 });

  // SCROLL LOCK: Prevent moving UP/DOWN when side panel is open
  useEffect(() => {
    const mainContainer = document.getElementById("main-scroll-container");
    if (!mainContainer) return;

    if (isExpanded) {
      mainContainer.style.overflowY = "hidden";
    } else {
      mainContainer.style.overflowY = "scroll";
    }
  }, [isExpanded]);

  return (
    <Link
      href={project.href}
      ref={containerRef}
      className="block w-full h-full bg-primaryBg"
    >
      {/* SLIDING WRAPPER 
        Width = 200vw (2 screens wide)
        x moves from 0 (Show Summary) to -100vw (Show Reveal)
      */}
      <motion.div
        className="flex w-full h-full"
        animate={{ x: isExpanded ? "-100vw" : "0vw" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* --- LEFT SCREEN: SUMMARY (100vw) --- */}
        <div className="flex overflow-hidden relative flex-col justify-between items-center p-6 w-full h-full">
          {/* Main Text Overlay */}
          {/* <div className="absolute top-1/2 left-1/2 z-10 p-8 text-center -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-6xl md:text-9xl font-black text-[#192A42] dark:text-white">
              {project.title}
            </h2>
          </div> */}

          {/* Image Container */}
          <div className="relative w-full h-full">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title || "Project image"}
                fill
                className="object-contain scale-125 sm:scale-110"
                priority={false}
                sizes="100vh"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900" />
            )}
          </div>

          <div className="flex flex-col gap-4 justify-between items-start w-full md:flex-row md:items-center">
            <div className="flex gap-2 justify-start items-center w-full">
              <p className="text-base font-semibold font-satoshi text-primaryText">
                {project.title}
              </p>
              <span> ⎯</span>
              <p className="text-base font-satoshi text-secondaryText">
                {project.year}
              </p>
            </div>
            <div className="hidden gap-2 justify-start w-full md:flex md:justify-end">
              {project.tag.map((tag, i) => (
                <span key={i} className="w-auto text-base text-secondaryText">
                  &nbsp;{tag} {i < project.tag.length - 1 ? " " : ""}
                </span>
              ))}
            </div>
          </div>

          {/* PLUS BUTTON 
            - Absolute Right
            - Hidden if not in view
            - Hidden if already expanded
          */}
          {/* <motion.button
            onClick={() => setIsExpanded(true)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isInView && !isExpanded ? 1 : 0,
              scale: isInView && !isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.2 }} // Slight delay so it pops in after snap
            className="absolute right-10 top-1/2 z-20 p-6 rounded-full border transition-colors -translate-y-1/2 border-white/20 hover:bg-white hover:text-black group"
          >
         
          </motion.button> */}
        </div>

        {/* --- RIGHT SCREEN: REVEAL CONTENT (100vw) --- */}
        {/* <RevealContent project={project} onBack={() => setIsExpanded(false)} /> */}
      </motion.div>
    </Link>
  );
}
