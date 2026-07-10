"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">Portfolio</p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Featured
          <span className="text-cyan-400"> Projects</span>
        </h2>

        <p className="max-w-2xl text-lg text-gray-400 mb-20">
          A collection of mobile applications, machine learning systems,
          full-stack solutions and modern software engineered with performance,
          scalability and user experience in mind.
        </p>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
