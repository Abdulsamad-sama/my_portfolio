"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { featuredProjects } from "@/data/projects";

const Microlink = dynamic(() => import("@microlink/react"), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-[var(--border-color)]/30 rounded-2xl" />
});

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 font-chillax text-[var(--text-color)]">
          All Projects.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-color)]/70 leading-relaxed font-light">
          A collection of my work, ranging from client projects to personal experiments and open source contributions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: (idx % 2) * 0.1 }}
            className="group flex flex-col bg-[var(--card-bg)] rounded-3xl p-6 md:p-8 border border-[var(--border-color)] hover:border-[var(--border-color)]/80 transition-all hover:shadow-xl hover:-translate-y-1 shadow-sm dark:shadow-none"
          >
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-[var(--border-color)]/30">
              <Microlink
                url={project.url}
                size="large"
                media="screenshot"
                className="w-full h-full object-cover border-0"
                style={{ width: "100%", height: "100%", borderRadius: "16px", border: "none" }}
              />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">{project.name}</h3>
            <p className="text-[var(--text-color)]/70 mb-8 flex-grow leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs uppercase tracking-wider font-semibold px-4 py-2 bg-[var(--text-color)]/5 border border-[var(--border-color)] text-[var(--text-color)]/70 rounded-full">
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

