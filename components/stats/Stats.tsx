"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "3+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Passion",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.2)] transition-all"
          >
            <h2 className="text-5xl font-black text-cyan-400">{item.number}</h2>

            <p className="mt-3 text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
