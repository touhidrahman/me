import React from "react";

import Marquee from "react-fast-marquee";
import { FaAngular } from "react-icons/fa";
import { SiNgrx } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

export default function DevelopmentTools() {
  return (
    <>
      <div className="bg-background py-20">
        <div className="">
          <Marquee autoFill={true}>
            <div className="flex gap-12 sm:gap-32 items-center justify-center text-black text-2xl sm:text-5xl pr-12 sm:pr-32 py-2">
              <div className="text-xl sm:text-3xl text-black">
                <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase">
                  Mobile
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <FaAngular />
                <h4>Angular</h4>
              </div>

              <div className="flex gap-2 items-center">
                <SiNgrx />
                <h4>NGRX</h4>
              </div>

              <div className="flex gap-2 items-center">
                <SiMysql />
                <h4>MySQL</h4>
              </div>
              <div className="flex gap-2 items-center">
                <RiTailwindCssFill />
                <h4>TailwindCss</h4>
              </div>
            </div>
          </Marquee>
          <Marquee direction="right" className="pt-20" autoFill={true}>
            <div className="flex gap-12 sm:gap-32 items-center justify-center text-black text-2xl sm:text-5xl py-2 pr-12 sm:pr-32">
              <div className="text-xl sm:text-3xl text-black">
                <p className="bg-[#5FECC8] px-4 sm:px-6 py-1 sm:py-2 rounded-full uppercase">
                  Web
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <FaBootstrap />
                <h4>Bootstrap</h4>
              </div>
              <div className="flex gap-2 items-center">
                <GrGraphQl />
                <h4>GraphQl</h4>
              </div>
              <div className="flex gap-2 items-center">
                <FaHtml5 />
                <h4>Html</h4>
              </div>
              <div className="flex gap-2 items-center">
                <FaNode />
                <h4>NodeJs</h4>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
