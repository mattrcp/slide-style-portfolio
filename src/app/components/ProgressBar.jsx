"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ProgressBar({ totalSegments, isExpanded, className }) {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const numberRefs = useRef([]);

  useEffect(() => {
    const mainContainer =
      document.getElementById("main-scroll-container") ||
      document.documentElement;
    if (!mainContainer) return;

    const updateScrollProgress = () => {
      let scrollTop, scrollHeight, clientHeight;

      if (mainContainer === document.documentElement) {
        scrollTop = window.scrollY;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = window.innerHeight;
      } else {
        scrollTop = mainContainer.scrollTop;
        scrollHeight = mainContainer.scrollHeight;
        clientHeight = mainContainer.clientHeight;
      }

      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    const target =
      mainContainer === document.documentElement ? window : mainContainer;
    target.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      target.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const segmentIndex = Math.min(
    Math.floor(scrollProgress * totalSegments),
    totalSegments - 1
  );
  const activeSegment = segmentIndex + 1;

  useEffect(() => {
    if (numberRefs.current[segmentIndex]) {
      const numberElement = numberRefs.current[segmentIndex];
      const container = numberElement.closest(".progress-bar-container");
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const numberRect = numberElement.getBoundingClientRect();

      const relativeLeft =
        numberRect.left - containerRect.left + numberRect.width / 2;
      setIndicatorPosition(relativeLeft);
    }
  }, [segmentIndex, totalSegments]);

  // --- MANUAL COLOR LOGIC HERE ---
  // You can now set specific hex codes for Expanded vs Collapsed states
  const getTextColor = () => {
    // State 1: Expanded AND Dark Theme
    if (isExpanded && theme === "dark") {
      return "#FFFFFF"; // Manual color for Dark/Expanded
    }
    // State 2: Expanded AND Light Theme (assuming 'theme' is not 'dark' means it's 'light')
    else if (isExpanded) {
      return "#fff"; // Manual color for Light/Expanded
    }
    // State 3: Collapsed AND Dark Theme (isExpanded is false)
    else if (theme === "dark") {
      return "#fff"; // Manual color for Dark/Collapsed (I changed this to be distinct)
    }
    // State 4: Collapsed AND Light Theme (isExpanded is false AND theme is not 'dark')
    else {
      return "#333333";
    }
  };

  const getDividerColor = () => {
    // State 1: Expanded AND Dark Theme
    if (isExpanded && theme === "dark") {
      return "#FFFFFF"; // Manual color for Dark/Expanded
    }
    // State 2: Expanded AND Light Theme (assuming 'theme' is not 'dark' means it's 'light')
    else if (isExpanded) {
      return "#fff"; // Manual color for Light/Expanded
    }
    // State 3: Collapsed AND Dark Theme (isExpanded is false)
    else if (theme === "dark") {
      return "#fff"; // Manual color for Dark/Collapsed (I changed this to be distinct)
    }
    // State 4: Collapsed AND Light Theme (isExpanded is false AND theme is not 'dark')
    else {
      return "#333333";
    }
  };

  const textColor = getTextColor();
  const dividerColor = getDividerColor();

  return (
    <div
      className={`flex relative justify-between items-center px-3 w-full h-8 pointer-events-none progress-bar-container ${className}`}
    >
      <div className="flex relative z-10 gap-2 justify-between items-center w-full">
        {Array.from({ length: totalSegments }).map((_, i) => {
          const segmentNumber = i + 1;
          const isLast = i === totalSegments - 1;

          return (
            <div
              key={i}
              className={`flex gap-2 items-center ${
                isLast ? "w-auto" : "w-full"
              }`}
            >
              <motion.span
                ref={(el) => (numberRefs.current[i] = el)}
                className="w-8 text-xs font-medium text-center font-satoshi"
                animate={{
                  color: textColor,
                  fontWeight: activeSegment === segmentNumber ? 700 : 400,
                  opacity: activeSegment === segmentNumber ? 1 : 0.6,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {segmentNumber}
              </motion.span>

              {!isLast && (
                <div className="flex justify-evenly w-full">
                  {[...Array(4)].map((_, idx) => (
                    <motion.span
                      key={idx}
                      className="text-[10px]"
                      animate={{
                        color: dividerColor,
                        opacity: 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      |
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <motion.div
        className="absolute -bottom-2 w-[2px] h-3 z-20"
        style={{
          left: 0,
          transformOrigin: "center",
        }}
        animate={{
          x: `${indicatorPosition}px`,
          backgroundColor: "#FF083A",
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 25 },
          backgroundColor: { duration: 0.3 },
        }}
      />
    </div>
  );
}
