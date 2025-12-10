import React from "react";
import Wrapper from "../Wrapper";

const Learning = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Reflection />
    </section>
  );
};

export default Learning;

const Reflection = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="impact"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Reflection
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
            <div className="w-full">
              <p>
                Redesigning a live product taught me that "New" isn't always
                "Better" unless it's accessible.
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                Key Learning:
              </h3>
              <p>
                My V1 design looked "cleaner" but performed worse on visibility.
                This reinforced that Accessibility is not a constraint; it is a
                baseline requirement for conversion.
              </p>
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                Future Roadmap:
              </h3>
              <p>
                I would further explore "Community Prompt Sharing," allowing
                users to share their AI recipes, creating a network effect
                within the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// const Reflection = () => {
//   return (
//     <Wrapper id="learning">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText font-semibold">
//           Learning
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           This project explored the integration of AI in product design,
//           specifically focusing on creating phone case designs. Through this
//           case study, I have learned about AI-assisted design processes, but
//           also need to improve areas for growth. Moreover, I want to driven my
//           understanding of AI image generation techniques and develop a more
//           structured approach to documenting the technical aspects of AI-driven
//           design workflows. This knowledge will be play a role for optimizing
//           future AI-design collaborations and achieving more refined results.
//         </p>
//       </div>
//     </Wrapper>
//   );
// };
