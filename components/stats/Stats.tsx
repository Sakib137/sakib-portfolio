"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 25,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 10,
    suffix: "+",
    title: "Technologies",
  },
  {
    number: 3,
    suffix: "+",
    title: "Years Learning",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-wrap gap-10 pt-6">
      {stats.map((item) => (
        <div key={item.title}>
          <h2 className="text-4xl font-bold text-cyan-400">
            {inView && <CountUp end={item.number} duration={2} />}
            {item.suffix}
          </h2>

          <p className="text-gray-400 mt-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
