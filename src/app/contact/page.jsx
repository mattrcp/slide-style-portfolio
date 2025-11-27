"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

import {
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import TimeDisplay from "../components/TimeDisplay";

const links = [
  {
    href: "https://dribbble.com/ratchapon",
    label: "Dribble",
    logo: <IconBrandDribbble stroke={2} />,
  },
  {
    href: "https://www.instagram.com/justmatt.studio/",
    label: "Instagram",
    logo: <IconBrandInstagram stroke={2} />,
  },
  {
    href: "https://www.linkedin.com/in/matt-ngamdan-b251171a1/",
    label: "LinkedIn",
    logo: <IconBrandLinkedin stroke={2} />,
  },
  // {
  //   href: "https://drive.google.com/file/d/127RnFN0WAj9nbaBzpidA9xSeUWODGFg9/view?usp=sharing",
  //   label: "Resume",
  //   logo: <IconFileCv stroke={2} />,
  // },
  {
    href: "https://x.com/mattjustbored",
    label: "Twitter",
    logo: <IconBrandTwitter stroke={2} />,
  },
];

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
        <FirstSection />
      </motion.main>
    </div>
  );
};

export default page;

const FirstSection = () => {
  return (
    <section className="flex flex-col justify-between items-start p-6 bg-primaryBg h-[70vh] md:h-[65vh] w-[90vw] sm:w-[70vw] md:w-[65vw]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between items-start w-full md:flex-row"
      >
        <h1
          className={
            "leading-none w-fit text-primaryText text-[clamp(40px,4.5vw,96px)]"
          }
        >
          Matt <br></br> Ngamdan
        </h1>
        <div className="flex flex-col justify-start items-start md:justify-end md:items-end">
          <TimeDisplay />
          <Link
            href={"mailto:ratchapon.ngam@gmail.com"}
            className="flex gap-2 items-center tracking-wide cursor-pointer font-instrument"
          >
            {" "}
            Ratchapon.ngam@gmail.com{" "}
            <IconArrowUpRight stroke={1} className="w-auto h-4" />
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1XpZXjYwor4IYoeQ_o2NSq4Dg6WaV7sm5/view?usp=sharing"
            }
            target="_blank"
            className="flex gap-2 items-center tracking-wide cursor-pointer font-instrument"
          >
            {" "}
            Resume <IconArrowUpRight stroke={1} className="w-auto h-4" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between items-start w-full md:items-end md:flex-row"
      >
        <div className="flex gap-2 w-full">
          {links.map((link, index) => (
            <Link
              href={link.href}
              target="_blank"
              className="flex flex-row gap-4 justify-end items-start p-2 w-20 h-auto rounded-lg transition-all duration-150 ease-out md:w-20 lg:w-24 md:gap-6 text-secondaryText bg-secondaryBg hover:bg-black aspect-square hover:text-white"
              key={index}
            >
              <span>{link.logo}</span>
            </Link>
          ))}
        </div>
        <div>
          <p className="flex text-sm text-secondaryText">
            © 2025 for Ratchapon Ngamdan ⎯ Made with ❤️ in ReactJS
          </p>
        </div>
      </motion.div>
    </section>
  );
};
