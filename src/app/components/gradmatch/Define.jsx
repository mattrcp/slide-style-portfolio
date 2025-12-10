import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";
import { lwofi } from "@/assets/gradmatch";

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
      // id="process"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Interaction Architecture
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              Designing a gesture-based interface requires strict rules to
              prevent accidental actions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <p className="text-lg">
                <span className="italic font-bold">The Gesture Physics:</span>{" "}
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Threshold:</span>
                  &nbsp;A swipe must travel 40% of the screen width to commit
                  the action.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">Feedback:</span>
                  &nbsp;Haptic feedback (vibration) triggers on successful
                  commit.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={lwofi}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const TargetUsers = () => {
//   const results = [
//     {
//       header: "College and grad students",
//       description:
//         "These users are seeking their first job or internship opportunities and will interact directly with the app to discover roles, apply, and refer peers. They are also key in helping the platform grow organically through peer-to-peer influence.",
//     },
//     {
//       header: "Recruiters and hiring teams",
//       description:
//         "These users use the platform to source qualified, early-career candidates. As they represent the primary revenue source for GradMatch, their needs for efficiency and accurate talent matching directly shape our business goals.",
//     },
//   ];

//   const userLists = [
//     {
//       id: 1,
//       image: student,
//       header: "Final-Year Student",

//       list: [
//         {
//           title: "Goals",
//           items: [
//             "Gain practical experience before graduation",
//             " Build a strong, relevant portfolio",
//             "Collaborate with developers and real stakeholders",
//             "Increase her chances of getting hired right after graduation",
//           ],
//         },
//         {
//           title: "Pains",
//           items: [
//             "Struggles to find portfolio-worthy projects with real impact",
//             "Feels overwhelmed by unclear job expectations for entry-level roles",
//             "Lacks feedback on applications and doesn’t know how to improve",
//             "Finds it hard to stand out among other students with similar credentials",
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       image: recruiter,
//       header: "Technical Recruiter", // Changed header for differentiation

//       list: [
//         {
//           title: "Goals",
//           items: [
//             "Quickly identify qualified, job-ready candidates",
//             "See proof of skills through real-world projects",
//             "Collaborate with candidates who understand project workflows",
//             "Reduce hiring time and improve match quality",
//           ],
//         },
//         {
//           title: "Pains",
//           items: [
//             "Too many resumes with inconsistent or unclear skill representation",
//             "Difficult to assess soft skills like communication or collaboration",
//             "Entry-level candidates often lack real project experience",
//             "Wastes time chasing applicants who aren’t a good match",
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="flex overflow-auto flex-col gap-8 py-8 min-w-full md:py-16">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Our Main Users
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:flex-row md:gap-20">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px] ">
//             To design an experience that reflects the needs of our core
//             audience, we identified two primary user groups for the GradMatch
//             mobile app:
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
//           {results.map((result, i) => (
//             <Wrapper
//               key={i}
//               className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
//             >
//               <div>
//                 <h3 className=" font-satoshi text-xl md:text-[24px] md:mb-6 mb-2  font-semibold text-primaryText">
//                   {result.header}
//                 </h3>
//                 <p className="w-full text-[18px] font-base md:text-[20px] text-primaryText flex-grow">
//                   {result.description}
//                 </p>
//               </div>
//             </Wrapper>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 w-full md:flex-row text-primaryText">
//         {userLists.map((user) => (
//           <div
//             key={user.id}
//             className="flex flex-col w-full px-6 py-6 gap-8 bg-secondaryBg  border-border border md:flex-1 rounded-2xl md:rounded-[32px]"
//           >
//             <div className="flex items-center gap-4 h-[300px]  md:h-[600px] ">
//               {" "}
//               <Image
//                 src={user.image}
//                 alt={user.header}
//                 width={200}
//                 height={200}
//                 className="object-cover object-center w-full h-full rounded-lg md:rounded-2xl"
//               />
//             </div>
//             <div className="flex flex-col gap-6">
//               <h4 className="text-xl font-semibold leading-tight font-satoshi md:text-2xl text-primaryText">
//                 {user.header}
//               </h4>
//               <div className="flex flex-col gap-8">
//                 {user.list.map((section, sectionIndex) => (
//                   <div key={sectionIndex} className="flex flex-col gap-2">
//                     <h5 className="text-lg font-medium font-satoshi text-primaryText">
//                       {section.title}
//                     </h5>
//                     {/* Removed list-disc list-inside from ul */}
//                     <ul className="space-y-1 text-primaryText">
//                       {section.items.map((item, itemIndex) => (
//                         <li
//                           key={itemIndex}
//                           className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0 font-satoshi " // The key classes
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Competitor = () => {
//   // Array of competitor descriptions
//   const competitor = [
//     <div className="font-satoshi">
//       <span className="font-semibold">Handshake</span> - Good Ui design and easy
//       to navigate in the app and all of their features is to help student land
//       the job.
//     </div>,
//     <div className="font-satoshi">
//       <span className="font-semibold">WayUp</span> - Simple style,
//       non-application, old style layout in job listing. They will match the job
//       position for students while also students can applying directly to the job
//       list.
//     </div>,
//     <div className="font-satoshi">
//       <span className="font-semibold">Y Combinator</span> - Simple style for job
//       listing but has a strong connection for a student who wants to work in a
//       start-up or can apply to the student program, which will help a student
//       get a position and mentor.
//     </div>,
//   ];

//   return (
//     // Wrapper component for consistent padding and max-width
//     <Wrapper>
//       {/* Section title for Competitor Analysis */}
//       <div className="py-4 w-full border-b border-border">
//         {" "}
//         {/* Used original border-border class */}
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           {" "}
//           {/* Used original text sizes and color */}
//           Competitor Analysis
//         </h2>
//       </div>

//       {/* Main content area, structured for responsive layout */}
//       <div className="flex flex-col gap-4 w-full md:flex-row md:gap-20">
//         {" "}
//         {/* Used original gap */}
//         {/* Left column for introductory text */}
//         <div className="flex flex-col gap-4 w-full">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             {" "}
//             {/* Used original text sizes and color */}
//             There are 3 competitors that work similarly to GradMatch, and their
//             target users are college students and recent graduates.
//           </p>
//         </div>
//         {/* Right column for competitor list */}
//         <div className="flex flex-col gap-4 w-full">
//           <ul className="space-y-1 text-base text-primaryText font-satoshi">
//             {" "}
//             {/* Used original space-y and text sizes/color */}
//             {/* Mapping through the competitor array to render each item */}
//             {competitor.map((item, itemIndex) => (
//               <li
//                 key={itemIndex} // Unique key for list items
//                 className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0" // Used original bullet point styling
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Hmw = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           How Might We
//         </h2>
//       </div>
//       <div className="flex flex-col gap-8 w-full md:flex-row md:gap-20 text-primaryText">
//         <div className="flex flex-col gap-4 w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             After I’d done the research and learned more about the market and
//             competitors, I started by using HMW to identify problems. I started
//             by generating ideas for the application for students and the human
//             resource team to help them overcome issues from both hiring and
//             students.
//           </p>
//         </div>
//         <div className="grid overflow-hidden relative place-items-center w-full h-full md:w-1/2 border-border">
//           <Image
//             src={hmw}
//             alt="an image of how the How Might We process looks like"
//             className="rounded-lg md:rounded-2xl"
//             quality={100}
//             width={200}
//             height={200}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Affinity = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Affinity Map
//         </h2>
//       </div>
//       <div className="flex flex-col gap-8 w-full md:flex-row md:gap-20 text-primaryText">
//         <div className="flex flex-col gap-4 w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             Next, I used an affinity map to categorize each idea into a theme.
//             Based on the data and the idea from HMW that I generated, I believed
//             recruiters are looking for candidates who potentially match the job
//             position while also looking for people with good soft skills who can
//             work with teams. Overall, I had 2 themes for the app features.
//           </p>
//           <ul className="space-y-1 text-base text-primaryText">
//             <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0 mb-4 font-satoshi text-lg">
//               Matching candidate feature for the employer, how can the employer
//               categorize and prioritize the right candidate.
//             </li>
//             <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0 font-satoshi text-lg">
//               Quality of candidate profile, how can we set up the candidate
//               profile that are easily and accurate for the hiring team.
//             </li>
//           </ul>
//         </div>
//         <div className="grid overflow-hidden relative place-items-center w-full h-full md:w-1/2 border-border">
//           <Image
//             src={hmwsorted}
//             alt="an image of how the How Might We process looks like"
//             className="rounded-lg md:rounded-2xl"
//             quality={100}
//             width={200}
//             height={200}
//           />
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
//           The swiping function will help the candidate decide whether to move on
//           with the position or not. When the swiping right is applied, it will
//           reduce the time the candidate spends adjusting their resume and
//           prevent the third portal from consuming the candidate's time.
//         </h1>
//       </div>
//     </Wrapper>
//   );
// };
