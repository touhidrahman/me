import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { personal } from "../utils/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-40 pb-16 bg-footer w-full" role="contentinfo">
      <div className="container-default">
        <section className="px-0 sm:px-20 flex flex-col sm:flex-row items-center sm:items-end justify-between text-white gap-8 sm:gap-0">
          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className="rounded-full text-xl bg-black text-white font-bold px-1.5"
              aria-label="Go to homepage"
            >
              T
            </Link>
            <span className="text-xl font-semibold">{personal.name}</span>
          </div>

          <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm text-center justify-center">
            <Link href="/#about" className="hover:text-secondary duration-300">
              About
            </Link>
            <Link href="/projects" className="hover:text-secondary duration-300">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-secondary duration-300">
              Experience
            </Link>
            <Link href="/blog" className="hover:text-secondary duration-300">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-secondary duration-300">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary duration-200 text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary duration-200 text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              {personal.social.facebook && (
                <Link
                  href={personal.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary duration-200 text-xl"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
              )}
            </div>
            <p className="text-sm text-gray-400">
              Copyright &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
