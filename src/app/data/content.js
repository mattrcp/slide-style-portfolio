import { casetify, gradmatch, teammie, upliftt } from "public/assets";
import { IconMobiledata } from "@tabler/icons-react";
import { casetifyBackground, casetifyComponent } from "public/casetify";

export const projects = [
  {
    title: "Upliftt",
    description:
      "Upliftt is a digital CRM platform built to empower fitness professionals. In this project, I was assigned to design an IOS app design for the trainee.",

    video: "/assets/Composition.mp4",
    image: upliftt, // Optional: can be used for fallback or overlay
    // background: gymbackground,
    href: "/upliftt",
    id: "upliftt",
    year: 2025,
    // color: "#F5F5F5",
    tag: ["Intern", "Mobile App Design", "Design System"],
  },
  {
    title: "Teammie",
    description:
      "The platform aims to help design students connect with engineers, designers, and businesses and collaborate on projects to gain valuable experience.",
    image: teammie,
    // background: background,

    href: "/teammie",
    id: "teammie",
    year: 2024,
    tag: ["Website Design", "UI/UX", "Responsive Design"],
  },
  {
    title: "Redesign Casetify",
    description:
      "Redesigned the Casetify app to improve the overall experience. Added Generative AI to help users explore better design options. Made customizing and buying mobile cases more fun and seamless!",
    image: casetify,
    // background: casetifyBackground,

    href: "/casetify",
    id: "casetify",
    year: 2024,
    tag: ["Mobile App Design", "UX/UI", "AI Implementation"],
  },
  {
    title: "GradMatch",
    description:
      "The job board application for students to showcase their skills through projects, experience, and education. The app provides a feature for users to swipe left to skip and right to apply.",
    image: gradmatch,
    // background: universityBackground,

    href: "/gradmatch",
    id: "gradmatch",
    year: 2023,
    tag: ["Mobile App Design", "UX/UI"],
  },
];
