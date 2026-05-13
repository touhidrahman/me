import React from "react"
import { education, certifications } from "../utils/data/education"
import { FaGraduationCap, FaCertificate } from "react-icons/fa"
import Image from "next/image"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-white">
      <div className="container-default">
        <h2 className="text-3xl md:text-4xl font-semibold font-inter text-center mb-12">
          Education &amp; Additional Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-md text-secondary text-xl">
                <FaGraduationCap aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                //start here
                <article
                  key={edu.id}
                  className="group rounded-xl bg-surface p-6 border-l-4 border-secondary  transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-5 mb-5">
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 leading-snug mb-2">
                        {edu.degree}
                      </h4>

                      <p className="text-secondary text-sm font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    {edu.logo && (
                      <div className="shrink-0 flex h-16 w-16 items-center justify-center p-2">
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <span className="text-xs text-gray-500">
                      {edu.location}
                    </span>

                    <span className="text-xs text-gray-500">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-xs text-secondary font-medium hover:underline"
                    >
                      View research project
                      <span className="ml-1">→</span>
                    </a>
                  )}
                </article>
                //end here
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-md text-secondary text-xl">
                <FaCertificate aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Awards &amp; Additional Info
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-surface rounded-xl p-5 flex items-start gap-4 hover:shadow-md duration-200"
                >
                  <div className="bg-primary text-secondary rounded-md p-2 mt-0.5 shrink-0">
                    <FaCertificate aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-900 text-sm mb-0.5 hover:text-secondary duration-200"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                        {cert.title}
                      </h4>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{cert.issuer}</span>
                      <span>·</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
