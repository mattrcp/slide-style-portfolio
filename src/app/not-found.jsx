"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/"); // Redirect to home
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-primaryBg">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number Display */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="font-bold text-8xl md:text-9xl text-highlightBlue font-satoshi">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div className="mb-6" variants={itemVariants}>
          <h2 className="mb-2 text-2xl font-semibold md:text-3xl text-primaryText font-satoshi">
            Oops! Page Not Found
          </h2>
          <p className="max-w-md mx-auto text-lg text-secondaryText">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="inline-flex items-center justify-center gap-4 px-6 py-4 border bg-secondaryBg border-border rounded-xl">
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-highlightBlue">
              <span className="text-lg font-bold text-white font-satoshi">
                {countdown}
              </span>
            </div> */}
            <div className="text-center">
              <p className="text-sm text-secondaryText">
                Redirecting to home in
              </p>
              <p className="text-lg font-semibold text-primaryText font-satoshi">
                {countdown} second{countdown !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 font-semibold transition-colors duration-200 rounded-lg text-primaryText font-satoshi "
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
