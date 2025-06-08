// components/Delivery.jsx (or wherever Final is defined)
"use client";

import React, { useState } from "react";
import Wrapper from "../Wrapper"; // Assuming Wrapper is a simple container now as per previous fix
import { motion } from "framer-motion";

const Delivery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Final />
    </section>
  );
};

export default Delivery;

const Final = () => {
  const [loadingStates, setLoadingStates] = useState({});
  const [videoErrors, setVideoErrors] = useState({}); // New state for video errors

  const handleVideoLoad = (videoId) => {
    console.log(`[Video Load Success]: Video ${videoId} is ready to play.`);
    setLoadingStates((prev) => ({
      ...prev,
      [videoId]: false, // Hide loading spinner on successful load
    }));
    setVideoErrors((prev) => ({
      ...prev,
      [videoId]: false, // Clear any previous error for this video
    }));
  };

  const handleVideoLoadStart = (videoId) => {
    console.log(`[Video Load Start]: Starting to load video ${videoId}.`);
    setLoadingStates((prev) => ({
      ...prev,
      [videoId]: true, // Show loading spinner
    }));
    setVideoErrors((prev) => ({
      ...prev,
      [videoId]: false, // Clear error when load starts again
    }));
  };

  // --- NEW: handleVideoError function ---
  const handleVideoError = (videoId, event) => {
    console.error(
      `[Video Load Error]: Failed to load video ${videoId}.`,
      event
    );
    setLoadingStates((prev) => ({
      ...prev,
      [videoId]: false, // Hide loading spinner, as it's an error, not just loading
    }));
    setVideoErrors((prev) => ({
      ...prev,
      [videoId]: true, // Set error state for this video
    }));
  };

  const finalFeatures = [
    {
      name: "Smart Calendar View",
      header: "HMW make fitness tracking simple and engaging?",
      description:
        "The calendar uses icons in the weekly view and color-coded dates in the monthly view to show the user's workout, cardio, rest days, and progress. It gives a quick, visual summary that helps users stay on track without needing to tap around.",
      url: "/upliftt/Calendar.mp4",
      id: "calendar",
    },
    {
      name: "Workout Carousel Navigation",
      header: "HMW help busy users stay consistent with their workout routine?",
      description:
        "The swipeable carousel syncs with the calendar and lets users preview or start workouts for each day. It adds structure and routine, making it easy to focus on just today's plan.",
      url: "/upliftt/Carousel.mp4",
      id: "workout",
    },
    {
      name: "Progress Tab & Stats Summary",
      header: "HMW track progress in an engaging way?",
      description:
        "The tab bar includes key data like weight lost, weight left, and total workout time with an expandable dropdown for a full progress breakdown. This encourages habit-building by showing results without overwhelming the user.",
      url: "/upliftt/Navigation.mp4",
      id: "navigation",
    },
    {
      name: "Interactive Meal Flow",
      header: "HMW help busy users stay consistent with their meal routine?",
      description:
        "Tapping a meal opens a dedicated page where users can complete meals, triggering a satisfying animation and auto-transition to the next. It simplifies nutrition tracking while making it feel rewarding and smooth.",
      url: "/upliftt/Meal.mp4",
      id: "meal",
    },
    {
      name: "Workout Completion Flow",
      header: "HMW help users stay consistent with the workout?",
      description:
        "Users can start a workout or preview it before beginning, keeping the flow simple and flexible. ",
      url: "/upliftt/workout.mp4",
      id: "workout",
    },
  ];

  // Define the animation variants for each feature
  const featureVariants = {
    initial: { opacity: 0, y: 50 }, // Start slightly below and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    }, // Animate to full opacity and original position
  };

  return (
    <div
      id="deliverable"
      className="flex flex-col min-w-full gap-8 py-8 overflow-auto md:py-16 "
    >
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Final Design
        </h2>
      </div>

      {finalFeatures.map((feature, i) => (
        <motion.div
          key={i}
          id={feature.id}
          className={`flex flex-col gap-10 md:gap-20 items-center justify-center ${
            i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
          variants={featureVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content Block */}
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            <span className="text-base font-medium font-satoshi text-highlightBlue">
              {feature.name}
            </span>
            <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
              {feature.header}
            </h3>
            <p className="w-full text-lg text-primaryText md:text-[18px]">
              {feature.description}
            </p>
          </div>

          {/* Video Block */}
          <div className="flex items-center justify-center w-full overflow-hidden border p-14 md:w-1/2 bg-secondaryBg rounded-3xl md:rounded-[32px] border-border aspect-square relative">
            {/* Loading Animation */}
            {loadingStates[`${feature.id}-${i}`] !== false && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-secondaryBg/80">
                {" "}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-highlightBlue animate-spin"></div>
                  <span className="text-sm font-medium text-highlightBlue">
                    Loading video...
                  </span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {videoErrors[`${feature.id}-${i}`] && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center text-white bg-red-500/80 rounded-3xl">
                <p className="mb-2 font-semibold">Video Load Error!</p>
                <p className="text-sm">
                  Could not load video. Please check the URL.
                </p>
              </div>
            )}

            {/* Video */}
            <video
              src={feature.url}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              // Use a unique ID for each video's state
              onLoadStart={() => handleVideoLoadStart(`${feature.id}-${i}`)}
              onCanPlayThrough={() => handleVideoLoad(`${feature.id}-${i}`)} // Use onCanPlayThrough for better loading indication
              onError={(e) => handleVideoError(`${feature.id}-${i}`, e)} // NEW: Error event handler
              className={`object-contain w-auto h-full rounded-3xl md:rounded-[50px] transition-opacity duration-300 ${
                loadingStates[`${feature.id}-${i}`] === false
                  ? "opacity-100" // Video loaded or error, show it if no error
                  : "opacity-0" // Still loading
              }`}
            ></video>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
