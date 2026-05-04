import React from "react";
import Link from "next/link";
import Image from "next/image";
import { personal } from "../utils/data/personal";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row container-default pt-8 sm:pt-24 md:pt-32">
      <div className="w-full md:w-1/2 md:flex md:flex-col justify-between">
        <section className="w-full">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-inter font-medium">
            Hello, I&apos;m {personal.name}
          </h1>

          <p className="py-6 sm:py-8 text-xs md:text-sm font-inter font-normal text-gray-600 max-w-md">
            {personal.tagline}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="px-4 py-2 bg-secondary rounded-sm text-white text-sm hover:bg-secondary/80 duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Say Hello!
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 border border-secondary text-secondary rounded-sm text-sm hover:bg-secondary hover:text-white duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              View Projects
            </Link>
          </div>
        </section>
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0.5 py-8 md:py-0">
          {personal.stats.map((item, index) => (
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
          alt="Touhid Rahman — Fullstack Developer"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
