"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2025 - Present",
    title: "Flutter Developer",
    company: "Freelance",
    description:
      "Developing modern Flutter applications with responsive UI, Firebase integration, REST APIs and clean architecture.",
  },
  {
    year: "2024 - Present",
    title: "Full Stack Developer",
    company: "Personal Projects",
    description:
      "Building responsive websites using Next.js, Tailwind CSS, PHP, MySQL and modern frontend technologies.",
  },
  {
    year: "2024",
    title: "Machine Learning",
    company: "Research & Practice",
    description:
      "Developed prediction models using Python, Pandas and Scikit-Learn while exploring AI and data science.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
          Experience
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-16">
          Professional
          <span className="text-cyan-400"> Journey</span>
        </h2>

        <div className="relative border-l border-cyan-500/30 ml-5">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="mb-14 ml-10 relative"
            >
              <span className="absolute -left-[57px] flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-black shadow-lg">
                <Briefcase size={18} />
              </span>

              <p className="text-cyan-400 font-semibold mb-2">{item.year}</p>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <h4 className="text-gray-400 mb-4">{item.company}</h4>

              <p className="text-gray-400 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
