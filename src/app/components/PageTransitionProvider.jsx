"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import PageTransitionOverlay from "./PageTransitionOverlay";

const PageTransitionContext = createContext();

export function PageTransitionProvider({ children }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [nextHref, setNextHref] = useState(null);

  const triggerTransition = async (href) => {
    setNextHref(href);
    setTransitioning(true);
  };

  const handleTransitionComplete = () => {
    if (nextHref) {
      router.push(nextHref);
      setTransitioning(false);
      setNextHref(null);
    }
  };

  return (
    <PageTransitionContext.Provider value={{ triggerTransition }}>
      {children}
      <PageTransitionOverlay
        isActive={transitioning}
        onComplete={handleTransitionComplete}
      />
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
