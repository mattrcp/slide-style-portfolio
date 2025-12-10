"use client";

import Image from "next/image";
import Wrapper from "../Wrapper";

import { IconArrowNarrowDown } from "@tabler/icons-react";
import { evaluation } from "../../../assets/casetify";

const Discovery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Heuristic />
      <Strategy />
    </section>
  );
};

export default Discovery;

const Heuristic = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="problem"
    >
      <div className="flex justify-between items-center pb-6 border-b cs-content-container border-b-secondaryGrey text-secondaryText">
        <span className="text-sm">Scroll to read more</span>
        <IconArrowNarrowDown stroke={1} />
      </div>
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Heuristic Audit
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Before designing, I conducted a Jakob Nielsen Heuristic Evaluation
              on the existing live app to identify objective usability failures.
              It wasn't just "outdated"; it was broken.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">Key Violations:</span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">
                    User Control & Freedom:
                  </span>
                  &nbsp;Users were trapped in the customization flow with no
                  "Back" or "Reset" options.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">
                    Consistency & Standards:
                  </span>
                  &nbsp;Icons varied in weight and style, and didn’t explain
                  about the text
                </span>
              </li>

              {/* Item 3*/}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">
                    Recognition rather than Recall:
                  </span>
                  &nbsp;Product details were hidden until after design, forcing
                  users to memorize specs.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] pb-8 cs-image-container rounded-lg flex flex-col ">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={evaluation}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
        <p className="italic font-bold text-gray-200">
          First Version of Casetify App
        </p>
      </div>
    </Wrapper>
  );
};

const Strategy = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="strategy"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Business Strategy
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The Problem:</span> Users
                want unique cases but often lack the design skills to create
                them from scratch. This leads to "Blank Canvas Paralysis" and
                drop-off.
              </p>
            </div>
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">Goal:</span> Increase "Time
                on App" and "Customization Completion Rate."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center cs-content-container">
        <h1 className="text-[clamp(40px,4.5vw,56px)] leading-[1.1]">
          How might we
          <span className="italic text-highlightRed">
            {" "}
            utilize Generative AI
          </span>{" "}
          to lower the barrier to creativity, allowing non-designers to create
          bespoke products in seconds?
        </h1>
      </div>
    </Wrapper>
  );
};

// const Research = () => {
//   const finalFeatures = [
//     {
//       name: "Problem 1",
//       header: "Doesn’t explain about the product.",
//       description:
//         "First-time users struggle with the app due to unclear homepage guidance and limited navigation options. The static homepage prevents scrolling for more information, while the missing bottom navigation bar restricts user flow. Non-intuitive icons and poor accessibility further hinder the user experience.",
//       image: pHome,
//       id: "calendar",
//     },
//     {
//       name: "Problem 2",
//       header: "No options and informations.",
//       description:
//         "The product details page lacks essential information about the product, leaving users without adequate details to make informed decisions. Key product information is only displayed on the same page after users complete the customization process, which may lead to confusion and frustration. Additionally, the page does not offer users the option to reselect their device or switch to other device variants, further limiting flexibility and customization.",
//       image: pProduct,
//       id: "workout",
//     },
//     {
//       name: "Problem 3",
//       header: "Unable to communicate the design to user.",
//       description:
//         "The customize page lacks clarity in its functions and does not include an onboarding process to help users understand how to use it effectively. The limited actions available for customization make it difficult for users to navigate and utilize the features to personalize their case, resulting in a suboptimal user experience.",
//       image: pCustom,
//       id: "navigation",
//     },
//   ];

//   const cardVariants = {
//     initial: { opacity: 0, y: 50 }, // Start yd down and invisible
//     inView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     }, // y to original size and fade in
//   };

//   return (
//     <div
//       id="research"
//       className="flex overflow-auto flex-col gap-8 py-8 min-w-full md:py-16"
//       viewport={{ once: true, amount: 0.3 }} // Adjust amount as needed (e.g., 0.3 for 30% visibility)
//     >
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Heuristic Evaluiation
//         </h2>
//       </div>
//       <div className="flex flex-col gap-4 w-full md:gap-8 md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           First, I chose to do a heuristic evaluation to understand the app and
//           its flow. My goal is to accomplish the task by purchasing a custom
//           case.
//         </p>
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           What I found when I used the app was the inconvenience on the app that
//           it didn’t provide me an option to go back or hop to another page. The
//           experience was bad; it took time to understand the buttons and icons
//           and more problem as I listed below:
//         </p>
//       </div>

//       {finalFeatures.map((feature, i) => (
//         <div
//           className={`flex flex-col gap-10 justify-center items-center md:gap-20 md:flex-row-reverse`}
//           key={i + 1}
//           id={feature.id}
//           variants={cardVariants} // Apply the defined variants
//           initial="initial" // Set the initial state
//         >
//           {/* Text Content Block */}
//           <div className="flex flex-col gap-4 w-full md:w-1/2">
//             {" "}
//             {/* Added md:w-1/2 to share space */}
//             <span className="text-base font-medium font-satoshi text-secondaryText">
//               {feature.name}
//             </span>
//             <h3 className="text-2xl font-semibold font-satoshi text-primaryText">
//               {feature.header}
//             </h3>
//             <p className="w-full text-lg text-primaryText md:text-[18px]">
//               {feature.description}
//             </p>
//           </div>

//           <div
//             key={feature.alt}
//             className="flex flex-col gap-6 w-full shrink-0 md:w-auto"
//           >
//             {/* Video */}
//             <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 src={feature.image}
//                 alt={feature.alt}
//                 width={200}
//                 height={200}
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Exploratory = () => {
//   const results = [
//     {
//       header: "67%",
//       description:
//         "of users wanted to find inspiration before customizing, but the collaboration button feature interrupted their experience.",
//     },
//     {
//       header: "100%",
//       description:
//         "of users were confused by unexplained icons and unclear customization options, especially related to layout and grid features.",
//     },
//     {
//       header: "67%",
//       description:
//         "of users successfully completed the customization task, but many found the process too complex and lacked proper guidance and instructions.",
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Exploratory Usability Test
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
//             I'm running an exploratory usability test to see how people use the
//             app to buy or customize their mobile phone cases. I want to
//             understand how they navigate, what they enjoy about the experience,
//             and where they might run into any challenges.
//           </p>
//           <p className="w-full text-lg text-primaryText md:text-[18px] font-semibold">
//             Interviewed with 3 participants: None of the participants had ever
//             used the app before. One participant knew the brand, but two others
//             just heard the name.
//           </p>
//         </div>
//         <div className="grid overflow-hidden relative place-items-center w-full md:w-1/2 border-border">
//           <Image
//             width={200}
//             height={200}
//             src={exploreUsability}
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

// const Competitor = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Competitor Analysis
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           I did research on how each competitor values them-self to sell the
//           mobile phone cases on the app. I found that both competitors has a
//           good visual and mobile experience. The PopSockets had difficulty
//           buying a custom case because the app isn’t allowed to go back to the
//           home page or find a case to customize. On the other hand, CaseMate is
//           easy to use but doesn’t have a custom feature.
//         </p>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full h-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={competitor}
//           alt="an image of how the How Might We process looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };
