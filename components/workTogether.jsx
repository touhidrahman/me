import React from "react";
import PrimaryButton from "./global/primaryButton";
import { FaArrowRight } from "react-icons/fa";

export default function WorkTogether() {
  return (
    <div className="py-20 bg-dark ">
      <div className="container-default">
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center font-inter">
          Do you have Project Idia?
        </h3>
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-center font-inter pt-2">
          Let's discuss your project!
        </h3>
        <p className="py-8 text-gray-300 text-center">
          Share your vision—I’ll build it with cutting-edge tech and clean code.
        </p>

        <div className="flex items-center justify-center">
          <PrimaryButton>
            <div className="flex items-center gap-2 sm:gap-4">
              Let’s work Together <FaArrowRight />
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
