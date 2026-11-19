"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export const LenisProvider = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/canvas-test";

  // If on the home page, bypass Lenis to allow native CSS Scroll Snap to function without interference.
  if (isHomePage) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true, // Enabled for non-home pages
        smoothTouch: false, // Generally recommended to keep false for mobile UX
      }}
    >
      {children}
    </ReactLenis>
  );
};
