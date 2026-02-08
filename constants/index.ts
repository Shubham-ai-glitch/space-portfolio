import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

export const FRONTEND_SKILL = [
  { skill_name: "Html 5", image: "/html.png", width: 80, height: 80 },
  { skill_name: "Css 3", image: "/css.png", width: 80, height: 80 },
  { skill_name: "Java Script", image: "/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind", image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "/react.png", width: 80, height: 80 },
  { skill_name: "Type Script", image: "/ts.png", width: 80, height: 80 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node js", image: "/node-js.png", width: 80, height: 80 },
  { skill_name: "Python", image: "/python.png", width: 70, height: 70 },
  { skill_name: "Mongo DB", image: "/mongodb.png", width: 40, height: 40 },
];

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "/docker.webp", width: 70, height: 70 },
  { skill_name: "Kali Linux", image: "/kali.png", width: 70, height: 70 },
];

export const OTHER_SKILL = [
  { skill_name: "Metasploit", image: "/metasploit.png", width: 60, height: 60 },
];

export const SKILL_DATA = [...FRONTEND_SKILL, ...BACKEND_SKILL, ...FULLSTACK_SKILL, ...OTHER_SKILL];

export const ABOUT_TEXT = `I am Shubham Singh, an 11th-grade student and NEET aspirant at Aakash Institute, Kanpur. I balance biology studies with Frontend Development and Cybersecurity to innovate in healthcare tech.`;

export const PROJECTS = [
  {
    title: "Advance Java Certification",
    description: "Mastered enterprise backend development at P-INFOWIZ.",
    image: "/cert3.jpg",
    link: "/cert3.jpg",
  },
  {
    title: "Cybersecurity Expert",
    description: "Certified expertise in defensive hacking and network security.",
    image: "/cert1.jpg",
    link: "/cert1.jpg",
  }
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/shubham.zenith_" },
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec/Shubham-ai-glitch" },
      { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/Shubhams872" },
    ],
  },
];
