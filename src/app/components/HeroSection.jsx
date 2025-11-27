"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "public/assets";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-between items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex  text-[clamp(40px,4.5vw,96px)]"
      >
        <h1 className={"leading-none w-fit text-primaryText"}>
          Hello there! I’m Matt,{" "}
          <span className="w-auto h-auto">
            <Image
              src={personal}
              className="inline px-2 w-auto tracking-wider align-middle h-[1em] pb-2"
              alt="Matt's personal photo"
            />
          </span>{" "}
          a product designer turning complex problems into functional design.
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between w-full items-star md:items-center md:flex-row"
      >
        <div className="flex justify-start items-start w-full md:w-1/2">
          <p className="text-base text-secondaryText">
            Currently Open to Work!
          </p>
        </div>
        <div className="hidden justify-start items-start w-full md:flex md:justify-end">
          <p className="text-base text-secondaryText">
            Product Design, App Design, Design System, Website Design
          </p>
        </div>
      </motion.div>
    </section>
  );
}
