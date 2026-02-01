import { RxGithubLogo } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

export const SOCIALS = [
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    link: "https://t.me/Shubhams872",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Shubhams872-spec",
  },
] as const;

export const PROJECTS = [
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    description: "Issued by Red Team Leaders, this certification validates my expertise in network security and my professional capability to educate others on digital defense protocols.",
    image: "/cert2.jpg", 
    link: "https://github.com/Shubhams872-spec",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Certified by Cyber Ethics Academy, this credential proves my practical skills in vulnerability assessment, penetration testing, and securing digital infrastructures.",
    image: "/cert1.jpg",
    link: "https://github.com/Shubhams872-spec",
  },
  {
    title: "Modern Space Portfolio",
    description: "A high-performance 3D portfolio website built with Next.js 14 and Tailwind CSS, showcasing the fusion of web development and security.",
    image: "/projects/project-1.png",
    link: "https://github.com/Shubhams872-spec",
  },
] as const;

export const ABOUT_TEXT = "I am Shubham Singh, an 11th-grade student from Kanpur, Uttar Pradesh. Currently, I am dedicated to my NEET preparation while pursuing my deep-rooted passion for Cybersecurity and Ethical Hacking. As a Frontend Developer, I specialize in building secure, modern web experiences. My journey is a unique blend of medical aspiration and digital defense.";

export const LINKS = {
  resume: "/resume.pdf",
};
