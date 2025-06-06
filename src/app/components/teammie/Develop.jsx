import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { userflow, lowfi, midfi } from "/public/teammie";
import Link from "next/link";

const Develop = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <UserFlow />
      <LowFi />
      <MidFi />
      <UsabilityTest />
    </section>
  );
};

export default Develop;

const UserFlow = () => {
  return (
    <Wrapper id="process">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          User Flow
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            For the first user flow, I wanted to make it as easy and
            understandable as possible so that users can complete the task
            without hesitation when they use the demo. I started by using the
            scenario so we could know the steps of each click from our target
            users' point of view. 
          </p>
        </div>
        <div className="relative grid w-full overflow-hidden md:w-1/2 place-items-center border-border">
          <Image
            src={userflow}
            alt="an image of how the user flow looks like"
            className="rounded-lg md:rounded-2xl"
            quality={100}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const LowFi = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Low-Fidelity Design
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To kick off the design phase, I began by sketching early concepts,
            focusing on a clean and functional layout.{" "}
            <span className="font-semibold">
              The core design goal was to engage UX/UI students by making
              project cards easy to scan, visually organized, and compelling
              enough to encourage clicks.
            </span>{" "}
            I drew inspiration from blog listings and job board sites—platforms
            that effectively balance headlines, descriptions, and searchable
            skill tags. These elements informed how information should be
            displayed on each card.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            Working with the team, we translated these sketches into
            low-fidelity wireframes, covering key flows such as the landing
            page, modals, and submission form. After creating multiple versions,
            we voted on the most effective designs to include in the demo. These
            chosen screens were then tested with real users during the
            mid-fidelity usability testing stage.
          </p>
        </div>
      </div>
      <div className="relative grid w-full overflow-hidden place-items-center border-border">
        <Image
          src={lowfi}
          alt="an image of how the user flow looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const MidFi = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Mid-Fidelity Prototype for Usability Test
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            To validate our design direction, I led the usability testing phase
            using a mid-fidelity prototype. I assigned key tasks to the team
            designing the landing page, modals, and form screens then
            facilitated a design critique and voting session to choose the
            strongest version for testing.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            <span className="font-semibold">
              We chose mid-fidelity because it represented the most accurate
              user experience without visual distractions. Since the test
              required users to read real content, mid-fidelity allowed us to
              focus on information hierarchy, content clarity, and interaction
              flow before applying the final UI.
            </span>{" "}
            The outcome helped us finalize the layout and functionality for our
            high-fidelity prototype.
          </p>
        </div>
      </div>
      <div className="relative grid w-full overflow-hidden place-items-center border-border">
        <Image
          src={midfi}
          alt="an image of how the user flow looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const UsabilityTest = () => {
  const results = [
    {
      header: "67%",
      description:
        "of participants were confused by the banner message, noting that it lacked clarity and failed to immediately communicate the purpose of the platform.",
    },
    {
      header: "100%",
      description:
        "of participants found the category filter misleading, expecting it to sort by skill or category rather than just job position.",
    },
  ];

  return (
    <Wrapper id="usability">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Results from the usability test
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
            <span className="font-semibold">
              We conducted a remote usability test using Google Meet with 3
              participants, including 2 from our target audience of UX/UI design
              students.
            </span>{" "}
            The prototype used was mid-fidelity, chosen for its ability to
            communicate structure and real content without the distraction of
            polished visuals.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
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
