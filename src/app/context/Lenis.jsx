"use client";

import { ReactLenis } from "lenis/react";

export const LenisProvider = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // smoothness (0.1 = smoother, 1 = instant)
        duration: 1.2, // scroll animation duration
        smoothWheel: true, // smooth scrolling for wheel
        smoothTouch: false, // keep native scroll on touch
      }}
    >
      {children}
    </ReactLenis>
  );
};
