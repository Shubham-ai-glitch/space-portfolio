"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string; // Optional link for certificates/projects
}

const ProjectCard = ({ src, title, description, link = "https://github.com/Shubhams872-spec" }: Props) => {
  return (
    <Link 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 bg-[#030014]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

// This line is the most important fix!
export default ProjectCard;
