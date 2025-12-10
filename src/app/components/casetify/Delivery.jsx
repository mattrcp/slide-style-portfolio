import React from "react";

import Wrapper from "../Wrapper";
import {
  home,
  product,
  edit,
  cart,
  designSystem,
} from "../../../assets/casetify";
import Image from "next/image";

const Delivery = () => {
  return (
    <section className="flex flex-col gap-8 justify-start items-center mb-8 w-full h-full md:gap-16 md:mb-16">
      <FinalDesign />
    </section>
  );
};

const FinalDesign = () => {
  return (
    <Wrapper
      className="flex overflow-visible flex-col gap-8 items-center md:gap-16"
      id="handoff"
    >
      <div className="flex flex-col cs-content-container">
        <h2 className="text-[clamp(32px,4.5vw,40px)] text-primaryText leading-[1.1] w-full ">
          The GenAI Integration
        </h2>

        {/* Video 1 */}
        <div className="flex flex-col gap-4 w-full text-lg md:gap-6">
          <div className="flex flex-col gap-6 w-full md:gap-8 md:flex-row">
            <div className="flex flex-col gap-6 w-full">
              <p className="">
                The flagship feature of this redesign. I designed the prompt
                interface to be conversational, not technical.
              </p>
              <div className="flex flex-col gap-2">
                <div className="mb-2 w-full">
                  <p className="text-lg">
                    <span className="italic font-bold">The Interaction:</span>{" "}
                  </p>
                </div>
                <ul className="pl-6 w-full text-lg list-decimal font-satoshi">
                  {/* Item 1 */}
                  <li className="pl-2 mb-2">
                    <span>
                      <span className="italic font-bold">Input:</span>
                      &nbsp;User types "Cyberpunk City."
                    </span>
                  </li>

                  {/* Item 2 */}
                  <li className="pl-2 mb-2">
                    <span>
                      <span className="italic font-bold">Generate:</span>
                      &nbsp;AI creates 4 variations.
                    </span>
                  </li>

                  {/* Item 3 */}
                  <li className="pl-2 mb-2">
                    <span>
                      <span className="italic font-bold">Apply:</span>
                      &nbsp;User taps a variation, and it wraps the 3D phone
                      model instantly.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col bg-[#1B1B1B] w-full rounded-lg p-6 py-8">
              {/* Centering Wrapper */}
              <div className="flex justify-center w-full">
                {/* 1. Removed 'aspect-video'
       2. Added 'aspect-[9/16]' to match mobile video ratio
       3. Added 'max-h-[600px]' (or 70vh) to cap the height 
    */}
                <div className="relative max-h-[600px] w-auto rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg">
                  <video
                    src="/casetify/prototype.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="overflow-hidden relative bg-[#1B1B1B]  cs-image-container rounded-lg ">
        {" "}
        <Image
          src={evolution}
          alt="Final design of Upliftt's application"
          fill
          className="object-contain object-left w-auto h-auto rounded-2xl"
        />
      </div> */}
    </Wrapper>
  );
};

export default Delivery;

// const Final = () => {
//   const imageFeatures = [
//     {
//       alt: "Home Page Design",
//       src: home,
//       description: "Home Page Design",
//     },
//     {
//       alt: "Product Page Design",
//       src: product,
//       description: "Product Page Design",
//     },
//     {
//       alt: "Customize Page Design",
//       src: edit,
//       description: "Customize Page Design",
//     },
//     {
//       alt: "Cart Page Design",
//       src: cart,
//       description: "Cart Page Design",
//     },
//   ];
//   return (
//     <Wrapper id="final">
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
//             Improve the application's design ability by implementing a design
//             system on the app to maintain the design across the app. Add a GenAI
//             feature to attract customers to use the custom case by prompting the
//             AI to generate images.
//           </p>
//         </div>

//         {/* Video Block */}

//         <div className="flex items-center justify-center w-full overflow-hidden border p-14 md:w-1/2 bg-secondaryBg rounded-3xl md:rounded-[32px] border-border aspect-square relative">
//           {/* Video */}
//           <video
//             src="/casetify/prototype.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className={`object-contain w-auto h-full rounded-3xl transition-opacity duration-300 md:rounded-[30px] }`}
//           ></video>
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
//             <div className="relative w-full h-auto md:w-[639px] md:h-[639px] bg-secondaryBg border rounded-2xl border-border aspect-square ">
//               {" "}
//               {/* Added relative */}
//               <Image
//                 src={feature.src}
//                 alt={feature.alt}
//                 width={200}
//                 height={200}
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             <div className="w-full text-center">
//               <span className="w-full font-satoshi text-[18px] text-center font-medium text-primaryText ">
//                 {feature.alt}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// const DesignSystem = () => {
//   return (
//     <Wrapper>
//       <div className="py-4 w-full border-b border-border">
//         <h2 className="text-[24px] md:text-[32px] leading-none text-secondaryText">
//           Design System
//         </h2>
//       </div>
//       <div className="grid overflow-hidden relative place-items-center w-full h-full border-border">
//         <Image
//           src={designSystem}
//           alt="an image of how the How Might We process looks like"
//           className="rounded-lg md:rounded-2xl"
//           width={200}
//           height={200}
//           quality={100}
//         />
//       </div>
//     </Wrapper>
//   );
// };
