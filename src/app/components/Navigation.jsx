"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { usePageTransition } from "./PageTransitionProvider";
import { useTheme } from "../context/ThemeContext";
import TimeDisplay from "./TimeDisplay";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/play", label: "Play" },
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

export default function Navigation() {
  const pathname = usePathname();
  const { triggerTransition, isAnimating } = usePageTransition();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavigation = async (e, href) => {
    e.preventDefault();
    if (!isAnimating) {
      await triggerTransition(href);
    }
  };
  // const getButtonColor = () => {
  //   const now = new Date();
  //   const hour = now.getHours();
  //   return hour >= 9 && hour < 17 ? "bg-green-500" : "bg-pinkBg";
  // };

  return (
    <header className="relative w-screen">
      <motion.nav
        className={`md:flex hidden flex-row gap-2 justify-between items-start py-4 w-full h-auto md:py-6 px-4 z-[500]   fixed
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
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleNavigation(e, href)}
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
    </header>
  );
}
