"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react"; // Removed unused imports

export default function HeroSingle() {
  const emojiList = ["🏃", "🍵", "📱", "☕", "🖥", "🍛"];

  // Variants for the overall content container.
  // This motion.div wraps both the heading and the emoji section.
  const containerVariants = {
    initial: { opacity: 0, y: 50 }, // Start slightly below and invisible
    inView: {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      transition: {
        duration: 0.8, // Overall duration of this container's animation
        ease: [0.83, -0.33, 0, 1.29], // Custom easing for a more dynamic feel
        when: "beforeChildren", // Animate this container first, then its direct children
        staggerChildren: 0.1, // Stagger delay for direct children (the heading and the emoji container)
        delayChildren: 0.1, // Initial delay before the direct children start animating
      },
    },
  };

  // Variants for the main heading (h1).
  // These will be picked up by the 'staggerChildren' from `containerVariants`.
  const headingVariants = {
    initial: { opacity: 0, y: 20 }, // Start slightly below and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    }, // Spring animation for a smooth bounce
  };

  // Variants for the emoji *container* (the div that holds all emojis).
  // This container itself will animate in, and then it will trigger a stagger for its own children (the individual emojis).
  const emojiRowVariants = {
    initial: { opacity: 0, y: 20 }, // Start slightly below and invisible
    inView: {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      transition: {
        type: "spring", // Use a spring animation
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.07, // Stagger delay for individual emojis within this row
        delayChildren: 0.1, // Delay before individual emojis start animating
      },
    },
  };

  // Variants for individual emojis.
  // These will be picked up by the 'staggerChildren' from `emojiRowVariants`.
  const emojiItemVariants = {
    initial: { opacity: 0, y: 20, scale: 0.8 }, // Start smaller, slightly below, and invisible
    inView: {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      scale: 1, // Scale to full size
      transition: {
        type: "spring", // Spring animation for a lively effect
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center pt-16 pb-8 w-full h-[70vh] md:h-screen md:pt-20 md:mt-0">
      <AnimatePresence mode="wait">
        {/* Main motion.div that controls the overall entrance and direct children stagger */}
        <motion.div
          variants={containerVariants} // Apply the main container animation variants
          initial="initial" // Set the initial state
          whileInView="inView" // Animate to 'inView' when in viewport
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the component is in view, only once
          className="flex relative flex-col justify-between items-center w-full h-full"
        >
          {/* Heading section, animated as a direct child of the main container */}
          <motion.div
            variants={headingVariants} // Apply the heading specific animation variants
            className="flex justify-start items-center w-full"
          >
            <h1 className="font-satoshi font-bold text-primaryText text-[clamp(30px,4vw,80px)] leading-snug w-full text-left tracking-tighter md:tracking-normal">
              Matt designs digital products that elevate user experiences
              through
              <span className="underline decoration-wavy underline-[1px] underline-offset-4 decoration-highlightBlue text-left tracking-tighter md:tracking-normal">
                &nbsp;scalable systems, innovative thinking, and
                cross-functional collaboration.
              </span>
            </h1>
          </motion.div>

          {/* Emoji row container, animated as a direct child, and also responsible for staggering its own children (emojis) */}
          <motion.div
            variants={emojiRowVariants} // Apply the emoji row animation variants (which include staggerChildren)
            className="flex overflow-hidden justify-between items-center w-full md:justify-end md:gap-16"
          >
            {emojiList.map((emoji) => (
              <motion.span
                key={emoji} // Using emoji as key, assuming they are unique. A stable unique ID is preferred for production.
                variants={emojiItemVariants} // Apply the individual emoji animation variants
                className="text-2xl md:text-4xl blink-emoji"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export const Svg = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 680 505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g clip-path="url(#clip0_2393_4260)">
        <g filter="url(#filter0_f_2393_4260)">
          <path
            d="M408.5 424C503.217 424 580 347.217 580 252.5C580 157.783 503.217 81 408.5 81C313.783 81 237 157.783 237 252.5C237 347.217 313.783 424 408.5 424Z"
            fill="#FFFEB5"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter1_f_2393_4260)">
          <path
            d="M354.5 424C449.217 424 526 347.217 526 252.5C526 157.783 449.217 81 354.5 81C259.783 81 183 157.783 183 252.5C183 347.217 259.783 424 354.5 424Z"
            fill="#17AFFB"
            fill-opacity="0.1"
          />
        </g>
        <g filter="url(#filter2_f_2393_4260)">
          <path
            d="M271.5 424C366.217 424 443 347.217 443 252.5C443 157.783 366.217 81 271.5 81C176.783 81 100 157.783 100 252.5C100 347.217 176.783 424 271.5 424Z"
            fill="#FF93EB"
            fill-opacity="0.1"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_2393_4260"
          x="137"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <filter
          id="filter1_f_2393_4260"
          x="83"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <filter
          id="filter2_f_2393_4260"
          x="0"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <clipPath id="clip0_2393_4260">
          <rect width="680" height="505" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
