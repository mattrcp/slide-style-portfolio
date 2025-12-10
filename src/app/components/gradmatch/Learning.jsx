import React from "react";
import Wrapper from "../Wrapper";
import { promote, promote2 } from "../../../assets/teammie";
import Image from "next/image";

const Learning = () => {
  return (
    <section className="overflow-visible w-full h-full" id="reflection">
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
                Designing this concept taught me that "Gamification" isn't just
                about fun; it's about Efficiency.
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                Critical Analysis:
              </h3>
              <p>
                While "Swipe to Apply" is great for students, it creates a
                potential flood of low-quality candidates for recruiters.
              </p>
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                Future Iteration:
              </h3>
              <p>
                To fix this, I would design a "limit" mechanism (e.g., 10 swipes
                per day) or a "Super Like" (Cover Letter) to re-introduce
                friction where it adds value.
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
//     <Wrapper>
//       <div className="py-4 mt-10 w-full border-b border-border">
//         {" "}
//         {/* Added margin top for spacing */}
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Reflection
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         {" "}
//         <div className="flex flex-col">
//           {" "}
//           <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-semibold">
//             Designing for Recruiter
//           </h3>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             This app relies on 2 users, students, and recruiters. Its design
//             should be friendly to recruiters, helping them find candidates while
//             ensuring that the candidates match the job description. The desktop
//             design will look similar to a dashboard, and the user can add a job
//             list, delete a job list, check a candidate's application, prioritize
//             the candidate, etc.
//           </p>
//         </div>
//         <div className="flex flex-col">
//           {" "}
//           {/* Removed w-full and grid-cols-2/1 as grid items handle width */}
//           <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-semibold">
//             Usability Test
//           </h3>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             To fix the problem, it is better to hand this project directly to
//             the users so we can improve the project and find a new idea to
//             improve the matching between the candidate and recruiter.
//           </p>
//         </div>
//         <div className="flex flex-col w-full md:col-span-2 md:w-1/2">
//           {" "}
//           {/* Made this section span 2 columns on medium screens and up */}
//           <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-semibold">
//             Design for Accessibility
//           </h3>
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             All of the applications with font and color contrast meet the WCAG
//             rule, so how can the application with the swipe feature help
//             disabled students use it when they want to apply for a position? My
//             next step to do after is to work with the onboarding process for the
//             user on how to use the application and how to apply for a job and
//             add an apply and skip button at the end of the job list.
//           </p>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };
