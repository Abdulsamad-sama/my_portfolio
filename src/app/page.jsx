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
    { name: "Tailwind CSS", icon: FiCode },
    { name: "HTML/CSS", icon: FiCode }
  ],
  "Mobile": [
    { name: "React Native", icon: FiSmartphone },
    { name: "Expo", icon: FiSmartphone }
  ],
  "Backend": [
    { name: "Node.js", icon: FiTerminal },
    { name: "Express", icon: FiTerminal },
    { name: "MongoDB", icon: FiDatabase },
    { name: "Python", icon: FiTerminal }
  ],
  "Tools & Others": [
    { name: "Git & GitHub", icon: FiTool },
    { name: "Figma", icon: FiTool },
    { name: "Agentic AI", icon: FiCpu },
    { name: "MATLAB", icon: FiBox }
  ]
};

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? featuredProjects
    : featuredProjects.filter(p => p.type === filter);

  return (
    <>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center gap-6 mt-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }} // Wait for preloader
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-chillax)" }}>
            Hi, I&apos;m Abdulsamad.
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-color)]/70 leading-relaxed font-light mb-10 max-w-3xl">
            I build and ship full-stack web and software applications using modern technologies.
            Specializing in creating exceptional digital experiences, I combine deep technical
            skills with a strong focus on collaboration and user-centered design.
          </p>

          <Link
            href="mailto:contact@abdulsamad.com"
            className="px-10 py-5 bg-[var(--text-color)] text-[var(--bg-color)] rounded-[18px] font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-black/5 dark:shadow-white/5"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-extrabold mb-8" style={{ fontFamily: "var(--font-chillax)" }}>All Projects.</h2>
          <div className="flex items-center gap-2 p-1 bg-[var(--border-color)] rounded-full">
            {["All", "Web", "Mobile"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-[var(--card-bg)] shadow-sm' : 'text-[var(--text-color)]/60 hover:text-[var(--text-color)]'}`}
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
              if (project.fullWidth) {
                return (
                  <Link href={`/projects/${project.slug}`} key={project.name} className="col-span-1 md:col-span-2 group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row bg-[var(--card-bg)] rounded-[32px] p-4 md:p-8 border border-[var(--border-color)] transition-all hover:border-[var(--text-color)]/30 hover:scale-[1.01] gap-8 items-center cursor-pointer"
                    >
                      <div className="w-full md:w-3/5 h-64 md:h-96 rounded-2xl overflow-hidden bg-[var(--border-color)]/30 relative flex items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-contain rounded-xl shadow-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="w-full md:w-2/5 flex flex-col justify-center p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs tracking-widest uppercase font-bold text-[var(--text-color)]/50">{project.type} APP</span>
                        </div>
                        <h3 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-chillax)" }}>{project.name}</h3>
                        <p className="text-[var(--text-color)]/70 mb-8 text-lg leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-[var(--border-color)] rounded-full">
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
                    className="flex flex-col h-full bg-[var(--card-bg)] rounded-[32px] p-6 border border-[var(--border-color)] transition-all hover:border-[var(--text-color)]/30 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="w-full h-64 rounded-2xl overflow-hidden bg-[var(--border-color)]/30 mb-8 relative flex items-center justify-center p-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain rounded-xl shadow-md transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow px-2">
                      <h3 className="text-3xl font-extrabold mb-3" style={{ fontFamily: "var(--font-chillax)" }}>{project.name}</h3>
                      <p className="text-[var(--text-color)]/70 mb-8 flex-grow leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-[var(--border-color)] rounded-full">
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
        <h2 className="text-5xl font-extrabold mb-16 text-center" style={{ fontFamily: "var(--font-chillax)" }}>Tech Stack.</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="flex flex-col gap-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--text-color)]/50 ml-2" style={{ fontFamily: "var(--font-chillax)" }}>{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl hover:bg-[var(--text-color)]/5 transition-colors"
                  >
                    <tech.icon size={32} className="text-[var(--text-color)]/60" strokeWidth={1.5} />
                    <span className="text-sm font-semibold text-center">{tech.name}</span>
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
