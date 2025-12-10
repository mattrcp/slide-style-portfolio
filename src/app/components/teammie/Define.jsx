import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { userflow } from "../../../assets/teammie";
import Link from "next/link";

const Define = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Interaction />
    </section>
  );
};

export default Define;

const Interaction = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="process"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Interaction Architecture
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Before touching pixels or code, I needed to define the structural
              logic of the application. I mapped the "Golden Path" for our two
              distinct users (Creators vs. Joiners) to ensure the system could
              handle the handshake between them.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The User Flow:</span> I
                defined the step-by-step logic for project creation to minimize
                friction.
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Logic:</span>
                  &nbsp;Sign Up → Create Profile → Post → Project Dashboard
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2">
                <span>
                  <span className="italic font-bold">Dev Impact:</span>
                  &nbsp;This flowchart didn't just guide the design; it became
                  the direct blueprint for my
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p>
              Next.js Routing structure, ensuring I knew exactly which routes
              (like `/dashboard` and `/create`) required authentication
              middleware vs. public access.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg flex flex-col gap-4">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={userflow}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const Ideation = () => {
//   return (
//     <Wrapper id="ideation">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Ideation
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           I initiated a brainstorming session with the team using the How Might
//           We (HMW) method. We began{" "}
//           <span className="font-semibold font-satoshi">
//             by breaking down the main goal into three core themes, each
//             addressing a specific user challenge.
//           </span>{" "}
//           For each theme, we crafted HMW questions and generated solution ideas
//           based on the services we could offer. After ideation, we prioritized
//           which features should be included in the demo prototype versus those
//           reserved for the final product roadmap.
//         </p>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full h-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={hmw}
//           alt="an image of how the How Might We process looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const Hmw = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Opportunity
//         </h2>
//       </div>

//       <div className="flex flex-col w-full">
//         <h1 className="w-full  font-satoshi font-medium  text-[clamp(24px,5vw,32px)] text-primaryText">
//           <span className="text-highlightBlue">How might we</span> help project
//           owners build effective teams while making it easier for students to
//           discover, understand, and join the right projects based on their
//           skills and availability?
//         </h1>
//       </div>
//     </Wrapper>
//   );
// };

// const Solution = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Solution
//         </h2>
//       </div>

//       <div className="flex flex-col w-full">
//         <h1 className="w-full text-primaryText font-satoshi font-medium  text-[clamp(24px,5vw,40px)]">
//           <span className="font-semibold text-highlightBlue">
//             A platform where project owners (creators) can share their concept
//             ideas and find designers with the right skill set to bring those
//             ideas to life.
//           </span>{" "}
//           Creators can post project details, specify required skills, and attach
//           their LinkedIn profile making it easy for interested design students
//           to discover the project and reach out for collaboration.
//         </h1>
//       </div>
//     </Wrapper>
//   );
// };
