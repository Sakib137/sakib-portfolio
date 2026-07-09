"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/project1.jpg",
    description:
      "Modern portfolio built with Next.js, TypeScript and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Flutter E-Commerce App",
    image: "/projects/project2.jpg",
    description: "Complete mobile shopping application with Firebase backend.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "#",
    live: "#",
  },
  {
    title: "Machine Learning Project",
    image: "/projects/project3.jpg",
    description: "Prediction model developed using Python and Scikit-Learn.",
    tech: ["Python", "ML", "Pandas"],
    github: "#",
    live: "#",
  },
  {
    title: "Management System",
    image: "/projects/project4.jpg",
    description:
      "Responsive management dashboard with authentication and database.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "#",
    live: "#",
  },
];

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

        <p className="max-w-2xl text-lg text-gray-400 mb-16">
          Some of my recent work built using Flutter, Next.js, Firebase, Machine
          Learning and modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="px-5 py-2 rounded-xl border border-white/20 hover:border-cyan-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
