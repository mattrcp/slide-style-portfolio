import React from "react";

import Wrapper from "../Wrapper";
import { home, product, edit, cart, designSystem } from "/public/casetify";
import Image from "next/image";

const Delivery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Final />
      <DesignSystem />
    </section>
  );
};

export default Delivery;

const Final = () => {
  const imageFeatures = [
    {
      alt: "Home Page Design",
      src: home,
      description: "Home Page Design",
    },
    {
      alt: "Product Page Design",
      src: product,
      description: "Product Page Design",
    },
    {
      alt: "Customize Page Design",
      src: edit,
      description: "Customize Page Design",
    },
    {
      alt: "Cart Page Design",
      src: cart,
      description: "Cart Page Design",
    },
  ];
  return (
    <Wrapper id="final">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Final Design
        </h2>
      </div>

      <div
        className={`flex flex-col gap-10 md:gap-20 items-center md:flex-row-reverse justify-center `}
      >
        {/* Text Content Block */}
        <div className="flex flex-col w-full gap-4 md:w-1/2">
          {" "}
          {/* Added md:w-1/2 to share space */}
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Improve the application's design ability by implementing a design
            system on the app to maintain the design across the app. Add a GenAI
            feature to attract customers to use the custom case by prompting the
            AI to generate images.
          </p>
        </div>

        {/* Video Block */}

        <div className="flex items-center justify-center w-full overflow-hidden border p-14 md:w-1/2 bg-secondaryBg rounded-3xl md:rounded-[32px] border-border aspect-square relative">
          {/* Video */}
          <video
            src="/casetify/prototype.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={`object-contain w-auto h-full rounded-3xl md:rounded-[30px] transition-opacity duration-300 }`}
          ></video>
        </div>
      </div>
      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          // Make sure each card explicitly does NOT shrink (flex-shrink-0)
          // and takes its defined w-screen width
          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            {" "}
            {/* Added flex-shrink-0 */}
            {/* Image container: must be relative for Next.js Image fill prop */}
            <div className="relative w-full h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="w-full text-center">
              <span className="w-full font-satoshi text-[18px] text-center font-medium text-primaryText ">
                {feature.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const DesignSystem = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Design System
        </h2>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={designSystem}
          alt="an image of how the How Might We process looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};
