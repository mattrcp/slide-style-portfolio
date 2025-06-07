"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useTheme } from "../context/ThemeContext";
import TimeDisplay from "./TimeDisplay";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About", isModal: true },
  { href: "mailto:ratchapon.ngam@gmail.com", label: "Contact" },
  // { href: "/play", label: "Play" },
];

const navAnimation = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
      // staggerChildren: 0.15,
      // delayChildren: 0.3,
    },
  },
};

const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
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
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const mobileNavItemAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Navigation() {
  const pathname = usePathname();
  const { triggerTransition, isAnimating } = usePageTransition();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavigation = async (e, href, isModal = false) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (isModal) {
      if (href === "/about") {
        setIsAboutModalOpen(true);
      } else if (href === "/contact") {
        setIsContactModalOpen(true);
      }
    } else if (href.startsWith("mailto:")) {
      // Handle email links
      window.location.href = href;
    } else if (href.includes("#") && href !== "/") {
      // Handle anchor links like /#work
      if (!isAnimating) {
        const [path, anchor] = href.split("#");
        if (path === "" || path === "/") {
          // Same page anchor - scroll to element
          if (pathname === "/") {
            const element = document.getElementById(anchor);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          } else {
            // Navigate to home page with anchor
            await triggerTransition("/");
            setTimeout(() => {
              const element = document.getElementById(anchor);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 700); // Wait for page transition
          }
        } else {
          await triggerTransition(href);
        }
      }
    } else {
      // Regular page navigation
      if (!isAnimating) {
        await triggerTransition(href);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="relative w-screen">
        {/* Desktop Navigation */}
        <motion.nav
          className={`md:flex hidden flex-row gap-2 justify-center items-center py-4 w-full h-auto md:py-6 px-4 z-[1000] fixed
           `}
          //  ${
          //   pathname === "/" ? "fixed" : "block"
          // }

          variants={navAnimation}
          initial="hidden"
          animate="visible"
          style={{ mixBlendMode: "exclusion" }}
        >
          <span
            className={`${
              pathname === "/contact" ? "md:hidden " : "md:block"
            } w-full  text-center hidden md:block text-white`}
          >
            <TimeDisplay
              className="text-sm"
              showTimeZone={true}
              showPulse={true}
            />
          </span>
          <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
            {navLinks.map(({ href, label, isModal }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavigation(e, href, isModal)}
                className={`text-left  font-zodiak italic font-medium capitalize text-sm pl-0   transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-auto hover:text-primaryText text-white ${
                  isActive(href) ? "font-bold" : " font-medium"
                } `}
              >
                {label}
              </Link>
            ))}
          </div>{" "}
          <div className="flex items-center justify-end w-full">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme button"
              className="grid place-items-center"
            >
              <div className={`w-4 h-4 bg-white rounded-full`}></div>
            </button>
          </div>
        </motion.nav>

        {/* Mobile Navigation */}
        <div
          className="md:hidden w-screen py-2 px-4
         fixed top-0 left-0 right-0 z-[1000] bg-transparent"
        >
          <div className="flex items-center justify-between w-full ">
            <TimeDisplay
              className="text-sm"
              style={{ mixBlendMode: "exclusion" }}
              showTimeZone={false}
              showPulse={true}
            />

            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="relative flex flex-col items-start justify-center h-10 px-4 bg-black rounded-full w-14"
            >
              <motion.span
                className="w-full h-0.5 bg-white mb-1.5 transform transition-all duration-300"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
              />
              <motion.span
                className="w-1/2 h-0.5 bg-white mb-1.5 transform transition-all duration-300"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-white transform transition-all duration-300"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed w-screen h-screen inset-0 bg-black/95 backdrop-blur-sm z-[999] md:hidden"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map(({ href, label, isModal }) => (
                  <motion.div key={href} variants={mobileNavItemAnimation}>
                    <Link
                      href={href}
                      onClick={(e) => handleNavigation(e, href, isModal)}
                      className={`text-white font-zodiak italic text-3xl font-medium capitalize transition-all duration-300 hover:text-gray-300 ${
                        isActive(href) ? "font-bold" : "font-medium"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={mobileNavItemAnimation}
                  className="flex items-center gap-4 mt-8"
                >
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme button"
                    className="grid place-items-center"
                  >
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </button>
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
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
