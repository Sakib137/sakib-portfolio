"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "Graduated 2026",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Vasha Shaheed Abdul Jabber Ansar V.D.P. School and College",
    year: "2020",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rose Garden Model School",
    year: "2018",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">Education</p>

        <h2 className="text-5xl md:text-6xl font-black mb-16">
          Academic
          <span className="text-cyan-400"> Journey</span>
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shrink-0">
                  <FaGraduationCap className="text-2xl text-black" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>

                  <p className="text-cyan-400 font-medium mb-2">
                    {item.institution}
                  </p>

                  <p className="text-gray-400">{item.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
