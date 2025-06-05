import React from "react";
import Navigation from "../components/Navigation";
import Overview from "../components/upliftt/Overview";
import Discovery from "../components/upliftt/Discovery";
import Define from "../components/upliftt/Define";
import Delivery from "../components/upliftt/Learning";
import Learning from "../components/upliftt/Delivery";
import Footer from "../components/Footer";
import { thumbnail } from "../../../public/upliftt";
import Image from "next/image";
import Wrapper from "../components/Wrapper";

const page = () => {
  return (
    <div>
      <Navigation />
      <ImageThumbnail />
      <main className="w-full px-4 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1280px] 2xl:max-w-[1440px]">
        <Overview />
        <Discovery />
        <Define />
        <Learning />
        <Delivery />
      </main>
      <Footer />
    </div>
  );
};

export default page;

const ImageThumbnail = () => {
  return (
    <Wrapper className="w-full py-4 h-[50vh] md:h-screen md:w-screen md:pt-20 md:pb-4">
      <div className="w-full h-full pl-2 pr-2 md:pl-4">
        <div className="w-full h-full bg-secondaryBg border-border rounded-2xl md:rounded-[32px] overflow-hidden relative">
          <Image
            src={thumbnail}
            alt="Upliftt image thumbnail with 2 iphone mockup at the center of the image."
            fill // <-- Use the fill prop
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    </Wrapper>
  );
};
