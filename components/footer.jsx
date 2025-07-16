import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-40 pb-16 bg-footer w-full">
      <div className="container-default">
        <section className="px-0 sm:px-20 sm:flex items-end justify-between text-white">
          <div className="flex items-center gap-2 justify-center">
            <Link
              href={"/"}
              className="rounded-full text-xl bg-black text-white font-bold px-1.5"
            >
              A
            </Link>
            <h3 className="text-xl font-semibold">Touhid Rahman</h3>
          </div>

          <div className="flex items-center gap-6 text-sm text-center justify-center py-8 sm:py-0">
            <Link href="/blog" className=" hover:text-secondary duration-300">
              Blog
            </Link>
            <Link
              href="/#contact"
              className=" hover:text-secondary duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm">Copyright © 2025 Touhid Rahman.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
