import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  userflow,
  lowfi,
  midfi,
  usability,
  nextjs,
} from "../../../assets/teammie";
import Link from "next/link";

const Develop = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <UsabilityPivot />
      <NextJs />
    </section>
  );
};

export default Develop;

const UsabilityPivot = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="system"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Usability Pivot{" "}
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              We conducted Mid-Fidelity testing with 3 users to validate the
              core flows. The results forced a major pivot in our information
              architecture.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The Failure:</span>
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">The Issue::</span>
                  &nbsp;100% of participants found the main "Category Filter"
                  misleading. They expected it to sort by Industry (Fintech,
                  Health), but it sorted by Role (Designer, Dev).
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">
                    The Banner Blindness:
                  </span>
                  &nbsp;67% of users ignored the main value prop banner because
                  it looked too much like an ad.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <p>
              <span className="italic font-bold">The Fix:</span>
              &nbsp;I redesigned the filter logic to be explicit tags
              (Skill-Based) rather than generic categories, and moved the value
              proposition into the hero text for immediate readability.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg flex flex-col gap-4">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={usability}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const NextJs = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="handoff"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Designing for Next.js
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Designing for a product you have to code yourself changes how you
              approach UI. Since I am a designer and developer, I had to balance{" "}
              <span className="font-bold">Aesthetic Ambition</span> with{" "}
              <span className="font-bold">Technical Feasibility</span>.
            </p>
          </div>
          <div className="mb-2 w-full">
            <p className="text-lg">
              <span className="italic font-bold">The Constraint:</span> I chose{" "}
              <span className="font-bold">Next.js (React)</span> for performance
              and SEO. This meant I needed a component-based design system that
              mapped 1:1 with React components.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The Execution:</span>
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Atomic Design:</span>
                  &nbsp;I built the Figma file to mirror the code structure
                  (Atoms = Buttons, Molecules = Search Bars).
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Grid Logic:</span>
                  &nbsp;I used Tailwind CSS utility classes in my head while
                  designing, ensuring every padding and margin in Figma was a
                  valid Tailwind class (e.g., `p-4`, `gap-6`).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] p-8 cs-image-container rounded-lg flex flex-col gap-4">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={nextjs}
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

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             For the first user flow, I wanted to make it as easy and
//             understandable as possible so that users can complete the task
//             without hesitation when they use the demo. I started by using the
//             scenario so we could know the steps of each click from our target
//             users' point of view.
//           </p>
//         </div>
//         <div className="grid overflow-hidden relative place-items-center w-full md:w-1/2 border-border">
//           <Image
//             width={200}
//             height={200}
//             src={userflow}
//             alt="an image of how the user flow looks like"
//             className="rounded-lg md:rounded-2xl"
//             quality={100}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const LowFi = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Low-Fidelity Design
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             To kick off the design phase, I began by sketching early concepts,
//             focusing on a clean and functional layout.{" "}
//             <span className="font-semibold">
//               The core design goal was to engage UX/UI students by making
//               project cards easy to scan, visually organized, and compelling
//               enough to encourage clicks.
//             </span>{" "}
//             I drew inspiration from blog listings and job board sites—platforms
//             that effectively balance headlines, descriptions, and searchable
//             skill tags. These elements informed how information should be
//             displayed on each card.
//           </p>
//         </div>
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             Working with the team, we translated these sketches into
//             low-fidelity wireframes, covering key flows such as the landing
//             page, modals, and submission form. After creating multiple versions,
//             we voted on the most effective designs to include in the demo. These
//             chosen screens were then tested with real users during the
//             mid-fidelity usability testing stage.
//           </p>
//         </div>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={lowfi}
//           alt="an image of how the user flow looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const MidFi = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Mid-Fidelity Prototype for Usability Test
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             To validate our design direction, I led the usability testing phase
//             using a mid-fidelity prototype. I assigned key tasks to the team
//             designing the landing page, modals, and form screens then
//             facilitated a design critique and voting session to choose the
//             strongest version for testing.
//           </p>
//         </div>
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             <span className="font-semibold">
//               We chose mid-fidelity because it represented the most accurate
//               user experience without visual distractions. Since the test
//               required users to read real content, mid-fidelity allowed us to
//               focus on information hierarchy, content clarity, and interaction
//               flow before applying the final UI.
//             </span>{" "}
//             The outcome helped us finalize the layout and functionality for our
//             high-fidelity prototype.
//           </p>
//         </div>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full border-border">
//         <Image
//           width={200}
//           height={200}
//           src={midfi}
//           alt="an image of how the user flow looks like"
//           className="rounded-lg md:rounded-2xl"
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };

// const UsabilityTest = () => {
//   const results = [
//     {
//       header: "67%",
//       description:
//         "of participants were confused by the banner message, noting that it lacked clarity and failed to immediately communicate the purpose of the platform.",
//     },
//     {
//       header: "100%",
//       description:
//         "of participants found the category filter misleading, expecting it to sort by skill or category rather than just job position.",
//     },
//   ];

//   return (
//     <Wrapper id="usability">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Results from the usability test
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
//             <span className="font-semibold">
//               We conducted a remote usability test using Google Meet with 3
//               participants, including 2 from our target audience of UX/UI design
//               students.
//             </span>{" "}
//             The prototype used was mid-fidelity, chosen for its ability to
//             communicate structure and real content without the distraction of
//             polished visuals.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">
//         {results.map((result, i) => (
//           <div
//             key={i}
//             className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
//           >
//             <h3 className="mb-6 font-sans text-3xl md:text-[40px]  font-semibold text-primaryText">
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
