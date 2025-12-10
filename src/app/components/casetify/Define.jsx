import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";
import { research, userflow } from "../../../assets/casetify";

const Define = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Research />
      <Interaction />
    </section>
  );
};

export default Define;

const Research = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="process"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          User Research
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Three existing Casetify users tested the new design. While all
              participants were able to complete the main task, there were some
              minor usability issues affected the experience. Their feedback
              highlighted both design improvements and feature expectations.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <h3 className="italic font-bold mbtext-lg font-satoshi">
                The Baseline Metrics:
              </h3>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">100%</span>
                  &nbsp;of users were confused by the customization icons (Lack
                  of text labels).
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">67%</span>
                  &nbsp;successfully completed the task, but described the
                  process as "Complex" and "Lacking Guidance."
                </span>
              </li>

              {/* Item 3 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Zero</span>
                  &nbsp;participants could find the "Device Selection" tool
                  easily, leading to potential order errors.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={research}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Interaction = () => {
  return (
    <Wrapper className="flex overflow-visible flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Interaction Architecture & Wireframing
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>To fix the navigation, I flattened the hierarchy.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <h3 className="italic font-bold mbtext-lg font-satoshi">
                The User Flow:{" "}
              </h3>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Old Flow:</span>
                  &nbsp;Design → Device → Checkout (Risk: User designs for wrong
                  phone).
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">New Flow:</span>
                  &nbsp; Device → Design/AI Gen → Checkout (Benefit: Error
                  prevention).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg">
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

// const Goal = () => {
//   return (
//     <Wrapper id="goal">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           My Goal
//         </h2>
//       </div>

//       <div className="flex flex-col gap-4 w-full md:flex-row md:gap-20">
//         <div className="flex flex-col gap-4 w-full">
//           <span className="text-base font-medium font-satoshi text-highlightBlue">
//             Business Goal
//           </span>
//           <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
//             To increase better user experience of the app.
//           </h3>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             Added AI features to follow the technology trend and to provide the
//             user more options to explore more designs to customize their cases
//             while also{" "}
//             <span className="font-semibold">
//               to increases the user's adoption of the new features and increases
//               the time on the app.
//             </span>
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 w-full">
//           <span className="text-base font-medium font-satoshi text-highlightBlue">
//             Design Goal
//           </span>
//           <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
//             To improve better user experience of the app.
//           </h3>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             To improve user experience, I'll simplify task flow with a
//             navigation tab and integrate mobile model selection on the case
//             page. Icons will be updated for consistency, customizable case
//             templates will foster creativity, and an AI image editor will offer
//             enhanced personalization options.
//           </p>
//         </div>
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
//           To boost user adoption and improve the experience,{" "}
//           <span className="font-semibold text-highlightBlue">
//             I redesigned the app with AI-driven features like image generation
//             and customizable templates to spark creativity and align with
//             current trends.
//           </span>{" "}
//           I also streamlined the navigation, updated icons, and added mobile
//           model selection to simplify the customization process.
//         </h1>
//       </div>
//     </Wrapper>
//   );
// };
