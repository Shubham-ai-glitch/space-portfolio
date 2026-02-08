import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

// Skills Sections
export const FRONTEND_SKILL = [
  { skill_name: "Html 5", image: "/html.png", width: 80, height: 80 },
  { skill_name: "Css 3", image: "/css.png", width: 80, height: 80 },
  { skill_name: "React", image: "/react.png", width: 80, height: 80 },
  { skill_name: "Type Script", image: "/ts.png", width: 80, height: 80 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node js", image: "/node-js.png", width: 80, height: 80 },
  { skill_name: "Python", image: "/python.png", width: 70, height: 70 },
];

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "/docker.webp", width: 70, height: 70 },
];

export const OTHER_SKILL = [
  { skill_name: "Go", image: "/go.png", width: 60, height: 60 },
];

export const SKILL_DATA = [...FRONTEND_SKILL, ...BACKEND_SKILL];

// About Text Export (Ye line sabse zaroori hai error fix karne ke liye)
export const ABOUT_TEXT = `I am Shubham Singh, an 11th-grade student and NEET aspirant from Kanpur. I balance my biology studies at Aakash Institute with a deep passion for Frontend Development and Cybersecurity.`;

export const PROJECTS = [
  {
    title: "Advance Java Certification",
    description: "Mastered enterprise-level backend development at P-INFOWIZ.",
    image: "/cert3.jpg",
    link: "/cert3.jpg",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/shubham.zenith_" },
      { name: "GitHub (AI-Glitch)", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec/Shubham-ai-glitch" },
    ],
  },
];
