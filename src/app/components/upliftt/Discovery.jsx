import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

import { IconArrowNarrowDown } from "@tabler/icons-react";
import { datatodesign } from "public/upliftt";

const Discovery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <BusinessChallenge />
      <UnderstandUser />
    </section>
  );
};

export default Discovery;

const BusinessChallenge = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="problem"
    >
      <div className="flex justify-between items-center border-b-[1px] cs-content-container border-b-secondaryGrey pb-6 text-secondaryText">
        <span className="text-sm">Scroll to read more</span>
        <IconArrowNarrowDown stroke={1} />
      </div>
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Business Challenge
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              The Upliftt CRM value proposition relies on client retention. If
              clients find the workout plans hard to access or confusing to
              follow, they churn, and the trainer stops using Upliftt.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              Trainer Side:
            </h3>
            <p>
              Trainers use a powerful, data-dense CRM to build complex programs.
              The output is often a raw spreadsheet or a long list of exercises.
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              Client Side (Missing):
            </h3>
            <p>
              Clients are often overwhelmed beginners who need low friction,
              high motivation, and zero ambiguity to start their workout.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center cs-content-container">
        <h1 className="text-[clamp(40px,4.5vw,56px)] leading-[1.1]">
          How might we design a client-facing interface that{" "}
          <span className="italic text-highlightRed">
            reduces the cognitive load
          </span>{" "}
          of "working out" to zero, ensuring{" "}
          <span className="italic text-highlightRed">
            clients stick to the plans
          </span>{" "}
          their trainers create.
        </h1>
      </div>
      <div className="cs-image-container">
        {" "}
        {/* Added relative */}
        <Image
          src={datatodesign}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl md:object-cover"
        />
      </div>
    </Wrapper>
  );
};

const UnderstandUser = () => {
  return (
    <Wrapper className="flex overflow-visible flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Understand the Users
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              We identified two distinct user archetypes with a shared problem:
              Cognitive Overload.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 w-full">
              <h3 className="text-lg italic font-bold font-satoshi">
                The Busy Professional:
              </h3>
              <p>Has motivation but zero time to manage logistics.</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h3 className="text-lg italic font-bold font-satoshi">
                The Novice:
              </h3>
              <p>The Novice: Has time but lacks confidence and knowledge.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 w-full">
              <h3 className="italic font-bold mbtext-lg font-satoshi">
                The Physiological Constraint (Scenario-Based Design):
              </h3>
              <p>
                We modeled the user experience based on a "High-Exertion State"
                scenario.
              </p>
            </div>
            <ul className="pl-6 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">Scenario:</span>
                  &nbsp;Physical fatigue compromises fine motor control (shaky
                  hands) and depletes cognitive resources. Users literally have
                  less brainpower available for UI navigation mid-set.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2 mb-1">
                <span>
                  <span className="italic font-bold">
                    The Design Implication:
                  </span>
                  &nbsp;The interface must be Error-Tolerant. We mandated
                  Hyper-Legible Typography and Touch Targets 48px to ensure
                  successful interaction even when dexterity and lighting are
                  compromised.
                </span>
              </li>
            </ul>
          </div>
          <div className="p-4 w-full bg-highlightYellow">
            <div className="flex flex-col gap-2 md:flex-row">
              <span className="w-6">💡</span>
              <p class="flex-grow">
                <span class="flex-shrink-0 italic font-bold">
                  What I tried to achieve:
                </span>
                &nbsp;I need to put the app out of the spreadsheet of exercise
                styles, but to design a turn-by-turn navigation system for their
                health, and easier for them to use and guide them during the
                workout.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cs-image-container">
        {" "}
        <Image
          src={datatodesign}
          alt="Final design of Upliftt's application"
          fill
          className="object-cover object-left w-auto h-auto rounded-2xl"
        />
      </div> */}
    </Wrapper>
  );
};

//
