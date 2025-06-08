import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { login, home, account, apply } from "/public/gradmatch";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Overview = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Summary />
      <Problem />
      <Solution />
    </section>
  );
};

export default Overview;

const Summary = () => {
  const projectDetails = [
    {
      header: "Role",
      details: [{ id: 1, label: "UXUI Designer" }],
    },
    {
      header: "Platform",
      details: [{ id: 1, label: "IOS Application" }],
    },
    {
      header: "Duration",
      details: [{ id: 1, label: "4 Weeks" }],
    },
  ];

  return (
    <Wrapper id="overview">
      <div className="w-full py-4 border-b border-border">
        <h1 className="text-[32px] md:text-[40px] leading-none text-secondaryText">
          GradMatch
        </h1>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full gap-8">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            The application for students to showcase their skills through
            projects, experience, and education. The app provides a feature for
            users to swipe left to skip and right to apply. This project, which
            is part of my Udacity learning, involves creating an mobile app for
            LinkedIn. The mobile app will play a significant role in the lives
            of recent college graduates, recommending jobs that best match their
            skills and preferences with a unique function.
          </p>
          <div className="flex items-center justify-start gap-2 pb-2 border-b border-border w-fit ">
            <Link
              href="https://www.figma.com/proto/jH1VWBkuoGaPp1OQPRN1cq/Udacity-Project?page-id=105%3A2876&node-id=105-3062&starting-point-node-id=191%3A14526&show-proto-sidebar=1&t=NKJ8osNZS46uzCxQ-1"
              target="_blank"
              className="font-satoshi"
            >
              View High Fidelity Prototype{" "}
            </Link>{" "}
            <IconArrowUpRight stroke={2} className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 md:flex-row">
          {projectDetails.map((category) => (
            <div key={category.header} className="w-full h-full ">
              <h3 className="mb-2 md:mb-4 font-satoshi uppercase text-secondaryText text-lg md:text-[18px] font-medium">
                {category.header}
              </h3>
              <ul className="flex flex-col gap-2 font-satoshi text-primaryText">
                {category.details.map((item) => (
                  <li key={item.id} className="md:text-[18px] text-base">
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Problem = () => {
  const projectFeatures = [
    {
      header: "Unclear skill communication",
      description:
        "Many resumes fail to accurately reflect students' relevant hard and soft skills.",
    },
    {
      header: "Lack of relevant experience",
      description:
        "Most recent graduates struggle to meet employer expectations for work experience.",
    },
    {
      header: "Inefficient application process",
      description:
        "Tailoring resumes for each job takes excessive time and effort, often delaying applications.",
    },
    {
      header: "Limited job matching",
      description:
        "Current job recommendations don’t always align with graduates’ actual skills and career goals.",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Problem
        </h2>
      </div>

      <div className="flex flex-col w-full gap-8 md:flex-row md:gap-20 text-primaryText">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="w-full text-lg text-primaryText md:text-[18px]">
            LinkedIn aims to support recent college graduates by helping them
            find jobs that match their skills and preferences. However, many
            face ongoing challenges in the job search process that limit their
            chances of success. These challenges include:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
          {projectFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col h-full px-6 py-6 border bg-secondaryBg rounded-2xl border-border"
            >
              <h3 className="mb-6 font-satoshi text-[20px] md:text-[24px] font-semibold text-secondaryText">
                {feature.header}
              </h3>

              <p className="w-full text-[18px] font-medium md:text-[20px] text-primaryText flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Solution = () => {
  const imageFeatures = [
    {
      alt: "A mockup of the login page",
      src: login,
    },
    {
      alt: "A mockup of the home page",
      src: home,
    },
    {
      alt: "A mockup of the swipe to apply jobs page",
      src: apply,
    },
    {
      alt: "A mockup of the account page",
      src: account,
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Solution
        </h2>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <p className="w-full text-lg text-primaryText md:text-[18px]">
          The application for students to showcase their skills through
          projects, experience, and education. It will help graduate or current
          students by allowing them to swipe left to skip and right to apply
          directly from the job list, without using third-party portals or
          modifying their resumes for each job and saving their time.
        </p>
      </div>

      <div className="flex flex-row w-full gap-4 pb-6 overflow-x-auto">
        {imageFeatures.map((feature, i) => (
          <div
            key={feature.alt}
            className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
          >
            <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
              {" "}
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
