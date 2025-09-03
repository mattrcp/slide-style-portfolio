"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoGif from "public/logo-animation.gif";

export default function FirstTimeAnimation({
  words = ["Loading", "Please wait", "Almost there"],
  onComplete,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 800);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (onComplete) onComplete();
    }, words.length * 1000); // total animation time

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white z-[9999]">
      <Image src={logoGif} alt="Logo Animation" width={150} height={150} />
      <div className="overflow-hidden mt-4 h-8">
        <motion.div
          animate={{ y: [-30, 0] }} // slide up animation
          transition={{ duration: 0.5 }}
          key={index}
          className="text-xl font-medium text-gray-700"
        >
          {words[index]}
        </motion.div>
      </div>
    </div>
  );
}
