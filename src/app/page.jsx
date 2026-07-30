"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiTool,
  FiBox,
  FiGlobe,
  FiTerminal,
  FiCpu
} from "react-icons/fi";

import { featuredProjects } from "@/data/projects";

const techStack = {
  "Frontend": [
    { name: "React", icon: FiBox },
    { name: "Next.js", icon: FiGlobe },
    { name: "TypeScript", icon: FiCode },
    { name: "Tailwind CSS", icon: FiCode }
  ],
  "Mobile & Desktop": [
    { name: "React Native", icon: FiSmartphone },
    { name: "Expo", icon: FiSmartphone },
    { name: "Electron", icon: FiTerminal }
  ],
  "Backend": [
    { name: "Node.js", icon: FiTerminal },
    { name: "Python", icon: FiTerminal },
    { name: "Socket.io", icon: FiGlobe },
    { name: "MongoDB", icon: FiDatabase }
  ],
  "Tools & AI": [
    { name: "Git & GitHub", icon: FiTool },
    { name: "Vite", icon: FiTool },
    { name: "OpenAI", icon: FiCpu },
    { name: "Web3 (Solana/Eth)", icon: FiDatabase }
  ]
};

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? featuredProjects
    : featuredProjects.filter(p => Array.isArray(p.type) ? p.type.includes(filter) : p.type === filter);

  return (
    <>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center gap-6 mt-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl flex flex-col items-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight font-chillax text-[var(--text-color)]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 2.2,
                },
              },
            }}
          >
            <span>
              {"Hi, I'm ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { type: "spring", stiffness: 100, damping: 10 }
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre", }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block md:inline">
              {"Abdulsamad.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { type: "spring", stiffness: 100, damping: 10 }
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre", }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 text-[var(--text-color)]/80 font-chillax"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            Full-Stack Developer <span className="text-[var(--text-color)]/30 mx-2">·</span> AI Builder
          </motion.h2>
          <p className="text-xl md:text-2xl text-[var(--text-color)]/70 leading-relaxed font-light mb-10 max-w-3xl">
            I'm a computer engineering student currently building full-stack products at the intersection of AI and human interaction — from webcam-based skin analysis tools to AI image generation pipelines. I work mainly in Next.js, TypeScript, and FastAPI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="mailto:hamzatabdulsamad34@gmail.com"
              className="px-10 py-5 bg-[var(--text-color)] text-[var(--bg-color)] rounded-[18px] font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-black/5 dark:shadow-white/5"
            >
              Get In Touch
            </Link>

          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-extrabold mb-8 font-chillax text-[var(--text-color)]">All Projects.</h2>
          <div className="flex items-center gap-2 p-1 bg-[var(--border-color)]/30 rounded-full border border-[var(--border-color)]">
            {["All", "Web", "Desktop", "AI-Powered"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-[var(--card-bg)] text-[var(--text-color)] shadow-sm' : 'text-[var(--text-color)]/60 hover:text-[var(--text-color)]'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* We will render full width cards and grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, idx) => {
              const isFullWidth = idx % 3 === 0;
              if (isFullWidth) {
                return (
                  <Link href={`/projects/${project.slug}`} key={project.name} className="col-span-1 md:col-span-2 group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row bg-[var(--card-bg)] rounded-[32px] p-4 md:p-8 border border-[var(--border-color)] transition-all hover:border-[var(--border-color)]/80 hover:scale-[1.01] gap-8 items-center cursor-pointer shadow-sm dark:shadow-none"
                    >
                      <div className="w-full md:w-3/5 h-64 md:h-96 rounded-2xl overflow-hidden bg-[var(--border-color)]/30 relative flex items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-contain rounded-xl shadow-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="w-full md:w-2/5 flex flex-col justify-center p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs tracking-widest uppercase font-bold text-[var(--text-color)]/50">{Array.isArray(project.type) ? project.type.join(" • ") : project.type}</span>
                        </div>
                        <h3 className="text-4xl font-extrabold mb-4 font-chillax text-[var(--text-color)]">{project.name}</h3>
                        <p className="text-[var(--text-color)]/70 mb-8 text-lg leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-[var(--border-color)] text-[var(--text-color)]/70 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              }

              return (
                <Link href={`/projects/${project.slug}`} key={project.name} className="col-span-1 group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col h-full bg-[var(--card-bg)] rounded-[32px] p-6 border border-[var(--border-color)] transition-all hover:border-[var(--border-color)]/80 hover:scale-[1.02] cursor-pointer shadow-sm dark:shadow-none"
                  >
                    <div className="w-full h-64 rounded-2xl overflow-hidden bg-[var(--border-color)]/30 mb-8 relative flex items-center justify-center p-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain rounded-xl shadow-md transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow px-2">
                      <h3 className="text-3xl font-extrabold mb-3 font-chillax text-[var(--text-color)]">{project.name}</h3>
                      <p className="text-[var(--text-color)]/70 mb-8 flex-grow leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-[var(--border-color)] text-[var(--text-color)]/70 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <h2 className="text-5xl font-extrabold mb-16 text-center font-chillax text-[var(--text-color)]">Tech Stack.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="flex flex-col gap-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--text-color)]/50 ml-2 font-chillax">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl hover:bg-[var(--border-color)]/30 transition-colors shadow-sm dark:shadow-none"
                  >
                    <tech.icon size={32} className="text-[var(--text-color)]/70" strokeWidth={1.5} />
                    <span className="text-sm font-semibold text-center text-[var(--text-color)]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
