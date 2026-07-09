"use client";

import { motion } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-black">
          <span className="text-cyan-400">S</span>akib
        </h1>

        <nav className="hidden md:flex items-center gap-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300 group"
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
