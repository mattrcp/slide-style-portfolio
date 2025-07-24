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
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // New state for initial load

  const pathname = usePathname();
  const router = useRouter();
  const lenisRef = useRef(null);
  const previousPathnameRef = useRef(pathname);

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

  // Effect to handle initial loading screen
  useEffect(() => {
    if (isInitialLoad) {
      setIsAnimating(true); // Show loading animation
      let current = 0;
      const interval = setInterval(() => {
        current += Math.floor(Math.random() * 5) + 1;
        if (current >= 95) {
          current = 95;
        }
        setLoadingPercent(current);
      }, 60);

      const timer = setTimeout(() => {
        clearInterval(interval);
        let final = 95;
        const finalInterval = setInterval(() => {
          final += 1;
          setLoadingPercent(final);
          if (final >= 100) clearInterval(finalInterval);
        }, 20);

        setTimeout(() => {
          setIsAnimating(false);
          setIsInitialLoad(false); // Mark initial load as complete
          setLoadingPercent(0); // Reset for next time
        }, 400);
      }, 1500); // Simulate initial load time (e.g., 1.5 seconds)

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isInitialLoad]); // Dependency on isInitialLoad to run only once

  useEffect(() => {
    previousPathnameRef.current = pathname;
  }, [pathname]);

  const triggerTransition = async (href) => {
    if (isAnimating) return Promise.resolve();

    return new Promise((resolve) => {
      setIsAnimating(true);
      setNextHref(href);

      // Start simulated loading percentage
      let current = 0;
      const interval = setInterval(() => {
        current += Math.floor(Math.random() * 5) + 1; // 1–5%
        if (current >= 95) {
          current = 95;
        }
        setLoadingPercent(current);
      }, 60);

      // Start the navigation
      const navigateAndWait = async () => {
        try {
          router.push(href);

          await new Promise((loadResolve) => {
            let routeChanged = false;
            let minimumTimePassed = false;

            setTimeout(() => {
              minimumTimePassed = true;
              checkComplete();
            }, 800);

            const checkRouteChange = () => {
              if (
                window.location.pathname === href ||
                window.location.pathname + window.location.hash === href
              ) {
                routeChanged = true;
                checkComplete();
              } else {
                setTimeout(checkRouteChange, 50);
              }
            };

            const checkComplete = () => {
              if (routeChanged && minimumTimePassed) {
                setTimeout(() => {
                  loadResolve();
                }, 400);
              }
            };

            checkRouteChange();
          });

          // Final loading to 100%
          clearInterval(interval);
          let final = 95;
          const finalInterval = setInterval(() => {
            final += 1;
            setLoadingPercent(final);
            if (final >= 100) clearInterval(finalInterval);
          }, 20);

          setTimeout(() => {
            setNextHref(null);
            setIsAnimating(false);

            setTimeout(() => {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
              } else {
                window.scrollTo({ top: 0, behavior: "instant" });
              }
              setTimeout(() => {
                setLoadingPercent(0); // Reset for next time
                resolve();
              }, 200);
            }, 100);
          }, 400);
        } catch (error) {
          console.error("Navigation error:", error);
          clearInterval(interval);
          setTimeout(() => {
            setNextHref(null);
            setIsAnimating(false);
            resolve();
          }, 2000);
        }
      };

      navigateAndWait();
    });
  };

  return (
    <PageTransitionContext.Provider value={{ isAnimating, triggerTransition }}>
      <div className="relative w-full h-full">
        {/* Page content */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          // Hide content if isAnimating is true (during transition or initial load)
          style={{ display: isAnimating ? "none" : "block" }}
        >
          {children}
        </motion.div>

        {/* Overlay loading screen */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="flex fixed inset-0 z-50 flex-col gap-6 justify-center items-center backdrop-blur-sm bg-primaryBg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-40 h-40">
                <Image
                  src="/assets/logo-animation.gif"
                  alt="logo animation"
                  className="object-contain w-full h-full"
                  fill
                  priority
                />
              </div>
              <span className="text-lg font-medium text-primaryText font-zodiak">
                {loadingPercent}%
              </span>
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
