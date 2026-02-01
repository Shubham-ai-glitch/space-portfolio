import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export const Skill_Data = [
  { skill_name: "Html 5", Image: "/html.png", width: 80, height: 80 },
  { skill_name: "Css 3", Image: "/css.png", width: 80, height: 80 },
  { skill_name: "Java Script", Image: "/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind Lucide", Image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "React", Image: "/react.png", width: 80, height: 80 },
  { skill_name: "Redux", Image: "/redux.png", width: 80, height: 80 },
  { skill_name: "React Query", Image: "/reactquery.png", width: 80, height: 80 },
  { skill_name: "Type Script", Image: "/ts.png", width: 80, height: 80 },
  { skill_name: "Next js 13", Image: "/next.png", width: 80, height: 80 },
];

export const SOCIALS = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/Shubhams872" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec" },
];

// This matches your Footer's expected "icon" structure
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Shubhams872-spec" },
      { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/Shubhams872" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/Shubham.zenith_" },
      { name: "Twitter", icon: FaTwitter, link: "#" },
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "#" },
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
    description: "Issued by Red Team Leaders on December 7, 2025. This certificate validates my advanced expertise in network security and digital defense training.",
    image: "/cert2.jpg",
    link: "https://github.com/Shubhams872-spec",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified by Cyber Ethics Academy on 20 December 2025. This credential proves my practical skills in penetration testing and system security.",
    image: "/cert1.jpg",
    link: "https://github.com/Shubhams872-spec",
  },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const LINKS = { resume: "/resume.pdf" };
export const FULLSTACK_SKILL = [];
export const OTHER_SKILL = [];
export const ABOUT_TEXT = "I am Shubham Singh, an 11th-grade student from Kanpur, Uttar Pradesh. I am preparing for NEET while pursuing my passion for Cybersecurity and Ethical Hacking.";
