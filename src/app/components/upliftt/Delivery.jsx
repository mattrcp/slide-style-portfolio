// components/Delivery.jsx (or wherever Final is defined)
"use client";

import React, { useState } from "react";
import Wrapper from "../Wrapper"; // Assuming Wrapper is a simple container now as per previous fix
import { motion } from "framer-motion";
import { designSystem1, designSystem2 } from "../../../assets/upliftt";
import Image from "next/image";

const Delivery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <FinalDesign />
      <DesignSystem />
    </section>
  );
};

export default Delivery;

const FinalDesign = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="execution"
    >
      <div className="flex flex-col cs-content-container">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full ">
          The Final Design Decisions
        </h2>

        {/* Video 1 */}
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-6 w-full md:gap-8 md:flex-row">
            <div className="w-full h-full md:w-1/3">
              <h3 className="mb-2 text-lg italic font-bold md:mb-4 font-satoshi">
                The "Smart Calendar": Reducing Decision Fatigue
              </h3>
              <p>
                The calendar uses icons in the weekly view and color-coded dates
                in the monthly view to show the user's workout, cardio, rest
                days, and progress. It gives a quick, visual summary that helps
                users stay on track without needing to tap around.
              </p>
            </div>

            <div className="flex flex-col  bg-[#1B1B1B] w-full  rounded-lg p-6 py-8">
              {/* Dark Card Container */}
              <div className="flex overflow-hidden relative gap-8 justify-center items-center w-full flex-c ol aspect-video">
                <div className="overflow-hidden relative w-full h-full rounded-lg">
                  <video
                    src="/upliftt/Calendar.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video 1 */}

        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-6 w-full md:gap-8 md:flex-row">
            <div className="w-full h-full md:w-1/3">
              <h3 className="mb-2 text-lg italic font-bold md:mb-4 font-satoshi">
                Workout Execution: Linear Focus
              </h3>
              <p>
                The swipeable carousel syncs with the calendar and lets users
                preview or start workouts for each day. It adds structure and
                routine, making it easy to focus on just today's plan.
              </p>
            </div>

            <div className="flex flex-col  bg-[#1B1B1B] w-full  rounded-lg p-6 py-8">
              {/* Dark Card Container */}
              <div className="flex overflow-hidden relative gap-8 justify-center items-center w-full flex-c ol aspect-video">
                <div className="overflow-hidden relative w-full h-full rounded-lg">
                  <video
                    src="/upliftt/Carousel.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video 1 */}
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-6 w-full md:gap-8 md:flex-row">
            <div className="w-full h-full md:w-1/3">
              <h3 className="mb-2 text-lg italic font-bold md:mb-4 font-satoshi">
                Progress Tab & Stats Summary
              </h3>
              <p>
                The tab bar includes key data like weight lost, weight left, and
                total workout time with an expandable dropdown for a full
                progress breakdown. This encourages habit-building by showing
                results without overwhelming the user.
              </p>
            </div>

            <div className="flex flex-col  bg-[#1B1B1B] w-full  rounded-lg p-6 py-8">
              {/* Dark Card Container */}
              <div className="flex overflow-hidden relative gap-8 justify-center items-center w-full flex-c ol aspect-video">
                <div className="overflow-hidden relative w-full h-full rounded-lg">
                  <video
                    src="/upliftt/Navigation.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video 1 */}
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-6 w-full md:gap-8 md:flex-row">
            <div className="w-full h-full md:w-1/3">
              <h3 className="mb-2 text-lg italic font-bold md:mb-4 font-satoshi">
                Meal Tracking: Gamifying Nutrition
              </h3>
              <p>
                Diet adherence is often harder than exercise. I utilized
                micro-interactions to make logging food feel rewarding rather
                than administrative.
              </p>
            </div>

            <div className="flex flex-col  bg-[#1B1B1B] w-full  rounded-lg p-6 py-8">
              {/* Dark Card Container */}
              <div className="flex overflow-hidden relative gap-8 justify-center items-center w-full flex-c ol aspect-video">
                <div className="overflow-hidden relative w-full h-full rounded-lg">
                  <video
                    src="/upliftt/Meal.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overflow-hidden relative bg-[#1B1B1B]  cs-image-container rounded-lg ">
        {" "}
        <Image
          src={evolution}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl"
        />
      </div> */}
    </Wrapper>
  );
};

