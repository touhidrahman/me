import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function WorkTogether() {
  return (
    <div className="py-20 bg-dark">
      <div className="container-default">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center font-inter">
          Do you have a Project Idea?
        </h2>
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center font-inter pt-2">
          Let&apos;s discuss your project!
        </h3>
        <p className="py-8 text-gray-300 text-center">
          Share your vision — I&apos;ll build it with cutting-edge tech and clean code.
        </p>

        <div className="flex items-center justify-center">
          <Link
            href="/#contact"
            className="px-6 py-3 bg-secondary rounded-sm text-white hover:bg-primary hover:text-secondary duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-dark inline-flex items-center gap-2 font-medium"
          >
            Let&apos;s work Together <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
