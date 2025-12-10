import React from "react";

import Wrapper from "../Wrapper";
import { login, home, account, apply, hifi } from "../../../assets/gradmatch";

import Image from "next/image";

const Delivery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Final />
    </section>
  );
};

export default Delivery;

const Final = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="handoff"
    >
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Visual Design
        </h2>
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="w-full">
            <p>
              The application for students to showcase their skills through
              projects, experience, and education. It will help graduate or
              current students by allowing them to swipe left to skip and right
              to apply directly from the job list, without using third-party
              portals or modifying their resumes for each job and saving their
              time.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] cs-image-container rounded-lg">
        {" "}
        {/* Added relative */}
        <div className="relative w-full h-full">
          <Image
            src={hifi}
            alt="Final design of Upliftt's application"
            fill
            className="object-contain object-center overflow-visible w-auto h-auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

// const Final = () => {
//   const imageFeatures = [
//     {
//       alt: "Home Page Design",
//       src: login,
//     },
//     {
//       alt: "Product Page Design",
//       src: home,
//     },
//     {
//       alt: "Customize Page Design",
//       src: apply,
//     },
//     {
//       alt: "Cart Page Design",
//       src: account,
//     },
//   ];
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Final Design
//         </h2>
//       </div>

//       <div
//         className={`flex flex-col gap-10 justify-center items-center md:gap-20 md:flex-row-reverse`}
//       >
//         {/* Text Content Block */}
//         <div className="flex flex-col gap-4 w-full md:w-1/2">
//           {" "}
//           {/* Added md:w-1/2 to share space */}
//           <p className="w-full text-lg text-primaryText md:text-[18px]">
//             The application for students to showcase their skills through
//             projects, experience, and education. It will help graduate or
//             current students by allowing them to swipe left to skip and right to
//             apply directly from the job list, without using third-party portals
//             or modifying their resumes for each job and saving their time.
//           </p>
//         </div>

//         <div className="relative w-full h-auto md:w-[639px] md:h-[639px] p-4 bg-secondaryBg border rounded-2xl border-border aspect-square ">
//           <Image
//             src="/gradmatch/animation.gif"
//             alt=""
//             fill
//             className="object-contain w-full h-full rounded-2xl"
//           />
//         </div>
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
//             <div className="relative w-auto h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 src={feature.src}
//                 alt={feature.alt}
//                 fill
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             {/* <div className="w-full text-center">
//               <span className="w-full text-[18px] text-center font-medium text-primaryText ">
//                 {feature.alt}
//               </span>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };
