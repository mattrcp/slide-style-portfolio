"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ScrollToTop from "./ScrollToTop";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

const PageTransitionContext = createContext();

export function PageTransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
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
    if (isAnimating) return Promise.resolve();

    return new Promise((resolve) => {
      setIsAnimating(true);
      setNextHref(href);

      // Complete the transition after animation
      setTimeout(() => {
        router.push(href);
        setNextHref(null);
        setIsAnimating(false);

        // Scroll to top after navigation
        setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
          resolve();
        }, 100);
      }, 600); // Match the animation duration
    });
  };

  const overlayVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <PageTransitionContext.Provider value={{ isAnimating, triggerTransition }}>
      <div className="relative w-full h-full">
        {/* PAGE CONTENT - Always visible */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>

        {/* TRANSITION OVERLAY - Only when transitioning */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-40 h-40">
                <Image
                  src="/assets/logo-animation.gif"
                  className="object-contain w-full h-full"
                  alt="logo animation"
                  fill
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollToTop />
      </div>
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
