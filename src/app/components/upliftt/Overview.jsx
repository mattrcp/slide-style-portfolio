"use client";

import React, { useRef, useEffect } from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { navigation, meal, calendar, workout } from "/public/upliftt";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { hifi } from "public/upliftt";

const Overview = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Summary />
      <Solution />
    </section>
  );
};

export default Overview;

const Summary = () => {
  return (
    <Wrapper className="flex flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Summary
        </h2>
        <div className="flex flex-col gap-8 w-full md:flex-row">
          {" "}
          <p className="text-lg">
            Upliftt is a CRM platform empowering fitness professionals to manage
            their business. However, the ecosystem had a critical gap: while
            trainers had powerful tools to create plans, clients lacked a
            dedicated interface to execute them. <br /> <br /> I led the
            end-to-end design of the Upliftt Client App, an iOS experience
            designed to translate complex trainer data into a simple,
            habit-forming user journey from 0 → 1. I delivered a fully scalable
            design system (Light/Dark mode) and high-fidelity dev-ready
            specifications.
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative bg-[#1B1B1B] p-8  cs-image-container rounded-lg ">
        {" "}
        {/* Added relative */}
        <Image
          src={hifi}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl md:object-cover"
        />
      </div>
    </Wrapper>
  );
};

const VideoCard = ({ feature }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.log("Video autoplay prevented:", err);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col flex-shrink-0 gap-6 snap-center bg-[#1B1B1B] rounded-lg p-6 py-8">
      {/* Dark Card Container */}
      <div className="relative w-[85vw] md:w-[600px] aspect-square flex-col gap-8 flex items-center justify-center overflow-hidden ">
        <div className="overflow-hidden relative w-full h-full rounded-lg">
          <video
            ref={videoRef}
            src={feature.url}
            loop
            muted
            playsInline
            className="object-contain w-full h-full rounded-xl"
          />
        </div>
        <div className="w-full text-center">
          <Link
            href={`#${feature.id}`}
            className="text-[18px]  font-satoshi font-bold text-white "
          >
            {feature.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  const finalFeatures = [
    {
      name: "Smart Calendar View",
      header: "HMW make fitness tracking simple and engaging?",
      description:
        "The calendar uses icons in the weekly view and color-coded dates in the monthly view to show the user's workout, cardio, rest days, and progress. It gives a quick, visual summary that helps users stay on track without needing to tap around.",
      url: "/upliftt/Calendar.mp4",
      id: "calendar",
    },
    {
      name: "Workout Carousel Navigation",
      header: "HMW help busy users stay consistent with their workout routine?",
      description:
        "The swipeable carousel syncs with the calendar and lets users preview or start workouts for each day. It adds structure and routine, making it easy to focus on just today's plan.",
      url: "/upliftt/Carousel.mp4",
      id: "workout",
    },
    {
      name: "Progress Tab & Stats Summary",
      header: "HMW track progress in an engaging way?",
      description:
        "The tab bar includes key data like weight lost, weight left, and total workout time with an expandable dropdown for a full progress breakdown. This encourages habit-building by showing results without overwhelming the user.",
      url: "/upliftt/Navigation.mp4",
      id: "navigation",
    },
    {
      name: "Interactive Meal Flow",
      header: "HMW help busy users stay consistent with their meal routine?",
      description:
        "Tapping a meal opens a dedicated page where users can complete meals, triggering a satisfying animation and auto-transition to the next. It simplifies nutrition tracking while making it feel rewarding and smooth.",
      url: "/upliftt/Meal.mp4",
      id: "meal",
    },
  ];
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="solution"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Solution
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The "Smart Calendar" Dashboard:{" "}
            </h3>
            <p>
              A toggle-based view that simplifies a client's weekly schedule
              into clear, color-coded actionable days.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Linear Workout Flow:{" "}
            </h3>
            <p>
              We replaced complex spreadsheets with a focused, carousel-based
              interaction that guides users one exercise at a time.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              Interactive Meal Tracking:
            </h3>
            <p>
              A gamified checklist that uses satisfying micro-interactions to
              encourage diet adherence.
            </p>
          </div>
        </div>
      </div>

      {/* Video Carousel Section */}
      <div className="overflow-x-auto w-full scrollbar-hide">
        {/* PADDING TRICK: 
            px-[5vw] for Mobile (aligns with 90vw width)
            md:px-[20vw] for Desktop (aligns with 60vw width: (100-60)/2 = 20)
            This aligns the first card with your text but allows scrolling off-screen. 
        */}
        <div className="flex flex-row gap-6 px-[5vw] md:px-[15vw] min-w-max snap-x snap-mandatory">
          {finalFeatures.map((feature) => (
            <VideoCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
