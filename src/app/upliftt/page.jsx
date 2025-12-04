import React from "react";
import Navigation from "../components/Navigation";
import Overview from "../components/upliftt/Overview";
import Discovery from "../components/upliftt/Discovery";
import Define from "../components/upliftt/Define";
import Delivery from "../components/upliftt/Learning";
import Learning from "../components/upliftt/Delivery";
import { thumbnail } from "../../../public/upliftt";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import TableOfContents from "../components/TableoOfContents";
import FooterSection from "../components/FooterSection";

const tocItems = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "problem", label: "Problem", href: "#problem" },
  { id: "strategy", label: "Strategy", href: "#strategy" },
  { id: "execution", label: "Execution", href: "#execution" },
  { id: "system", label: "System", href: "#system" },
  { id: "handoff", label: "Handoff", href: "#handoff" },
  { id: "impact", label: "impact", href: "#impact" },
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
        <Learning />
        <Delivery />
      </main>
      <div className="hidden fixed bottom-2 z-50 gap-6 justify-center items-center px-2 py-2 w-screen md:flex">
        <TableOfContents items={tocItems} />
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
      header: "Team:",
      details: [{ id: 1, label: "1 Designer (Me), 1 CTO/PM" }],
    },
    {
      header: "Timeline:",
      details: [{ id: 1, label: "14 Weeks" }],
    },
    {
      header: "Platform:",
      details: [{ id: 1, label: "iOS Native" }],
    },
  ];
  return (
    <Wrapper
      className="flex gap-8 justify-start items-center pt-24 mb-0 w-full h-auto md:pt-28 md:mb-16"
      id="overview"
    >
      <div className="overflow-hidden relative bg-[#1B1B1B]  cs-image-container rounded-lg ">
        <Image
          src={thumbnail}
          alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
          fill // <-- Use the fill prop
          className="object-cover object-center overflow-visible w-auto h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start px-0 md:gap-8 cs-content-container md:px-4">
        <h1 className="text-[clamp(40px,4.5vw,96px)] text-primaryText leading-[1.1] mb-4 md:w-3/4 2xl:w-4/5 w-full">
          <span className="italic text-highlightRed">Upliftt:</span> Closing the
          Loop Between Trainers and Clients
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
