"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 uppercase tracking-[6px] mb-4">About Me</p>

        <h2 className="text-5xl md:text-6xl font-black mb-10">
          Turning Ideas Into
          <span className="text-cyan-400"> Digital Reality</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-6 text-gray-300 leading-8 text-lg">
            <p>
              I'm{" "}
              <span className="text-white font-semibold">
                Md Sakib Al Hasan
              </span>
              , a passionate Flutter Developer and Full Stack Developer from
              Bangladesh.
            </p>

            <p>
              I enjoy building modern mobile applications, scalable web
              platforms, and beautiful UI/UX experiences with clean,
              maintainable code.
            </p>

            <p>
              My goal is to create software that is fast, elegant and solves
              real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-4xl font-bold text-cyan-400">25+</h3>
              <p className="text-gray-400 mt-2">Projects Completed</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 mt-2">Dedication</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
