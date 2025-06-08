import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { home, cart, edit, product } from "/public/casetify";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Overview = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Summary />
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
      details: [{ id: 1, label: "UXUI Designer" }],
    },
    {
      header: "Platform",
      details: [{ id: 1, label: "IOS Application" }],
    },
    {
      header: "Duration",
      details: [{ id: 1, label: "13 Weeks" }],
    },
  ];

  return (
    <Wrapper id="overview">
      <div className="w-full py-4 border-b border-border">
        <h1 className="text-[32px] md:text-[40px] leading-none text-secondaryText">
          Redesign Casetify App
        </h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full gap-8">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            This project was to redesign the Casetify app and improve its user
            experience. Generative Artificial Intelligence (GenAI) was added to
            the app to provide better alternative results. The app allowed users
            to customize mobile cases and buy cases based on their designs.
          </p>
          <div className="flex items-center justify-start gap-2 pb-2 border-b border-border w-fit ">
            <Link
              href="https://www.figma.com/proto/KPQxpuknUdbqQeV94zASmM/Redesign-Casetify?node-id=570-4007&t=WM6FIHiQ9Hn1Fu1N-1&scaling=scale-down&content-scaling=fixed&page-id=10%3A97&starting-point-node-id=570%3A4007&show-proto-sidebar=1"
              target="_blank"
              className="font-satoshi"
            >
              View High Fidelity Prototype{" "}
            </Link>{" "}
            <IconArrowUpRight stroke={2} className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          {projectDetails.map((category) => (
            <div key={category.header} className="w-full h-full ">
              <h3
                className="mb-2 md:mb-4 font-satoshi
               uppercase text-secondaryText text-lg md:text-[18px] font-medium"
              >
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

const Problem = () => {
  const projectFeatures = [
    {
      header: "Outdated Design:",
      description:
        "The app has used the same style for 5–10 years with no significant visual updates.",
    },
    {
      header: "Lack of Visual Appeal:",
      description:
        "The interface feels uninspiring and outdated, which may affect user engagement.",
    },
    {
      header: "Complicated User Flow:",
      description:
        "Users experience confusing navigation and inefficient steps to complete tasks.",
    },
    {
      header: "Design Inconsistencies:",
      description:
        "There are noticeable inconsistencies in layout, typography, and UI components throughout the app.",
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
            After exploring the Casetify app, I identified several usability and
            visual design issues that impact the overall user experience. The
            app, while functional, shows signs of being outdated and lacks the
            polish expected from a modern e-commerce platform. Here are the key
            issues I observed:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
          {projectFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col h-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border"
            >
              <h3 className="mb-6 font-satoshi text-[20px] md:text-[24px] font-semibold text-secondaryText">
                {feature.header}
              </h3>

              <p className="w-full text-[18px] font-medium md:text-[20px] text-primaryText flex-grow">
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
      src: home,
    },
    {
      alt: "Form Page Design",
      src: product,
    },
    {
      alt: "FAQ Page Design",
      src: edit,
    },
    {
      alt: "Guide for Project Owner",
      src: cart,
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
          Improve the application's design ability by implementing a design
          system on the app to maintain the design across the app. 
          <span className="font-semibold">
            Add a GenAI feature to attract customers to use the custom case by
            prompting the AI to generate images.
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
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
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
