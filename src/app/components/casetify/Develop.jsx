import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  userflow,
  sketch,
  v1home,
  v1cart,
  v1commu,
  usability,
  fButton,
  fCommu,
  fReview,
  testing,
} from "../../../assets/casetify";
import Link from "next/link";

const Develop = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Iteration />
    </section>
  );
};

export default Develop;

const Iteration = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="system"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Iteration
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              I conducted a validation test on my V1 High-Fidelity prototype.
              While task completion rose to 100%, I introduced a new critical
              error.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The Failure:</span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">67%</span>
                  &nbsp;of users struggled to find the "Customize" button.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Root Cause:</span>
                  &nbsp;I used a low-contrast aesthetic (Grey on Black) to look
                  "sleek," but it failed WCAG accessibility standards.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p>
              <span className="italic font-bold">The Fix:</span>
              &nbsp;I redesigned the Primary Action Button using the brand's
              high-light gradient and added a an color wheel icon to communicate
              the button.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg flex flex-col gap-4">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={testing}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const UserFlow = () => {
//   return (
//     <Wrapper id="process">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           User Flow
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           The user flow, I planned to make the flow easier but still give users
//           options to explore both inspiration from the community feature and the
//           option for users to select the customize button.
//         </p>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full h-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={userflow}
//           alt="an image of how the How Might We process looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const Sketches = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Sketches
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           The purpose of the sketch is to make the app as clean as possible. The
//           purpose is to reduce the cognitive overload before the user uses the
//           customize function, which can cause confusion during the task, where
//           the inspiration for the sketch comes from Mobbin and Refero.
//         </p>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full h-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={sketch}
//           alt="an image of how the How Might We process looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const V1HighFidelity = () => {
//   const imageFeatures = [
//     {
//       alt: "Home Page Design",
//       src: v1home,
//     },
//     {
//       alt: "Form Page Design",
//       src: v1cart,
//     },
//     {
//       alt: "FAQ Page Design",
//       src: v1commu,
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           V1 - High-Fidelity for Usability Test
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText font-semibold md:text-[18px]">
//           After the sketch, I turned the design into V1 of high-fidelity. The
//           purpose of the high-fidelity was for the user to be able to navigate
//           the app and use the customize feature on the high-fidelity design.
//         </p>
//       </div>

//       <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
//         {imageFeatures.map((feature, i) => (
//           // Make sure each card explicitly does NOT shrink (flex-shrink-0)
//           // and takes its defined w-screen width
//           <div
//             key={feature.alt}
//             className="flex flex-col flex-shrink-0 gap-6 w-full md:w-auto"
//           >
//             {" "}
//             {/* Added flex-shrink-0 */}
//             {/* Image container: must be relative for Next.js Image fill prop */}
//             <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 width={200}
//                 height={200}
//                 src={feature.src}
//                 alt={feature.alt}
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             {/* <div className="w-full text-center">
//                 <span className="w-full text-[18px] text-center font-medium text-primaryText ">
//                   {feature.description}
//                 </span>
//               </div> */}
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const UsabilityTest = () => {
//   const results = [
//     {
//       header: "100%",
//       description:
//         "of participant able to completed the task using the new design.",
//     },
//     {
//       header: "67%",
//       description:
//         "of participant struggled to see the customize button due to low contrast with the background.",
//     },
//     {
//       header: "100%",
//       description:
//         "of participant suggested adding a review section to help inform their purchase decisions.",
//     },
//   ];

//   return (
//     <Wrapper id="usability">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Exploratory Usability Test
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
//             Three existing Casetify users tested the new design. While all
//             participants were able to complete the main task, there were some
//             minor usability issues affected the experience. Their feedback
//             highlighted both design improvements and feature expectations.
//           </p>
//         </div>
//         <div className="grid overflow-hidden relative place-items-center w-full md:w-1/2 border-border">
//           <Image
//             width={200}
//             height={200}
//             src={usability}
//             alt="an image of the results after the interview"
//             className="rounded-lg md:rounded-2xl"
//             quality={100}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-3">
//         {results.map((result, i) => (
//           <div
//             key={i}
//             className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
//           >
//             <h3 className="mb-6 font-satoshi text-3xl md:text-[40px]  font-semibold text-primaryText">
//               {result.header}
//             </h3>

//             <p className="w-full text-[18px] font-base md:text-[20px] text-primaryText flex-grow">
//               {result.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const Feedback = () => {
//   const projectFeatures = [
//     {
//       id: 1,
//       title: "Button visibility:",
//       description:
//         "Two out of three users said the customize button was hard to see due to its color blending with the background.",
//     },
//     {
//       id: 2,
//       title: "Review section:",
//       description:
//         "All users wanted to see customer reviews before customizing or purchasing a case.",
//     },
//     {
//       id: 3,
//       title: "Device selection:",
//       description:
//         "Some users suggested it would be helpful to choose their phone model earlier in the flow to avoid confusion later.",
//     },
//     {
//       id: 4,
//       title: "Inspiration content:",
//       description:
//         "Users wanted to browse inspiration images before starting customization.",
//     },
//   ];

//   const imageFeatures = [
//     {
//       alt: "Customize button more visible (Old → New Design) ",
//       src: fButton,
//     },
//     {
//       alt: "Added a review section (Old → New Design) ",
//       src: fReview,
//     },
//     {
//       alt: "Community to Explore (Old → New Design) ",
//       src: fCommu,
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           User Feedback on Design Changes
//         </h2>
//       </div>
//       <div className="flex flex-col gap-4 w-full md:flex-row text-primaryText">
//         {projectFeatures.map((feature) => (
//           <div
//             key={feature.id}
//             className="flex flex-col px-6 py-6 w-full rounded-2xl border bg-secondaryBg border-border md:flex-1"
//           >
//             <div className="min-h-[50px]  flex items-start">
//               <h3 className="text-xl font-semibold leading-tight font-satoshi md:text-2xl text-primaryText">
//                 {feature.title}
//               </h3>
//             </div>

//             <p className="w-full text-base md:text-[18px] text-primaryText flex-grow">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
//         {imageFeatures.map((feature, i) => (
//           // Make sure each card explicitly does NOT shrink (flex-shrink-0)
//           // and takes its defined w-screen width
//           <div
//             key={feature.alt}
//             className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
//           >
//             {" "}
//             {/* Added flex-shrink-0 */}
//             {/* Image container: must be relative for Next.js Image fill prop */}
//             <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 width={200}
//                 height={200}
//                 src={feature.src}
//                 alt={feature.alt}
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             <div className="w-full text-center">
//               <span className="w-full font-satoshi text-[18px] text-center font-medium text-primaryText ">
//                 {feature.alt}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };
