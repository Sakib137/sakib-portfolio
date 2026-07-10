"use client";

import { Button } from "@/components/ui/Button";
import { Download, ArrowRight } from "lucide-react";

import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="mt-10">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-5 md:justify-start">
        {/* Hire Me */}
        <a href="#contact">
          <Button className="group h-14 rounded-2xl bg-cyan-500 px-8 text-base font-semibold text-black shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-400/50">
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>

        {/* Download CV */}
        <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="group h-14 rounded-2xl border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            Download CV
          </Button>
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
        <a
          href="https://github.com/Sakib137"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-3xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/md-sakib-047184312/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-3xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/sa.k.ib.543674/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-3xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
        >
          <FaFacebook />
        </a>

        <a
          href="https://wa.me/8801780940804"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-3xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
