"use client";

import Image from "next/image";
import Wrapper from "../Wrapper";
import {
  pHome,
  pProduct,
  pCustom,
  exploreUsability,
  competitor,
} from "/public/casetify";
import { motion } from "framer-motion";

const Discovery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Research />
      <Exploratory />
      <Competitor />
    </section>
  );
};

export default Discovery;

const Research = () => {
  const finalFeatures = [
    {
      name: "Problem 1",
      header: "Doesn’t explain about the product.",
      description:
        "First-time users struggle with the app due to unclear homepage guidance and limited navigation options. The static homepage prevents scrolling for more information, while the missing bottom navigation bar restricts user flow. Non-intuitive icons and poor accessibility further hinder the user experience.",
      image: pHome,
      id: "calendar",
    },
    {
      name: "Problem 2",
      header: "No options and informations.",
      description:
        "The product details page lacks essential information about the product, leaving users without adequate details to make informed decisions. Key product information is only displayed on the same page after users complete the customization process, which may lead to confusion and frustration. Additionally, the page does not offer users the option to reselect their device or switch to other device variants, further limiting flexibility and customization.",
      image: pProduct,
      id: "workout",
    },
    {
      name: "Problem 3",
      header: "Unable to communicate the design to user.",
      description:
        "The customize page lacks clarity in its functions and does not include an onboarding process to help users understand how to use it effectively. The limited actions available for customization make it difficult for users to navigate and utilize the features to personalize their case, resulting in a suboptimal user experience.",
      image: pCustom,
      id: "navigation",
    },
  ];

  const featureVariants = {
    initial: { opacity: 0, y: 50 }, // Start slightly below and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    }, // Animate to full opacity and original position
  };

  return (
    <motion.div
      id="research"
      className="flex flex-col min-w-full gap-8 py-8 overflow-auto md:py-16 "
      variants={featureVariants} // Apply the variants
      initial="initial" // Set initial state
      whileInView="inView" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Adjust amount as needed (e.g., 0.3 for 30% visibility)
    >
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Heuristic Evaluiation
        </h2>
      </div>
      <div className="flex flex-col w-full gap-4 md:gap-8 md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          First, I chose to do a heuristic evaluation to understand the app and
          its flow. My goal is to accomplish the task by purchasing a custom
          case.
        </p>
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          What I found when I used the app was the inconvenience on the app that
          it didn’t provide me an option to go back or hop to another page. The
          experience was bad; it took time to understand the buttons and icons
          and more problem as I listed below:
        </p>
      </div>

      {finalFeatures.map((feature, i) => (
        <motion.div
          className={`flex flex-col gap-10 md:gap-20 items-center md:flex-row-reverse justify-center `}
          key={i}
          id={feature.id}
          variants={featureVariants} // Apply the variants
          initial="initial" // Set initial state
          whileInView="inView" // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Adjust amount as needed (e.g., 0.3 for 30% visibility)
        >
          {/* Text Content Block */}
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            {" "}
            {/* Added md:w-1/2 to share space */}
            <span className="text-base font-medium font-satoshi text-secondaryText">
              {feature.name}
            </span>
            <h3 className="font-sans text-2xl font-medium text-primaryText">
              {feature.header}
            </h3>
            <p className="w-full text-lg text-primaryText md:text-[18px]">
              {feature.description}
            </p>
          </div>

          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-full gap-6 md:w-auto"
          >
            {/* Video */}
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              {/* Added relative */}
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Exploratory = () => {
  const results = [
    {
      header: "67%",
      description:
        "of users wanted to find inspiration before customizing, but the collaboration button feature interrupted their experience.",
    },
    {
      header: "100%",
      description:
        "of users were confused by unexplained icons and unclear customization options, especially related to layout and grid features.",
    },
    {
      header: "67%",
      description:
        "of users successfully completed the customization task, but many found the process too complex and lacked proper guidance and instructions.",
    },
  ];

  return (
    <Wrapper>
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
            src={exploreUsability}
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

const Competitor = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Competitor Analysis
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          I did research on how each competitor values them-self to sell the
          mobile phone cases on the app. I found that both competitors has a
          good visual and mobile experience. The PopSockets had difficulty
          buying a custom case because the app isn’t allowed to go back to the
          home page or find a case to customize. On the other hand, CaseMate is
          easy to use but doesn’t have a custom feature.
        </p>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={competitor}
          alt="an image of how the How Might We process looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};
