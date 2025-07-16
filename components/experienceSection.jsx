"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experience } from "../utils/data/experience";

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experience : experience.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-24 md:py-28">
      <div className="container-default">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold font-inter text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-center mb-12 leading-relaxed">
          With over 7 years of hands-on experience in frontend and full-stack
          development, I’ve crafted high-performance web and mobile applications
          for diverse industries—from biotech to e-commerce. My expertise spans
          Angular, state management, AI integrations, and cloud-ready
          architectures, ensuring scalable and user-centric solutions. Below are
          some of my key roles and contributions.
        </p>

        <div className="space-y-8 bg-surface rounded-3xl shadow-sm px-4 sm:px-10 py-8 sm:py-16">
          {visibleExperiences.map((exp, index) => (
            <div
              key={index}
              className="p-2 sm:p-6 flex flex-col gap-4 md:flex-row md:items-start"
            >
              {/* Logo Placeholder */}
              <div className="min-w-[40px] mt-1">
                {exp.image && (
                  <Image
                    src={exp.image}
                    alt="Company logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-lg font-bold">
                    {exp.role} | {exp.company}
                  </h3>
                  <span className="text-sm text-gray-700 mt-1 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed pt-1 font-montserrat text-justify">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {experience.length > 3 && (
          <div className="pt-12 flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 rounded-full bg-surface hover:bg-primary duration-300 transition cursor-pointer"
            >
              {showAll ? "View less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
