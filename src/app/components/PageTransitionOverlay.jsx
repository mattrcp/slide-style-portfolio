"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransitionOverlay({ isActive, onComplete }) {
  const [visible, setVisible] = useState(isActive);

  useEffect(() => {
    if (isActive) setVisible(true);
  }, [isActive]);

  const handleAnimationComplete = () => {
    if (onComplete) onComplete();
    setVisible(false);
  };

  // Sequence: slide up → hold → slide away
  const overlayVariants = {
    initial: { y: "100%" },
    animate: {
      y: ["100%", "0%", "0%", "-100%"], // start off-screen, slide in, hold, slide out
      transition: {
        duration: 4, // total duration
        times: [0, 0.2, 0.8, 1], // timing of each keyframe
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-[9999] flex justify-center items-center"
          initial="initial"
          animate="animate"
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </AnimatePresence>
  );
}
