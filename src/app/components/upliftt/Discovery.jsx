import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { user1, user2 } from "/public/upliftt";

const Discovery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <WhatIsUpliftt />
      <MyGoal />
      <Audience />
    </section>
  );
};

export default Discovery;

const WhatIsUpliftt = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          What is Upliftt?
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          Upliftt is a digital CRM platform built to empower fitness
          professionals and streamline their core business operations. By
          offering tools that strengthen client-trainer connections, increase
          productivity, and support health-driven communities, the platform
          helps fitness professionals grow their businesses and deliver real
          results.
        </p>
      </div>
    </Wrapper>
  );
};

const MyGoal = () => {
  return (
    <Wrapper id="goal">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          My Goal
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          Trainees often lose motivation and fall off track with their fitness
          goals due to lack of structure, habit reinforcement, and engaging
          feedback.{" "}
          <span className="font-semibold">
            My challenge was to design a mobile experience that feels
            motivating, habit-forming, and distinct from competitors blending
            simplicity with light gamification to keep users consistently
            engaged with their workout and meal plans.
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

const Audience = () => {
  const userLists = [
    {
      id: 1,
      image: user1,
      header: "Motivated-but-Overwhelmed Professional",
      list: [
        {
          title: "Pains",
          items: [
            "Struggles with consistency and motivation",
            "Hard to track progress in an engaging way",
            "Overwhelmed by complex fitness app",
          ],
        },
        {
          title: "Opportunities",
          items: [
            "Track workouts and progress easily",
            "Stay in touch with trainer effortlessly",
          ],
        },
      ],
    },
    {
      id: 2,
      image: user2,
      header: "Goal-Oriented Newbie", // Changed header for differentiation
      list: [
        {
          title: "Pains",
          items: [
            "Unsure where to start with fitness",
            "Lacks confidence in exercise execution",
            "Needs structured guidance",
          ],
        },
        {
          title: "Opportunities",
          items: [
            "Clear step-by-step workout plans",
            "Beginner-friendly exercise demonstrations",
          ],
        },
      ],
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 }, // Start yd down and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // y to original size and fade in
  };

  return (
    <div
      id="research"
      className="flex flex-col min-w-full gap-8 py-8 overflow-auto md:py-16"
    >
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Our Target Audience
        </h2>
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row text-primaryText">
        {userLists.map((user) => (
          <div
            key={user.id}
            className="flex flex-col w-full px-6 py-6 gap-8 bg-secondaryBg  border-border border md:flex-1 rounded-[32px]"
            variants={cardVariants} // Apply the defined variants
            initial="initial" // Set the initial state
            whileInView="inView" // Animate to 'inView' when in viewport
            viewport={{ once: true, amount: 0.5 }} // Configure viewport behavior
          >
            <div className="flex items-center gap-4  h-[400px] ">
              {" "}
              <Image
                src={user.image}
                alt={user.header}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-xl font-semibold leading-tight md:text-2xl text-primaryText">
                {user.header}
              </h4>
              <div className="flex flex-col gap-8 md:flex-row">
                {user.list.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="flex flex-col gap-2">
                    <h5 className="mb-2 font-sans text-lg font-medium text-primaryText">
                      {section.title}
                    </h5>
                    {/* Removed list-disc list-inside from ul */}
                    <ul className="space-y-1 text-base text-primaryText">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0" // The key classes
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
