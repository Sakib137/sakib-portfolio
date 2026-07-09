"use client";

import Typewriter from "typewriter-effect";

export default function HeroTypewriter() {
  return (
    <div className="text-3xl md:text-4xl font-bold text-cyan-400 h-12">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          deleteSpeed: 35,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Flutter Developer")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Full Stack Developer")
            .pauseFor(1500)
            .deleteAll()
            .typeString("UI / UX Designer")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Machine Learning Enthusiast")
            .pauseFor(1500)
            .start();
        }}
      />
    </div>
  );
}
