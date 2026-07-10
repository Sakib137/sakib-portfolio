"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black">
              Md <span className="text-cyan-400">Sakib Al Hasan</span>
            </h2>

            <p className="mt-3 text-gray-400 max-w-md leading-7">
              Flutter Developer • Full Stack Developer • Software Engineer
            </p>

            <p className="mt-4 text-gray-500">
              Building modern mobile applications, websites and scalable
              software solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Sakib137"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-sakib-047184312/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/sa.k.ib.543674/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Md Sakib Al Hasan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            <HiOutlineArrowUp className="text-lg" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
