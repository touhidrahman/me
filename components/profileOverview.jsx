"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function ProfileOverview() {
  const handleResume = () => {
    window.open("/files/Touhid-Rahman.pdf", "_blank");
  };
  return (
    <div className="w-full pt-20 md:translate-y-20">
      <div className="bg-white container-default shadow-2xl rounded-md">
        <div className="p-6 sm:p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-6 sm:gap-10 md:gap-16">
          <section className="md:w-1/2">
            <Image
              src="/img/Touhid-Rahman-02.png"
              alt="image"
              width={300}
              height={400}
            />
          </section>

          <section className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold">
              I am Professional Fullstack Web Developer
            </h3>
            <p className="py-4 text-xs xl:text-sm">
              Frontend Developer with over 7 years of experience, specialized in
              Angular v1-v19.
            </p>
            <p className="text-xs xl:text-sm">
              Expert in developing responsive web & mobile applications with a
              strong understanding of Angular architecture and building blocks
              (components, services, pipes, directives, DI & providers), state
              management, testing, and deployment.
            </p>

            <div className="flex py-4 gap-4">
              <Link
                href="#"
                className="px-4 py-2 bg-secondary rounded-sm text-white text-xs xl:text-sm font-medium"
              >
                My Projects
              </Link>

              <button
                className="cursor-pointer flex items-center justify-center gap-1 text-xs xl:text-sm text-secondary border border-secondary rounded-sm px-4 font-medium hover:bg-secondary hover:text-white duration-300"
                onClick={handleResume}
              >
                <p className="text-sm">
                  <FiDownload />
                </p>

                <p>Download CV</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
