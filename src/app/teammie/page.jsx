import React from "react";
import Navigation from "../components/Navigation";
import { thumbnail } from "../../assets/teammie";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import Overview from "../components/teammie/Overview";
import Discovery from "../components/teammie/Discovery";
import Define from "../components/teammie/Define";
import Develop from "../components/teammie/Develop";
import Delivery from "../components/teammie/Delivery";
import Learning from "../components/teammie/Learning";
import TableOfContents from "../components/TableoOfContents";
import FooterSection from "../components/FooterSection";
import { teammie } from "../../assets/public";

const teammieTOC = [
  { id: "overview", label: "Overview", href: "#overview" }, // Executive Summary + Solution Preview
  { id: "problem", label: "The Problem", href: "#problem" }, // Market Problem + Data Card
  { id: "strategy", label: "Strategy", href: "#strategy" }, // Product Strategy (Scope vs Timeline)
  { id: "process", label: "Process", href: "#process" }, // Interaction Arch + Hybrid Workflow (Code)
  { id: "system", label: "The System", href: "#system" }, // Usability Pivot (Filter Failure)
  { id: "handoff", label: "Implementation", href: "#handoff" }, // VS Code vs Figma
  { id: "impact", label: "Impact", href: "#impact" }, // Cold Start Problem
];

const page = () => {
  return (
    <div className="relative bg-primaryBg">
      <Navigation />
      <ImageThumbnail />
      <main className="w-full px-4 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1300px] 2xl:max-w-[1440px]">
        <Overview />
        <Discovery />
        <Define />
        <Develop />
        <Delivery />
        <Learning />
      </main>
      <div className="hidden fixed bottom-2 z-50 gap-6 justify-center items-center px-2 py-2 w-screen md:flex">
        <TableOfContents items={teammieTOC} />
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
      details: [
        { id: 1, label: "Product Lead & Full-Stack Developer (Design + Code)" },
      ],
    },
    {
      header: "Team:",
      details: [{ id: 1, label: "2 Designers" }],
    },
    {
      header: "Timeline:",
      details: [{ id: 1, label: "14 Weeks" }],
    },
    {
      header: "Tech Stack:",
      details: [{ id: 1, label: " Next.js, MongoDB, Tailwind CSS" }],
    },
    {
      header: "Prototype:",
      details: [
        {
          id: 1,
          // Added a label so the link has text to wrap
          label: "View Live Site ↗",
          link: "https://teammie.vercel.app/",
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
      <div className="overflow-hidden relative bg-[#1B1B1B]  cs-image-container h-[20dvh] md:h-[65dvh] rounded-lg ">
        <Image
          src={teammie}
          alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
          fill // <-- Use the fill prop
          className="object-cover object-center overflow-visible w-auto h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start px-0 md:gap-8 cs-content-container md:px-4">
        <h1 className="text-[clamp(40px,4.5vw,96px)] text-primaryText leading-[1.1] mb-4  w-full">
          <span className="italic text-highlightRed">Teammie:</span> Solving the
          "Experience Paradox" for Junior Designers
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">
          {projectDetails.map((category) => (
            <div
              key={category.header}
              className="flex flex-row gap-6 justify-start items-start w-full h-auto"
            >
              <p className="uppercase font-satoshi text-secondaryText text-lg md:text-[18px] h-fit font-normal">
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
