import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { thumbnail } from "/public/casetify";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import TableOfContents from "../components/TableoOfContents";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Overview from "../components/casetify/Overview";
import Discovery from "../components/casetify/Discovery";
import Define from "../components/casetify/Define";
import Develop from "../components/casetify/Develop";
import Delivery from "../components/casetify/Delivery";
import Learning from "../components/casetify/Learning";

const tocItems = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "research", label: "Research", href: "#research" },
  { id: "goal", label: "Goal", href: "#goal" },
  { id: "process", label: "Process", href: "#process" },
  { id: "usability", label: "Usability", href: "#usability" },
  { id: "final", label: "Final Design", href: "#final" },
  { id: "learning", label: "Learning", href: "#learning" },
];

const page = () => {
  return (
    <div className="relative">
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
      <div className="fixed z-50 items-center justify-center hidden w-screen gap-6 px-2 py-2 md:flex bottom-2">
        <TableOfContents items={tocItems} />
        {/* <ProjectsShowcase /> */}
      </div>
      <Footer />
    </div>
  );
};

export default page;

const ImageThumbnail = () => {
  return (
    <Wrapper className="w-full h-[50vh] py-4 md:h-screen md:w-screen md:pt-20 md:pb-4">
      <div className="w-full h-full pl-2 pr-2 md:pl-4 md:pr-6">
        <div className="w-full h-full bg-secondaryBg border-border grid place-items-end rounded-2xl md:rounded-[32px] overflow-hidden relative">
          <Image
            src={thumbnail}
            alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
            fill // <-- Use the fill prop
            className="object-cover w-full h-auto "
          />
        </div>
      </div>
    </Wrapper>
  );
};
