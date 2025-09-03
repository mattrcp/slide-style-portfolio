"use client";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { logo, threeD } from "public/assets";

export default function Logo({
  className = "",
  alt = "Logo",
  draggable = "false",
  priority = true,
}) {
  const { theme } = useTheme();

  const currentLogo = theme === "dark" ? threeD : logo;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme} // This ensures the animation triggers on theme change
        className={`relative ${className}`}
      >
        <Image
          src={currentLogo}
          alt={alt}
          fill
          draggable={draggable}
          priority={priority}
          className="object-contain"
        />
      </motion.div>
    </AnimatePresence>
  );
}
