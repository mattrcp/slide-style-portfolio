import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";

const Define = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Goal />
      <Solution />
    </section>
  );
};

export default Define;

const Goal = () => {
  return (
    <Wrapper id="goal">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          My Goal
        </h2>
      </div>

      <div className="flex flex-col w-full gap-4 md:flex-row md:gap-20">
        <div className="flex flex-col w-full gap-4">
          <span className="text-base font-medium font-satoshi text-highlightBlue">
            Business Goal
          </span>
          <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
            To increase better user experience of the app.
          </h3>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Added AI features to follow the technology trend and to provide the
            user more options to explore more designs to customize their cases
            while also{" "}
            <span className="font-semibold">
              to increases the user's adoption of the new features and increases
              the time on the app.
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <span className="text-base font-medium font-satoshi text-highlightBlue">
            Design Goal
          </span>
          <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
            To improve better user experience of the app.
          </h3>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To improve user experience, I'll simplify task flow with a
            navigation tab and integrate mobile model selection on the case
            page. Icons will be updated for consistency, customizable case
            templates will foster creativity, and an AI image editor will offer
            enhanced personalization options.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Solution = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Solution
        </h2>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="w-full text-primaryText font-satoshi font-medium  text-[clamp(24px,5vw,40px)]">
          To boost user adoption and improve the experience,{" "}
          <span className="font-semibold text-highlightBlue">
            I redesigned the app with AI-driven features like image generation
            and customizable templates to spark creativity and align with
            current trends.
          </span>{" "}
          I also streamlined the navigation, updated icons, and added mobile
          model selection to simplify the customization process.
        </h1>
      </div>
    </Wrapper>
  );
};
