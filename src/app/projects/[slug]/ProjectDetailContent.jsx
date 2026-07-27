"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectDetailContent({ project }) {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-color)]/60 hover:text-[var(--text-color)] transition-colors text-sm font-semibold uppercase tracking-widest mb-8">
          <FiArrowLeft size={16} /> Back to Projects
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <span className="px-4 py-1.5 border border-[var(--border-color)] rounded-full text-xs uppercase tracking-widest font-bold text-[var(--text-color)]/70">
            {project.type} APP
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 font-chillax text-[var(--text-color)]">
          {project.name}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-color)]/70 leading-relaxed font-light max-w-3xl">
          {project.desc}
        </p>
      </div>

      <div className="w-full h-96 md:h-[600px] rounded-[32px] overflow-hidden bg-[var(--border-color)]/30 relative flex items-center justify-center p-8 mb-16 border border-[var(--border-color)] shadow-sm dark:shadow-none">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-contain shadow-2xl rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[var(--border-color)] pt-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-4xl font-bold mb-6 font-chillax text-[var(--text-color)]">Overview</h3>
          <p className="text-[var(--text-color)]/70 text-lg leading-relaxed mb-6">
            This project showcases a deep integration of modern web technologies to create a seamless user experience.
            It was built with a focus on performance, scalability, and responsive design, ensuring that it works flawlessly
            across all devices.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {project.versions ? (
              project.versions.map((version, idx) => (
                <Link key={idx} href={version.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full font-semibold hover:scale-105 transition-transform text-sm">
                  Visit {version.name} <FiExternalLink size={16} />
                </Link>
              ))
            ) : project.url ? (
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full font-semibold hover:scale-105 transition-transform text-sm">
                Visit Website <FiExternalLink size={16} />
              </Link>
            ) : null}

            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--text-color)] text-[var(--text-color)] rounded-full font-semibold hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all text-sm">
                <FiGithub size={18} /> GitHub Repository
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-6 tracking-wide font-chillax text-[var(--text-color)]">Technologies</h3>
          <div className="flex flex-col gap-4">
            {project.tags.map(tag => (
              <div key={tag} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--text-color)]/40"></div>
                <span className="text-lg font-medium text-[var(--text-color)]/90">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
