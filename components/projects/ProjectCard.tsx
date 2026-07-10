"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,.15)] transition-all duration-500"
    >
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

        <p className="text-gray-400 leading-7 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:border-cyan-400 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400 transition"
          >
            <FiExternalLink className="text-lg" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
