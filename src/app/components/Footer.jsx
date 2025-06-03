import React from "react";
import Image from "next/image";
import { footerGradient } from "../../../public/assets";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

import { IconArrowUpRight } from "@tabler/icons-react";

const links = [
  { href: "https://www.youtube.com/", label: "Dribble" },
  { href: "https://www.youtube.com/", label: "Instagram" },
  { href: "https://www.youtube.com/", label: "LinkedIn" },
  { href: "https://www.youtube.com/", label: "Resume" },
];

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-40 justify-end pt-40 h-auto">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-lg font-medium font-satoshi text-secondaryText">
            Don't be shy ジ
          </p>
          <div className="flex flex-row gap-4 justify-center items-center px-4 py-8 rounded-2xl border md:pr-8 md:pl-10 bg-secondaryBg border-border">
            <Link
              href="mailto:ratchapon.ngam@gmail.com"
              className="text-lg italic underline transition-all duration-300 md:text-2xl font-zodiak underline-offset-2 text-primaryText"
            >
              Ratchapon.ngam@gmail.com
            </Link>
            <IconArrowUpRight stroke={2} className="w-7 h-7 text-primaryText" />
          </div>
        </div>
      </div>
      <footer className="flex relative flex-col-reverse gap-0 justify-between items-end px-4 py-4 w-full md:gap-20 md:py-10 md:flex-row">
        <div className="flex justify-start items-start w-full">
          <Svg color={theme === "light" ? "#000000" : "#ffffff"} />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center pb-4 w-full h-full md:justify-end md:items-end">
          <div className="flex flex-row gap-2 justify-center items-end w-full md:justify-end md:gap-8">
            {links.map((link, index) => (
              <div
                className="flex flex-row gap-2 justify-center items-center text-secondaryText"
                key={index}
              >
                <Link
                  href={link.href}
                  className="text-sm italic md:text-lg font-satoshi"
                >
                  {link.label}
                </Link>
                <IconArrowUpRight
                  stroke={2}
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            ))}
          </div>
          <p className="text-lg font-medium font-satoshi md:text-2xl text-start md:text-end text-primaryText">
            Designed & Developed by Matt Ngamdan
          </p>
        </div>
        <Image
          src={footerGradient}
          alt="Footer gradient"
          width={100}
          height={1000}
          className="absolute bottom-0 w-full h-auto -z-10"
        />
      </footer>
    </div>
  );
};

export default Footer;

export const Svg = ({ color }) => {
  return (
    <svg
      width="734"
      height="176"
      viewBox="0 0 734 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <path
        d="M674.713 175.072C640.834 175.072 619.189 153.898 619.189 120.725H636.129C636.129 144.958 650.951 159.544 674.948 159.544C700.357 159.544 716.826 142.605 716.826 117.667C716.826 94.1397 701.534 75.5536 674.948 75.5536C659.42 75.5536 645.304 82.6116 636.129 92.7281L622.718 88.4933L642.952 3.79688H724.355V19.3246H655.186L642.481 72.2598C651.892 64.7313 664.126 60.4964 677.301 60.4964C712.356 60.4964 734.001 85.6701 734.001 117.196C734.001 151.075 710.003 175.072 674.713 175.072Z"
        fill={color}
      />
      <path
        d="M596.938 172.44H485.891V159.03L539.767 111.976C570.823 84.9203 578.822 73.1569 578.822 53.1592C578.822 30.3382 565.176 16.4574 542.826 16.4574C519.534 16.4574 504.242 33.3967 503.536 59.5114H486.596C487.537 24.2212 509.888 0.929688 543.061 0.929688C574.822 0.929688 595.997 21.398 595.997 52.2181C595.997 76.686 584.939 92.9194 551.295 122.328L512.005 156.677H596.938V172.44Z"
        fill={color}
      />
      <path
        d="M328.227 88.4493C328.227 36.2199 353.871 0.929688 395.749 0.929688C437.391 0.929688 463.036 36.2199 463.036 88.4493C463.036 140.914 437.862 175.734 395.749 175.734C353.4 175.734 328.227 140.914 328.227 88.4493ZM344.931 88.4493C344.931 132.209 363.517 160.441 395.749 160.441C427.981 160.441 446.567 132.209 446.567 88.4493C446.567 44.4542 427.981 16.4574 395.749 16.4574C363.517 16.4574 344.931 44.4542 344.931 88.4493Z"
        fill={color}
      />
      <path
        d="M304.543 172.44H193.496V159.03L247.373 111.976C278.428 84.9203 286.427 73.1569 286.427 53.1592C286.427 30.3382 272.782 16.4574 250.431 16.4574C227.14 16.4574 211.847 33.3967 211.141 59.5114H194.202C195.143 24.2212 217.494 0.929688 250.667 0.929688C282.428 0.929688 303.602 21.398 303.602 52.2181C303.602 76.686 292.544 92.9194 258.901 122.328L219.611 156.677H304.543V172.44Z"
        fill={color}
      />
      <path
        d="M86.5791 175.734C37.6431 175.734 0 137.62 0 88.2141C0 39.0431 37.8783 0.929688 86.5791 0.929688C135.515 0.929688 173.393 39.0431 173.393 88.2141C173.393 137.62 135.75 175.734 86.5791 175.734ZM86.5791 164.206C129.163 164.206 160.924 131.503 160.924 88.2141C160.924 44.9248 128.928 12.4578 86.5791 12.4578C44.4659 12.4578 12.4693 45.1601 12.4693 88.2141C12.4693 131.503 44.2306 164.206 86.5791 164.206ZM43.5248 88.6846C43.5248 60.4525 61.8758 40.9252 88.4612 40.9252C108.93 40.9252 124.222 52.9239 127.986 71.5101H113.635C110.341 59.7467 101.636 53.6297 88.6965 53.6297C70.1102 53.6297 57.4057 67.981 57.4057 88.4493C57.4057 109.153 69.6397 123.034 87.5201 123.034C100.93 123.034 110.341 116.681 114.106 105.389H128.222C123.987 123.74 107.753 135.738 87.5201 135.738C61.6405 135.738 43.5248 116.446 43.5248 88.6846Z"
        fill={color}
      />
    </svg>
  );
};
