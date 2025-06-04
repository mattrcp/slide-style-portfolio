import React from "react";
import Wrapper from "../Wrapper";

const Delivery = () => {
  return (
    <section className="w-full h-full overflow-visible">
      <Final />
    </section>
  );
};

export default Delivery;

const Final = () => {
  const finalFeatures = [
    {
      name: "Smart Calendar View",
      header: "HMW make fitness tracking simple and engaging?",
      description:
        "The calendar uses icons in the weekly view and color-coded dates in the monthly view to show the user's workout, cardio, rest days, and progress. It gives a quick, visual summary that helps users stay on track without needing to tap around.",
      url: "/upliftt/calendar.mp4",
      id: "calendar",
    },
    {
      name: "Workout Carousel Navigation",
      header: "HMW help busy users stay consistent with their workout routine?",
      description:
        "The swipeable carousel syncs with the calendar and lets users preview or start workouts for each day. It adds structure and routine, making it easy to focus on just today's plan.",
      url: "/upliftt/carousel.mp4",
      id: "workout",
    },
    {
      name: "Progress Tab & Stats Summary",
      header: "HMW track progress in an engaging way?",
      description:
        "The tab bar includes key data like weight lost, weight left, and total workout time with an expandable dropdown for a full progress breakdown. This encourages habit-building by showing results without overwhelming the user.",
      url: "/upliftt/navigation.mp4",
      id: "navigation",
    },
    {
      name: "Interactive Meal Flow",
      header: "HMW help busy users stay consistent with their workout routine?",
      description:
        "Tapping a meal opens a dedicated page where users can complete meals, triggering a satisfying animation and auto-transition to the next. It simplifies nutrition tracking while making it feel rewarding and smooth.",
      url: "/upliftt/meal.mp4",
      id: "meal",
    },
    {
      name: "Workout Completion Flow",
      header: "HMW help users stay consistent with the workout?",
      description:
        "Users can start a workout or preview it before beginning, keeping the flow simple and flexible. ",
      url: "/upliftt/workout.mp4",
      id: "workout",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full py-4 border-b border-border">
        <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
          Final Design
        </h2>
      </div>

      {finalFeatures.map((feature, i) => (
        <div
          className={`flex flex-col gap-10 md:gap-20 items-center justify-center ${
            i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
          key={i}
          id={feature.id}
        >
          {/* Text Content Block */}
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            {" "}
            {/* Added md:w-1/2 to share space */}
            <span className="text-base font-medium font-satoshi text-highlightBlue">
              {feature.name}
            </span>
            <h3 className="font-sans text-2xl font-medium text-primaryText">
              {feature.header}
            </h3>
            <p className="w-full text-lg text-primaryText md:text-[18px]">
              {feature.description}
            </p>
          </div>

          {/* Video Block */}

          <div className="flex items-center justify-center w-full overflow-hidden border p-14 md:w-1/2 bg-secondaryBg rounded-3xl md:rounded-[32px] border-border aspect-square">
            <video
              src={feature.url}
              autoPlay
              muted
              loop
              playsInline
              className="object-contain w-auto h-full rounded-3xl md:rounded-[50px]"
            ></video>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
