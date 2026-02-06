import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Singh | NEET Aspirant & AI Developer Kanpur",
  description: "Official portfolio of Shubham Singh from Kanpur. NEET aspirant at Aakash Institute and expert in Frontend Development & Cybersecurity.",
  verification: {
    google: "ga5xEjZNQCZvZhru74giwcXlVtAd7DUQnsktAbjqTXo", //
  },
  keywords: [
    "Shubham Singh", "Shubham Singh Kanpur", "Shubham Singh AI Glitch", 
    "Shubham Singh NEET", "Shubham Singh Aakash Institute",
    "Best Web Developer Kanpur", "Shubham Singh GitHub"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ga5xEjZNQCZvZhru74giwcXlVtAd7DUQnsktAbjqTXo" />
      </head>
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
