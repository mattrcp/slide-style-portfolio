import React from "react";
import Wrapper from "../Wrapper";
// import { promote, promote2 } from "/public/upliftt";
import promote from "/public/teammie/promote.jpeg"; // Use full path from public root
import promote2 from "/public/teammie/promote2.jpeg";
import Image from "next/image";

const Learning = () => {
  return (
    <section className="w-full h-full overflow-visible" id="reflection">
      <Reflection />
    </section>
  );
};

export default Learning;

const Reflection = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 mt-10 border-b border-border">
        {" "}
        {/* Added margin top for spacing */}
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Reflection
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {" "}
        <div className="flex flex-col">
          {" "}
          <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-medium">
            Designing for Recruiter
          </h3>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            This app relies on 2 users, students, and recruiters. Its design
            should be friendly to recruiters, helping them find candidates while
            ensuring that the candidates match the job description. The desktop
            design will look similar to a dashboard, and the user can add a job
            list, delete a job list, check a candidate's application, prioritize
            the candidate, etc.
          </p>
        </div>
        <div className="flex flex-col">
          {" "}
          {/* Removed w-full and grid-cols-2/1 as grid items handle width */}
          <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-medium">
            Usability Test
          </h3>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To fix the problem, it is better to hand this project directly to
            the users so we can improve the project and find a new idea to
            improve the matching between the candidate and recruiter.
          </p>
        </div>
        <div className="flex flex-col w-full md:col-span-2 md:w-1/2">
          {" "}
          {/* Made this section span 2 columns on medium screens and up */}
          <h3 className="mb-2 font-sans uppercase text-secondaryText text-lg md:text-[18px] font-medium">
            Design for Accessibility
          </h3>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            All of the applications with font and color contrast meet the WCAG
            rule, so how can the application with the swipe feature help
            disabled students use it when they want to apply for a position? My
            next step to do after is to work with the onboarding process for the
            user on how to use the application and how to apply for a job and
            add an apply and skip button at the end of the job list.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
