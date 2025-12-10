import React from "react";
import Navigation from "../components/Navigation";

import Image from "next/image";
import Wrapper from "../components/Wrapper";
import TableOfContents from "../components/TableoOfContents";
import Overview from "../components/casetify/Overview";
import Discovery from "../components/casetify/Discovery";
import Define from "../components/casetify/Define";
import Develop from "../components/casetify/Develop";
import Delivery from "../components/casetify/Delivery";
import Learning from "../components/casetify/Learning";
import FooterSection from "../components/FooterSection";
import { casetify } from "../../assets/public";

const casetifyTOC = [
  { id: "overview", label: "Overview", href: "#overview" }, // Executive Summary + Solution Preview
  { id: "problem", label: "The Problem", href: "#problem" }, // Heuristic Audit
  { id: "strategy", label: "Strategy", href: "#strategy" }, // Business Strategy (GenAI Case)
  { id: "process", label: "Process", href: "#process" }, // The Iteration (Accessibility Fix)
  { id: "system", label: "The System", href: "#system" }, // GenAI Integration Logic
  { id: "handoff", label: "Handoff", href: "#handoff" }, // Design System (Sticker Sheet)
  { id: "impact", label: "Impact", href: "#impact" }, // Reflection on Accessibility
];
const page = () => {
  return (
    <div className="relative bg-primaryBg">
      <Navigation />
      <ImageThumbnail />
      <main className="w-full">
        <Overview />
        <Discovery />
        <Define />
        <Develop />
        <Delivery />
        <Learning />
      </main>
      <div className="hidden fixed bottom-2 z-50 gap-6 justify-center items-center px-2 py-2 w-screen md:flex">
        <TableOfContents items={casetifyTOC} />
        {/* <ProjectsShowcase /> */}
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
      details: [{ id: 1, label: "Product Designer Intern" }],
    },
    {
      header: "Timeline:",
      details: [{ id: 1, label: "14 Weeks" }],
    },

    {
      header: "Focus:",
      details: [
        { id: 1, label: "Mobile App Design (iOS), GenAI Integration, CRO" },
      ],
    },
    {
      header: "Prototype:",
      details: [
        {
          id: 1,
          // Added a label so the link has text to wrap
          label: "View Figma Prototype ↗",
          link: "https://www.figma.com/proto/KPQxpuknUdbqQeV94zASmM/Redesign-Casetify?page-id=10%3A97&node-id=1066-7631&viewport=-16%2C621%2C0.12&t=ro9Q4vI6KgTEOLBv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1066%3A7631",
        },
      ],
    },
  ];

  return (
    <Wrapper
      className="flex gap-8 justify-start items-center pt-24 mb-8 w-full h-auto md:pt-28 md:mb-16"
      id="overview"
      priority
    >
      <div className="overflow-hidden relative bg-[#1B1B1B] cs-image-container h-[20dvh] md:h-[65dvh] rounded-lg">
        <Image
          src={casetify}
          alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
          fill
          className="object-cover object-center overflow-visible w-auto h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start px-0 md:gap-8 cs-content-container md:px-4">
        <h1 className="text-[clamp(40px,4.5vw,96px)] text-primaryText leading-[1.1] mb-4 md:w-3/4 2xl:w-4/5 w-full">
          <span className="italic text-highlightRed">Casetify Redesign:</span>{" "}
          Modernizing E-Commerce with GenAI
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
