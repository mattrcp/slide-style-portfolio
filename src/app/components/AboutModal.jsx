"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personal } from "public/assets";
import { calendar } from "public/upliftt";
import { IconArrowUpRight } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react"; // Import useRef
import Link from "next/link";

// Framer Motion Variants (no changes here, they are fine)
const modalVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.4, // Changed from 1s to 0.4s for consistency with modal entry
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3, // Changed from 1s to 0.3s for consistency with overlay entry
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function AboutModal({ isOpen, onClose }) {
  const [hoveredImageSrc, setHoveredImageSrc] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnyExperienceHovered, setIsAnyExperienceHovered] = useState(false);

  const modalScrollRef = useRef(null); // Ref for the main scrollable modal content area
  const touchStartY = useRef(0); // Use ref instead of let variable

  // Handle escape key and comprehensive scroll lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Store original body scroll position
    let originalScrollY = 0;

    if (isOpen) {
      // Store current scroll position
      originalScrollY = window.scrollY;

      document.addEventListener("keydown", handleEscape);

      // Apply comprehensive body scroll lock
      document.body.style.position = "fixed";
      document.body.style.top = `-${originalScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      // Prevent scroll on html element too
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.touchAction = "none";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);

      // Restore body styles
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      // Restore html styles
      document.documentElement.style.overflow = "";
      document.documentElement.style.touchAction = "";

      // Restore scroll position
      if (originalScrollY > 0) {
        window.scrollTo(0, originalScrollY);
      }
    };
  }, [isOpen, onClose]);

  // --- New useEffect for Mouse Tracking ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isAnyExperienceHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isAnyExperienceHovered]);

  const handleItemMouseEnter = (imageSrc) => {
    setHoveredImageSrc(imageSrc);
    setIsAnyExperienceHovered(true);
  };

  const handleItemMouseLeave = () => {
    setHoveredImageSrc(null);
    setIsAnyExperienceHovered(false);
  };

  // Touch event handlers for improved mobile scroll behavior
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!modalScrollRef.current) return;

    const currentY = e.touches[0].clientY;
    const delta = touchStartY.current - currentY;

    const { scrollTop, scrollHeight, clientHeight } = modalScrollRef.current;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // Small tolerance

    // Allow scrolling within the modal, but prevent overscroll
    if ((delta < 0 && isAtTop) || (delta > 0 && isAtBottom)) {
      e.preventDefault();
    }

    // Update touch position for next calculation
    touchStartY.current = currentY;
  };

  // Your experiences data
  const experiences = [
    {
      title: "Open to Work",
      date: "Current",
    },
    {
      title: "UI/UX Designer Intern",
      company: "Upliftt",
      date: "Feb - Apr 2025",
      image: "/assets/upliftt.png",
    },
    {
      title: "Freelance UI/UX Designer",
      company: "Upliftt", // Assuming this should be Freelance, not Upliftt based on your file structure
      date: "Dec - Jan 2025",
      image: "/assets/dashboard.png",
    },
    {
      title: "Jr. Entrepreneurs In Residence",
      company: "Whatnot Startup Std.",
      date: "Jun - Feb 2022",
      image: "/assets/askurp.png",
    },
  ];

  const links = [
    { href: "https://dribbble.com/ratchapon", label: "Dribble" },
    {
      href: "https://www.instagram.com/tooboredto.design/",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/matt-ngamdan-b251171a1/",
      label: "LinkedIn",
    },
    {
      href: "https://drive.google.com/file/d/127RnFN0WAj9nbaBzpidA9xSeUWODGFg9/view?usp=sharing",
      label: "Resume",
    },
    { href: "mailto:ratchapon.ngam@gmail.com", label: "Email" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 backdrop-blur-sm md:backdrop-blur-none overflow-visible bg-black/30 z-[999]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 md:inset-auto md:top-12 md:right-6 md:w-[60vw] md:h-auto z-[999] 
                       flex items-center justify-center md:block p-2 md:p-0"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={modalScrollRef}
              className="w-full max-w-full md:w-full max-h-[97vh] md:max-h-[calc(100vh-6rem)] md:h-full
                         overflow-y-auto overscroll-contain
                         rounded-lg md:rounded-xl bg-primaryBg border-border border-[1px]
                         touch-pan-y relative md:m-2"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute z-10 flex items-center justify-center w-8 h-8 transition-colors rounded-full top-4 right-4 md:hidden bg-swapBg"
                aria-label="Close modal"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primaryBg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Content */}
              <div className="px-4 py-6 md:px-6 md:h-full">
                <motion.div
                  className="flex flex-col gap-6"
                  variants={contentVariants}
                >
                  <div className="flex flex-col w-full gap-4 md:flex-row ">
                    <h1 className="text-[clamp(20px,5vw,32px)] leading-tight font-semibold text-primaryText font-satoshi ">
                      Hello again! I'm Matt — a UX/UI designer who blends
                      minimalism and modern aesthetics to craft functional,
                      user-friendly websites and apps.{" "}
                      <span className="underline decoration-wavy underline-offset-2 decoration-highlightBlue">
                        I’m passionate about pushing boundaries with innovative
                        design and product that moves the industry forward.
                      </span>
                    </h1>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-shrink-0 w-full h-48 md:w-1/4 md:h-auto">
                      <Image
                        src={personal}
                        alt="personal"
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>

                    <motion.div
                      className="grid w-full grid-cols-1 gap-6 "
                      variants={contentVariants}
                    >
                      <div className="flex flex-col justify-start w-full gap-4 ">
                        <h3 className="text-xl font-semibold text-primaryText font-satoshi">
                          Experience
                        </h3>
                        <ul className="flex flex-col w-full gap-2 pt-1 md:gap-4">
                          {experiences.map((experience, index) => (
                            <li
                              key={index}
                              className="relative"
                              onMouseEnter={() =>
                                experience.image &&
                                handleItemMouseEnter(experience.image)
                              }
                              onMouseLeave={handleItemMouseLeave}
                            >
                              <div className="flex flex-row items-center justify-between gap-6 md:items-baseline">
                                <p
                                  className={`flex-shrink-0 w-full md:w-auto text-nowrap overflow-hidden text-ellipsis ${
                                    index === 0
                                      ? "text-highlightBlue font-semibold"
                                      : "text-primaryText"
                                  } max-w-[calc(50%_-_4rem)]`}
                                >
                                  {experience.title}
                                </p>
                                <div className="h-0.5 flex-grow bg-primaryGrey min-w-[1rem]" />
                                <p className="flex-shrink-0 w-full md:w-auto text-sm text-end text-secondaryText text-nowrap overflow-hidden text-ellipsis max-w-[calc(50%_-_4rem)]">
                                  {experience.company
                                    ? `${experience.company} (${experience.date})`
                                    : experience.date}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-start w-full gap-4 ">
                    <h3 className="text-xl font-semibold text-primaryText font-satoshi">
                      Connect with me
                    </h3>
                    <div className="flex flex-row flex-wrap items-start justify-between w-full gap-2 md:gap-8">
                      {links.map((link, index) => (
                        <div className="" key={index}>
                          <Link
                            href={link.href}
                            className="flex flex-row items-center justify-center gap-2 text-base font-satoshi text-primaryText"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <IconArrowUpRight
                              stroke={2}
                              className="w-4 h-4 md:w-5 md:h-5"
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Hover Image (Rendered Outside Modal's Scroll) */}
          <AnimatePresence>
            {isAnyExperienceHovered && hoveredImageSrc && (
              <motion.div
                key="hover-image"
                className="fixed pointer-events-none z-[1000] "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  left: mousePosition.x + 20,
                  top: mousePosition.y + 20,
                }}
              >
                <Image
                  src={hoveredImageSrc}
                  alt="Experience Detail"
                  width={200}
                  height={150}
                  className={`w-full border border-border rounded-lg shadow-xl  bg-primaryBg ${
                    hoveredImageSrc === "/assets/upliftt.png"
                      ? "h-[30vh]"
                      : "h-auto"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
