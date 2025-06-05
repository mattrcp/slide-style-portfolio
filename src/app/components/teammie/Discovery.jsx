import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  matt,
  keeva,
  timeline,
  interview,
  designStudent,
  projectOwner,
  userJourney,
  hmw,
} from "/public/teammie";
import Link from "next/link";

const Discovery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <WhatsTeammie />
      <Planning />
      <Research />
    </section>
  );
};

export default Discovery;

const WhatsTeammie = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Why did we make Teammie?
        </h2>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="w-full text-primaryText font-satoshi font-medium  text-[clamp(24px,5vw,40px)]">
          Many students struggle to find meaningful, real-world projects that
          offer practical experience while managing personal growth. This
          challenge reveals a clear opportunity: to create a space where
          students can build relevant skills, collaborate with others, and grow
          their portfolios with purpose.
        </h1>
      </div>
    </Wrapper>
  );
};

const Planning = () => {
  const teams = [
    {
      image: matt,
      name: "Matt Ngamdan",
      role: "Project Lead + UXUI Designer",
    },
    { image: keeva, name: "Keeva Ng", role: "UXUI Designer" },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Project Planning
        </h2>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Before I started the project, I created a document to use as a
            project document (
            <Link
              href="https://docs.google.com/document/d/1XbhmCtbKw1auHcsSDsSWA2pez_2CQkeiWIX3LKJ9ENo/edit?tab=t.0#heading=h.jyqb888g44qk"
              target="_blank"
              className="underline underline-offset-2"
            >
              PRD
            </Link>
            ,
            <Link
              href="https://docs.google.com/spreadsheets/d/1t3Y2aPFUsRdbYqnFOtDGIT79MjLtqj-Hdm6l3ISsm54/edit?gid=0#gid=0"
              target="_blank"
              className="underline underline-offset-2"
            >
              Grant-chart
            </Link>
            ), where I wrote the product requirement document, project grant
            chart, and other documents necessary for a team to align with the
            project goal.
          </p>
        </div>
        <div className="flex flex-col items-start w-full gap-4 md:gap-0 md:items-center md:justify-between md:flex-row md:w-1/2">
          {teams.map((team, i) => {
            return (
              <div className="flex flex-row items-center justify-center gap-4">
                <Image
                  src={team.image}
                  alt="an image of the planning process from google excel"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium">{team.name}</p>
                  <p className="text-sm text-secondaryText">{team.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2"></div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={timeline}
          alt="Figma workspace"
          className=" rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const Research = () => {
  const results = [
    {
      header: "80%",
      description:
        "of students said they pursue UX/UI to solve real user problems, not just complete assignments.",
    },
    {
      header: "100%",
      description:
        "agreed that collaboration helps them complete projects more effectively.",
    },
    {
      header: "80%",
      description:
        "believe project success is measured by user satisfaction and impact.",
    },
    {
      header: "80%",
      description: "said they expect better results when working with others.",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          What have we found through User Interview?
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
            To support the problem and find an opportunity, 
            <span className="font-semibold">
              I started by finding 5 students who study in the design field and
              want to work as UXUI designers.
            </span>
          </p>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            The purpose of the interviews was to support the idea that the
            problems have the potential to be solved and to find an opportunity
            to support the project.
          </p>
        </div>
        <div className="relative grid w-full overflow-hidden md:w-1/2 place-items-center border-border">
          <Image
            src={interview}
            alt="an image of the results after the interview"
            className=" rounded-2xl"
            quality={100}
          />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {results.map((result, i) => (
          <div
            key={i}
            className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
          >
            <h3 className="mb-6 font-sans text-3xl md:text-[40px]  font-medium text-primaryText">
              {result.header}
            </h3>

            <p className="w-full text-[18px] font-base md:text-[20px] text-primaryText flex-grow">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
