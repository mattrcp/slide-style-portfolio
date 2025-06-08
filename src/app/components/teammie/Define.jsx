import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { designStudent, projectOwner, userJourney, hmw } from "/public/teammie";
import Link from "next/link";

const Define = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Audience />
      <UserJourney />
      <Ideation />
      <Hmw />
      <Solution />
    </section>
  );
};

export default Define;

const Audience = () => {
  const userLists = [
    {
      id: 1,
      image: designStudent,
      header: "UX/UI Students",
      description:
        "Students studying UX/UI design who are looking for hands-on experience, real-world projects, and collaboration opportunities. They often struggle to find meaningful projects where they can apply their skills.",
      list: [
        {
          title: "Goals",
          items: [
            "Gain experience by working on real-world projects",
            "Build a strong, portfolio-ready body of work",
            "Collaborate with developers and project owners",
            "Bring their designs to life through practical execution",
          ],
        },
      ],
    },
    {
      id: 2,
      image: projectOwner,
      header: "Developers & Project Owners", // Changed header for differentiation
      description:
        "Engineering students, developers, or individuals with a project idea (entrepreneurs, startup founders, or students) who need a team to bring their vision to life. They may struggle to find UX/UI designers who understand technical feasibility and user experience.",
      list: [
        {
          title: "Goals",
          items: [
            "Find skilled UX/UI designers",
            "Get help visualizing ideas through wireframes and prototypes",
            "Design user-friendly, intuitive interfaces",
            "Collaborate with developers to turn concepts into functional products",
          ],
        },
      ],
    },
  ];
  const cardVariants = {
    initial: { opacity: 0, y: 50 }, // Start yd down and invisible
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // y to original size and fade in
  };

  return (
    <div
      id="user"
      className="flex flex-col min-w-full gap-8 py-8 overflow-auto md:py-16"
    >
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Our Target User
        </h2>
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row text-primaryText">
        {userLists.map((user) => (
          <div
            key={user.id}
            className="flex flex-col w-full px-6 py-6 gap-8 bg-secondaryBg  border-border border md:flex-1 rounded-2xl md:rounded-[32px]"
            variants={cardVariants} // Apply the defined variants
            initial="initial" // Set the initial state
            whileInView="inView" // Animate to 'inView' when in viewport
            viewport={{ once: true, amount: 0.5 }} // Configure viewport behavior
          >
            <div className="flex items-center gap-4 h-[300px]  md:h-[600px] ">
              {" "}
              <Image
                src={user.image}
                alt={user.header}
                className="object-cover object-center w-full h-full rounded-lg md:rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold leading-tight font-satoshi md:text-2xl text-primaryText">
                {user.header}
              </h4>
              <div className="flex flex-col gap-8 ">
                <div>
                  <h3 className="mb-2 text-lg font-medium font-satoshi text-primaryText">
                    Description
                  </h3>
                  <p className="text-base text-primaryText">
                    {user.description}
                  </p>
                </div>
                {user.list.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="flex flex-col gap-2">
                    <h5 className="mb-2 text-lg font-medium font-satoshi text-primaryText">
                      {section.title}
                    </h5>
                    {/* Removed list-disc list-inside from ul */}
                    <ul className="space-y-1 text-base text-primaryText">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="relative pl-5 before:content-['•'] font-satoshi before:absolute before:left-0 before:top-0" // The key classes
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UserJourney = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          User Journey
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          After interviewing potential users, I found that they struggled to
          find projects that aligned with their skills and interests, and
          picking projects on the internet made them unable to gain experience.
        </p>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={userJourney}
          alt="an image of how the user journey looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const Ideation = () => {
  return (
    <Wrapper id="ideation">
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Ideation
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          I initiated a brainstorming session with the team using the How Might
          We (HMW) method. We began{" "}
          <span className="font-semibold font-satoshi">
            by breaking down the main goal into three core themes, each
            addressing a specific user challenge.
          </span>{" "}
          For each theme, we crafted HMW questions and generated solution ideas
          based on the services we could offer. After ideation, we prioritized
          which features should be included in the demo prototype versus those
          reserved for the final product roadmap.
        </p>
      </div>
      <div className="relative grid w-full h-full overflow-hidden place-items-center border-border">
        <Image
          src={hmw}
          alt="an image of how the How Might We process looks like"
          className="rounded-lg md:rounded-2xl"
          quality={100}
        />
      </div>
    </Wrapper>
  );
};

const Hmw = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Opportunity
        </h2>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="w-full  font-satoshi font-medium  text-[clamp(24px,5vw,32px)] text-primaryText">
          <span className="text-highlightBlue">How might we</span> help project
          owners build effective teams while making it easier for students to
          discover, understand, and join the right projects based on their
          skills and availability?
        </h1>
      </div>
    </Wrapper>
  );
};

const Solution = () => {
  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Solution
        </h2>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="w-full text-primaryText font-satoshi font-medium  text-[clamp(24px,5vw,40px)]">
          <span className="font-semibold text-highlightBlue">
            A platform where project owners (creators) can share their concept
            ideas and find designers with the right skill set to bring those
            ideas to life.
          </span>{" "}
          Creators can post project details, specify required skills, and attach
          their LinkedIn profile making it easy for interested design students
          to discover the project and reach out for collaboration.
        </h1>
      </div>
    </Wrapper>
  );
};