const DesignSystem = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="system"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Tokenizing for Scale
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Requirement:
            </h3>
            <p>
              The app needed to support both Light and Dark modes from Day 1 to
              accommodate different gym environments. Hard-coding hex values
              would make this a development difficult.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Execution:
            </h3>
            <p>
              I built a semantic color token system. Instead of assigning Black
              or White to backgrounds, I assigned functional roles.
            </p>
          </div>
          <div className="w-full">
            <span>
              <span className="italic font-bold"> Variable:</span>
              &nbsp;backgroud-base-deafaut
            </span>
            <ul className="pl-6 mt-4 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Light Mode Value:</span>
                  &nbsp;#F5F5F5
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Dark Mode Value: </span>
                  &nbsp;#252525
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <span>
              <span className="italic font-bold"> Variable:</span>
              &nbsp; text-base-default
            </span>
            <ul className="pl-6 mt-4 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Light Mode Value:</span>
                  &nbsp;#252525
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Dark Mode Value: </span>
                  &nbsp;#F5F5F5
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Impact:
            </h3>
            <p>
              This documentation allowed the developer to implement the Dark
              Mode theme switch in a single sprint with zero design debt,
              ensuring the app was accessible in low-light environments
              immediately upon launch.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={designSystem1}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={designSystem2}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const Final = () => {
//   const [loadingStates, setLoadingStates] = useState({});
//   const [videoErrors, setVideoErrors] = useState({}); // New state for video errors

//   const handleVideoLoad = (videoId) => {
//     console.log(`[Video Load Success]: Video ${videoId} is ready to play.`);
//     setLoadingStates((prev) => ({
//       ...prev,
//       [videoId]: false, // Hide loading spinner on successful load
//     }));
//     setVideoErrors((prev) => ({
//       ...prev,
//       [videoId]: false, // Clear any previous error for this video
//     }));
//   };

//   const handleVideoLoadStart = (videoId) => {
//     console.log(`[Video Load Start]: Starting to load video ${videoId}.`);
//     setLoadingStates((prev) => ({
//       ...prev,
//       [videoId]: true, // Show loading spinner
//     }));
//     setVideoErrors((prev) => ({
//       ...prev,
//       [videoId]: false, // Clear error when load starts again
//     }));
//   };

//   // --- NEW: handleVideoError function ---
//   const handleVideoError = (videoId, event) => {
//     console.error(
//       `[Video Load Error]: Failed to load video ${videoId}.`,
//       event
//     );
//     setLoadingStates((prev) => ({
//       ...prev,
//       [videoId]: false, // Hide loading spinner, as it's an error, not just loading
//     }));
//     setVideoErrors((prev) => ({
//       ...prev,
//       [videoId]: true, // Set error state for this video
//     }));
//   };

//   const finalFeatures = [
//     {
//       name: "Smart Calendar View",
//       header: "HMW make fitness tracking simple and engaging?",
//       description:
//         "The calendar uses icons in the weekly view and color-coded dates in the monthly view to show the user's workout, cardio, rest days, and progress. It gives a quick, visual summary that helps users stay on track without needing to tap around.",
//       url: "/upliftt/Calendar.mp4",
//       id: "calendar",
//     },
//     {
//       name: "Workout Carousel Navigation",
//       header: "HMW help busy users stay consistent with their workout routine?",
//       description:
//         "The swipeable carousel syncs with the calendar and lets users preview or start workouts for each day. It adds structure and routine, making it easy to focus on just today's plan.",
//       url: "/upliftt/Carousel.mp4",
//       id: "workout",
//     },
//     {
//       name: "Progress Tab & Stats Summary",
//       header: "HMW track progress in an engaging way?",
//       description:
//         "The tab bar includes key data like weight lost, weight left, and total workout time with an expandable dropdown for a full progress breakdown. This encourages habit-building by showing results without overwhelming the user.",
//       url: "/upliftt/Navigation.mp4",
//       id: "navigation",
//     },
//     {
//       name: "Interactive Meal Flow",
//       header: "HMW help busy users stay consistent with their meal routine?",
//       description:
//         "Tapping a meal opens a dedicated page where users can complete meals, triggering a satisfying animation and auto-transition to the next. It simplifies nutrition tracking while making it feel rewarding and smooth.",
//       url: "/upliftt/Meal.mp4",
//       id: "meal",
//     },
//     // {
//     //   name: "Workout Completion Flow",
//     //   header: "HMW help users stay consistent with the workout?",
//     //   description:
//     //     "Users can start a workout or preview it before beginning, keeping the flow simple and flexible. ",
//     //   url: "/upliftt/workout.mp4",
//     //   id: "workout",
//     // },
//   ];

//   // Define the animation variants for each feature
//   const featureVariants = {
//     initial: { opacity: 0, y: 50 }, // Start slightly below and invisible
//     inView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     }, // Animate to full opacity and original position
//   };

//   return (
//     <div
//       id="deliverable"
//       className="flex overflow-auto flex-col gap-8 py-8 min-w-full md:py-16"
//     >
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Final Design
//         </h2>
//       </div>

//       {finalFeatures.map((feature, i) => (
//         <motion.div
//           key={i}
//           id={feature.id}
//           className={`flex flex-col gap-10 md:gap-20 items-center justify-center ${
//             i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
//           }`}
//           variants={featureVariants}
//           initial="initial"
//           whileInView="inView"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Text Content Block */}
//           <div className="flex flex-col gap-4 w-full md:w-1/2">
//             <span className="text-base font-medium font-satoshi text-highlightBlue">
//               {feature.name}
//             </span>
//             <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
//               {feature.header}
//             </h3>
//             <p className="w-full text-lg text-primaryText md:text-[18px]">
//               {feature.description}
//             </p>
//           </div>

//           {/* Video Block */}
//           <div className="flex items-center justify-center w-full overflow-hidden border p-14 md:w-1/2 bg-secondaryBg rounded-3xl md:rounded-[32px] border-border aspect-square relative">
//             {/* Loading Animation */}
//             {loadingStates[`${feature.id}-${i}`] !== false && (
//               <div className="flex absolute inset-0 z-10 flex-col justify-center items-center bg-secondaryBg/80">
//                 {" "}
//                 <div className="flex flex-col gap-4 items-center">
//                   <div className="w-16 h-16 rounded-full border-4 border-gray-200 animate-spin border-t-highlightBlue"></div>
//                   <span className="text-sm font-medium text-highlightBlue">
//                     Loading video...
//                   </span>
//                 </div>
//               </div>
//             )}

//             {/* Error Message */}
//             {videoErrors[`${feature.id}-${i}`] && (
//               <div className="flex absolute inset-0 z-10 flex-col justify-center items-center p-4 text-center text-white rounded-3xl bg-red-500/80">
//                 <p className="mb-2 font-semibold">Video Load Error!</p>
//                 <p className="text-sm">
//                   Could not load video. Please check the URL.
//                 </p>
//               </div>
//             )}

//             {/* Video */}
//             <video
//               src={feature.url}
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//               // Use a unique ID for each video's state
//               onLoadStart={() => handleVideoLoadStart(`${feature.id}-${i}`)}
//               onCanPlayThrough={() => handleVideoLoad(`${feature.id}-${i}`)} // Use onCanPlayThrough for better loading indication
//               onError={(e) => handleVideoError(`${feature.id}-${i}`, e)} // NEW: Error event handler
//               className={`object-contain w-auto h-full rounded-3xl md:rounded-[50px] transition-opacity duration-300 ${
//                 loadingStates[`${feature.id}-${i}`] === false
//                   ? "opacity-100" // Video loaded or error, show it if no error
//                   : "opacity-0" // Still loading
//               }`}
//             ></video>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };
