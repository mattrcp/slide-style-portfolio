import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { evolution, lowfi } from "public/upliftt";

const Discovery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <DesignFramework />
      <DesignEvolution />
    </section>
  );
};

export default Discovery;

const DesignFramework = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="strategy"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Design Frameworks
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              The founders provided a clear feature roadmap, but my role was to
              structure these features into a cohesive experience. I established
              three core principles to guide every decision:
            </p>
          </div>

          <div className="p-4 w-full bg-highlightYellow">
            <div className="flex flex-col gap-2 md:flex-row">
              <span className="w-6">🔍</span>
              <div className="flex flex-col gap-4">
                <span className="italic font-bold">
                  1. Clarity over Complexity:
                </span>
                <ul className="pl-6 w-full text-lg list-disc font-satoshi">
                  {/* Item 1 */}
                  <li className="pl-2 mb-4">
                    <span>
                      <span className="italic font-bold">The Challenge:</span>
                      &nbsp;The app needed to display complex data (Reps, Sets,
                      RPE) without looking like a spreadsheet.
                    </span>
                  </li>

                  {/* Item 2 */}
                  <li className="pl-2">
                    <span>
                      <span className="italic font-bold">The Execution:</span>
                      &nbsp;I utilized "Progressive Disclosure" in the Carousel
                      View, showing only today's workout and hiding future
                      complexity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 w-full bg-highlightYellow">
            <div className="flex flex-col gap-2 md:flex-row">
              <span className="w-6">🔍</span>
              <div className="flex flex-col gap-4">
                <span className="italic font-bold">
                  2. Human-Centered Guidance
                </span>
                <ul className="pl-6 w-full text-lg list-disc font-satoshi">
                  {/* Item 1 */}
                  <li className="pl-2 mb-4">
                    <span>
                      <span className="italic font-bold">The Challenge:</span>
                      &nbsp;If tracking is hard, users stop doing it.
                    </span>
                  </li>

                  {/* Item 2 */}
                  <li className="pl-2">
                    <span>
                      <span className="italic font-bold">The Execution:</span>
                      &nbsp;I prioritized Low-Fidelity Prototyping to test input
                      speeds early. I skipped paper sketches and moved straight
                      to Lo-Fi flows to validate that the "Meal Completion" flow
                      needed to be a single tap.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 w-full bg-highlightYellow">
            <div className="flex flex-col gap-2 md:flex-row">
              <span className="w-6">🔍</span>
              <div className="flex flex-col gap-4">
                <span className="italic font-bold">
                  2. Human-Centered Guidance
                </span>
                <ul className="pl-6 w-full text-lg list-disc font-satoshi">
                  {/* Item 1 */}
                  <li className="pl-2 mb-4">
                    <span>
                      <span className="italic font-bold">The Challenge:</span>
                      &nbsp;Beginners often freeze when they don't know "what's
                      next."
                    </span>
                  </li>

                  {/* Item 2 */}
                  <li className="pl-2">
                    <span>
                      <span className="italic font-bold">The Execution:</span>
                      &nbsp;I connected the Smart Calendar directly to the
                      workout feed, acting as a "Map" for their fitness journey.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-image-container">
        {" "}
        <Image
          src={lowfi}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl md:object-cover"
        />
      </div>
    </Wrapper>
  );
};

const DesignEvolution = () => {
  return (
    <Wrapper className="flex overflow-visible flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          The Design Evolution
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Hypothesis of Home Page:
            </h3>
            <p>
              The Hypothesis of Home Page: My initial wireframe was a rigid
              "Daily View." It showed the user exactly what to do today, but
              locked them out of the broader context.{" "}
              <span className="px-1 bg-highlightYellow">
                They couldn't easily look back at yesterday's stats or preview
                tomorrow's leg day.
              </span>
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg italic font-bold font-satoshi">
              The Friction:
            </h3>
            <p>
              Testing showed that while users need focus during a workout, they
              need flexibility when planning their week. The "Static" view made
              them feel trapped in a blind tunnel.
            </p>
          </div>
          <div className="w-full">
            <span className="font-satoshi">
              <span className="italic font-bold">The Pivot:</span> I
              synchronized the Smart Calendar with a Swipeable Carousel.
            </span>
            <ul className="pl-6 mt-4 w-full text-lg list-disc font-satoshi">
              {/* Item 1 */}
              <li className="pl-2 mb-4">
                <span>
                  <span className="italic font-bold">The Interaction:</span>
                  &nbsp;Swiping the carousel automatically updates the calendar
                  date, and tapping a calendar date snaps the carousel to that
                  specific plan.
                </span>
              </li>

              {/* Item 2 */}
              <li className="pl-2">
                <span>
                  <span className="italic font-bold">The Value:</span>
                  &nbsp; This gave users "Temporal Context" the ability to audit
                  past performance and mentally prepare for future workouts
                  without leaving the main dashboard.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cs-image-container">
        {" "}
        <Image
          src={evolution}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl md:object-cover"
        />
      </div>
    </Wrapper>
  );
};
