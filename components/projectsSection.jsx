import React from "react";
import Link from "next/link";
import { projects } from "../utils/data/projects";
import ProjectCard from "./projects/ProjectCard";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 bg-surface">
      <div className="container-default">
        <h2 className="text-3xl md:text-4xl font-semibold font-inter text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto text-sm">
          A selection of projects I&apos;ve built across enterprise, fintech, backend, and personal domains —
          each reflecting real-world problem solving and clean engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-secondary text-white rounded-sm hover:bg-secondary/80 duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
