"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [hoverType, setHoverType] = useState(""); // "project" or "link"

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      // Check if the element has the cursor-trigger class
      if (e.target.closest(".cursor-trigger")) {
        setIsHovering(true);

        // Check if it's a project card or a link
        const element = e.target.closest(".cursor-trigger");
        const isProjectCard = element.classList.contains("project-card-item");

        if (isProjectCard) {
          setHoverType("project");
          setCursorText("READ CASE STUDY");
        } else {
          setHoverType("link");
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
      setHoverType("");
    };

    // Reset cursor state when clicking (helps with navigation)
    const handleMouseDown = () => {
      // Small delay to allow for navigation to occur
      setTimeout(() => {
        setIsHovering(false);
        setCursorText("");
        setHoverType("");
      }, 50);
    };

    // Reset cursor state when page becomes hidden (navigation)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsHovering(false);
        setCursorText("");
        setHoverType("");
      }
    };

    // Reset cursor state when page loses focus
    const handleBlur = () => {
      setIsHovering(false);
      setCursorText("");
      setHoverType("");
    };

    // Reset cursor state when beforeunload event fires
    const handleBeforeUnload = () => {
      setIsHovering(false);
      setCursorText("");
      setHoverType("");
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Function to add event listeners to cursor-trigger elements
    const addEventListeners = () => {
      const cursorTriggers = document.querySelectorAll(".cursor-trigger");
      cursorTriggers.forEach((trigger) => {
        // Remove existing listeners to prevent duplicates
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
        // Add new listeners
        trigger.addEventListener("mouseenter", handleMouseEnter);
        trigger.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Add event listeners initially
    addEventListeners();

    // Use MutationObserver to watch for dynamically added elements
    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      // Clean up event listeners
      const cursorTriggers = document.querySelectorAll(".cursor-trigger");
      cursorTriggers.forEach((trigger) => {
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="opacity-75 custom-cursor"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      animate={{
        width: isHovering ? (hoverType === "project" ? 120 : 40) : 20,
        height: isHovering ? (hoverType === "project" ? 30 : 30) : 20,
        borderRadius: isHovering ? (hoverType === "project" ? 20 : 20) : 10,
        backgroundColor: isHovering
          ? "rgba(var(--highlight-blue))"
          : "rgba(var(--highlight-blue))",
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="cursor-inner"
        animate={{
          width: isHovering ? "100%" : "100%",
          height: isHovering ? "100%" : "100%",
          borderRadius: isHovering ? (hoverType === "project" ? 20 : 20) : 10,
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      />
      {isHovering && hoverType === "project" && (
        <motion.span
          className="text-lg font-medium text-white uppercase cursor-text font-satoshi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {cursorText}
        </motion.span>
      )}

      {isHovering && hoverType === "link" && (
        <motion.div
          className="cursor-icon"
          // style="background-color: rgba(0,0,0,1)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.1 }}
        >
          <IconArrowUpRight stroke={2} className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
