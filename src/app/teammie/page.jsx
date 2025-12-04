import React from "react";
import Navigation from "../components/Navigation";
import { thumbnail } from "/public/teammie";
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

const tocItems = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "problem", label: "Problem", href: "#problem" },
  { id: "user", label: "User", href: "#user" },
  { id: "ideation", label: "Ideation", href: "#ideation" },
  { id: "process", label: "Process", href: "#process" },
  { id: "usability", label: "Usability", href: "#usability" },
  { id: "final", label: "Final Design", href: "#final" },
  { id: "learning", label: "Learning", href: "#learning" },
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
        <TableOfContents items={tocItems} />
      </div>
      <footer className="flex justify-center items-center w-full">
        <FooterSection />
      </footer>
    </div>
  );
};

export default page;

const ImageThumbnail = () => {
  return (
    <Wrapper className="w-full h-[50vh] py-4 md:h-screen md:w-screen md:pt-24  md:pb-4">
      <div className="pr-2 pl-2 w-full h-full md:pl-4 md:pr-6">
        <div className="w-full h-full bg-secondaryBg border-border grid place-items-end rounded-2xl md:rounded-[32px] overflow-hidden relative">
          <Image
            src={thumbnail}
            alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
            fill // <-- Use the fill prop
            className="object-contain object-bottom w-full h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};
