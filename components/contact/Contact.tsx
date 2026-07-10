"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "mdsakib124202@gmail.com",
    link: "mailto:mdsakib124202@gmail.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Sakib137",
    link: "https://github.com/Sakib137",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+880 1780-940804",
    link: "https://wa.me/8801780940804",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Dhaka, Bangladesh",
    link: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">Contact</p>

        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Let's
          <span className="text-cyan-400"> Connect</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-16">
          I'm always open to discussing new opportunities, freelance work,
          collaborations, or innovative software projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.25)] transition-all duration-300"
              >
                <Icon
                  className={`text-4xl mb-6 ${
                    item.title === "WhatsApp"
                      ? "text-green-500"
                      : "text-cyan-400"
                  }`}
                />

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                <p className="text-gray-400 break-all">{item.value}</p>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
