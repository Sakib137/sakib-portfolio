import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";

import Skills from "@/components/skills/Skills";

import Projects from "@/components/projects/Projects";

import Experience from "@/components/experience/Experience";

import Education from "@/components/education/Education";

import Contact from "@/components/contact/Contact";

import Background from "@/components/effects/Background";
import Grid from "@/components/effects/Grid";
import Spotlight from "@/components/effects/Spotlight";
import Particles from "@/components/effects/Particles";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <Background />
      <Grid />
      <Spotlight />
      <Particles />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Footer />

      <Stats />
    </main>
  );
}
