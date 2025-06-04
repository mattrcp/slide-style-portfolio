import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { navigation, meal, calendar, workout } from "/public/upliftt";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Overview = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Summary />
      <Contributions />
      <Problem />
      <Solution />
    </section>
  );
};

export default Overview;

const Summary = () => {
  const projectDetails = [
    {
      header: "Role",
      details: [
        { id: 1, label: "UXUI Designer" },
        { id: 2, label: "Interaction Designer" },
      ],
    },
    {
      header: "Team",
      details: [
        { id: 1, label: "1 UXUI Designer" },
        { id: 2, label: "1 Product Manager/CTO" },
      ],
    },
    {
      header: "Duration",
      details: [{ id: 1, label: "14 Weeks" }],
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h1 className="text-[32px] md:text-[40px] leading-none text-secondaryText">
          Summary
        </h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full gap-8">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            As a UX/UI Design Intern at LightWeight360, I designed the iOS app
            for trainees to follow personalized workout and meal plans. I
            created the full design system, wireframes, high-fidelity mockups,
            and interaction flows. I collaborated closely with the CTO and
            stakeholders, and delivered a detailed dev handoff for
            implementation.
          </p>
          <div className="flex items-center justify-start gap-2 pb-2 border-b border-border w-fit ">
            <Link
              href="https://lightweight360.com/"
              target="_blank"
              className="font-satoshi"
            >
              View Company Website{" "}
            </Link>{" "}
            <IconArrowUpRight stroke={2} className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          {projectDetails.map((category) => (
            <div key={category.header} className="w-full h-full ">
              <h3 className="mb-2 md:mb-6 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-medium">
                {category.header}
              </h3>
              <ul className="flex flex-col gap-4 font-satoshi text-primaryText">
                {category.details.map((item) => (
                  <li key={item.id} className="md:text-[18px] text-base">
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Contributions = () => {
  const projectFeatures = [
    {
      id: 1,
      title: "End-to-end iOS design",
      description:
        "Design for trainee experience from wireframes to high-fidelity UI",
    },
    {
      id: 2,
      title: "User stories & Acceptance criteria",
      description:
        "Created user stories to align design with business and dev needs",
    },
    {
      id: 3,
      title: "Dark & Light theme",
      description:
        "Created both dark and light theme for better accessibility using design system.",
    },
    {
      id: 4,
      title: "Document Handoff",
      description:
        "Created detailed documentation for developers, including instructions and animations.",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          What I Contributed
        </h2>
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row text-primaryText">
        {projectFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col w-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border md:flex-1"
          >
            <div className="min-h-[60px] md:mb-6 flex items-start">
              <h3 className="font-sans text-xl font-semibold leading-tight md:text-2xl text-primaryText">
                {feature.title}
              </h3>
            </div>

            <p className="w-full text-base md:text-[18px] text-primaryText flex-grow">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Problem = () => {
  const projectFeatures = [
    {
      description: "Low motivation caused by no clear path or milestones",
    },
    {
      description:
        "No real-time progress tracking, making it hard to see improvements",
    },
    {
      description: "Scattered communication across tools and platforms",
    },
    {
      description:
        "Unclear trainer guidance, leading to confusion and hesitation",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Problem
        </h2>
      </div>

      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Trainees often struggle to stay engaged due to unclear guidance and
            a lack of structure. Here's what we uncovered:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
          {projectFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col h-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border"
            >
              <h3 className="mb-6 font-sans text-2xl font-medium uppercase text-ternaryText">
                0{i + 1}
              </h3>

              <p className="w-full text-[18px] font-semibold md:text-[20px] text-primaryText flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Solution = () => {
  const imageFeatures = [
    {
      alt: "Navigation feature",
      src: navigation,
      description: "Progress Tab & Stats Summary",
      id: "navigation",
    },
    {
      alt: "Calendar feature",
      src: calendar,
      description: "Smart Calendar View",
      id: "calendar",
    },
    {
      alt: "Meal feature",
      src: meal,
      description: "Interactive Meal Flow",
      id: "meal",
    },
    {
      alt: "Workout feature",
      src: workout,
      description: "Workout Completion Flow",
      id: "workout",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Solution
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          I designed an iOS app that helps trainees follow custom workout and
          meal plans with ease. The design emphasizes clarity, habit-building,
          and seamless interaction—crafted in collaboration with the CTO and
          stakeholders to align with both user and business goals.
        </p>
      </div>

      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          // Make sure each card explicitly does NOT shrink (flex-shrink-0)
          // and takes its defined w-screen width
          <div
            key={i}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            {" "}
            {/* Added flex-shrink-0 */}
            {/* Image container: must be relative for Next.js Image fill prop */}
            <div className="relative md:w-[639px] w-full h-auto md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="w-full text-center">
              <Link
                href={`#${feature.id}`}
                className="w-full text-[18px] text-center font-medium text-primaryText underline under-border underline-offset-4"
              >
                {feature.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
