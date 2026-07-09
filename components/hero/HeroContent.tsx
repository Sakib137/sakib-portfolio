"use client";

import { motion } from "framer-motion";

import Typewriter from "./Typewriter";
import HeroButtons from "./HeroButtons";

import Stats from "@/components/stats/Stats";
import SocialLinks from "@/components/social/SocialLinks";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-7"
    >
      <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
        Welcome to my Portfolio
      </p>

      <h1 className="text-6xl md:text-8xl font-black leading-none">
        Md Sakib
        <br />
        Al Hasan
      </h1>

      <Typewriter />

      <p className="max-w-xl text-gray-400 leading-8 text-lg">
        Passionate Flutter Developer and Full Stack Engineer building beautiful
        mobile applications, modern websites and scalable backend solutions with
        a strong focus on performance and user experience.
      </p>

      <HeroButtons />

      <Stats />

      <SocialLinks />
    </motion.div>
  );
}
