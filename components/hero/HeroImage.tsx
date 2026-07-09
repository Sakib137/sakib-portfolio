"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[120px] opacity-30" />

      <Image
        src="/profile.jpg"
        alt="Md Sakib Al Hasan"
        width={450}
        height={450}
        priority
        className="
      relative
      rounded-full
      object-cover
      border-4
      border-cyan-400
      shadow-[0_0_80px_rgba(6,182,212,.45)]
      hover:scale-105
      duration-500
"
      />
    </motion.div>
  );
}
