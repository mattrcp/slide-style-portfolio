"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import ProgressBar from "./ProgressBar";
import { useTheme } from "../context/ThemeContext";

import {
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconFileCv,
} from "@tabler/icons-react";

// Animation Variants
const navAnimation = {
  hidden: {
    opacity: 0,
    y: -20, // Reduced from -100 to avoid "heavy" falling feeling
    filter: "blur(5px)", // Adds a soft optical entrance
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // Softer "easeOut"
      delay: 0.6, // Nav enters first to "set the stage"
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.6, delay },
      y: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay,
      },
    },
  }),
  exit: (delay = 0) => ({
    opacity: 0,
    y: -20,
    transition: {
      opacity: { duration: 0.4, delay },
      y: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4,
        delay,
      },
    },
  }),
};

export default function Navbar({ totalSegments }) {
  const pathname = usePathname();
  const navRef = useRef(null); // Ref for click-outside detection

  // Local state
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [ready, setReady] = useState(false);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
      setReady(true);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Compute responsive width for animation
  const computedWidth = (() => {
    if (isMobileMenuOpen) return "90vw";

    if (windowWidth < 768) return "90vw";
    if (windowWidth < 1024) return "50vw";
    if (windowWidth < 1440) return "40vw";
    return "30vw";
  })();

  // Click Outside to Close Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Delay progress bar reappearance after menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      const timer = setTimeout(() => setShowProgress(true), 400);
      return () => clearTimeout(timer);
    } else {
      setShowProgress(false);
    }
  }, [isMobileMenuOpen]);

  // Track scroll position
  useEffect(() => {
    const mainContainer = document.getElementById("main-scroll-container");
    if (!mainContainer) return;

    const handleScroll = () => {
      const scrollTop = mainContainer.scrollTop;
      setIsExpanded(scrollTop > 50);
    };

    mainContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      mainContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const menuItems = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const projects = [
    { label: "Upliftt", href: "/upliftt" },
    { label: "Teammie", href: "/teammie" },
    { label: "Casetify", href: "/casetify" },
    { label: "GradMatch", href: "/gradmatch" },
  ];

  const links = [
    {
      href: "mailto:ratchapon.ngam@gmail.com",
      label: "Email",
      logo: <IconMail stroke={2} />,
    },
    {
      href: "https://drive.google.com/file/d/1ByQSdo7pawVR3PmdSTslC5VGNi-N7nnS/view?usp=sharing",
      label: "Resume",
      logo: <IconFileCv stroke={2} />,
    },
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
    {
      href: "https://x.com/mattjustbored",
      label: "Twitter",
      logo: <IconBrandTwitter stroke={2} />,
    },
  ];

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[980] bg-black/10 backdrop-blur-[1px]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header className="relative w-screen pointer-events-none z-[990]">
        <motion.nav
          className="flex fixed z-[990] top-6 w-full items-center justify-center flex-col pointer-events-auto"
          variants={navAnimation}
          initial="hidden"
          animate="visible"
        >
          {/* Main Container - Added ref={navRef} for click detection */}
          <motion.div
            ref={navRef}
            className="flex overflow-visible relative flex-col gap-0 justify-start items-start bg-black rounded-lg"
            animate={{
              width: computedWidth,
              height: isMobileMenuOpen
                ? "500px"
                : isExpanded
                  ? "110px"
                  : "56px",
              padding: isExpanded ? "0 8px 0 8px" : "0 8px 0 8px",
            }}
            transition={{
              width: {
                delay: isMobileMenuOpen ? 0.2 : 0.4,
              },
              height: {
                delay: isMobileMenuOpen ? 0.3 : 0.3,
              },
              padding: {
                delay: isMobileMenuOpen ? 0.4 : 0.2,
              },
            }}
          >
            {/* Nav Controls */}
            <div className="flex overflow-hidden relative flex-shrink-0 gap-0 justify-between items-center w-full h-[56px]">
              {/* THEME TOGGLE */}
              <div className="relative z-20 w-full h-10">
                <button
                  onClick={toggleTheme}
                  className="flex justify-center items-center w-14 h-full rounded-md transition-colors bg-[#2471F5] hover:opacity-95 duration-150 ease-in-out"
                >
                  {theme === "dark" ? (
                    <IconMoon size={18} className="text-white" />
                  ) : (
                    <IconSun size={18} className="text-white" />
                  )}
                </button>
              </div>

              {/* LOGO */}
              <Link
                href="/#hero"
                onMouseEnter={() => setHoveredItem("/")}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex relative justify-center items-center w-full h-10 group"
              >
                <div className="overflow-hidden relative z-20">
                  <Svg className="w-auto h-4 text-white" />
                </div>
              </Link>

              {/* MENU TOGGLE */}
              <div className="flex justify-end w-full h-10">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex relative z-20 flex-row gap-2 justify-end items-center pl-2 h-10 rounded-lg duration-150 ease-in-out cursor-pointer w-fit group hover:bg-gray-900"
                >
                  <span className="font-medium text-white font-satoshi h-fit w-fit">
                    Menu
                  </span>

                  <div className="relative z-20 flex flex-col items-center overflow-visible justify-center w-10 h-10 space-y-1.5">
                    <motion.span
                      className="w-6 h-0.5 bg-white"
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 6 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                    <motion.span
                      className="w-6 h-0.5 bg-white"
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className="w-6 h-0.5 bg-white"
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -10 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* === PROGRESS BAR === */}
            <AnimatePresence mode="wait">
              {showProgress && isActive("/") && (
                <motion.div
                  key="progress-bar"
                  className="w-full h-[40px] z-5"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      opacity: { duration: 0.2 },
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.4 },
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <ProgressBar
                    totalSegments={totalSegments}
                    isExpanded={isExpanded}
                    className=""
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* === MENU CONTENT === */}
            <AnimatePresence mode="wait">
              {isMobileMenuOpen && (
                <motion.div
                  className="flex overflow-x-hidden overflow-y-hidden flex-col flex-1 gap-4 justify-start items-start p-2 pb-4 w-full h-full md:flex-row"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      opacity: { duration: 1, delay: 0.5 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      opacity: { duration: 0.5, delay: 0.2 },
                    },
                  }}
                >
                  {/* Page Section */}
                  <motion.div
                    className="flex flex-col gap-4 md:gap-8 w-full bg-[#151515] rounded-lg h-full p-6  "
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={0.2}
                  >
                    <span className="text-sm text-white font-satoshi">
                      Pages
                    </span>
                    {menuItems.map((item, i) => (
                      <motion.div key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block cursor-pointer group"
                        >
                          <div className="overflow-hidden h-8 md:h-10">
                            <div className=" text-[clamp(24px,4.5vw,32px)] md:text-[36px] font-regular text-gray-200 whitespace-nowrap group-hover:-translate-y-1/2 transition-transform duration-300 ease-out ">
                              <span className="block leading-none">
                                {item.label}
                              </span>
                              <span className="hidden pb-2 leading-none md:block text-highlightBlue">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Project Section */}
                  <motion.div
                    className="hidden flex-col gap-4 p-6 w-full md:gap-8 sm:flex"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={0.3}
                  >
                    <span className="text-sm text-white font-satoshi">
                      Case Studies
                    </span>
                    {projects.map((item, i) => (
                      <div key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block cursor-pointer group"
                        >
                          <div className="overflow-hidden h-8 md:h-10">
                            <div className=" text-[clamp(24px,4.5vw,32px)] md:text-[36px] font-regular text-gray-200 whitespace-nowrap group-hover:-translate-y-1/2 transition-transform duration-300 ease-out ">
                              <span className="block leading-none">
                                {item.label}
                              </span>
                              <span className="hidden pb-2 leading-none md:block text-highlightBlue">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </motion.div>

                  {/* Links Section */}
                  <motion.div
                    className="flex gap-4 justify-end items-center w-full h-full"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={0.4}
                  >
                    <div className="grid grid-cols-2 gap-2 items-end w-full h-full">
                      {links.map((link, index) => (
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex flex-row gap-4 justify-start md:justify-end cursor-pointer items-start p-4 w-full h-full text-white bg-[#151515] rounded-lg transition-all duration-150 ease-out hover:bg-gray-900 hover:text-white"
                          key={index}
                        >
                          <span className="">{link.logo}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.nav>
      </header>
    </>
  );
}

export const Svg = ({ className = "" }) => {
  return (
    <svg
      width="45"
      height="16"
      viewBox="0 0 45 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.5825 0C26.7148 0 27.7652 0.262569 28.6559 0.869978C29.5427 1.47478 30.0948 2.30118 30.4419 3.12426C31.0818 4.64209 31.158 6.52977 31.2267 7.89416C31.3076 9.4978 31.3797 10.5718 31.6625 11.2846C31.7784 11.5769 31.8793 11.6626 31.9171 11.6895C31.9456 11.7099 32.0908 11.8095 32.5338 11.8095C33.3742 11.8095 33.8656 11.504 34.3053 10.9407C34.8341 10.263 35.2425 9.24759 35.6537 7.91592C35.8261 7.35742 36.0112 6.69327 36.2148 6.02251L34.4184 5.20815L34.3216 5.16127C33.339 4.65423 32.915 3.45737 33.3752 2.43583C33.8354 1.41434 35.0109 0.942769 36.0395 1.34747L36.1387 1.38951L38.0117 2.23847C38.6252 1.54916 39.4819 0.980982 40.6814 0.906622C41.8327 0.83527 42.8238 1.71371 42.8949 2.86868C42.927 3.38912 42.7662 3.8765 42.4751 4.2619L43.771 4.84952L43.8678 4.89639C44.8504 5.40342 45.2743 6.60014 44.8142 7.62165C44.3392 8.67614 43.1018 9.14469 42.0507 8.66815L40.0576 7.76451C39.935 8.18494 39.8014 8.64583 39.6439 9.15588C39.2219 10.5227 38.6341 12.1918 37.5945 13.524C36.4657 14.9704 34.8162 16 32.5338 16C31.4153 16 30.3743 15.7306 29.4971 15.1051C28.6292 14.4862 28.1047 13.6492 27.7814 12.8344C27.1857 11.333 27.1229 9.4545 27.055 8.10584C26.9749 6.51785 26.8884 5.45313 26.5947 4.7567C26.475 4.47273 26.3677 4.37642 26.3075 4.33538C26.2512 4.29695 26.0668 4.19048 25.5825 4.19048C25.1013 4.19049 24.8978 4.29589 24.8158 4.35026C24.7271 4.40914 24.5993 4.52991 24.4572 4.83278C24.1143 5.5637 23.978 6.63989 23.783 8.25242C23.6157 9.63633 23.3944 11.5329 22.5798 13.0523C22.141 13.8707 21.5022 14.645 20.5713 15.1992C19.6438 15.7514 18.5693 16.0001 17.3919 16C16.2224 15.9999 15.1361 15.754 14.2151 15.1568C13.2816 14.5515 12.7063 13.7074 12.3583 12.8473C11.7282 11.2898 11.7458 9.35504 11.7336 8.01897C11.7189 6.41051 11.6739 5.39752 11.4034 4.74851C11.3019 4.50494 11.2071 4.42021 11.1321 4.37258C11.0428 4.3158 10.785 4.19049 10.1715 4.19048C9.56449 4.19048 9.25539 4.31349 9.09972 4.40588C8.95031 4.49457 8.80452 4.63617 8.65823 4.91536C8.3005 5.59809 8.14678 6.64219 7.98534 8.21466C7.8482 9.55041 7.69882 11.438 7.01559 12.9328C6.64373 13.7464 6.07211 14.5561 5.17862 15.1468C4.28146 15.7399 3.22964 16 2.08858 16C0.93509 16 0 15.0619 0 13.9048C9.48054e-08 12.7476 0.93509 11.8095 2.08858 11.8095C2.59101 11.8095 2.80042 11.7006 2.88014 11.6479C2.96351 11.5928 3.08438 11.4797 3.21854 11.1862C3.54732 10.4668 3.66409 9.40194 3.83006 7.78534C3.97172 6.40543 4.15826 4.49714 4.96075 2.96559C5.39457 2.13765 6.03397 1.35662 6.97257 0.799479C7.90493 0.246057 8.98683 0 10.1715 0C11.3495 9.59403e-06 12.4405 0.243606 13.3674 0.832589C14.3086 1.43076 14.8975 2.2688 15.2574 3.13225C15.9097 4.69745 15.8983 6.63682 15.9106 7.98065C15.9254 9.5969 15.9632 10.6145 16.229 11.2714C16.3289 11.5184 16.4203 11.5971 16.4828 11.6376C16.5579 11.6864 16.797 11.8095 17.3921 11.8095C17.9794 11.8096 18.2824 11.6892 18.4396 11.5956C18.5933 11.5041 18.7464 11.3559 18.9011 11.0673C19.2736 10.3724 19.4466 9.31645 19.6363 7.74795C19.7983 6.40808 19.9818 4.5316 20.6778 3.04818C21.0551 2.24391 21.6268 1.44207 22.5116 0.855097C23.4032 0.263604 24.4474 9.335e-06 25.5825 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
