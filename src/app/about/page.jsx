"use client";

import React from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo, personal2, running, gym, web1, web2, web3 } from "public/assets";
import FooterSection from "../components/FooterSection";
import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

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

const page = () => {
  return (
    <div className="flex relative flex-col justify-center items-center py-36 md:py-36 bg-secondaryBg">
      <Navigation />
      <motion.main
        className="flex flex-col gap-8"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {" "}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </motion.main>
      <footer className="pt-8">
        <FooterSection />
      </footer>
    </div>
  );
};

export default page;

const FirstSection = () => {
  return (
    <section className="flex flex-col justify-between items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between w-full items-star md:items-center md:flex-row"
      >
        <div className="flex justify-start items-start w-full md:w-1/2">
          <p className="text-base opacity-50 text-secondaryText">
            Hello again!
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex  text-[clamp(32px,4.5vw,96px)]"
      >
        <p className="leading-none text-primaryText font-instrument">
          I’m Matt{" "}
          <Image
            src={personal2}
            alt="Matt's personal photo"
            className="inline-block align-baseline h-[2em] w-auto mx-2 rotate-6"
          />{" "}
          , a product designer based in Toronto, where I focus on{" "}
          <span className="italic text-[#FF083A]">
            {" "}
            building mobile experiences{" "}
          </span>{" "}
          and <span className="italic text-[#FF083A]">design systems.</span>
        </p>
      </motion.div>
    </section>
  );
};

const SecondSection = () => {
  return (
    <section className="flex flex-col justify-end items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex  text-[clamp(32px,4.5vw,96px)]"
      >
        <p className="leading-none text-primaryText font-instrument">
          Currently, I operate as an{" "}
          <span className="italic text-[#FF083A]">independent designer</span>{" "}
          <span className="p-2 w-auto h-auto">
            <Image
              src={web1}
              className="inline  w-auto tracking-wider aspect-square  object-center align-middle h-[1em]  rotate-6 rounded-[2px]"
              alt="Matt's running selfie"
            />
            <Image
              src={web2}
              className="inline  w-auto tracking-wider aspect-square  object-center align-middle h-[1em]  -rotate-6 rounded-[2px]"
              alt="Matt's gym mirror selfie"
            />
            <Image
              src={web3}
              className="inline  w-auto tracking-wider align-middle h-[1em]  rotate-6 rounded-[2px]"
              alt="Logo image"
            />
          </span>{" "}
          , helping clients build robust websites and product MVPs.
        </p>
      </motion.div>
    </section>
  );
};

const ThirdSection = () => {
  return (
    <section className="flex flex-col justify-end items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex  text-[clamp(32px,4.5vw,96px)]"
      >
        <p className={"leading-none w-fit text-primaryText font-instrument"}>
          In my free time, I like to{" "}
          <span className="italic text-[#ff0e3a]">running</span>, go to{" "}
          <span className="italic text-[#ff0e3a]">gym </span>, and{" "}
          <span className="italic text-[#ff0e3a]">building brand </span>.{" "}
          <span className="pr-2 w-auto h-auto">
            <Image
              src={running}
              className="inline  w-auto tracking-wider aspect-square object-cover object-center align-middle h-[1em]  rotate-6 rounded-md"
              alt="Matt's running selfie"
            />
            <Image
              src={gym}
              className="inline  w-auto tracking-wider aspect-square object-cover object-center align-middle h-[1em]  -rotate-6 rounded-md"
              alt="Matt's gym mirror selfie"
            />
            <Image
              src={logo}
              className="inline  w-auto tracking-wider align-middle h-[1em]  rotate-6 rounded-md"
              alt="Logo image"
            />
          </span>{" "}
          I love the challenge of turning friction of design into a
          habit-forming experience.
        </p>
      </motion.div>
    </section>
  );
};

const FourthSection = () => {
  return (
    <section className="flex flex-col justify-end items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex  text-[clamp(32px,4.5vw,96px)]"
      >
        <p className={"leading-none w-fit text-primaryText font-instrument"}>
          For me, design is about{" "}
          <span className="italic text-[#ff0e3a]">translation</span>, taking
          business <span className="italic text-[#ff0e3a]">requirements</span>{" "}
          and turning them into logic that{" "}
          <span className="italic text-[#ff0e3a]">users</span> understand.
        </p>
      </motion.div>
    </section>
  );
};

const FifthSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "Ratchapon.ngam@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset back after a short delay
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col justify-between items-start p-6 bg-primaryBg snap-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between w-full items-star md:items-center md:flex-row"
      >
        <div className="flex justify-start items-start w-full md:w-1/2">
          <p className="text-base opacity-50 text-secondaryText">
            Want to work with me?
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-full"
      >
        <p
          className={
            "leading-none w-fit text-primaryText font-instrument text-[clamp(32px,4.5vw,96px)]"
          }
        >
          Feel free to reach out via email at
        </p>
        <button
          onClick={handleCopy}
          className="flex gap-3 items-center mt-2 cursor-pointer text-[#ff0e3a] w-fit text-[clamp(24px,4.5vw,96px)]"
        >
          {copied ? (
            <IconCheck
              stroke={2}
              className="inline  w-auto tracking-wider aspect-square align-middle h-[0.5em]"
            />
          ) : (
            <IconCopy
              stroke={2}
              className="inline  w-auto tracking-wider aspect-square align-middle h-[0.5em]"
            />
          )}
          <p className="italic leading-none w-fit font-instrument">
            {copied ? "Copied!" : email}
          </p>
        </button>
      </motion.div>
    </section>
  );
};
