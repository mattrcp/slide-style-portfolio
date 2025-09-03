"use client";

import React, { useState } from "react";
import Image from "next/image";
import { dot, footerGradient, logo, threeD } from "../../../public/assets";
import Link from "next/link";

import {
  IconArrowUpRight,
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
  IconFileCv,
  IconBrandTwitter,
  IconCopy,
} from "@tabler/icons-react";
import Logo from "./Logo";

const links = [
  {
    href: "https://dribbble.com/ratchapon",
    label: "Dribble",
    logo: <IconBrandDribbble stroke={2} />,
  },
  {
    href: "https://www.instagram.com/tooboredto.design/",
    label: "Instagram",
    logo: <IconBrandInstagram stroke={2} />,
  },
  {
    href: "https://www.linkedin.com/in/matt-ngamdan-b251171a1/",
    label: "LinkedIn",
    logo: <IconBrandLinkedin stroke={2} />,
  },
  // {
  //   href: "https://drive.google.com/file/d/127RnFN0WAj9nbaBzpidA9xSeUWODGFg9/view?usp=sharing",
  //   label: "Resume",
  //   logo: <IconFileCv stroke={2} />,
  // },
  {
    href: "https://x.com/mattjustbored",
    label: "Twitter",
    logo: <IconBrandTwitter stroke={2} />,
  },
];

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "ratchapon.ngam@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      // Reset after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <footer className="flex flex-col justify-between items-start border-border z-[50] border-t-[1px] bg-primaryBg h-screen relative">
      <div className="flex flex-col relative h-auto gap-4 text-center items-center justify-center z-[20] border-border border-b-[1px] px-8 pb-8 pt-28 w-full md:h-full">
        {/* <p className="z-20 w-auto font-medium uppercase h-fit">
          Design with Love
        </p> */}
        <Image
          src={threeD}
          alt="Footer gradient"
          draggable="false"
          className="z-0 p-8 w-full h-auto opacity-100  md:w-[50vw] md:h-auto"
        />
        {/* <Logo
          className="z-0 p-8 w-full h-auto md:h-[50vh] "
          draggable="false"
          alt="Footer gradient"
          priority={false}
        /> */}
      </div>

      <div className="flex z-[20] flex-col gap-4 justify-between items-center px-8 py-8 w-full h-auto md:flex-row">
        <div className="flex gap-2 justify-center items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse">
            {" "}
          </div>

          <span className="text-base font-medium uppercase text-secondaryText text-start font-satoshi">
            I'm available for new opportunities ジ{" "}
          </span>
        </div>
        <button
          onClick={handleCopyEmail}
          className="flex gap-4 justify-center items-center px-10 py-4 w-full text-base font-medium text-white rounded-full transition-all duration-300 ease-in-out cursor-pointer sm:w-full md:w-1/4 bg-highlightBlue text-start font-satoshi hover:bg-black"
        >
          {isCopied ? "COPIED" : email}

          <span className={`${isCopied ? "hidden" : "block"}`}>
            <IconCopy stroke={1} />
          </span>
        </button>
      </div>
      <div className="flex z-[20]  gap-4 justify-center items-center h-full md:h-auto md:flex-row flex-col md:px-8 py-0 md:py-4 w-full md:gap-8 border-border border-y-[1px]">
        <p className="hidden w-full text-base font-medium uppercase md:block text-secondaryText">
          Connect
        </p>
        <div className="flex flex-col justify-center items-center w-full h-full md:justify-end md:gap-20 md:flex-row md:h-auto">
          {links.map((link, index) => (
            <div
              className="flex flex-row gap-4 justify-center items-center py-4 w-full h-full border-b-[1px] border-border md:border-none md:w-auto md:gap-6 text-secondaryText"
              key={index}
            >
              <span>{link.logo}</span>
              <Link
                href={link.href}
                target="_blank"
                className="text-sm font-medium md:text-lg font-satoshi cursor-trigger"
                data-cursor-text={link.label.toUpperCase()}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex relative z-20 flex-col justify-center items-center px-6 py-4 w-full h-auto">
        <p className="text-sm font-medium text-center text-secondaryText font-satoshi">
          © 2025 Designed & Developed by Matt Ngamdan
        </p>
      </div>
      <Image
        src={dot}
        alt="Dot backdrop"
        draggable="false"
        className="absolute top-0 z-0 w-screen h-screen opacity-80 brightness-200"
      />
    </footer>
  );
};

export default Footer;
