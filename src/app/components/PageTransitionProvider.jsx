"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ScrollToTop from "./ScrollToTop";
import Lenis from "@studio-freight/lenis";

const PageTransitionContext = createContext();

export function PageTransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [nextHref, setNextHref] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const lenisRef = useRef(null);

  // Setup Lenis once after mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const triggerTransition = (href) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setNextHref(href);
  };

  const handleComplete = () => {
    if (nextHref) {
      router.push(nextHref);
      setNextHref(null);
      setTimeout(() => setIsAnimating(false), 400);
    } else if (initialLoad) {
      setInitialLoad(false);
      setIsAnimating(false);
    }
  };

  const barVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <PageTransitionContext.Provider value={{ isAnimating, triggerTransition }}>
      <AnimatePresence mode="wait">
        <motion.div className="overflow-hidden relative w-full h-full">
          {/* TRANSITION OVERLAY */}
          {isAnimating && (
            <motion.div className="flex fixed inset-0 z-50 justify-center items-center">
              <motion.div
                key="transition-bar"
                variants={barVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={handleComplete}
                className="w-32 h-32 bg-pink-500 rounded-full"
              />
            </motion.div>
          )}

          {/* PAGE CONTENT */}
          {!isAnimating && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}

          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider"
    );
  }
  return context;
};
