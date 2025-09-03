"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { dot } from "public/assets";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroSingle() {
  // Scroll value
  const scrollY = useMotionValue(0);

  // Update scrollY on scroll
  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Scroll-based transforms
  const translateY = useTransform(scrollY, [0, 500], [0, -50]); // moves up 50px
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]); // shrink slightly

  // Hero reveal animation (one-time)
  const revealVariants = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 0.8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[90vh] md:h-[90vh]">
      {/* Dot Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-00">
        <Image
          src={dot}
          alt="Dot backdrop"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Spacer for scroll */}
      <div id="hero-section" className="h-[40vh] md:h-[90vh]"></div>

      {/* Hero Content */}
      <motion.div
        className="flex fixed top-0 left-0 flex-col gap-4 justify-center items-center px-6 py-4 w-full h-screen md:h-[90vh] z-0"
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        style={{ y: translateY, scale }}
      >
        <div className="flex gap-2 justify-center items-center text-secondaryText">
          Hello there! I'm Matt.{" "}
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>

        <h1 className="font-canela font-light text-primaryText text-center text-[clamp(32px,4vw,96px)] leading-tight w-full  md:w-1/2">
          Designs digital products for{" "}
          <span className="text-primaryText">&nbsp;everyday use!</span>
        </h1>

        <p className="w-auto text-center md:w-1/3 text-primaryText">
          UX & UI Designer based in Toronto, creating user-centric mobile and
          web experiences that blend product thinking with human touch.
        </p>
      </motion.div>
    </div>
  );
}
