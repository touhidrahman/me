import React from "react"
import { newsItems } from "../utils/data/news"

export default function NewsSection() {
  return (
    <section id="news" className="py-16 sm:py-24 md:py-28 bg-surface">
      <div className="container-default">
        <h2 className="news-intro-reveal text-3xl md:text-4xl font-semibold font-inter text-center mb-4">
          I AM IN THE NEWS
        </h2>
        <p className="news-intro-reveal text-center text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto text-sm px-1">
          A few media highlights featuring academic and creative recognitions.
        </p>

        <div className="space-y-4 sm:space-y-5">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="news-card-reveal bg-white rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ "--news-delay": `${index * 120}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 wrap-break-word">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 shrink-0">
                  {item.source}
                </span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed wrap-break-word">
                {item.mainIdea}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm text-secondary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded-sm"
              >
                Read article
                <span className="ml-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
