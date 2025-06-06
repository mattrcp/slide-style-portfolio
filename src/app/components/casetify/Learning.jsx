import React from "react";
import Wrapper from "../Wrapper";

const Learning = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Reflection />
    </section>
  );
};

export default Learning;

const Reflection = () => {
  return (
    <Wrapper id="learning">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Learning
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          This project explored the integration of AI in product design,
          specifically focusing on creating phone case designs. Through this
          case study, I have learned about AI-assisted design processes, but
          also need to improve areas for growth. Moreover, I want to driven my
          understanding of AI image generation techniques and develop a more
          structured approach to documenting the technical aspects of AI-driven
          design workflows. This knowledge will be play a role for optimizing
          future AI-design collaborations and achieving more refined results.
        </p>
      </div>
    </Wrapper>
  );
};
