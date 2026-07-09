"use client";

import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start">
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
  );
}
