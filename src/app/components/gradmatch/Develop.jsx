import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { userflow, sketch } from "/public/gradmatch";
import Link from "next/link";

const Develop = () => {
  return (
    <section className="w-full h-full overflow-visible" id="develop">
      <UserFlow />
      <Sketches />
    </section>
  );
};

export default Develop;

const UserFlow = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          User Flow
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          To fulfill the product's goal—helping college students get hired
          efficiently—the user flow focuses on simplifying candidate discovery
          for recruiters and streamlining the application process for students.
          Each step is designed to reduce friction and highlight key
          qualifications through an intuitive and engaging interface.
        </p>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={userflow}
          alt="an image of how the How Might We process looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const Sketches = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Sketches
        </h2>
      </div>

      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To understand the user and visualize the application, I started
            sketching after I drew the user flow and how it would work on mobile
            design. The sketch included the sign-up page, profile page, job
            post, job board page, landing page, log-in page, bookmarks page, and
            search page. I took inspiration from many different pages of job
            posting websites while also trying to implement a new design in the
            sketch. 
          </p>
        </div>
        <div className="relative grid w-full h-full overflow-hidden md:w-1/2 place-items-center border-border">
          <Image
            src={sketch}
            alt="an image of how the How Might We process looks like"
            className="rounded-lg md:rounded-2xl"
            quality={100}
          />
        </div>
      </div>
    </Wrapper>
  );
};
