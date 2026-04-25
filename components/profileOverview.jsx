"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { personal } from "../utils/data/personal";

export default function ProfileOverview() {
  return (
    <div id="about" className="w-full pt-20 md:translate-y-20">
      <div className="bg-white container-default shadow-2xl rounded-md">
        <div className="p-6 sm:p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-6 sm:gap-10 md:gap-16">
          <section className="md:w-1/2">
            <Image
              src="/img/Touhid-Rahman-02.png"
              alt="Touhid Rahman — Fullstack Developer"
              width={300}
              height={400}
            />
          </section>

          <section className="md:w-1/2">
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold">
              I am a Professional Fullstack Developer
            </h2>
            <p className="py-4 text-xs xl:text-sm text-gray-700 leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-xs xl:text-sm text-gray-600 leading-relaxed">
              {personal.longBio}
            </p>

            <div className="flex py-4 gap-4 flex-wrap">
              <Link
                href="/projects"
                className="px-4 py-2 bg-secondary rounded-sm text-white text-xs xl:text-sm font-medium hover:bg-secondary/80 duration-300"
              >
                My Projects
              </Link>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center justify-center gap-1 text-xs xl:text-sm text-secondary border border-secondary rounded-sm px-4 py-2 font-medium hover:bg-secondary hover:text-white duration-300"
              >
                <FiDownload className="text-sm" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
