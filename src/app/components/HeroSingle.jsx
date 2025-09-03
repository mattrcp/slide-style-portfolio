"use client";
import { motion } from "framer-motion";
import { dot } from "public/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSingle() {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(Infinity);

  useEffect(() => {
    const calculateMaxScroll = () => {
      const footer = document.body.lastElementChild;
      if (footer) {
        const footerTop = footer.offsetTop;
        const viewportHeight = window.innerHeight;
        setMaxScroll(Math.max(0, footerTop - viewportHeight));
      } else {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        setMaxScroll(Math.max(0, documentHeight - viewportHeight * 1.5));
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    calculateMaxScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateMaxScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateMaxScroll);
    };
  }, []);

  const effectiveScrollY = Math.min(scrollY, maxScroll);
  const translateY = Math.min(-10, -(effectiveScrollY * 0.05));
  const scale = Math.max(0.9, 1 - effectiveScrollY * 0.0005);

  // Hero reveal animation
  const heroReveal = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 0.8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="relative z-0">
      {/* Spacer to create scroll room */}
      <div
        id="hero-section"
        className="relative w-full h-[40vh] md:h-[90vh]"
      ></div>

      {/* Sticky Hero with reveal animation */}
      <motion.div
        className="flex fixed top-0 left-0 flex-col gap-4 justify-center items-center px-6 py-4 w-full h-[50vh] md:h-[90vh] z-0"
        style={{ y: translateY, scale }}
        initial="hidden"
        animate="visible"
        variants={heroReveal}
      >
        <div className="flex gap-2 justify-center items-center text-secondaryText">
          Hello there! I'm Matt.{" "}
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>

        <h1 className="font-canela font-light text-primaryText text-center text-[clamp(32px,4vw,96px)] tracking-wide leading-tight w-full md:w-[70vw] ">
          Designs digital products for
          <span className="gap-1 items-center text-primaryText">
            &nbsp;everyday use!
          </span>
        </h1>

        <p className="w-auto text-center md:w-1/3 text-primaryText">
          UX & UI Designer based in Toronto, creating user-centric mobile and
          web experiences that blend product thinking with human touch.
        </p>
      </motion.div>

      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <Image
          src={dot}
          alt="Dot backdrop"
          draggable={false}
          fill
          className="object-cover opacity-80"
        />
      </div>
    </motion.div>
  );
}
