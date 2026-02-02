import { RxGithubLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

export const Skill_Data = [
  { skill_name: "Html 5", image: "/html.png", width: 80, height: 80 },
  { skill_name: "Css 3", image: "/css.png", width: 80, height: 80 },
  { skill_name: "Java Script", image: "/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind Lucide", image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "/react.png", width: 80, height: 80 },
  { skill_name: "Type Script", image: "/ts.png", width: 80, height: 80 },
  { skill_name: "Next js 13", image: "/next.png", width: 80, height: 80 },
];

export const SKILL_DATA = Skill_Data; 
export const FRONTEND_SKILL = Skill_Data;

// Inhe khali nahi chhod sakte, isliye temporary data add kiya hai
export const BACKEND_SKILL = [
  { skill_name: "Node js", image: "/node-js.png", width: 80, height: 80 },
];
export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "/docker.webp", width: 70, height: 70 },
];
export const OTHER_SKILL = [
  { skill_name: "Go", image: "/go.png", width: 60, height: 60 },
];

export const SOCIALS = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/Shubhams872" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec" },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec" },
      { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/Shubhams872" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "Contact Me", icon: null, link: "mailto:shubhamsingh9415191609@gmail.com" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    description: "Issued by Red Team Leaders on December 7, 2025. Validates expertise in secure infrastructure and defense training.",
    image: "/cert2.jpg",
    link: "https://github.com/Shubhams872-spec",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified by Cyber Ethics Academy on 20 December 2025. Focused on vulnerability assessment and penetration testing.",
    image: "/cert1.jpg",
    link: "https://github.com/Shubhams872-spec",
  },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const LINKS = { 
  resume: "/resume.pdf",
  sourceCode: "https://github.com/Shubhams872-spec/space-portfolio" 
};

export const ABOUT_TEXT = "I am Shubham Singh, an 11th-grade student and Frontend Developer from Kanpur. Currently preparing for NEET while specializing in Cybersecurity.";
