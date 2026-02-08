import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

// 1. Skill Categories (Build error fix karne ke liye alag-alag export zaroori hain)
export const FRONTEND_SKILL = [
  { skill_name: "Html 5", image: "/html.png", width: 80, height: 80 },
  { skill_name: "Css 3", image: "/css.png", width: 80, height: 80 },
  { skill_name: "Java Script", image: "/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind", image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "/react.png", width: 80, height: 80 },
  { skill_name: "Type Script", image: "/ts.png", width: 80, height: 80 },
  { skill_name: "Next js 14", image: "/next.png", width: 80, height: 80 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node js", image: "/node-js.png", width: 80, height: 80 },
  { skill_name: "Express js", image: "/express.png", width: 80, height: 80 },
  { skill_name: "Mongo DB", image: "/mongodb.png", width: 40, height: 40 },
  { skill_name: "Python", image: "/python.png", width: 70, height: 70 },
];

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "/docker.webp", width: 70, height: 70 },
  { skill_name: "Kali Linux", image: "/kali.png", width: 70, height: 70 },
];

export const OTHER_SKILL = [
  { skill_name: "Metasploit", image: "/metasploit.png", width: 60, height: 60 },
];

export const SKILL_DATA = [...FRONTEND_SKILL, ...BACKEND_SKILL, ...FULLSTACK_SKILL, ...OTHER_SKILL];

// 2. Encryption Section Fix (Line 6 error solution)
export const ABOUT_TEXT = `I am Shubham Singh, a dedicated 11th-grade student and NEET aspirant at Aakash Institute, Kanpur. While pursuing my medical goals, I have mastered Frontend Development and Cybersecurity to bridge the gap between Healthcare and Tech.`;

// 3. Certificates/Projects Section
export const PROJECTS = [
  {
    title: "Advance Java Certification",
    description: "Enterprise-level backend development including JSP, Servlets, and JDBC at P-INFOWIZ.",
    image: "/cert3.jpg",
    link: "/cert3.jpg",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified expertise in network security and defensive hacking from Cyber Ethics Academy.",
    image: "/cert1.jpg",
    link: "/cert1.jpg",
  },
  {
    title: "Certified Cybersecurity Educator (CCEP)",
    description: "Credential from Red Team Leaders for mastery in security education.",
    image: "/cert2.jpg",
    link: "/cert2.jpg",
  },
];

// 4. Social Links (Instagram Zenith Fix)
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { 
        name: "Instagram", 
        icon: RxInstagramLogo, 
        link: "https://www.instagram.com/shubham.zenith_" 
      },
      { 
        name: "GitHub (AI-Glitch)", 
        icon: RxGithubLogo, 
        link: "https://github.com/Shubhams872-spec/Shubham-ai-glitch" 
      },
      { 
        name: "Telegram", 
        icon: FaTelegramPlane, 
        link: "https://t.me/Shubhams872" 
      },
    ],
  },
];
