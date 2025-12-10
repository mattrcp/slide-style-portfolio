import React from "react";
import Wrapper from "../Wrapper";
import { promote2, promote } from "../../../assets/teammie";
import Image from "next/image";

const Learning = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <Reflection />
      {/* <Growth /> */}
    </section>
  );
};

export default Learning;

const Reflection = () => {
  return (
    <Wrapper className="flex flex-col gap-8 items-center md:gap-16" id="impact">
      <div className="flex flex-col cs-content-container md:flex-row">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
          Reflection
        </h2>
        <div className="flex flex-col gap-8 w-full">
          {" "}
          <p className="text-lg">
            <span className="font-bold">Cold Start Project:</span> <br />
            Technically, the app works. But a marketplace needs liquidity
            (users) to be useful. I learned that building the platform is only
            40% of the work; marketing it to get the first 10 project posts is
            the real challenge.
          </p>{" "}
          <p className="text-lg">
            <span className="font-bold">What I'd do differently:</span> <br />I
            would focus on "Single-Player Mode"—building tools that are useful
            for a single user (like a Project Planner) to attract traffic before
            the network effect kicks in.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

// const Reflection = () => {
//   return (
//      <Wrapper className="flex flex-col gap-8 items-center md:gap-16">
//       <div className="flex flex-col cs-content-container md:flex-row">
//         <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full md:w-1/3">
//           Solution
//         </h2>
//         <div className="flex flex-col gap-8 w-full md:flex-row">
//           {" "}
//           <p className="text-lg">
//             Teammie connects design students with engineers, designers, and
//             businesses to collaborate on real-world projects. The platform helps
//             students to find a designer who wants them to design their products,
//             and only for designers who want to build a portfolio, gain
//             experience, and develop the skills needed to excel in their careers.
//           </p>
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
//             <div className="relative  w-auto h-auto md:h-[639px] bg-[#1B1B1B]  rounded-lg aspect-video ">
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
//                 {feature.description}
//               </span>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const Growth = () => {
//   const imagePresentation = [
//     {
//       alt: "An image of Matt presenting the project in front of the class room.",
//       src: promote,
//     },
//     {
//       alt: "An image of Matt presenting the project in front of the class room.",
//       src: promote2,
//     },
//   ];

//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Solution
//         </h2>
//       </div>

//       <div className="flex flex-col w-full md:w-1/2">
//         <p className="w-full text-lg text-primaryText md:text-[18px]">
//           The opportunity to promote the project is a good opportunity to get
//           feedback directly from potential users while also being able to go out
//           of the comfort zone is a plus. After promoting it, I learned that not
//           every user is ready to follow the project, and it's difficult to
//           attract potential users to use the app.
//         </p>
//       </div>

//       <div className="flex overflow-x-auto flex-row gap-4 pb-6 w-full">
//         {imagePresentation.map((image, i) => (
//           <div
//             key={image.alt}
//             className="flex flex-col flex-shrink-0 w-[80vw] gap-6 md:w-auto"
//           >
//             <div className="relative w-full   h-[400px] border bg-secondaryBg rounded-2xl border-border aspect-video ">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };
