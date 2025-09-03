"use client";

import { usePageTransition } from "./PageTransitionProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectImageThumbnail from "./ProjectImageThumbnail";
import Link from "next/link";

const ProjectCard = ({
  project,
  index,
  layoutDirection,
  shouldBeDraggable,
  totalProjects,
  onMouseEnter,
  onClick,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { triggerTransition } = usePageTransition();

  useEffect(() => {
    if (inView) {
      controls.start("inView");
    } else {
      controls.start("outOfView");
    }
  }, [inView, controls]);

  const cardVariants = {
    initial: { opacity: 1, scale: 1, y: 0 },
    inView: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { ease: [0.5, 0, 0.22, 0.98], duration: 0.5 },
    },
    outOfView: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { ease: [0.5, 0, 0.22, 0.98], duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      key={project.id || index}
      className={`flex relative flex-col justify-center items-center h-full project-card-item cursor-trigger  group pb-4 md:pb-9   md:border-border ${
        layoutDirection === "row"
          ? "min-w-full md:min-w-[900px]"
          : "min-h-[400px] w-full mx-auto md:min-h-auto"
      }  ${
        index === totalProjects - 1
          ? "border-b-0"
          : "border-b-0 md:border-b-[1px]"
      }`}
      data-cursor-text="READ CASE STUDY"
      variants={cardVariants}
      initial="initial"
      animate={controls}
      onMouseEnter={() => onMouseEnter(index)}
    >
      <Link
        className={`relative flex flex-col w-full h-full gap-2 md:gap-6 group cursor-pointer ${
          shouldBeDraggable ? "cursor-drag-custom" : ""
        }`}
        href={project.href}
        draggable="false"
        // onClick={(e) => {
        //   console.log("ProjectCard clicked:", project.title, project.href);
        //   onClick(e, project.href);
        // }}
        onClick={(e) => {
          e.preventDefault(); // prevent default Next.js navigation
          triggerTransition(project.href); // trigger overlay animation + navigation
        }}
      >
        <ProjectImageThumbnail
          project={project}
          index={index}
          hover={"group-hover:scale-110"}
        />

        <div
          className={`flex flex-col gap-4 justify-start items-start px-4 w-full h-auto`}
        >
          <div className="flex flex-row gap-2 justify-between items-start w-full text-center">
            <div className="flex flex-row gap-4 justify-center items-center w-full md:justify-start md:w-auto">
              <h3 className="w-auto font-semibold text-[clamp(16px,3vw,24px)] leading-none text-start text-primaryText font-satoshi group-hover:text-pinkBg">
                {project.title}
              </h3>
              <span className="w-6 h-[1px] bg-primaryText"></span>
              <p className="text-base font-medium leading-none text-secondaryText font-satoshi">
                {project.year}
              </p>
            </div>
            <div className="hidden gap-2 md:flex">
              {project.tag.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 w-auto text-sm font-medium text-white uppercase rounded-full md:px-4 bg-highlightBlue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden w-full md:block">
            <p className="text-[clamp(14px,3vw,18px)] w-full md:w-1/2 2xl:w-1/3 font-medium text-start text-secondaryText font-satoshi">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
