"use client";

import { motion } from "framer-motion";
import Microlink from "@microlink/react";

const allProjects = [
  {
    name: "MarkItDown",
    url: "https://github.com/Abdulsamad-sama/markitdown_website",
    desc: "A stunning, modern landing page for MarkItDown Desktop, a local privacy-first file-to-Markdown converter. Features a pure black cursor-inspired minimal design.",
    tags: ["React", "Vite", "Tailwind"]
  },
  {
    name: "Pumpmas",
    url: "https://leaves-rake-39990396.figma.site/",
    desc: "Decentralized Finance (DeFi) Web App built for a memecoin on the Ethereum (ETH) blockchain. This project highlights proficiency in presenting tokenomics, community links, and roadmap information.",
    tags: ["React", "Web3", "Tailwind"]
  },
  {
    name: "PeerBeam",
    url: "https://peer-beam-v01.vercel.app/",
    desc: "A modern, real-time file transfer web application designed to facilitate quick and secure sharing of files between users.",
    tags: ["Next.js", "WebSockets", "Node.js"]
  },
  {
    name: "Codeham Charity",
    url: "https://code-ham-charity.vercel.app/",
    desc: "A comprehensive, feature-rich website developed for CodeHam Charity, a non-governmental organization focused on facilitating donations, awareness, and community engagement.",
    tags: ["React", "Tailwind CSS"]
  },
  {
    name: "Gladtidings",
    url: "https://gladtidingsclone.vercel.app/",
    desc: "A landing page clone demonstrating strong front-end replication and design skills, specifically modeling a commercial website focused on selling data services.",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "The Tomio",
    url: "https://tomiotoken.netlify.app/",
    desc: "Built for a memecoin on the Solana (SOL) blockchain. Demonstrates adaptability to different blockchain ecosystems and presenting key token data.",
    tags: ["Solana", "React"]
  },
  {
    name: "MSPAINTIFY",
    url: "https://mspaintify.vercel.app/",
    desc: "A flashy crypto token landing page with an integrated AI image generator built with Next.js, Tailwind CSS, and OpenAI.",
    tags: ["Next.js", "OpenAI", "Tailwind"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ fontFamily: "var(--font-chillax)" }}>
          All Projects.
        </h1>
        <p className="text-xl text-[var(--text-color)]/70">
          A collection of my work, ranging from client projects to personal experiments and open source contributions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {allProjects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: (idx % 2) * 0.1 }}
            className="group flex flex-col bg-[var(--card-bg)] rounded-3xl p-6 md:p-8 border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
              <Microlink
                url={project.url}
                size="large"
                media="screenshot"
                className="w-full h-full object-cover border-0"
                style={{ width: "100%", height: "100%", borderRadius: "16px", border: "none" }}
              />
            </div>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-chillax)" }}>{project.name}</h3>
            <p className="text-[var(--text-color)]/70 mb-8 flex-grow leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 bg-[var(--text-color)]/5 border border-[var(--border-color)] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
