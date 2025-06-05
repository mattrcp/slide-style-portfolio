import React from "react";
import Wrapper from "../Wrapper";
import {
  homePage,
  formPage,
  faqPage,
  ownerPage,
  studentPage,
} from "/public/teammie";
import Image from "next/image";

const Delivery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Solution />
    </section>
  );
};

export default Delivery;

const Solution = () => {
  const imageFeatures = [
    {
      alt: "Home Page Design",
      src: homePage,
      description: "Home Page Design",
    },
    {
      alt: "Form Page Design",
      src: formPage,
      description: "Form Page Design",
    },
    {
      alt: "FAQ Page Design",
      src: faqPage,
      description: "FAQ Page Design",
    },
    {
      alt: "Guide for Project Owner",
      src: ownerPage,
      description: "Guide for Project Owner",
    },
    {
      alt: "Guide for Design Student",
      src: studentPage,
      description: "Guide for Design Student",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Solution
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          A platform designed for design students that enables them to connect
          with fellow students and form teams to work on projects aimed at
          solving user problems. This platform promotes collaborative work on
          design and development projects, which can be showcased in portfolios
          or used in real-world situations. 
        </p>
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
            <div className="relative  w-auto h-auto md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-video ">
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
              <span className="w-full text-[18px] text-center font-medium text-primaryText ">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
