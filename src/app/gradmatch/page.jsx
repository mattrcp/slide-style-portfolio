import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import TableOfContents from "../components/TableoOfContents";
import Overview from "../components/gradmatch/Overview";
import Discovery from "../components/gradmatch/Discovery";
import Define from "../components/gradmatch/Define";
import Develop from "../components/gradmatch/Develop";
import Delivery from "../components/gradmatch/Delivery";
import Learning from "../components/gradmatch/Learning";
import FooterSection from "../components/FooterSection";
import { gradmatch } from "../../assets/public";

const gradmatchTOC = [
  { id: "overview", label: "Overview", href: "#overview" }, // Executive Summary + Swipe GIF
  { id: "problem", label: "The Problem", href: "#problem" }, // Funnel Friction + Chart
  // { id: "strategy", label: "Strategy", href: "#strategy" }, // User Research (Two-Sided Market)
  { id: "process", label: "Process", href: "#process" }, // Interaction Architecture (Thresholds)
  // { id: "system", label: "The System", href: "#system" }, // Visual Design (Card Anatomy)
  { id: "handoff", label: "Final Design", href: "#handoff" }, // Accessibility (Hybrid Controls)
  { id: "impact", label: "Impact", href: "#impact" }, // Business of Hiring (Spam vs Quality)
];

const page = () => {
  return (
    <div className="relative bg-primaryBg">
      <Navigation />
      <ImageThumbnail />
      <main className="w-full px-4 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-screen-md md:max-w-lg lg:max-w-xl xl:max-w-[1300px] 2xl:max-w-[1440px]">
        <Overview />
        <Discovery />
        <Define />
        {/* <Develop /> */}
        <Delivery />
        <Learning />
      </main>
      <div className="hidden fixed bottom-2 z-50 gap-6 justify-center items-center px-2 py-2 w-screen md:flex">
        <TableOfContents items={gradmatchTOC} />
      </div>
      <footer className="flex justify-center items-center w-full">
        <FooterSection />
      </footer>
    </div>
  );
};

export default page;

const ImageThumbnail = () => {
  const projectDetails = [
    {
      header: "Role:",
      details: [{ id: 1, label: "Product Designer " }],
    },
    {
      header: "Timeline:",
      details: [{ id: 1, label: "4 Weeks" }],
    },

    {
      header: "Focus:",
      details: [{ id: 1, label: "Mobile Interaction Design " }],
    },
    // {
    //   header: "Prototype:",
    //   details: [
    //     {
    //       id: 1,
    //       // Added a label so the link has text to wrap
    //       label: "View Figma Prototype ↗",
    //       link: "https://www.figma.com/proto/jH1VWBkuoGaPp1OQPRN1cq/GradMatch?page-id=105%3A2876&node-id=149-7879&p=f&viewport=692%2C293%2C0.04&t=EU9RLHre4RVX4VAw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=149%3A7879",
    //     },
    //   ],
    // },
  ];

  return (
    <Wrapper
      className="flex gap-8 justify-start items-center pt-24 mb-8 w-full h-auto md:pt-28 md:mb-16"
      id="overview"
      priority
    >
      <div className="overflow-hidden relative bg-[#1B1B1B] cs-image-container h-[20dvh] md:h-[65dvh] rounded-lg">
        <Image
          src={gradmatch}
          alt="GradMach image thumbnail with 1 iphone mockup at the center of the image."
          fill
          className="object-cover object-center overflow-visible w-auto h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start px-0 md:gap-8 cs-content-container md:px-4">
        <h1 className="text-[clamp(40px,4.5vw,96px)] text-primaryText leading-[1.1] mb-4 md:w-3/4 2xl:w-4/5 w-full">
          <span className="italic text-highlightRed">GradMatch:</span> Applying
          to Jobs with a Single Gesture
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">
          {projectDetails.map((category) => (
            <div
              key={category.header}
              className="flex flex-row gap-6 justify-start items-start w-full h-auto"
            >
              <p className="uppercase font-satoshi text-secondaryText text-lg md:text-[18px] h-fit font-normal min-w-[100px]">
                {category.header}
              </p>
              <ul className="flex flex-col gap-2 font-satoshi text-primaryText h-fit">
                {category.details.map((item) => (
                  <li key={item.id} className="md:text-[18px] text-base">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors duration-200 decoration-1 underline-offset-8 hover:text-highlightRed"
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
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
