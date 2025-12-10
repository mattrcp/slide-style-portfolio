import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { hifi } from "@/assets/gradmatch";

const Overview = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Summary />
      <Solution />
    </section>
  );
};

export default Overview;

const Summary = () => {
  return (
    <Wrapper
      className="flex flex-col gap-8 items-center md:gap-16"
      id="overview"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Summary
        </h2>
        <div className="flex flex-col gap-8 w-full md:flex-row">
          {" "}
          <p className="text-lg">
            The traditional job application process is broken for recent
            graduates: it's text-heavy, repetitive, and slow. GradMatch is a
            mobile-first concept that reimagines recruitment as a high-frequency
            interaction.
            <br /> <br /> By replacing the "Form Fill" with a "Gesture (Swipe),"
            I reduced the theoretical time-to-apply from 20 minutes to 2
            seconds, creating a frictionless funnel for high-volume entry-level
            recruiting.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Solution = () => {
  return (
    <Wrapper className="flex overflow-visible flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Solution
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The "Swipe" Interface:{" "}
            </h3>
            <p>
              A gesture-based discovery feed where students Swipe Right to
              "One-Click Apply" and Swipe Left to "Pass."
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Skill-Based Matching:{" "}
            </h3>
            <p>
              An algorithm that parses student profiles for hard/soft skills,
              ensuring the feed only shows relevant matches (reducing "Swipe
              Fatigue").
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The "Resume-Free" Profile:
            </h3>
            <p>
              A standardized portfolio card that replaces the need to upload a
              custom PDF for every application.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        <div className="relative w-full h-full">
          <Image
            src={hifi}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const Summary = () => {
//   const projectDetails = [
//     {
//       header: "Role",
//       details: [{ id: 1, label: "UXUI Designer" }],
//     },
//     {
//       header: "Platform",
//       details: [{ id: 1, label: "IOS Application" }],
//     },
//     {
//       header: "Duration",
//       details: [{ id: 1, label: "4 Weeks" }],
//     },
//   ];

//   return (
//     <Wrapper id="overview">
//       <div className="py-4 w-full border-b border-border">
//         <h1 className="text-[32px] md:text-[40px] leading-none text-secondaryText">
//           GradMatch
//         </h1>
//       </div>
//       <div className="flex flex-col gap-8 w-full md:flex-row md:gap-20 text-primaryText">
//         <div className="flex flex-col gap-8 w-full">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             The application for students to showcase their skills through
//             projects, experience, and education. The app provides a feature for
//             users to swipe left to skip and right to apply. This project, which
//             is part of my Udacity learning, involves creating an mobile app for
//             LinkedIn. The mobile app will play a significant role in the lives
//             of recent college graduates, recommending jobs that best match their
//             skills and preferences with a unique function.
//           </p>
//           <div className="flex gap-2 justify-start items-center pb-2 border-b border-border w-fit">
//             <Link
//               href="https://www.figma.com/proto/jH1VWBkuoGaPp1OQPRN1cq/Udacity-Project?page-id=105%3A2876&node-id=105-3062&starting-point-node-id=191%3A14526&show-proto-sidebar=1&t=NKJ8osNZS46uzCxQ-1"
//               target="_blank"
//               className="font-satoshi"
//             >
//               View High Fidelity Prototype{" "}
//             </Link>{" "}
//             <IconArrowUpRight stroke={2} className="w-4 h-4" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-8 w-full md:flex-row">
//           {projectDetails.map((category) => (
//             <div key={category.header} className="w-full h-full">
//               <h3 className="mb-2 md:mb-4 font-satoshi uppercase text-secondaryText text-lg md:text-[18px] font-medium">
//                 {category.header}
//               </h3>
//               <ul className="flex flex-col gap-2 font-satoshi text-primaryText">
//                 {category.details.map((item) => (
//                   <li key={item.id} className="md:text-[18px] text-base">
//                     {item.label}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Problem = () => {
//   const projectFeatures = [
//     {
//       header: "Unclear skill communication",
//       description:
//         "Many resumes fail to accurately reflect students' relevant hard and soft skills.",
//     },
//     {
//       header: "Lack of relevant experience",
//       description:
//         "Most recent graduates struggle to meet employer expectations for work experience.",
//     },
//     {
//       header: "Inefficient application process",
//       description:
//         "Tailoring resumes for each job takes excessive time and effort, often delaying applications.",
//     },
//     {
//       header: "Limited job matching",
//       description:
//         "Current job recommendations don’t always align with graduates’ actual skills and career goals.",
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Problem
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 w-full md:flex-row md:gap-20 text-primaryText">
//         <div className="flex flex-col w-full md:w-1/2">
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             LinkedIn aims to support recent college graduates by helping them
//             find jobs that match their skills and preferences. However, many
//             face ongoing challenges in the job search process that limit their
//             chances of success. These challenges include:
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:w-1/2">
//           {projectFeatures.map((feature, i) => (
//             <div
//               key={i}
//               className="flex flex-col px-6 py-6 h-full rounded-2xl border bg-secondaryBg border-border"
//             >
//               <h3 className="mb-6 font-satoshi text-[20px] md:text-[24px] font-semibold text-secondaryText">
//                 {feature.header}
//               </h3>

//               <p className="w-full text-[18px] font-medium md:text-[20px] text-primaryText flex-grow">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Solution = () => {
//   const imageFeatures = [
//     {
//       alt: "A mockup of the login page",
//       src: login,
//     },
//     {
//       alt: "A mockup of the home page",
//       src: home,
//     },
//     {
//       alt: "A mockup of the swipe to apply jobs page",
//       src: apply,
//     },
//     {
//       alt: "A mockup of the account page",
//       src: account,
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Solution
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           The application for students to showcase their skills through
//           projects, experience, and education. It will help graduate or current
//           students by allowing them to swipe left to skip and right to apply
//           directly from the job list, without using third-party portals or
//           modifying their resumes for each job and saving their time.
//         </p>
//       </div>

//       <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
//         {imageFeatures.map((feature, i) => (
//           <div
//             key={feature.alt}
//             className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
//           >
//             <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               <Image
//                 src={feature.src}
//                 alt={feature.alt}
//                 fill
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };
