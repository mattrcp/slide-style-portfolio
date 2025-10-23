"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "../data/content";
import { usePageTransition } from "./PageTransitionProvider";
import ProjectCard from "./ProjectCard";

export default function ProjectSlider({ setHoveredProject = () => {} }) {
  const { triggerTransition } = usePageTransition();
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [layoutDirection, setLayoutDirection] = useState("column");

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
            window.innerWidth >= 768 ? 900 : window.innerWidth - 32
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

    if (layoutDirection === "row")
      return containerWidth / 2 - actualCardWidth / 2;
    return 0;
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
      const targetValue = -indexToSnap * itemSize + startOffset;

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
  }, [layoutDirection, snapToProject]);

  useEffect(() => {
    snapToProject(currentIndex);
  }, [currentIndex, snapToProject]);

  const handleDragStart = useCallback(() => {
    if (isDesktop && layoutDirection === "row") setIsDragging(true);
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

      if (closestIndex >= projects.length) closestIndex = 0;
      else if (closestIndex < 0) closestIndex = projects.length - 1;

      setCurrentIndex(closestIndex);
      setTimeout(() => setIsDragging(false), 50);
    },
    [isDesktop, layoutDirection, x, getStartOffset, itemSize]
  );

  const handleMouseEnter = useCallback(
    (index) => {
      if (isDesktop && setHoveredProject) {
        setHoveredProject(index);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setHoveredProject(null), 10000);
      }
    },
    [isDesktop, setHoveredProject]
  );

  const handleClick = async (event, projectHref) => {
    console.log("ProjectSlider handleClick called:", projectHref);

    if (isDragging) {
      console.log("Dragging, preventing click");
      event.preventDefault();
      return;
    }

    event.preventDefault();
    setIsDragging(false);

    if (triggerTransition) {
      console.log("Triggering transition to:", projectHref);
      await triggerTransition(projectHref);
    } else {
      console.log("No triggerTransition available");
    }
  };

  const shouldBeDraggable = isDesktop && layoutDirection === "row";
  const timerRef = useRef(null);

  return (
    <motion.div
      className="grid relative z-50 place-items-center px-4 py-4 w-full h-auto bg-primaryBg"
      id="work"
    >
      <div
        ref={sliderRef}
        className={`overflow-hidden relative w-full h-auto ${
          shouldBeDraggable ? "cursor-drag-custom" : ""}`}
      >
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
          className={`flex  w-full h-full relative gap-8 ${
            layoutDirection === "row"
              ? "flex-col md:w-auto gap-2 md:gap-8 "
              : "flex-col"
          } pb-4`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
              layoutDirection={layoutDirection}
              totalProjects={projects.length}
              shouldBeDraggable={shouldBeDraggable}
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
