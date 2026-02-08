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

export const ABOUT_TEXT = `I am Shubham Singh, a high-performance Frontend Developer and **Cybersecurity Expert** based in Kanpur. Currently a NEET aspirant at Aakash Institute, I bridge the gap between Healthcare and Advanced Technology. My expertise includes React.js, TypeScript, and Ethical Hacking, focusing on building secure digital ecosystems. From mastering Advance Java to securing networks, I am dedicated to technical excellence and innovation.`;

export const PROJECTS = [
  {
    title: "Advance Java Certification (P-INFOWIZ)",
    description: "Successfully mastered enterprise-level backend development at P-INFOWIZ, Kanpur. Expertise includes advanced JSP, Servlets, and complex JDBC connectivity for building robust, high-performance server-side architectures and secure database management systems.",
    image: "/cert3.jpg",
    download: "/cert3.jpg", 
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description: "Certified Cybersecurity Expert specialized in defensive hacking and network security through Cyber Ethics Academy. Professional mastery in identifying system vulnerabilities, conducting deep-dive penetration testing, and implementing enterprise-grade security protocols.",
    image: "/cert1.jpg",
    download: "/cert1.jpg",
  },
  {
    title: "Certified Cybersecurity Educator (CCEP)",
    description: "Global credential from Red Team Leaders certifying professional mastery in Cybersecurity Education and Defensive System Management. Expert-level training in maintaining global security standards, digital defense strategies, and technical risk mitigation.",
    image: "/cert2.jpg",
    download: "/cert2.jpg",
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
