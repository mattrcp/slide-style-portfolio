"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useTheme } from "../context/ThemeContext";
import TimeDisplay from "./TimeDisplay"; // Keep if used elsewhere, otherwise can be removed
import AboutModal from "./AboutModal";
// Removed ContactModal import as it's no longer needed
import { IconSun, IconMoon } from "@tabler/icons-react";
import Image from "next/image";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About", isModal: true },
  { href: "mailto:ratchapon.ngam@gmail.com", label: "Contact" }, // Direct mailto link
];

const navAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
};

const mobileMenuAnimation = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
  },
};

const mobileNavItemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Navigation() {
  const pathname = usePathname();
  const { triggerTransition, isAnimating } = usePageTransition();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // State to track which item should be highlighted
  const [highlightedItem, setHighlightedItem] = useState("/");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Helper to determine if a link is active
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    if (path === "/#work" && pathname === "/") return true; // Handle anchor links
    return false;
  };

  const handleNavigation = async (e, href, isModal = false) => {
    // If it's a mailto link, let the browser handle it directly
    if (href.startsWith("mailto:")) {
      return;
    }

    e.preventDefault();
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    if (isModal) {
      if (href === "/about") setIsAboutModalOpen(true);
    } else if (href.includes("#") && href !== "/") {
      if (!isAnimating) {
        const [path, anchor] = href.split("#");
        if (path === "" || path === "/") {
          if (pathname === "/") {
            const element = document.getElementById(anchor);
            if (element) element.scrollIntoView({ behavior: "smooth" });
          } else {
            await triggerTransition("/");
            setTimeout(() => {
              const element = document.getElementById(anchor);
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 700);
          }
        } else {
          await triggerTransition(href);
        }
      }
    } else {
      if (!isAnimating) await triggerTransition(href);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Get the current item to highlight (hovered item takes priority, then active item)
  const currentHighlight = hoveredItem || highlightedItem;

  // Effect to set the initial highlight position on mount or when pathname changes
  useEffect(() => {
    // Always default to logo unless there's a specific active page
    let currentActiveHref = "/"; // Always default to logo

    // Only override if we're specifically on a page that matches a nav link (not just any route)
    for (const link of navLinks) {
      if (isActive(link.href) && pathname !== "/") {
        currentActiveHref = link.href;
        break;
      }
    }

    setHighlightedItem(currentActiveHref);
  }, [pathname]);

  // Handle window resize to recalculate highlight position
  useEffect(() => {
    // No longer needed since we're not calculating positions
  }, []);

  return (
    <>
      <header className="relative w-screen">
        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex fixed z-[990] top-6 w-full items-center justify-center"
          variants={navAnimation}
          initial="hidden"
          animate="visible"
        >
          {/* Links container */}
          <div className="flex overflow-hidden relative gap-0 items-center p-2 rounded-full drop-shadow-sm bg-secondaryBg parent-div-with-inner-shadow">
            <div className="flex relative gap-0 items-center">
              {/* Logo link - first */}
              <div
                onMouseEnter={() => setHoveredItem("/")}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                {currentHighlight === "/" && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 z-10 rounded-full drop-shadow-sm bg-primaryBg"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      duration: 0.3,
                    }}
                  />
                )}
                <Link
                  href="/"
                  onClick={(e) => handleNavigation(e, "/")}
                  className="block relative z-20 px-5 py-3 w-full h-full"
                >
                  <Svg className={`w-auto h-4 text-highlightBlue`} />
                </Link>
              </div>

              {/* Navigation links */}
              {navLinks.map(({ href, label, isModal }) => {
                // Handle mailto links
                if (href.startsWith("mailto:")) {
                  return (
                    <div
                      key={href}
                      onMouseEnter={() => setHoveredItem(href)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="relative"
                    >
                      {currentHighlight === href && (
                        <motion.div
                          layoutId="nav-highlight"
                          className="absolute inset-0 z-10 rounded-full drop-shadow-sm bg-primaryBg"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                            duration: 0.3,
                          }}
                        />
                      )}
                      <a
                        href={href}
                        className="block relative z-20 px-5 py-2 text-sm font-medium capitalize font-satoshi text-ternaryText hover:text-primaryText"
                      >
                        {label}
                      </a>
                    </div>
                  );
                }

                const active = isActive(href);
                return (
                  <div
                    key={href}
                    onMouseEnter={() => setHoveredItem(href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative"
                  >
                    {currentHighlight === href && (
                      <motion.div
                        layoutId="nav-highlight"
                        className="absolute inset-0 z-10 rounded-full drop-shadow-sm bg-primaryBg"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          duration: 0.3,
                        }}
                      />
                    )}
                    <Link
                      href={href}
                      onClick={(e) => handleNavigation(e, href, isModal)}
                      className={`block relative z-20 px-5 py-2 text-sm font-medium capitalize font-satoshi text-ternaryText hover:text-primaryText`}
                    >
                      {label}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <AnimatePresence mode="wait" initial={false}>
              <div className="px-1">
                <motion.button
                  key={theme}
                  onClick={toggleTheme}
                  className="flex overflow-hidden relative z-30 justify-center items-center w-8 h-8"
                  // initial={{ y: theme === "dark" ? -20 : 20 }}
                  // animate={{ y: 0 }}
                  // exit={{ y: theme === "dark" ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <IconMoon className="w-5 h-5 text-ternaryText hover:text-primaryText" />
                  ) : (
                    <IconSun className="w-5 h-5 text-ternaryText hover:text-primaryText" />
                  )}
                </motion.button>
              </div>
            </AnimatePresence>
          </div>
        </motion.nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden fixed top-2 left-0 right-0 z-[990] px-4 py-2">
          <div className="flex justify-center items-center w-full">
            <div className="flex gap-4 justify-between items-center px-2 py-2 rounded-full drop-shadow-sm w-fit bg-secondaryBg parent-div-with-inner-shadow">
              <Link
                href="/"
                onClick={(e) => handleNavigation(e, "/")}
                className="block relative z-20 px-3 py-2"
              >
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  className="object-contain w-auto h-5"
                />
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="relative flex flex-col items-start justify-center h-10 px-4 bg-primaryBg z-[995] rounded-full w-14"
              >
                <motion.span
                  className="w-full h-0.5 bg-swapBg mb-1.5"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="w-1/2 h-0.5 bg-swapBg mb-1.5"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-swapBg"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed w-screen h-screen  inset-0 bg-primaryBg backdrop-blur-sm z-[985] md:hidden"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-8 justify-center items-center h-full">
                {navLinks.map(({ href, label, isModal }) => (
                  <motion.div key={href} variants={mobileNavItemAnimation}>
                    {href.startsWith("mailto:") ? (
                      <a
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl capitalize transition duration-300 font-regular text-ternaryText font-satoshi"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        onClick={(e) => handleNavigation(e, href, isModal)}
                        className={`text-3xl capitalize transition duration-300 text-ternaryText font-satoshi`}
                      >
                        {label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={mobileNavItemAnimation} className="mt-8">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.button
                      key={theme}
                      onClick={toggleTheme}
                      className="flex justify-center items-center w-6 h-6"
                      transition={{ duration: 0.3 }}
                    >
                      {theme === "dark" ? (
                        <IconMoon className="w-6 h-6 text-secondaryText" />
                      ) : (
                        <IconSun className="w-6 h-6 text-secondaryText" />
                      )}
                    </motion.button>
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
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
