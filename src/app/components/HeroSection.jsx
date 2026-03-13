"use client";
import { delay, motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const sentence =
    "Hello there! I’m Matt, a product designer turning complex problems into functional design.";
  const words = sentence.split(" ");

  // Container variants to stagger the words
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Speed of the sequence
        delayChildren: 0.5, // Wait for page load
      },
    },
  };

  // Individual word variants
  const wordVariants = {
    hidden: { y: "115%", opacity: 0, rotate: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a "premium" feel
      },
    },
  };

  // Footer variants (the "Open to Work" section)
  const footerVariants = {
    hidden: { opacity: 0, y: "115%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a "premium" feel
      },
    },
  };

  return (
    <section className="flex flex-col min-h-[70vh] justify-between items-start p-6 bg-primaryBg h-[65dvh] w-[60vw] snap-center snap-always relative mx-auto  overflow-visible">
      {/* Main Headline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex text-[clamp(40px,4.5vw,96px)]"
      >
        <h1 className="leading-none w-fit text-primaryText">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden pb-[0.1em] mr-[0.2em] vertical-align-top"
            >
              <motion.span variants={wordVariants} className="inline-block">
                {word === "Matt," ? (
                  <>
                    {word}
                    <span className="inline-block mx-2 align-middle">
                      <Image
                        src="/assets/personal.png"
                        className="object-contain h-[0.9em] w-auto pb-2"
                        alt="Matt's personal photo"
                        width={200}
                        height={200}
                        priority
                      />
                    </span>
                  </>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      {/* Footer Info Section */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 justify-between items-start mt-12 w-full md:items-center md:flex-row"
      >
        <div className="flex justify-start items-start w-full md:w-1/2">
          <div className="flex gap-2 items-center">
            {/* Pulsing indicator for "Open to Work" */}
            <span className="flex relative w-2 h-2">
              <span className="inline-flex absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span className="inline-flex relative w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
            <p className="text-base font-medium tracking-wider uppercase text-secondaryText">
              Currently Open to Work!
            </p>
          </div>
        </div>
        <div className="hidden justify-start items-start w-full md:flex md:justify-end">
          <p className="text-base opacity-60 text-secondaryText">
            Product Design • App Design • Design System • Website Design
          </p>
        </div>
      </motion.div>
    </section>
  );
}
