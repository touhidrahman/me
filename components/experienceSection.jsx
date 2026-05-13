"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  professionalExperience,
  volunteerExperience,
} from "../utils/data/experience.js"

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)

  const visibleExperiences = showAll
    ? professionalExperience
    : professionalExperience.slice(0, 3)

  return (
    <section id="experience" className="bg-white py-16 sm:py-24 md:py-28">
      <div className="container-default">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold font-inter text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-center mb-12 leading-relaxed text-sm sm:text-base">
          With over 8 years of hands-on experience in frontend and full-stack
          development, I&apos;ve crafted high-performance web and mobile
          applications for diverse industries. My expertise spans Angular,
          Node.js, real-time systems, state management, AI integrations, and
          cloud-ready architectures.
        </p>

        <div className="space-y-6 bg-surface rounded-3xl shadow-sm px-4 sm:px-8 md:px-10 py-8 sm:py-12">
          {visibleExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-2 sm:p-5 flex flex-col gap-4 md:flex-row md:items-start border-b border-gray-200 last:border-b-0"
            >
              <div className="min-w-10 mt-1">
                {exp.image && (
                  <Image
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-secondary font-medium">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-700 mt-1 lg:mt-0 lg:text-right whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-900 leading-relaxed">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {exp.environment && (
                  <p className="text-xs text-gray-600 mt-3">
                    <span className="font-semibold text-gray-700">
                      Environment:
                    </span>{" "}
                    {exp.environment}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {professionalExperience.length > 3 && (
          <div className="pt-12 flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 rounded-full bg-surface hover:bg-primary duration-300 transition cursor-pointer"
            >
              {showAll ? "View less" : "View more"}
            </button>
          </div>
        )}

        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-inter mb-6">
            Freelance & Contract Experience
          </h3>
          <div className="space-y-6 bg-surface rounded-3xl shadow-sm px-4 sm:px-8 md:px-10 py-8 sm:py-12">
            {volunteerExperience.map((exp) => (
              <div
                key={exp.id}
                className="p-2 sm:p-5 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-1 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-secondary font-medium">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-700 mt-1 lg:mt-0 lg:text-right whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-900 leading-relaxed">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {exp.environment && (
                  <p className="text-xs text-gray-600 mt-3">
                    <span className="font-semibold text-gray-700">
                      Environment:
                    </span>{" "}
                    {exp.environment}
                  </p>
                )}

                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-secondary hover:underline"
                  >
                    Visit product
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
