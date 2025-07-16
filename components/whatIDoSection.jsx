"use client";

import React from "react";

export default function WhatIDoSection() {
  return (
    <section className="bg-surface py-16 sm:py-28">
      <div className="container-default grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl text-gray-900 font-semibold mb-4">
            What I do?
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm mb-4">
            I specialize in building modern, scalable web applications with a
            focus on Angular and cutting-edge technologies. From crafting
            responsive UIs to integrating AI and real-time features, I ensure
            robust, maintainable code that delivers seamless user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            With expertise in both frontend and backend development, I bridge
            the gap between design and functionality—optimizing performance,
            state management, and deployment workflows for startups and
            enterprises alike.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-5 rounded-sm shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
            <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
              Frontend Development
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              I build dynamic, high-performance interfaces using Angular, RxJS,
              and state management (NgRx). My focus is on clean architecture,
              reusable components, and pixel-perfect responsiveness.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
            <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
              Full-Stack Solutions
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              From RESTful APIs to real-time microservices (Node.js,
              WebSockets), I develop end-to-end systems with scalable backends,
              databases (SQL/NoSQL), and seamless frontend integration.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
            <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
              AI & Cloud Integration
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              I leverage AI tools (OpenAI SDK) and cloud platforms (Azure,
              Docker) to automate workflows, enhance apps with smart features,
              and ensure smooth CI/CD deployments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
