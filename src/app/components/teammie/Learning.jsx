import React from "react";
import Wrapper from "../Wrapper";
// import { promote, promote2 } from "/public/upliftt";
import promote from "/public/teammie/promote.jpeg"; // Use full path from public root
import promote2 from "/public/teammie/promote2.jpeg";
import Image from "next/image";

const Learning = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Reflection />
      <Growth />
    </section>
  );
};

export default Learning;

const Reflection = () => {
  return (
    <Wrapper id="learning">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Reflection
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          As a group leader, even with just two members, learning to balance and
          align ideas was a new challenge for me. However, leading a design
          group turned out to be an incredibly rewarding experience.{" "}
          <span className="font-semibold">
            Collaborating to gather feedback made the process much more engaging
            and enjoyable than working alone, and it highlighted the value of
            teamwork in refining our designs.
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

const Growth = () => {
  const imagePresentation = [
    {
      alt: "An image of Matt presenting the project in front of the class room.",
      src: promote,
    },
    {
      alt: "An image of Matt presenting the project in front of the class room.",
      src: promote2,
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
          The opportunity to promote the project is a good opportunity to get
          feedback directly from potential users while also being able to go out
          of the comfort zone is a plus. After promoting it, I learned that not
          every user is ready to follow the project, and it's difficult to
          attract potential users to use the app.
        </p>
      </div>

      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imagePresentation.map((image, i) => (
          <div
            key={image.alt}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            <div className="relative w-full   h-[400px] border bg-secondaryBg rounded-2xl border-border aspect-video ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
