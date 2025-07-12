"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleResume = () => {
    window.open("/files/Touhid-Rahman.pdf", "_blank");
  };

  return (
    <header className="container-default flex items-center justify-between py-4 font-inter">
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="rounded-full bg-black text-white font-bold px-1.5"
        >
          A
        </Link>
        <h3 className="text-lg font-semibold">Touhid Rahman</h3>
      </div>
      <nav className="">
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/blog" className=" hover:underline duration-300">
            Blog
          </Link>
          <button
            onClick={handleResume}
            className="hover:underline cursor-pointer duration-300"
          >
            Resume
          </button>

          <Link
            href="#"
            className="px-4 py-2 bg-secondary rounded-sm text-white hover:bg-primary hover:text-secondary duration-300"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden block pr-2 text-black font-bold text-2xl"
        >
          <HiMenuAlt3 />
        </button>

        {isOpen && (
          <div className="fixed top-0 right-0 w-4/5 h-full bg-light p-4 md:hidden z-50 backdrop-blur-lg">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black text-2xl"
            >
              <IoMdCloseCircleOutline />
            </button>
            <div className="flex flex-col px-8 items-start space-y-4 mt-10 text-sm">
              <Link href="/blog" className=" hover:underline">
                Blog
              </Link>
              <button
                onClick={handleResume}
                className="hover:underline cursor-pointer"
              >
                Resume
              </button>

              <Link
                href="#"
                className="px-4 py-2 bg-secondary rounded-md text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-0"
            style={{ width: "20%" }}
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
}
