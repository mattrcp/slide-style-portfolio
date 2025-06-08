import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  homePage,
  formPage,
  faqPage,
  ownerPage,
  studentPage,
} from "/public/teammie";
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
        { id: 1, label: "Project Lead" },
        { id: 2, label: "UXUI Designer" },
        { id: 2, label: "Fullstack Developer" },
      ],
    },
    {
      header: "Team",
      details: [{ id: 1, label: "2 UXUI Designer" }],
    },
    {
      header: "Duration",
      details: [{ id: 1, label: "17 Weeks" }],
    },
  ];

  return (
    <Wrapper id="overview">
      <div className="w-full py-4 border-b border-border">
        <h1 className="text-[32px] md:text-[40px] leading-none text-secondaryText">
          Teammie
        </h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full gap-8">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Teammie is a collaboration platform for design students to find
            projects and teams to work on. Students can use the projects for
            their portfolios and gain real-world experience.
          </p>
          <div className="flex items-center justify-start gap-2 pb-2 border-b border-border w-fit ">
            <Link
              href="https://www.teammie.app/"
              target="_blank"
              className="font-satoshi"
            >
              View Live Website{" "}
            </Link>{" "}
            <IconArrowUpRight stroke={2} className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          {projectDetails.map((category) => (
            <div key={category.header} className="w-full h-full ">
              <h3 className="mb-2 md:mb-4 font-satoshi uppercase text-secondaryText text-lg md:text-[18px] font-medium">
                {category.header}
              </h3>
              <ul className="flex flex-col gap-2 font-satoshi text-primaryText">
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
      title: "Project Lead",
      description: (
        <>
          Led a cross-functional team to deliver a user-centered MVP, applying{" "}
          <span className="font-semibold font-satoshi">
            product thinking, UX strategy, and team leadership
          </span>{" "}
          throughout the process.
        </>
      ),
    },
    {
      id: 2,
      title: "PRD & Gantt Chart",
      description: (
        <>
          Created a detailed PRD and Gantt chart to define scope and timelines,
          using{" "}
          <span className="font-semibold font-satoshi">
            documentation, feature prioritization, and project planning
          </span>{" "}
          to guide execution.
        </>
      ),
    },
    {
      id: 3,
      title: "Facilitated Team Collaboration",
      description: (
        <>
          Hosted weekly meetings and async updates to maintain clarity and
          progress, leveraging{" "}
          <span className="font-semibold font-satoshi">
            communication, team management, and agile workflows.
          </span>
        </>
      ),
    },
    {
      id: 4,
      title: "Built with Next.js & MongoDB",
      description: (
        <>
          I developed core features using{" "}
          <span className="font-semibold font-satoshi">
            Next.js and MongoDB
          </span>
          , contributing to both front and back end with{" "}
          <span className="font-semibold font-satoshi">
            full-stack development skills.
          </span>
        </>
      ),
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
              <h3 className="text-xl font-semibold leading-tight font-satoshi md:text-2xl text-primaryText">
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
      description: "Lack of meaningful, portfolio-worthy projects",
    },
    {
      description: "Limited time for personal growth and side goals",
    },
    {
      description: "Few opportunities for practical experience",
    },
    {
      description: "Struggling to stand out in a competitive job market",
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
            Design students face real challenges when trying to grow and stand
            out. Here's what’s getting in their way:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
          {projectFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col h-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border"
            >
              <h3 className="mb-6 text-2xl font-semibold uppercase font-satoshi text-ternaryText">
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
      alt: "Home Page Design",
      src: homePage,
      description: "Home Page Design",
    },
    {
      alt: "Form Page Design",
      src: formPage,
      description: "Form Page Design",
    },
    {
      alt: "FAQ Page Design",
      src: faqPage,
      description: "FAQ Page Design",
    },
    {
      alt: "Guide for Project Owner",
      src: ownerPage,
      description: "Guide for Project Owner",
    },
    {
      alt: "Guide for Design Student",
      src: studentPage,
      description: "Guide for Design Student",
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
          Teammie connects design students with engineers, designers, and
          businesses to collaborate on real-world projects.{" "}
          <span className="font-semibold font-satoshi">
            The platform helps students to find a designer who wants them to
            design their products, and only for designers who want to build a
            portfolio, gain experience, and develop the skills needed to excel
            in their careers.
          </span>
        </p>
      </div>

      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          // Make sure each card explicitly does NOT shrink (flex-shrink-0)
          // and takes its defined w-screen width
          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            {" "}
            {/* Added flex-shrink-0 */}
            {/* Image container: must be relative for Next.js Image fill prop */}
            <div className="relative  w-auto h-auto md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-video ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="w-full text-center">
              <span className="w-full font-satoshi text-[18px] text-center font-medium text-primaryText ">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
