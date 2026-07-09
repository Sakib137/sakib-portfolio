"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const links = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Sakib137",
  },
  {
    icon: <FaLinkedin />,
    href: "#",
  },
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <MdEmail />,
    href: "mailto:mdsakib124202@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-5 pt-8">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className="text-2xl text-gray-400 hover:text-cyan-400 transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
