"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personal } from "../../../public/assets";

export default function HeroSingle() {
  return (
    <div className="flex flex-col justify-center items-center  pt-16 pb-10 w-full h-[90vh] md:h-screen md:pt-20 md:mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-between w-full h-full"
        >
          <motion.div className="flex items-center justify-start w-full">
            <h1 className="font-zodiak text-primaryText text-[clamp(30px,5vw,50px)]  leading-snug w-full md:w-2/3 ">
              Matt designs mobile products that grow with your users, combining
              strategic thinking with startup experience.
            </h1>
          </motion.div>
          <motion.div className="flex items-center justify-center w-full h-full">
            <div className="relative w-[136px] h-auto group">
              <Image
                src={personal}
                alt="Matt's portrait image with orange sunset."
                className="z-50 transition-all duration-500 border border-white rounded-2xl grayscale ease-card group-hover:grayscale-0 group-hover:-rotate-6"
              />
              <span className="absolute text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 right-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:-top-12 group-hover:-right-10">
                🏃
              </span>
              <span className="absolute right-0 text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:top-20 group-hover:-right-20">
                🍵
              </span>
              <span className="absolute text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:top-1/2 group-hover:-left-20">
                📱
              </span>
              <span className="absolute text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 right-1/2 bottom-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:-bottom-14 group-hover:-right-20">
                ☕
              </span>
              <span className="absolute text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:-top-10 group-hover:left-2">
                🖥
              </span>
              <span className="absolute text-4xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 bottom-1/2 left-1/2 rotate-6 ease-card -z-10 group-hover:opacity-100 group-hover:-bottom-14 group-hover:-left-10">
                🍛
              </span>
              <Svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 h-[505px] w-[680px] ease-card duration-500 transition-all " />
            </div>
          </motion.div>
          {/* <motion.div className="flex items-center justify-end w-full">
            <p className="text-base md:text-xl md:w-1/3 text-secondaryText">
              Matt is a UX/UI Designer crafting a strategic, system-driven{" "}
              <span className="italic font-bold font-zodiak">
                mobile product
              </span>{" "}
              rooted in{" "}
              <span className="italic font-bold font-zodiak">user needs</span>{" "}
              and{" "}
              <span className="italic font-bold font-zodiak">
                built to scale
              </span>{" "}
              with past experience working in a startup.
            </p>
          </motion.div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export const Svg = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 680 505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g clip-path="url(#clip0_2393_4260)">
        <g filter="url(#filter0_f_2393_4260)">
          <path
            d="M408.5 424C503.217 424 580 347.217 580 252.5C580 157.783 503.217 81 408.5 81C313.783 81 237 157.783 237 252.5C237 347.217 313.783 424 408.5 424Z"
            fill="#FFFEB5"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter1_f_2393_4260)">
          <path
            d="M354.5 424C449.217 424 526 347.217 526 252.5C526 157.783 449.217 81 354.5 81C259.783 81 183 157.783 183 252.5C183 347.217 259.783 424 354.5 424Z"
            fill="#17AFFB"
            fill-opacity="0.1"
          />
        </g>
        <g filter="url(#filter2_f_2393_4260)">
          <path
            d="M271.5 424C366.217 424 443 347.217 443 252.5C443 157.783 366.217 81 271.5 81C176.783 81 100 157.783 100 252.5C100 347.217 176.783 424 271.5 424Z"
            fill="#FF93EB"
            fill-opacity="0.1"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_2393_4260"
          x="137"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <filter
          id="filter1_f_2393_4260"
          x="83"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <filter
          id="filter2_f_2393_4260"
          x="0"
          y="-19"
          width="543"
          height="543"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2393_4260"
          />
        </filter>
        <clipPath id="clip0_2393_4260">
          <rect width="680" height="505" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
