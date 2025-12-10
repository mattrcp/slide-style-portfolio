import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  homePage,
  formPage,
  faqPage,
  ownerPage,
  studentPage,
} from "../../../assets/teammie";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Overview = () => {
  return (
    <section
      className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16"
      id="overview"
    >
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
            Junior designers face a difficult time in the experience gap. They
            need experience to get a job, but they need a job to get experience.
            Teammie is a two-sided marketplace designed to break this cycle by
            connecting design students with real-world engineering projects.{" "}
            <br /> <br /> Unlike a traditional design project, I owned this
            product from concept to deployment. I led a team of 2 designers,
            managed the PRD, designed the UX/UI, and coded the final MVP in
            Next.js.
          </p>
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
    <Wrapper className="flex flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Solution
        </h2>
        <div className="flex flex-col gap-8 w-full md:flex-row">
          {" "}
          <p className="text-lg">
            Teammie connects design students with engineers, designers, and
            businesses to collaborate on real-world projects. The platform helps
            students to find a designer who wants them to design their products,
            and only for designers who want to build a portfolio, gain
            experience, and develop the skills needed to excel in their careers.
          </p>
        </div>
      </div>
      <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
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
            <div className="relative  w-auto h-auto md:h-[639px] bg-[#1B1B1B]  rounded-lg aspect-video ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            {/* <div className="w-full text-center">
              <span className="w-full text-[18px] text-center font-medium text-primaryText ">
                {feature.description}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
