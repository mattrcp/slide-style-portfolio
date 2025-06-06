"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const TableOfContents = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  // Show table of contents when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // You can adjust '300' to whatever scroll distance you prefer
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scrolls the element into view at the top of the viewport
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }} // Initial state (hidden, slightly below)
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          exit={{ opacity: 0, y: 20 }} // Animate out when not visible
          className=" z-[998] hidden gap-6 px-6 py-4 rounded-full shadow-lg md:flex bg-swapBg" // Added fixed position and z-index
        >
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium duration-200 ease-in-out text-swapText font-satoshi hover:font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
