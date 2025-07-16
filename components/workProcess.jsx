"use client";
import React from "react";
import {
  FaRegCalendarAlt,
  FaChartLine,
  FaPencilAlt,
  FaLaptopCode,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaRegCalendarAlt className="h-6 w-6 text-secondary" />,
    title: "Research",
    description:
      "Deep dive into requirements, latest tech trends, and user needs to lay a solid foundation.",
  },
  {
    id: 2,
    icon: <FaChartLine className="h-6 w-6 text-secondary" />,
    title: "Analyze",
    description:
      "Break down complex problems and architect scalable solutions with clean code.",
  },
  {
    id: 3,
    icon: <FaPencilAlt className="h-6 w-6 text-secondary" />,
    title: "Design",
    description:
      "Intuitive UI/UX with Angular, Figma and responsive frameworks.",
  },
  {
    id: 4,
    icon: <FaLaptopCode className="h-6 w-6 text-secondary" />,
    title: "Launch",
    description:
      "CI/CD, testing and performance optimization for real-world impact.",
  },
];

function StepCard({ step }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg h-48">
      <div className="mb-4 inline-block rounded-md bg-primary p-3">
        {step.icon}
      </div>
      <h3 className="text-sm font-semibold mb-1">
        {step.id}. {step.title}
      </h3>
      <p className="text-xs text-gray-600">{step.description}</p>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section className="bg-surface pt-20 sm:pt-48 pb-20">
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Work Process
            </h2>
            <p className="text-gray-600 text-sm">
              With over 7 years of experience in frontend development and a
              strong foundation in full-stack technologies, I follow a
              structured approach to deliver high-quality solutions. My process
              ensures thorough research, precise analysis, thoughtful design,
              and seamless deployment—reflecting my expertise in Angular, state
              management, and cloud technologies.
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              From integrating AI tools to optimizing legacy code, I prioritize
              efficiency and scalability. My work is backed by community
              contributions, open-source projects, and a commitment to staying
              ahead of emerging trends in web development.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:items-center gap-2">
            <section className="w-full md:w-1/2 ">
              <StepCard step={steps[0]} />
              <div className="p-1"></div>
              <StepCard step={steps[1]} />
            </section>
            <section className="w-full md:w-1/2 md:translate-y-7">
              <StepCard step={steps[2]} />
              <div className="p-1"></div>
              <StepCard step={steps[3]} />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
