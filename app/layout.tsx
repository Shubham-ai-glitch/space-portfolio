import type { Metadata } from "next";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import SoundPlayer from "@/components/main/SoundPlayer"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Singh | Cybersecurity Expert & AI Developer Kanpur",
  description: "Official Portfolio of Shubham Singh - Certified Cybersecurity Expert. NEET Aspirant at Aakash Institute.",
  icons: {
    icon: "/favicon.ico",
    apple: "/brand-logo.png",
  },
  openGraph: {
    title: "Shubham Singh | Cybersecurity Expert",
    images: [{ url: "/brand-logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <SoundPlayer /> 
      </body>
    </html>
  );
}
