import React from "react";
import Navigation from "../components/Navigation";
import { thumbnail } from "/public/gradmatch";
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

const tocItems = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "discovery", label: "Discovery", href: "#discovery" },
  { id: "define", label: "Define", href: "#define" },
  { id: "develop", label: "Develop", href: "#develop" },
  { id: "delivery", label: "Delivery", href: "#delivery" },
  { id: "reflection", label: "Reflection", href: "#reflection" },
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
      <FooterSection />
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
            className="object-cover object-bottom w-full h-auto md:object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};
