import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import { Navbar } from "@/components/main/Navbar";
import { Footer } from "@/components/main/Footer";
import SoundPlayer from "@/components/main/SoundPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Singh | Frontend Developer & Ethical Hacker Kanpur",
  description: "Official portfolio of Shubham Singh from Kanpur. 11th Grade Student, NEET Aspirant, and CCEP Certified Cybersecurity professional specializing in secure web development.",
  keywords: [
    "Shubham Singh", 
    "Shubham Singh Kanpur", 
    "Shubham Singh Developer", 
    "Ethical Hacker Kanpur", 
    "NEET Student Developer", 
    "CCEP Certificate Shubham", 
    "Cyber Ethics Academy", 
    "Frontend Developer Kanpur", 
    "Shubham Singh Hacking", 
    "Cybersecurity Portfolio India"
  ],
  icons: {
    icon: "/favicon.ico", // Browser tab par aapki photo dikhayega
  },
  openGraph: {
    images: "/shubham.png", // Google search mein aapki image ke liye
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <SoundPlayer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
