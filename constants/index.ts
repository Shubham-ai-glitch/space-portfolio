import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

// In sabhi ko alag-alag export karna zaroori hai
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
  { skill_name: "Kali Linux", image: "/kali.png", width: 70, height: 70 },
];

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "/docker.webp", width: 70, height: 70 },
  { skill_name: "Metasploit", image: "/metasploit.png", width: 70, height: 70 },
];

export const OTHER_SKILL = [
  { skill_name: "Go", image: "/go.png", width: 60, height: 60 },
];

// Skills section isi array ko use karta hai
export const SKILL_DATA = [...FRONTEND_SKILL, ...BACKEND_SKILL];

export const PROJECTS = [
  {
    title: "Advance Java Certification (P-Infowiz)",
    description: "Successfully mastered server-side programming and JDBC connectivity.",
    image: "/cert3.jpg",
    link: "/cert3.jpg",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified expertise in network security and defensive hacking.",
    image: "/cert1.jpg",
    link: "/cert1.jpg",
  },
  {
    title: "Certified Cybersecurity Educator (CCEP)",
    description: "Professional credential from Red Team Leaders certifying mastery in security.",
    image: "/cert2.jpg",
    link: "/cert2.jpg",
  },
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
