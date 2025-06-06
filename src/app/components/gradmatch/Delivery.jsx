import React from "react";

import Wrapper from "../Wrapper";
import { login, home, account, apply } from "/public/gradmatch";

import Image from "next/image";

const Delivery = () => {
  return (
    <section className="w-full h-full overflow-visible" id="delivery">
      <Final />
    </section>
  );
};

export default Delivery;

const Final = () => {
  const imageFeatures = [
    {
      alt: "Home Page Design",
      src: login,
    },
    {
      alt: "Product Page Design",
      src: home,
    },
    {
      alt: "Customize Page Design",
      src: apply,
    },
    {
      alt: "Cart Page Design",
      src: account,
    },
  ];
  return (
    <Wrapper>
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
            The application for students to showcase their skills through
            projects, experience, and education. It will help graduate or
            current students by allowing them to swipe left to skip and right to
            apply directly from the job list, without using third-party portals
            or modifying their resumes for each job and saving their time.
          </p>
        </div>

        <div className="relative w-full h-auto md:w-[639px] md:h-[639px] p-4 bg-secondaryBg border rounded-2xl border-border aspect-square ">
          <Image
            src="/gradmatch/animation.gif"
            alt=""
            fill
            className="object-contain w-full h-full rounded-2xl"
          />
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
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            {/* <div className="w-full text-center">
              <span className="w-full text-[18px] text-center font-medium text-primaryText ">
                {feature.alt}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
