"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import { TbCarouselHorizontalFilled } from "react-icons/tb";
import { CgCarousel } from "react-icons/cg";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "../data/content";
import Image from "next/image";
import Link from "next/link";
import { usePageTransition } from "./PageTransitionProvider";

export default function ProjectSlider({ setHoveredProject = () => {} }) {
  const { triggerTransition } = usePageTransition();
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [layoutDirection, setLayoutDirection] = useState("column");

  // x and y motion values are always needed to manage position, even if not directly dragged
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sliderRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [actualCardWidth, setActualCardWidth] = useState(0);
  const [actualCardHeight, setActualCardHeight] = useState(0);

  const gap = 40;
  const itemSize =
    layoutDirection === "row" ? actualCardWidth + gap : actualCardHeight + gap;

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setLayoutDirection(desktop ? "column" : "row");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
        setContainerHeight(sliderRef.current.clientHeight);

        const firstCard = sliderRef.current.querySelector(".project-card-item");
        if (firstCard) {
          setActualCardWidth(firstCard.offsetWidth);
          setActualCardHeight(firstCard.offsetHeight);
        } else {
          setActualCardWidth(
            window.innerWidth >= 768 ? 900 : window.innerWidth - 2 * 16
          );
          setActualCardHeight(window.innerWidth >= 768 ? 600 : 300);
        }
      }
    };

    const timeoutId = setTimeout(updateDimensions, 100);
    window.addEventListener("resize", updateDimensions);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [layoutDirection]);

  const getStartOffset = useCallback(() => {
    if (
      containerWidth === 0 ||
      containerHeight === 0 ||
      actualCardWidth === 0 ||
      actualCardHeight === 0
    )
      return 0;

    if (layoutDirection === "row") {
      return containerWidth / 2 - actualCardWidth / 2;
    } else {
      return 0;
    }
  }, [
    containerWidth,
    containerHeight,
    actualCardWidth,
    actualCardHeight,
    layoutDirection,
  ]);

  const snapToProject = useCallback(
    (indexToSnap) => {
      if (actualCardWidth === 0 || actualCardHeight === 0) return;

      const startOffset = getStartOffset();
      let targetValue = -indexToSnap * itemSize + startOffset;

      // Conditionally animate based on layout direction
      if (layoutDirection === "row") {
        animate(x, targetValue, {
          type: "spring",
          stiffness: 200,
          damping: 20,
        });
      } else {
        animate(y, targetValue, {
          type: "spring",
          stiffness: 200,
          damping: 20,
        });
      }
    },
    [
      x,
      y,
      itemSize,
      getStartOffset,
      layoutDirection,
      actualCardWidth,
      actualCardHeight,
    ]
  );

  useEffect(() => {
    setCurrentIndex(0);
    snapToProject(0);
  }, [layoutDirection, snapToProject]); // snapToProject is a dependency here

  useEffect(() => {
    snapToProject(currentIndex);
  }, [currentIndex, snapToProject]);

  // handleDragStart and handleDragEnd are only for desktop and row layout
  const handleDragStart = useCallback(() => {
    if (isDesktop && layoutDirection === "row") {
      setIsDragging(true);
    }
  }, [isDesktop, layoutDirection]);

  const handleDragEnd = useCallback(
    (event, info) => {
      if (!(isDesktop && layoutDirection === "row")) {
        setIsDragging(false);
        return;
      }

      const currentMotionValue = x.get();
      const startOffset = getStartOffset();
      const currentRelativeValue = currentMotionValue - startOffset;

      let closestIndex = Math.round(-currentRelativeValue / itemSize);

      if (closestIndex >= projects.length) {
        closestIndex = 0;
      } else if (closestIndex < 0) {
        closestIndex = projects.length - 1;
      }

      setCurrentIndex(closestIndex);
      setTimeout(() => setIsDragging(false), 50);
    },
    [isDesktop, layoutDirection, x, getStartOffset, itemSize]
  );

  const scrollToDirection = useCallback(
    (direction) => {
      let newIndex = currentIndex;

      if (direction === "left" || direction === "up") {
        newIndex = (currentIndex - 1 + projects.length) % projects.length;
      } else {
        newIndex = (currentIndex + 1) % projects.length;
      }
      setCurrentIndex(newIndex);
    },
    [currentIndex, projects.length]
  );

  // timerRef and handleMouseEnter are only for desktop
  const timerRef = useRef(null);
  const handleMouseEnter = useCallback(
    (index) => {
      if (isDesktop && setHoveredProject) {
        setHoveredProject(index);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setHoveredProject(null);
        }, 10000);
      }
    },
    [isDesktop, setHoveredProject]
  );

  const handleClick = async (event, projectHref) => {
    if (isDragging) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    setIsDragging(false);

    // Use page transition for navigation
    if (triggerTransition) {
      await triggerTransition(projectHref);
    }
  };

  const toggleLayout = useCallback(() => {
    setLayoutDirection((prev) => (prev === "row" ? "column" : "row"));
    setCurrentIndex(0);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const shouldBeDraggable = isDesktop && layoutDirection === "row";

  const cardVariants = {
    initial: { opacity: 0.9, scale: 0.9 }, // Start scaled down and invisible
    inView: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0, ease: "easeOut" },
    }, // Scale to original size and fade in
    outOfView: {
      opacity: 0.9,
      scale: 0.9,
      transition: { duration: 0, ease: "easeIn" },
    }, // Scale down and fade out when leaving view
  };

  return (
    <motion.div
      className="grid relative place-items-center pt-0 pb-4 w-full h-auto md:pt-20"
      id="work"
    >
      {/* Layout Toggle Button - Only render if isDesktop is true */}
      {/* {isDesktop && (
        <button
          onClick={toggleLayout}
          className="grid absolute right-2 top-4 z-50 place-items-center p-3 rounded-full shadow-sm bg-secondaryBg text-primaryText"
        >
          {layoutDirection === "row" ? (
            <CgCarousel />
          ) : (
            <TbCarouselHorizontalFilled />
          )}
        </button>
      )} */}

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={`overflow-hidden relative w-full h-auto ${
          shouldBeDraggable ? "cursor-drag-custom" : ""
        }`}
      >
        {/* The actual draggable content */}
        <motion.div
          style={layoutDirection === "row" ? { x } : { y }}
          drag={shouldBeDraggable ? "x" : false}
          dragConstraints={
            shouldBeDraggable
              ? {
                  left: -(projects.length - 1) * itemSize + getStartOffset(),
                  right: getStartOffset(),
                }
              : false
          }
          dragElastic={shouldBeDraggable ? 0.8 : 0}
          dragTransition={
            shouldBeDraggable ? { bounceStiffness: 600, damping: 20 } : {}
          }
          onDragStart={shouldBeDraggable ? handleDragStart : undefined}
          onDragEnd={shouldBeDraggable ? handleDragEnd : undefined}
          className={`flex gap-8  w-full h-full relative ${
            layoutDirection === "row"
              ? // change to flex row if you want to see the card in row layout
                "flex-col md:w-auto md:gap-8"
              : "flex-col"
          } pb-4 ${
            shouldBeDraggable
              ? "cursor-drag-custom hover:cursor-drag-custom"
              : ""
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              className={`flex relative flex-col justify-center items-center h-full duration-300 ease-in-out project-card-item group
                          ${
                            layoutDirection === "row"
                              ? "min-w-full  md:min-w-[900px]"
                              : "min-h-[400px] w-full mx-auto md:min-h-auto"
                          }`}
              onMouseEnter={() => handleMouseEnter(index)}
              variants={cardVariants} // Apply the defined variants
              initial="initial" // Set the initial state
              whileInView="inView" // Animate to 'inView' when in viewport
              exit="outOfView" // Animate to 'outOfView' when exiting
              viewport={{ once: true, amount: 0.5 }} // Configure viewport behavior
            >
              <div
                className={`relative flex flex-col w-full h-full gap-6 group cursor-pointer ${
                  shouldBeDraggable ? "cursor-drag-custom" : ""
                }`}
                draggable="false"
                onClick={(e) => handleClick(e, project.href)}
              >
                {project.video ? (
                  <div
                    className="overflow-hidden relative w-auto h-full rounded-[24px] bg-[#F9F9F9] border-border border-[1px] py-6"
                    style={{
                      backgroundColor: project.color,
                      // backgroundImage: "url(/assets/noise.png)",
                    }}
                  >
                    <video
                      src={project.video}
                      className="w-full h-[300px] md:h-[60vh] duration-500 group-hover:scale-105 ease-card"
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                    {layoutDirection != "row" && (
                      <div className="hidden absolute bottom-4 left-4 p-6 rounded-3xl opacity-0 duration-300 sm:w-1/2 md:1/2 lg:w-1/4 ease-card sm:block group-hover:opacity-100 bg-primaryBg">
                        <h3 className="mb-2 text-2xl font-medium text-primaryText font-satoshi group-hover:text-pinkBg">
                          {project.title}
                        </h3>
                        <p className="text-base font-medium text-secondaryText">
                          {project.description}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="overflow-hidden relative w-full grid place-items-center rounded-[24px] bg-[#F9F9F9] border-border border-[1px] py-6"
                    style={{
                      backgroundColor: project.color,
                      backgroundImage: "url(/assets/noise.png)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      draggable="false"
                      className="object-center object-contain duration-500 group-hover:scale-105 ease-card h-[300px] md:h-[60vh]"
                      priority={index < 2}
                    />
                    {layoutDirection != "row" && (
                      <div className="absolute bottom-4 left-4 p-6 rounded-3xl duration-300 sm:w-1/2 md:1/2 lg:w-1/4 ease-card sm:hidden group-hover:block bg-primaryBg">
                        <h3 className="mb-2 text-2xl font-medium text-primaryText font-satoshi group-hover:text-pinkBg">
                          {project.title}
                        </h3>
                        <p className="text-base font-medium text-secondaryText">
                          {project.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div
                  className={`flex flex-col items-center justify-center duration-300 ease-card ${
                    layoutDirection != "row" ? "sm:hidden " : ""
                  }`}
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-2 text-center ${
                      layoutDirection === "row"
                        ? "w-full sm:w-2/3"
                        : "w-full sm:w-1/2"
                    }`}
                  >
                    <h3 className="w-full text-2xl font-medium text-start text-primaryText font-satoshi group-hover:text-pinkBg">
                      {project.title}
                    </h3>
                    <p className="text-base font-medium text-start text-secondaryText">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="grid absolute top-4 left-4 place-items-center px-6 py-2 text-sm leading-none rounded-full bg-primaryBg text-primaryText h-[40px] shadow-sm font-medium font-satoshi">
                  {project.tags}
                </div>
                <span className="grid absolute top-4 right-4 place-items-center p-2 rounded-full shadow-sm bg-primaryBg text-primaryText">
                  <IconArrowUpRight stroke={2} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
