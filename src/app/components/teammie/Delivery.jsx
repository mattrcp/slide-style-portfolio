import React from "react";
import Wrapper from "../Wrapper";
import {
  homePage,
  formPage,
  faqPage,
  ownerPage,
  studentPage,
} from "../../../assets/teammie";
import Image from "next/image";

const Delivery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Solution />
    </section>
  );
};

export default Delivery;

const Solution = () => {
  const imageFeatures = [
    {
      alt: "Home Page Design",
      src: homePage,
      description: "Home Page Design",
    },
    {
      alt: "Form Page Design",
      src: formPage,
      description: "Form Page Design",
    },
    {
      alt: "FAQ Page Design",
      src: faqPage,
      description: "FAQ Page Design",
    },
    {
      alt: "Guide for Project Owner",
      src: ownerPage,
      description: "Guide for Project Owner",
    },
    {
      alt: "Guide for Design Student",
      src: studentPage,
      description: "Guide for Design Student",
    },
  ];
  return (
    <Wrapper className="flex flex-col gap-8 items-center md:gap-16">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Solution
        </h2>
        <div className="flex flex-col gap-8 w-full md:flex-row">
          {" "}
          <p className="text-lg">
            Teammie connects design students with engineers, designers, and
            businesses to collaborate on real-world projects. The platform helps
            students to find a designer who wants them to design their products,
            and only for designers who want to build a portfolio, gain
            experience, and develop the skills needed to excel in their careers.
          </p>
        </div>
      </div>
      <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
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
            <div className="relative  w-auto h-auto md:h-[639px] bg-[#1B1B1B]  rounded-lg aspect-video ">
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

// const Solution = () => {
//   const imageFeatures = [
//     {
//       alt: "Home Page Design",
//       src: homePage,
//       description: "Home Page Design",
//     },
//     {
//       alt: "Form Page Design",
//       src: formPage,
//       description: "Form Page Design",
//     },
//     {
//       alt: "FAQ Page Design",
//       src: faqPage,
//       description: "FAQ Page Design",
//     },
//     {
//       alt: "Guide for Project Owner",
//       src: ownerPage,
//       description: "Guide for Project Owner",
//     },
//     {
//       alt: "Guide for Design Student",
//       src: studentPage,
//       description: "Guide for Design Student",
//     },
//   ];

//   return (
//     <Wrapper id="final">
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Final Design
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           A platform designed for design students that enables them to connect
//           with fellow students and form teams to work on projects aimed at
//           solving user problems. This platform promotes collaborative work on
//           design and development projects, which can be showcased in portfolios
//           or used in real-world situations.
//         </p>
//       </div>

//       <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
//         {imageFeatures.map((feature, i) => (
//           // Make sure each card explicitly does NOT shrink (flex-shrink-0)
//           // and takes its defined w-screen width
//           <div
//             key={feature.alt}
//             className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
//           >
//             {" "}
//             {/* Added flex-shrink-0 */}
//             {/* Image container: must be relative for Next.js Image fill prop */}
//             <div className="relative  w-auto h-auto md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-video ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 src={feature.src}
//                 alt={feature.alt}
//                 fill
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             <div className="w-full text-center">
//               <span className="w-full text-[18px] text-center font-medium text-primaryText ">
//                 {feature.description}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };
