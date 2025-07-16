"use client";
import React from "react";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] rounded-xl p-6 md:p-12 w-full md:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto mt-10 translate-y-16"
    >
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let’s discuss your Project
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Get in touch—I’d love to collaborate on your next big idea or answer
          any questions you may have.
        </p>

        {/* Address */}
        <div className="inline-flex p-4 rounded-md shadow-md mb-4 items-start bg-white">
          <div className="bg-secondary text-xl text-white p-2 rounded mr-4">
            <IoLocationOutline />
          </div>
          <div>
            <p className="text-xs text-gray-500">Address:</p>
            <p className="font-medium text-sm">Manchester, NH, USA</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4 pl-0 sm:pl-4 py-4">
          <div className="bg-primary p-2 rounded mr-4 text-gray-600">
            <MdOutlineMail />
          </div>
          <div>
            <p className="text-xs text-gray-500">My Email:</p>
            <p className="text-sm font-medium text-gray-800">
              hello@touhidrahman.me
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center mb-8 pl-0 sm:pl-4">
          <div className="bg-green-100 p-2 rounded mr-4 text-gray-600">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-xs text-gray-500">Call Me Now:</p>
            <p className="text-sm font-medium text-gray-800">(603) 858-8724</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center py-4">
          <Link
            href={"https://www.facebook.com/"}
            className="p-2 bg-secondary text-white text-xl rounded-md"
          >
            <FaFacebookF />
          </Link>

          <Link
            href={"https://www.github.com/"}
            className="text-secondary text-xl"
          >
            <FaGithub />
          </Link>

          <Link
            href={"https://www.linkedin.com/"}
            className="text-secondary text-xl"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href={"https://www.behance.com/"}
            className="text-secondary text-xl"
          >
            <FaBehance />
          </Link>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2">
        <p className="text-gray-400 text-sm mb-4">
          Ready to start your project? Share the details below and I’ll get back
          to you soon!
        </p>
        <form className="space-y-4 text-sm">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Budget*"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
            />
          </div>

          <textarea
            placeholder="Message*"
            rows={4}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
