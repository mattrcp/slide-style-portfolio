"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personal } from "public/assets";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useEffect } from "react";
import Link from "next/link";

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
      duration: 0.3,
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
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const experiences = [
    {
      title: "Open to Work",
      //   company: "Current",
      date: "Current",
    },
    {
      title: "UI/UX Designer",
      company: "Upliftt",
      date: "Feb - Apr 2025",
    },
    {
      title: "UI/UX Designer",
      company: "Freelance",
      date: "Dec - Jan 2025",
    },
    {
      title: "Jr. Entrepreneurs In Residence",
      company: "Whatnot Startup Std.",
      date: "Jun - Feb 2022",
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
    { href: "https://www.youtube.com/", label: "Resume" },
    { href: "mailto:ratchapon.ngam@gmail.com", label: "Email" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 backdrop-blur-sm md:backdrop-blur-none  z-[998]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-2 md:top-12 w-full  l md:w-[60vw] p-2 right-0 h-full md:h-auto z-[999] overflow-visible"
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
              <div className="h-full px-2 overflow-y-auto md:px-6">
                <motion.div
                  className="flex flex-col gap-6"
                  variants={contentVariants}
                >
                  <div className="flex flex-col w-full gap-4 md:flex-row ">
                    <h1 className="  text-[clamp(20px,5vw,32px)] leading-tight  font-bold text-primaryText font-satoshi ">
                      Hello again! I'm Matt, UXUI designer who loves to blend
                      minimalism and modern design in website and app design. I
                      love to create a design is functional and easy to use
                      blending with innovation ready to push the industry
                      forward.
                    </h1>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-full h-full md:w-1/3">
                      <Image
                        src={personal}
                        alt="personal"
                        className="w-full h-full"
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
                            <li key={index}>
                              {" "}
                              {/* Add a key for list items */}
                              <div className="flex flex-row items-center justify-between gap-6 md:items-baseline">
                                {" "}
                                {/* Changed items-center to items-baseline for better alignment */}
                                <p
                                  className={`flex-shrink-0 w-full md:w-auto text-nowrap overflow-hidden text-ellipsis ${
                                    index === 0
                                      ? "text-[#295D0E] font-semibold"
                                      : "text-primaryText"
                                  } max-w-[calc(50%_-_4rem)]`}
                                >
                                  {" "}
                                  {/* Truncates long titles */}
                                  {experience.title}
                                </p>
                                <div className="h-0.5 flex-grow bg-primaryGrey min-w-[1rem]" />{" "}
                                {/* flex-grow makes it fill space, min-w ensures it's always visible */}
                                <p className="flex-shrink-0 w-full md:w-auto text-sm text-end text-secondaryText text-nowrap overflow-hidden text-ellipsis max-w-[calc(50%_-_4rem)]">
                                  {" "}
                                  {/* Truncates long company/date */}
                                  {experience.company} ({experience.date})
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
                        <div
                          className="flex flex-row items-center justify-center gap-2 text-primaryText"
                          key={index}
                        >
                          <Link
                            href={link.href}
                            className="text-base font-satoshi"
                          >
                            {link.label}
                          </Link>
                          <IconArrowUpRight
                            stroke={2}
                            className="w-4 h-4 md:w-5 md:h-5"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
