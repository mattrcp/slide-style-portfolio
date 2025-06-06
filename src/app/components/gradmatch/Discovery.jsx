import React from "react";
import Wrapper from "../Wrapper";

const Discovery = () => {
  return (
    <section className="w-full h-full overflow-visible" id="discovery">
      <Research />
    </section>
  );
};

export default Discovery;

const Research = () => {
  const results = [
    {
      header: "Over 60%",
      description:
        "of hiring teams require candidates to have both hard and soft skills, with communication being the most valued.",
    },
    {
      header: "More than 70%",
      description: "expect students to have relevant work experience.",
    },
    {
      header: "Over 60%",
      description:
        "of resumes fail to clearly communicate the candidate's skills in relation to the job.",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Problem Overview
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
            Recruiters today are seeking experienced, well-rounded
            candidates—even for entry-level roles—making it challenging for
            students to stand out.
          </p>
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            This highlights a critical gap: Students struggle to match
            expectations due to a lack of practical experience and ineffective
            self-representation, making the application process both frustrating
            and time-consuming.{" "}
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {results.map((result, i) => (
          <div
            key={i}
            className="flex flex-col h-full px-6 py-6 border-l-[5px] bg-secondaryBg rounded-r-xl border-highlightBlue"
          >
            <h3 className="mb-6 font-sans text-3xl md:text-[40px]  font-medium text-primaryText">
              {result.header}
            </h3>

            <p className="w-full text-[18px] font-base md:text-[20px] text-primaryText flex-grow">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
