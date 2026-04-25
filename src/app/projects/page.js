import React from "react";
import { projects } from "../../../utils/data/projects";
import ProjectCard from "../../../components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Explore Touhid Rahman's portfolio of fullstack projects — from enterprise Angular applications to Node.js microservices and AI integrations.",
};


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-dark py-20 md:py-28 text-white text-center">
        <div className="container-default">
          <h1 className="text-4xl md:text-5xl font-bold font-inter mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A collection of web applications, backend services, and open-source
            work built across 7+ years of professional development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
