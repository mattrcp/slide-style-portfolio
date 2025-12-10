import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  timeline,
  interview,
  userResearch,
  userflow,
} from "../../../assets/teammie";
import { IconArrowNarrowDown } from "@tabler/icons-react";

import Link from "next/link";

const Discovery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <TheProblem />
      <ProductStrategy />
    </section>
  );
};

export default Discovery;

const TheProblem = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="problem"
    >
      <div className="flex justify-between items-center pb-6 border-b cs-content-container border-b-secondaryGrey text-secondaryText">
        <span className="text-sm">Scroll to read more</span>
        <IconArrowNarrowDown stroke={1} />
      </div>
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Problem
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Through 5 user interviews with design students, we validated a
              critical friction point in the education-to-career pipeline.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <h3 className="italic font-bold mbtext-lg font-satoshi">
                The Experience Gap:{" "}
              </h3>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Students:</span>
                  &nbsp; 100% of interviewees wanted to solve real user problems
                  but ended up doing generic "redesigns" because they couldn't
                  find engineers to build their ideas.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Founders/Devs:</span>
                  &nbsp;Often have great functional ideas but lack the design
                  skills to make them usable.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p>
              <span className="italic font-bold">The Opportunity: </span>
              &nbsp;Create a "dating app" for collaboration—matching technical
              founders with creative talent to ship portfolio-worthy products.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={userResearch}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
      <div className="flex justify-start items-center cs-content-container">
        <h1 className="text-[clamp(40px,4.5vw,56px)] leading-[1.1]">
          How might we
          <span className="italic text-highlightRed"> bridge the gap</span>{" "}
          between technical founders who need design help and students who need
          real-world experience, enabling them
          <span className="italic text-highlightRed">
            to build and ship portfolio-worthy products
          </span>{" "}
          together?
        </h1>
      </div>
    </Wrapper>
  );
};

const ProductStrategy = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="strategy"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Product Strategy
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              As the Project Lead, my first task wasn't design—it was
              Operations. I had 17 weeks to ship a working full-stack
              application.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">
                  The PRD (Product Requirement Document):
                </span>{" "}
                I defined the MVP scope to ensure we didn't overbuild.
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Must-Haves:</span>
                  &nbsp;User Auth, Project Posting, Filtering, Application
                  System.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Nice-to-Haves (Cut):</span>
                  &nbsp; Real-time Chat, Portfolio Hosting (Moved to V2).
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p>
              <span className="italic font-bold">The Gantt Chart:</span>
              &nbsp;I managed the cross-functional timeline, aligning design
              sprints with development sprints to ensure blocking issues were
              resolved early.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg flex flex-col gap-4">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={timeline}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
        <p className="text-lg font-bold text-white">Gantt Chart</p>
      </div>
    </Wrapper>
  );
};
