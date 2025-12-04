"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TableOfContents = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolledPastThreshold = window.pageYOffset > 300;

      // Calculate if the user has reached the bottom of the page
      // Buffer of 20px
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      // Show only if scrolled past 300px AND not at the bottom
      if (scrolledPastThreshold && !isAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Check on mount

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Offset matches the 50px requirement
      // If you have a fixed header, you may need to increase this value
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="z-[999] hidden gap-6 px-6 py-4 rounded-full shadow-lg md:flex bg-swapBg"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium duration-200 ease-in-out text-swapText font-satoshi hover:font-semibold cursor-trigger"
              data-cursor-text={item.label.toUpperCase()}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
