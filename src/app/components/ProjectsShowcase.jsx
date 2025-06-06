"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsShowcase = ({ projects }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default projects if none provided
  const defaultProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#project-1",
    },
    {
      id: 2,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile app for productivity",
      tech: ["React Native", "Firebase"],
      link: "#project-2",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive charts and analytics platform",
      tech: ["D3.js", "Python", "PostgreSQL"],
      link: "#project-3",
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing",
      tech: ["OpenAI", "Express.js", "Socket.io"],
      link: "#project-4",
    },
  ];

  const projectList = projects || defaultProjects;

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const compactVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className=""
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial="hidden"
      animate="visible"
      variants={compactVariants}
    >
      {/* Compact View */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            key="compact"
            className="border rounded-full shadow-xl cursor-pointer bg-swapBg border-gray-200/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-swapText font-satoshi">
                  {projectList.length} Projects
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded View */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="expanded"
            className="absolute bottom-0 right-0 border shadow-2xl bg-swapBg rounded-2xl border-gray-200/20 backdrop-blur-sm"
            style={{ minWidth: "320px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6">
              <motion.div
                className="flex items-center gap-3 mb-4"
                variants={itemVariants}
              >
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
                <h3 className="text-lg font-semibold text-swapText font-satoshi">
                  Featured Projects
                </h3>
              </motion.div>

              <motion.div className="space-y-4" variants={containerVariants}>
                {projectList.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={project.link}
                      className="block p-4 border rounded-xl bg-gray-50/50 hover:bg-gray-100/50 border-gray-200/30 group"
                    >
                      <div className="flex flex-col gap-2">
                        <motion.h4
                          className="font-semibold transition-colors text-swapText font-satoshi group-hover:text-blue-600"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h4>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {project.description}
                        </p>
                        <motion.div
                          className="flex flex-wrap gap-1 mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-md"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: index * 0.1 + techIndex * 0.05 + 0.3,
                                duration: 0.2,
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.tech.length > 3 && (
                            <motion.span
                              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              +{project.tech.length - 3}
                            </motion.span>
                          )}
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="pt-4 mt-4 border-t border-gray-200/30"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#all-projects"
                    className="block w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 font-satoshi"
                  >
                    View All Projects
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsShowcase;

// Enhanced Table of Contents with Framer Motion
export const TableOfContents = ({ items }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className="fixed z-50 hidden gap-6 px-6 py-4 -translate-x-1/2 rounded-full shadow-lg md:flex bottom-4 left-1/2 bg-swapBg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-sm font-medium duration-200 ease-in-out text-swapText font-satoshi hover:font-semibold"
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};
