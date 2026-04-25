"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PrimaryButton from "./primaryButton";
import { personal } from "../../utils/data/personal";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="container-default flex items-center justify-between py-4 font-inter">
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="rounded-full bg-black text-white font-bold px-1.5"
          aria-label={`${personal.name} — Go to homepage`}
        >
          T
        </Link>
        <Link
          href="/"
          className="text-lg font-semibold hover:opacity-80 duration-200"
        >
          {personal.name}
        </Link>
      </div>
      <nav aria-label="Main navigation">
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-secondary duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personal.social.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary duration-300"
          >
            Blog
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary duration-300"
          >
            Resume
          </a>
          <Link href="/#contact">
            <PrimaryButton>Contact</PrimaryButton>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden block pr-2 text-black font-bold text-2xl"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <HiMenuAlt3 />
        </button>

        {isOpen && (
          <div className="fixed top-0 right-0 w-4/5 h-full bg-light p-4 lg:hidden z-50 shadow-2xl">
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-black text-2xl"
              aria-label="Close navigation menu"
            >
              <IoMdCloseCircleOutline />
            </button>
            <div className="flex flex-col px-8 items-start space-y-6 mt-16 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-secondary duration-300 text-base"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={personal.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary duration-300 text-base"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary duration-300 text-base"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-secondary rounded-md text-white"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}
