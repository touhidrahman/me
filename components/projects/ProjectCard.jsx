import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300 flex flex-col overflow-hidden group">
      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-primary to-secondary/20 flex items-center justify-center relative overflow-hidden">
        <div className="text-center px-6">
          <span className="text-xs uppercase tracking-widest text-secondary font-semibold bg-white/80 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-secondary duration-200">
          {project.title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary text-secondary px-2 py-0.5 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-semibold text-secondary hover:underline"
          >
            View Details →
          </Link>

          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-secondary duration-200 text-lg"
                aria-label={`${project.title} GitHub repository`}
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-secondary duration-200 text-base"
                aria-label={`${project.title} live demo`}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
