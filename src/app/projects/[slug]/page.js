import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../../utils/data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck } from "react-icons/fa";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* Back link */}
      <div className="container-default pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-secondary duration-200"
        >
          <FaArrowLeft aria-hidden="true" /> Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="container-default py-10 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header image area */}
          <div className="h-48 md:h-64 bg-gradient-to-br from-primary to-secondary/30 flex items-center justify-center">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold bg-white/80 px-4 py-1.5 rounded-full">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 px-6">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-12">
            {/* Description */}
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Key Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheck className="text-secondary mt-1 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary text-secondary px-3 py-1.5 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap gap-4 pt-8 border-t border-gray-100">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-sm text-sm hover:bg-gray-700 duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <FaGithub aria-hidden="true" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-sm text-sm hover:bg-secondary/80 duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Live Demo
                </a>
              )}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-secondary text-secondary rounded-sm text-sm hover:bg-secondary hover:text-white duration-200"
              >
                <FaArrowLeft aria-hidden="true" />
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
