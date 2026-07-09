import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
    </main>
  );
}
