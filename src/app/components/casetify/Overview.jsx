import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { home, cart, edit, product, hifi } from "../../../assets/casetify";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Overview = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Summary />

      <Solution />
    </section>
  );
};

export default Overview;

const Summary = () => {
  return (
    <Wrapper
      className="flex flex-col gap-8 items-center md:gap-16"
      id="overview"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Summary
        </h2>
        <div className="flex flex-col gap-8 w-full md:flex-row">
          {" "}
          <p className="text-lg">
            Casetify is a market leader in tech accessories, but their mobile
            application creates significant friction during the "Customization"
            phase—the brand's highest-margin funnel.
            <br /> <br /> I executed a strategic redesign focused on Conversion
            Rate Optimization (CRO). By streamlining the navigation,
            establishing a consistent Design System, and integrating a GenAI
            Image Generator, I aimed to increase user engagement and reduce cart
            abandonment.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Solution = () => {
  return (
    <Wrapper className="flex overflow-visible flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Solution
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The AI Customizer:
            </h3>
            <p>
              A prompt-based interface allowing users to generate unique artwork
              directly onto a phone case model.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Streamlined Product Page:
            </h3>
            <p>
              A restructured layout that prioritizes "Device Selection" and
              "Reviews" to reduce purchase anxiety.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Modernized Navigation:
            </h3>
            <p>
              A standard tab-bar architecture replacing the legacy hamburger
              menu to improve discoverability.
            </p>
          </div>
        </div>
      </div>

      {/* Video Carousel Section */}
      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={hifi}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};
