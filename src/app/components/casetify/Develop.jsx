import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import {
  userflow,
  sketch,
  v1home,
  v1cart,
  v1commu,
  usability,
  fButton,
  fCommu,
  fReview,
} from "/public/casetify";
import Link from "next/link";

const Develop = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <UserFlow />
      <Sketches />
      <V1HighFidelity />
      <UsabilityTest />
      <Feedback />
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

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          The user flow, I planned to make the flow easier but still give users
          options to explore both inspiration from the community feature and the
          option for users to select the customize button.
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

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          The purpose of the sketch is to make the app as clean as possible. The
          purpose is to reduce the cognitive overload before the user uses the
          customize function, which can cause confusion during the task, where
          the inspiration for the sketch comes from Mobbin and Refero.
        </p>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={sketch}
          alt="an image of how the How Might We process looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const V1HighFidelity = () => {
  const imageFeatures = [
    {
      alt: "Home Page Design",
      src: v1home,
    },
    {
      alt: "Form Page Design",
      src: v1cart,
    },
    {
      alt: "FAQ Page Design",
      src: v1commu,
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          V1 - High-Fidelity for Usability Test
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText font-semibold md:text-[18px]">
          After the sketch, I turned the design into V1 of high-fidelity. The
          purpose of the high-fidelity was for the user to be able to navigate
          the app and use the customize feature on the high-fidelity design.
        </p>
      </div>

      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          // Make sure each card explicitly does NOT shrink (flex-shrink-0)
          // and takes its defined w-screen width
          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-full gap-6 md:w-auto"
          >
            {" "}
            {/* Added flex-shrink-0 */}
            {/* Image container: must be relative for Next.js Image fill prop */}
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            {/* <div className="w-full text-center">
                <span className="w-full text-[18px] text-center font-medium text-primaryText ">
                  {feature.description}
                </span>
              </div> */}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const UsabilityTest = () => {
  const results = [
    {
      header: "100%",
      description:
        "of participant able to completed the task using the new design.",
    },
    {
      header: "67%",
      description:
        "of participant struggled to see the customize button due to low contrast with the background.",
    },
    {
      header: "100%",
      description:
        "of participant suggested adding a review section to help inform their purchase decisions.",
    },
  ];

  return (
    <Wrapper id="usability">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Exploratory Usability Test
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px] mb-2 md:mb-6">
            I'm running an exploratory usability test to see how people use the
            app to buy or customize their mobile phone cases. I want to
            understand how they navigate, what they enjoy about the experience,
            and where they might run into any challenges.
          </p>
          <p className="w-full text-lg text-primaryText md:text-[18px] font-semibold">
            Interviewed with 3 participants: None of the participants had ever
            used the app before. One participant knew the brand, but two others
            just heard the name.
          </p>
        </div>
        <div className="relative grid w-full overflow-hidden md:w-1/2 place-items-center border-border">
          <Image
            src={usability}
            alt="an image of the results after the interview"
            className="rounded-lg md:rounded-2xl"
            quality={100}
          />
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

const Feedback = () => {
  const projectFeatures = [
    {
      id: 1,
      title: "Button visibility:",
      description:
        "Two out of three users said the customize button was hard to see due to its color blending with the background.",
    },
    {
      id: 2,
      title: "Review section:",
      description:
        "All users wanted to see customer reviews before customizing or purchasing a case.",
    },
    {
      id: 3,
      title: "Device selection:",
      description:
        "Some users suggested it would be helpful to choose their phone model earlier in the flow to avoid confusion later.",
    },
    {
      id: 4,
      title: "Inspiration content:",
      description:
        "Users wanted to browse inspiration images before starting customization.",
    },
  ];

  const imageFeatures = [
    {
      alt: "Customize button more visible (Old → New Design) ",
      src: fButton,
    },
    {
      alt: "Added a review section (Old → New Design) ",
      src: fReview,
    },
    {
      alt: "Community to Explore (Old → New Design) ",
      src: fCommu,
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          User Feedback on Design Changes
        </h2>
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row text-primaryText">
        {projectFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col w-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border md:flex-1"
          >
            <div className="min-h-[50px]  flex items-start">
              <h3 className="font-sans text-xl font-semibold leading-tight md:text-2xl text-primaryText">
                {feature.title}
              </h3>
            </div>

            <p className="w-full text-base md:text-[18px] text-primaryText flex-grow">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          // Make sure each card explicitly does NOT shrink (flex-shrink-0)
          // and takes its defined w-screen width
          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            {" "}
            {/* Added flex-shrink-0 */}
            {/* Image container: must be relative for Next.js Image fill prop */}
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <div className="w-full text-center">
              <span className="w-full text-[18px] text-center font-medium text-primaryText ">
                {feature.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
