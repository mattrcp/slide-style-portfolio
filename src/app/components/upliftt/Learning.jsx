import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { handoff1, handoff2 } from "../../../assets/upliftt";

const Learning = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Handoff />
      <Retrospective />
    </section>
  );
};

export default Learning;

const Handoff = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="handoff"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Handoff
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              To support development, I worked closely with the CTO to define a
              clear, readable documentation format. The handoff page breaks down
              the rationale and flow of each design section so that both
              developers and non-technical stakeholders can understand the
              intention behind every feature.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={handoff1}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={handoff2}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Retrospective = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="impact"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Retrospective & Impact
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
            <div className="w-full">
              <p>
                While the app is pre-launch, the design successfully solved the
                "Delivery Gap" in Upliftt's ecosystem.
              </p>
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                Key Outcomes:
              </h3>
              <ul className="pl-6 mt-4 w-full text-lg list-disc font-satoshi">
                {/* Item 1 */}
                <li className="pl-2 mb-4">
                  <span>
                    <span className="italic font-bold">System Readiness: </span>
                    &nbsp;Delivered a 100% reusable component library, reducing
                    future design debt.
                  </span>
                </li>

                {/* Item 2 */}
                <li className="pl-2 mb-4">
                  <span>
                    <span className="italic font-bold">
                      Stakeholder Alignment:
                    </span>
                    &nbsp;The high-fidelity prototypes were used by the founders
                    to pitch the platform to early investors.
                  </span>
                </li>

                <li className="pl-2 mb-4">
                  <span>
                    <span className="italic font-bold">Accessibility:</span>
                    &nbsp;Full compliance with contrast ratios across both Light
                    and Dark themes.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg italic font-bold font-satoshi">
                What I would do differently:
              </h3>
              <p>
                If I had more time, I would focus on "Social Accountability"
                designing features for trainers to send real-time "kudos" or
                feedback directly into the client's workout stream to further
                increase retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
