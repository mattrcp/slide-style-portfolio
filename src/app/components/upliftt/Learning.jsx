import React from "react";
import Wrapper from "../Wrapper";
import { document, handoff } from "/public/upliftt";
import Image from "next/image";

const Learning = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <DesignFile />
      <DesignDocument />
    </section>
  );
};

export default Learning;

const DesignFile = () => {
  return (
    <Wrapper id="handoff">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          My Design File
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          I have organized the pages into a clear hierarchy, with each page
          containing its own contents, which will help the team navigate through
          each page easily. It also shows how I categorized different flows
          (e.g., workouts, meals, tracking) and separated mobile components
          clearly.
        </p>
      </div>
      <div className="w-full h-[400px] md:h-[700px] lg:h-[800px] grid place-items-center border-border overflow-hidden relative">
        <Image
          src={document}
          alt="Figma workspace"
          className=" rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const DesignDocument = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Design Documentation & Interaction Guidelines
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To support development, I worked closely with the CTO to define a
            clear, readable documentation format. The handoff page breaks down
            the rationale and flow of each design section so that both
            developers and non-technical stakeholders can understand the
            intention behind every feature.
          </p>
        </div>
        <div className="relative grid w-full overflow-hidden md:w-1/2 place-items-center border-border">
          <Image
            src={handoff}
            alt="Figma workspace"
            className=" rounded-2xl"
            quality={100}
          />
        </div>
      </div>
    </Wrapper>
  );
};
