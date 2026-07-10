"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const bottom = top + (section as HTMLElement).offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <Link href="#home" className="text-2xl font-black tracking-wide">
          <span className="text-white">Md </span>
          <span className="text-cyan-400">Sakib</span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative transition ${
                active === item.href.replace("#", "")
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}

              {active === item.href.replace("#", "") && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-[#050816]/95 border-t border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b border-white/5 hover:bg-cyan-500/10"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
