"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { personal } from "../utils/data/personal";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message, budget, location } = form;
    const body = `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nBudget: ${budget}\n\n${message}`;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] rounded-xl p-6 md:p-12 w-full md:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto mt-10 translate-y-16"
    >
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let&apos;s discuss your Project
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Get in touch — I&apos;d love to collaborate on your next big idea or answer
          any questions you may have.
        </p>

        {/* Address */}
        <div className="inline-flex p-4 rounded-md shadow-md mb-4 items-start bg-white">
          <div className="bg-secondary text-xl text-white p-2 rounded mr-4" aria-hidden="true">
            <IoLocationOutline />
          </div>
          <div>
            <p className="text-xs text-gray-500">Address:</p>
            <p className="font-medium text-sm">{personal.location}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4 pl-0 sm:pl-4 py-4">
          <div className="bg-primary p-2 rounded mr-4 text-gray-600" aria-hidden="true">
            <MdOutlineMail />
          </div>
          <div>
            <p className="text-xs text-gray-500">My Email:</p>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm font-medium text-gray-800 hover:text-secondary duration-200"
            >
              {personal.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center mb-8 pl-0 sm:pl-4">
          <div className="bg-green-100 p-2 rounded mr-4 text-gray-600" aria-hidden="true">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-xs text-gray-500">Call Me Now:</p>
            <a
              href={`tel:${personal.phone}`}
              className="text-sm font-medium text-gray-800 hover:text-secondary duration-200"
            >
              {personal.phone}
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center py-4">
          {personal.social.facebook && (
            <Link
              href={personal.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary text-white text-xl rounded-md hover:bg-secondary/80 duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
          )}

          <Link
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-2xl hover:text-secondary/70 duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>

          <Link
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-xl hover:text-secondary/70 duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </Link>

          {personal.social.behance && (
            <Link
              href={personal.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-xl hover:text-secondary/70 duration-200"
              aria-label="Behance"
            >
              <FaBehance />
            </Link>
          )}
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2">
        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="text-5xl text-secondary mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
            <p className="text-gray-500 text-sm">
              Your email client should have opened. I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your project? Share the details below and I&apos;ll get back
              to you soon!
            </p>
            <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent"
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-secondary py-2 bg-transparent resize-none"
              />

              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-secondary/80 duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          </>
        )}
      </div>
    </div>
  );
}
