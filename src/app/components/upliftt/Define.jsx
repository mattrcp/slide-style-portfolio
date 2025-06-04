import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

const Discovery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Opportunities />
      <Objectives />
    </section>
  );
};

export default Discovery;

const Opportunities = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Opportunities
        </h2>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="w-full text-primaryText font-satoshi font-medium  text-[clamp(24px,5vw,40px)]">
          <span className="text-highlightBlue">How might we</span> help busy
          users stay consistent by making fitness and meal tracking effortless,
          engaging, and progress-driven?
        </h1>
      </div>
    </Wrapper>
  );
};

const Objectives = () => {
  const projectFeatures = [
    {
      header: "Clarity over Complexity:",
      description:
        "Ensure the app is intuitive from the very first screen, guiding trainees clearly toward their workout plan without cognitive overload.",
    },
    {
      header: "Human-Centered Guidance + Consistency Builds Confidence:",
      description:
        "Provide a structured path using daily cues, schedules, and clear step-by-step instructions so users always know what to do next.",
    },
    {
      header: "Motivation through Progress + Minimal Effort, Maximum Value:",
      description:
        "Allow trainees to check their progress effortlessly during or after workouts through subtle tracking, helping them stay motivated without disrupting their flow.",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          My Design Objective
        </h2>
      </div>

      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            The core goal of this design was to create a simple, motivating
            experience for trainees that helps them build consistent habits
            without feeling overwhelmed. To achieve this, the app was guided by
            three key objectives:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:w-1/2">
          {projectFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
            >
              <h3 className="mb-6 font-sans text-2xl font-medium text-primaryText">
                {feature.header}
              </h3>

              <p className="w-full text-[18px] font-base md:text-[20px] text-primaryText flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
