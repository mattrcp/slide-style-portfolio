import React from "react";
import Wrapper from "../Wrapper";
import { IconArrowNarrowDown } from "@tabler/icons-react";

const Discovery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Problem />
      <Research />
    </section>
  );
};

export default Discovery;

const Problem = () => {
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
          The Problem
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              I analyzed the current landscape (LinkedIn, Handshake, WayUp) and
              identified a critical inefficiency for the "Entry-Level" persona.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The "Application Tax":</span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">The Bottleneck:</span>
                  &nbsp;Students spend avg. 20-30 minutes tailoring resumes for
                  a single entry-level role.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">The Result:</span>
                  &nbsp;High abandonment rates. Students give up because the ROI
                  on a single application feels too low.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center cs-content-container">
        <h1 className="text-[clamp(40px,4.5vw,56px)] leading-[1.1]">
          How might we
          <span className="italic text-highlightRed">
            {" "}
            reduce the "cost" of applying to zero,
          </span>{" "}
          enabling students to apply to high volumes of relevant jobs without
          sacrificing quality?
        </h1>
      </div>
    </Wrapper>
  );
};

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
            <p>I defined two core personas to ensure the ecosystem worked.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">
                  1. The "Volume" Seeker (Student)
                </span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Goal:</span>
                  &nbsp;Wants to cast a wide net quickly.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Pain:</span>
                  &nbsp;"I hate rewriting my cover letter 50 times."
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">
                  2. The "Signal" Seeker (Recruiter)
                </span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Goal:</span>
                  &nbsp;Wants to see portfolio proof, not just buzzwords.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Pain:</span>
                  &nbsp;"I get 500 resumes that clearly didn't read the job
                  description."
                </span>
              </li>
            </ul>
          </div>
          <div className="p-4 w-full bg-highlightYellow">
            <div className="flex flex-col gap-2 md:flex-row">
              <span className="w-6">💡</span>
              <p className="grow">
                <span className="italic font-bold flex-0">The Insight:</span>
                &nbsp;Recruiters don't need more applications; they need
                standardized applications. By forcing a standardized profile, we
                make the "Swipe Apply" viable for both sides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// const Research = () => {
//   const results = [
//     {
//       header: "Over 60%",
//       description:
//         "of hiring teams require candidates to have both hard and soft skills, with communication being the most valued.",
//     },
//     {
//       header: "More than 70%",
//       description: "expect students to have relevant work experience.",
//     },
//     {
//       header: "Over 60%",
//       description:
//         "of resumes fail to clearly communicate the candidate's skills in relation to the job.",
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Problem Overview
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
//             Recruiters today are seeking experienced, well-rounded
//             candidates—even for entry-level roles—making it challenging for
//             students to stand out.
//           </p>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             This highlights a critical gap: Students struggle to match
//             expectations due to a lack of practical experience and ineffective
//             self-representation, making the application process both frustrating
//             and time-consuming.{" "}
//           </p>
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
