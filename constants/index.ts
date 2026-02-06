import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

export const PROJECTS = [
  {
    title: "Advance Java Certification (P-Infowiz)",
    description: "Successfully mastered enterprise-level backend development including JSP, Servlets, and JDBC connectivity. This certificate validates my expertise in building robust server-side architectures for scalable web applications.",
    image: "/cert3.jpg",
    link: "/cert3.jpg",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified expertise in network security and defensive hacking techniques through Cyber Ethics Academy. Specialized in vulnerability assessment and securing digital assets against unauthorized threats.",
    image: "/cert1.jpg",
    link: "/cert1.jpg",
  },
  {
    title: "Certified Cybersecurity Educator (CCEP)",
    description: "Professional credential from Red Team Leaders certifying mastery in cybersecurity education and defensive system management. This confirms my commitment to maintaining global security standards.",
    image: "/cert2.jpg",
    link: "/cert2.jpg",
  },
];

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
        name: "GitHub (AI Glitch)", 
        icon: RxGithubLogo, 
        link: "https://github.com/Shubhams872-spec/Shubham-ai-glitch" // Naya link yahan hai
      },
      { 
        name: "Telegram", 
        icon: FaTelegramPlane, 
        link: "https://t.me/Shubhams872" 
      },
    ],
  },
];
