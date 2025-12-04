"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const links = [
  {
    href: "https://dribbble.com/ratchapon",
    label: "Dribble",
    logo: <IconBrandDribbble stroke={2} />,
  },
  {
    href: "https://www.instagram.com/justmatt.studio/",
    label: "Instagram",
    logo: <IconBrandInstagram stroke={2} />,
  },
  {
    href: "https://www.linkedin.com/in/matt-ngamdan-b251171a1/",
    label: "LinkedIn",
    logo: <IconBrandLinkedin stroke={2} />,
  },
  {
    href: "https://x.com/mattjustbored",
    label: "Twitter",
    logo: <IconBrandTwitter stroke={2} />,
  },
];

export default function FooterSection() {
  const pathname = usePathname();

  // Define pages that use scroll snap
  const snapPaths = ["/", "/about", "/contact"];
  const isSnapPage = snapPaths.includes(pathname);

  // Determine container class based on path
  const containerClass = isSnapPage ? "snap-section" : "cs-content-container";

  return (
    <section
      className={`flex flex-col justify-between items-start p-6 bg-primaryBg ${containerClass}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for better trigger on scroll
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex text-[clamp(40px,4.5vw,96px)]"
      >
        <h1 className={"leading-none w-fit text-primaryText"}>
          Matt <br></br> Ngamdan
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 justify-between items-start w-full md:items-end md:flex-row"
      >
        <div className="flex gap-2 w-full">
          {links.map((link, index) => (
            <Link
              href={link.href}
              target="_blank"
              className="flex flex-row gap-4 justify-end items-start p-2 w-20 h-auto rounded-lg transition-all duration-150 ease-out md:w-20 lg:w-24 md:gap-6 text-secondaryText bg-secondaryBg hover:bg-black aspect-square hover:text-white"
              key={index}
            >
              <span>{link.logo}</span>
            </Link>
          ))}
        </div>
        <div>
          <p className="flex text-sm text-secondaryText">
            © 2025 for Ratchapon Ngamdan ⎯ Made with ❤️ in ReactJS
          </p>
        </div>
      </motion.div>
    </section>
  );
}
