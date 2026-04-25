import React from "react";
import Marquee from "react-fast-marquee";
import { FaAngular, FaBootstrap, FaHtml5, FaNode, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { SiNgrx, SiMysql, SiMongodb, SiTypescript, SiNestjs, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const row1 = [
  { icon: <FaAngular />, label: "Angular" },
  { icon: <SiNgrx />, label: "NgRx" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaNode />, label: "Node.js" },
  { icon: <SiNestjs />, label: "Nest.js" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <RiTailwindCssFill />, label: "Tailwind" },
  { icon: <FaReact />, label: "React" },
];

const row2 = [
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <GrGraphQl />, label: "GraphQL" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
];

function ToolItem({ icon, label }) {
  return (
    <div className="flex gap-2 items-center mx-8 sm:mx-16">
      <span className="text-2xl sm:text-4xl text-gray-700" aria-hidden="true">{icon}</span>
      <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
    </div>
  );
}

export default function DevelopmentTools() {
  return (
    <section className="bg-surface py-20" aria-label="Technologies and tools">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Technologies &amp; Tools</h2>
        <p className="text-gray-500 text-sm mt-2">Technologies I work with every day</p>
      </div>
      <Marquee autoFill={true} speed={40}>
        <div className="flex items-center py-2">
          <div className="text-xl sm:text-2xl text-black mr-8 sm:mr-16">
            <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase font-semibold text-sm">
              Frontend
            </p>
          </div>
          {row1.map((tool) => (
            <ToolItem key={tool.label} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </Marquee>
      <Marquee direction="right" className="pt-12" autoFill={true} speed={40}>
        <div className="flex items-center py-2">
          <div className="text-xl sm:text-2xl text-black mr-8 sm:mr-16">
            <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase font-semibold text-sm">
              Backend
            </p>
          </div>
          {row2.map((tool) => (
            <ToolItem key={tool.label} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
