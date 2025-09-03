import Image from "next/image";
import { personal, threeD } from "public/assets";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full h-auto border-t-[1px] border-border px-8 py-8">
      <div className="h-auto md:h-[60vh] w-full flex md:flex-row flex-col items-center py-8 justify-between border-border border-b-[1px]">
        <span className="text-4xl font-medium uppercase text-secondaryGrey font-satoshi">
          About
        </span>
        <Image
          src={threeD}
          alt="Matt's logo in 3d style"
          className="w-auto h-auto md:h-full"
        />
        <span className="text-4xl font-medium uppercase text-secondaryGrey font-satoshi">
          Matt
        </span>
      </div>
      <dir className="flex gap-4 justify-center items-center py-8">
        <Image className="w-[30vw] " src={personal} />
        <h3 className="w-full text-base font-light tracking-wide font-canela text-primaryText group text-start">
          I'm Matt — a UX/UI designer who blends minimalism and modern
          aesthetics to craft functional, user-friendly websites and apps. I’m
          passionate about pushing boundaries with innovative design and product
          that moves the industry forward.
        </h3>
      </dir>
      <div className="py-8">
        <h3 className="font-canela font-light text-primaryText group text-start text-[clamp(24px,4vw,38px)] tracking-wide  w-full md:w-2/3">
          I'm Matt — a UX/UI designer who blends minimalism and modern
          aesthetics to craft functional, user-friendly websites and apps. I’m
          passionate about pushing boundaries with innovative design and product
          that moves the industry forward.
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
