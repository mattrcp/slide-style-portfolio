"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const sentence =
    "Hello there! I’m Matt, a product designer turning complex problems into functional design.";
  const words = sentence.split(" ");

  // 1. Fixed timing configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Wait slightly before starting
        staggerChildren: 0.05, // Fast, snappy interval between each word
      },
    },
  };

  // 2. Removed the hardcoded delay so staggerChildren can take over
  const wordVariants = {
    hidden: { y: "115%", opacity: 0, rotate: 5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: "115%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="flex flex-col min-h-[70vh] justify-between items-start p-6 bg-primaryBg h-[65dvh] w-[60vw] snap-center snap-always relative mx-auto overflow-visible">
      {/* 3. Removed restrictive flex classes from the wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full text-[clamp(40px,4.5vw,96px)]"
      >
        {/* 4. Added flex flex-wrap and w-full to force proper stacking */}
        <h1 className="flex flex-wrap w-full leading-none text-primaryText">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden pb-[0.1em] mr-[0.2em] align-top"
            >
              <motion.span variants={wordVariants} className="inline-block">
                {word === "Matt," ? (
                  <span className="inline-flex items-baseline">
                    {word}
                    <span className="inline-block self-center mx-2">
                      <Image
                        src="/assets/personal.png"
                        className="object-contain h-[0.9em] w-auto -mb-[0.1em]"
                        alt="Matt's personal photo"
                        width={200}
                        height={200}
                        priority
                      />
                    </span>
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      {/* Footer Info Section remains unchanged */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 justify-between items-start mt-12 w-full md:items-center md:flex-row"
      >
        <div className="flex justify-start items-start w-full md:w-1/2">
          <div className="flex gap-2 items-center">
            <span className="flex relative w-2 h-2">
              <span className="inline-flex absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span className="inline-flex relative w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
            <Link
              className="text-sm font-medium tracking-wider uppercase text-secondaryText"
              href="mailto:ratchapon.ngam@gmail.com"
            >
              Ratchapon.ngam@gmail.com
            </Link>
          </div>
        </div>
        <div className="hidden justify-start items-start w-full md:flex md:justify-end">
          <p className="text-sm opacity-60 text-secondaryText">
            Product Design • App Design • Design System • Website Design
          </p>
        </div>
      </motion.div>
    </section>
  );
}
