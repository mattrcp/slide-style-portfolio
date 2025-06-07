"use client"; // Important for client-side interactivity

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personal } from "public/assets";
import { calendar } from "public/upliftt"; // Ensure 'calendar' is a valid image path for all experiences that use it.
import { IconArrowUpRight } from "@tabler/icons-react";
import { useState, useEffect } from "react"; // Import useState and useEffect
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
      duration: 0.4,
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
      duration: 1,
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
  // --- New State for Hovered Image and Mouse Position ---
  const [hoveredImageSrc, setHoveredImageSrc] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnyExperienceHovered, setIsAnyExperienceHovered] = useState(false);

  // Handle escape key (Existing logic, no change)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // --- New useEffect for Mouse Tracking ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isAnyExperienceHovered) {
      // Only add listener if an experience is hovered to optimize
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    // Cleanup function: remove listener when component unmounts or hover state changes
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isAnyExperienceHovered]); // Dependency array: re-run effect if isAnyExperienceHovered changes

  // --- New Event Handlers for List Items ---
  const handleItemMouseEnter = (imageSrc) => {
    setHoveredImageSrc(imageSrc);
    setIsAnyExperienceHovered(true);
  };

  const handleItemMouseLeave = () => {
    setHoveredImageSrc(null);
    setIsAnyExperienceHovered(false);
  };

  // Your experiences data
  const experiences = [
    {
      title: "Open to Work",
      // company: "Current", // 'company' field is used, but this object doesn't have it.
      date: "Current",
      // No image for "Open to Work", so it won't pop up. Add `image: someImageSource` if you want it to.
    },
    {
      title: "UI/UX Designer Intern",
      company: "Upliftt",
      date: "Feb - Apr 2025",
      image: "/assets/upliftt.png", // Assuming 'calendar' is imported correctly and is a valid image source (e.g., /_next/static/media/...)
    },
    {
      title: "Freelance UI/UX Designer",
      company: "Upliftt",
      date: "Dec - Jan 2025",
      image: "/assets/dashboard.png", // Using 'personal' as an example for different image
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
    }, // This URL seems like a placeholder.
    { href: "mailto:ratchapon.ngam@gmail.com", label: "Email" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 backdrop-blur-sm md:backdrop-blur-none bg-black/30 z-[998]" // Added bg-black/30 for better overlay visibility
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-2 md:top-12 w-full md:w-[60vw] p-2 right-0 h-full md:h-auto z-[999] " // Changed overflow-visible to overflow-y-auto for modal content
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative h-full py-6 bg-primaryBg shadow-xl rounded-lg border-border border-[1px] ">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute z-10 flex items-center justify-center w-8 h-8 transition-colors rounded-full md:hidden bg-swapBg top-1 right-1"
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
              <div className="h-full px-2 md:px-6">
                {" "}
                {/* No overflow-y-auto here, it's on the motion.div wrapper */}
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
                    <div className="w-full h-full md:w-1/3">
                      <Image
                        src={personal}
                        alt="personal"
                        className="object-cover w-full h-full rounded-lg" // Added object-cover and rounded-lg
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
                              className="relative" // 'group:' is not a valid Tailwind class for parent-child hover. Remove it.
                              onMouseEnter={
                                () =>
                                  experience.image &&
                                  handleItemMouseEnter(experience.image) // Only trigger if image exists
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
                                  {/* Handle cases where company might be undefined, like "Open to Work" */}
                                  {experience.company
                                    ? `${experience.company} (${experience.date})`
                                    : experience.date}
                                </p>
                              </div>
                              {/* The hidden group-hover:absolute div below is no longer needed.
                                  The image will be rendered globally. */}
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
                            target="_blank" // Added target="_blank" for external links
                            rel="noopener noreferrer" // Security best practice for target="_blank"
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

          {/* --- Floating Hover Image (Rendered Outside Modal's Scroll) --- */}
          <AnimatePresence>
            {isAnyExperienceHovered && hoveredImageSrc && (
              <motion.div
                key="hover-image" // Add a key for AnimatePresence to track
                className="fixed pointer-events-none z-[1000] " // Higher z-index than modal, pointer-events-none is crucial
                initial={{ opacity: 0, scale: 0.8 }} // Initial state for the image pop-in
                animate={{ opacity: 1, scale: 1 }} // Animate to full size and visible
                exit={{ opacity: 0, scale: 0.8 }} // Animate out
                transition={{ duration: 0.2, ease: "easeOut" }} // Quick transition for the image
                style={{
                  left: mousePosition.x + 20, // Offset from mouse cursor
                  top: mousePosition.y + 20, // Offset from mouse cursor
                }}
              >
                <Image
                  src={hoveredImageSrc}
                  alt="Experience Detail"
                  width={200} // Adjust size as desired
                  height={150} // Adjust height to maintain aspect ratio, or use object-cover/contain
                  className={`w-full border border-border rounded-lg shadow-xl  bg-primaryBg ${
                    hoveredImageSrc === "/assets/upliftt.png"
                      ? "h-[30vh]"
                      : "h-auto"
                  }`} // Added styling for the image
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
