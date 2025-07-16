import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const stats = [
    { label: "Experience", value: "7+ Y." },
    { label: "Projects Completed", value: "25+" },
    { label: "Article Views", value: "100K" },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row container-default pt-8 sm:pt-24 md:pt-32 bg-gradient-to-t from-white to-light">
      <div className="w-full md:w-1/2 md:flex md:flex-col justify-between">
        <section className="w-full">
          <h2 className="text-3xl sm:5xl xl:text-6xl font-inter font-medium">
            Hello, I’m Touhid Rahman
          </h2>

          <p className="py-6 sm:py-8 text-xs md:text-sm font-inter font-normal">
            Expert Fullstack Developer with skills in Angular, JavaScript,
            TypeScript, Node.js, Python, System Design, SQL/NoSQL Databases,
            Microservices and REST API development.
          </p>

          <Link
            href="#"
            className="px-4 py-2 bg-secondary rounded-sm text-white text-sm"
          >
            Say Hello!
          </Link>
        </section>
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0.5 py-8 md:py-0">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-primary p-4 text-center text-gray-700"
            >
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="mt-2 text-gray-600 text-sm md:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end pb-8 md:pb-0">
        <Image
          src="/img/Touhid_Rahman-01-AI.png"
          alt="image"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}
