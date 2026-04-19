"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// 1. Data Structure for your playground items
const playgroundItems = [
  {
    id: 1,
    title: "Briefly AI Generator Document",
    description: "Website Design & Product Design",
    src: "/playground/briefly.png",
    x: 1000,
    y: 1500,
    rotation: -2,
  },
  {
    id: 2,
    title: "Banking Website & App",
    description: "Website Design & Product Design",
    src: "/playground/banking.png",
    x: 1800,
    y: 1200,
    rotation: 1,
  },
  {
    id: 3,
    title: "Joruno Architect",
    description: "Website Design & Development",
    src: "/playground/joruno.png",
    x: 2000,
    y: 1800,
    rotation: -1,
  },
  {
    id: 4,
    title: "Sony App Redeisgn",
    description: "App Design",
    src: "/playground/sony.jpg",
    x: 1500,
    y: 1300,
    rotation: 2,
  },
  {
    id: 5,
    title: "Bank App Design",
    description: "App Design inspire by folder design",
    src: "/playground/bank.png",
    x: 1700,
    y: 2000,
    rotation: -3,
  },
  {
    id: 6,
    title: "Component Tree Plugin",
    description: "Component tree extractor for Figma plugin",
    src: "/playground/component.png",
    x: 1200,
    y: 1900,
    rotation: 1,
  },
];

export default function InfiniteCanvas() {
  const containerRef = useRef(null);

  // Motion Values for X and Y panning
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [dragConstraints, setDragConstraints] = useState({
    left: -4000,
    right: 0,
    top: -4000,
    bottom: 0,
  });

  // State to track if the user is on a desktop device
  const [isDesktop, setIsDesktop] = useState(true);

  // Add a spring so trackpad scrolling feels smooth and has inertia
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Handle Desktop check
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Trackpad / Mouse Wheel scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      x.set(x.get() - e.deltaX * 1.5);
      y.set(y.get() - e.deltaY * 1.5);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => element?.removeEventListener("wheel", handleWheel);
  }, [x, y]);

  // Center the canvas on load and set drag constraints
  useEffect(() => {
    x.set(-2000 + window.innerWidth / 2);
    y.set(-2000 + window.innerHeight / 2);
    setDragConstraints({
      left: -4000 + window.innerWidth,
      right: 0,
      top: -4000 + window.innerHeight,
      bottom: 0,
    });
  }, [x, y]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative w-screen h-screen bg-secondaryBg cursor-grab active:cursor-grabbing"
    >
      <motion.div
        drag
        style={{ x: smoothX, y: smoothY }}
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        className="absolute top-0 left-0 w-[4000px] h-[4000px] bg-primaryBg bg-repeat"
      >
        {playgroundItems.map((item) => (
          <motion.div
            key={item.id}
            // 1. Enable drag only if on desktop
            drag={isDesktop}
            // 2. Remove momentum so cards stop exactly where you drop them
            dragMomentum={false}
            // 3. Stop propagation so dragging the card doesn't drag the canvas
            onPointerDown={(e) => e.stopPropagation()}
            style={{
              left: item.x,
              top: item.y,
              rotate: item.rotation || 0,
            }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            // 4. Elevate the card visually when picked up
            whileDrag={{ scale: 1.05, zIndex: 50, rotate: 0 }}
            className={`absolute p-4 w-max max-w-md will-change-transform ${
              isDesktop ? "cursor-grab active:cursor-grabbing" : ""}`}
          >
            <div className="flex flex-col gap-3 pointer-events-none">
              {/* Flexible Image Container */}
              <div className="relative w-full overflow-hidden bg-primaryBg drop-shadow-xl flex items-center justify-center min-h-[200px]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto max-h-[500px] object-cover block"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col w-full text-left">
                <span className="text-sm font-medium font-satoshi text-secondaryText pb-0.5">
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-sm italic font-medium font-satoshi text-ternaryText">
                    {item.description}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recenter UI Component */}
      <div className="absolute right-8 bottom-8 z-50">
        <button
          onClick={() => {
            x.set(-2000 + window.innerWidth / 2);
            y.set(-2000 + window.innerHeight / 2);
          }}
          className="px-4 py-2 text-sm font-medium text-white rounded-full transition-colors bg-zinc-900 hover:bg-zinc-800"
        >
          Recenter
        </button>
      </div>
    </div>
  );
}
