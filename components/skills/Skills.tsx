"use client";

import { motion } from "framer-motion";

import {
  SiFlutter,
  SiDart,
  SiSwift,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiLinux,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaDatabase } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Swift", icon: SiSwift },
  { name: "SwiftUI", icon: BsPhone },
  { name: "Python", icon: SiPython },
  { name: "Machine Learning", icon: FaDatabase },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Firebase", icon: SiFirebase },
  { name: "SQL", icon: FaDatabase },
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: SiPhp },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "REST API", icon: MdApi },
  { name: "Figma", icon: SiFigma },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">My Skills</p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Technologies
          <span className="text-cyan-400"> & Tools</span>
        </h2>

        <p className="max-w-2xl text-lg text-gray-400 mb-16">
          I enjoy building modern applications using mobile, web, backend,
          databases, and machine learning technologies. I'm always learning new
          tools to improve my development skills.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,.2)]"
              >
                <Icon className="text-4xl text-cyan-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

                <h3 className="text-sm font-semibold text-center">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
