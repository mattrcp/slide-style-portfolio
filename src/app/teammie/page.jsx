import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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

const tocItems = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "discovery", label: "Discovery", href: "#discovery" },
  { id: "define", label: "Define", href: "#define" },
  { id: "develop", label: "Develop", href: "#develop" },
  { id: "delivery", label: "Delivery", href: "#delivery" },
  { id: "learning", label: "Learning", href: "#learning" },
];

const page = () => {
  return (
    <div className="relative">
      <Navigation />
      <ImageThumbnail />
      <main className="w-full px-4 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1280px] 2xl:max-w-[1440px]">
        <Overview />
        <Discovery />
        <Define />
        <Develop />
        <Delivery />
        <Learning />
      </main>
      <TableOfContents items={tocItems} />
      <Footer />
    </div>
  );
};

export default page;

const ImageThumbnail = () => {
  return (
    <Wrapper className="w-full h-[50vh] py-4 md:h-screen md:w-screen md:pt-20 md:pb-4">
      <div className="w-full h-full pl-2 pr-6 md:pl-4">
        <div className="w-full h-full bg-secondaryBg border-border rounded-2xl md:rounded-[32px] overflow-hidden relative">
          <Image
            src={thumbnail}
            alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
            fill // <-- Use the fill prop
            className="object-cover md:object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};
