"use client";

import { featuredProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { use } from "react";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = featuredProjects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

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
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8" style={{ fontFamily: "var(--font-chillax)" }}>
          {project.name}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-color)]/70 leading-relaxed font-light max-w-3xl">
          {project.desc}
        </p>
      </div>

      <div className="w-full h-96 md:h-[600px] rounded-[32px] overflow-hidden bg-[var(--border-color)]/30 relative flex items-center justify-center p-8 mb-16 border border-[var(--border-color)]">
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
          <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-chillax)" }}>Overview</h3>
          <p className="text-[var(--text-color)]/70 text-lg leading-relaxed mb-6">
            This project showcases a deep integration of modern web technologies to create a seamless user experience. 
            It was built with a focus on performance, scalability, and responsive design, ensuring that it works flawlessly 
            across all devices.
          </p>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full font-semibold hover:scale-105 transition-transform text-sm mt-4">
            Visit Website <FiExternalLink size={16} />
          </a>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-6 tracking-wide" style={{ fontFamily: "var(--font-chillax)" }}>Technologies</h3>
          <div className="flex flex-col gap-4">
            {project.tags.map(tag => (
              <div key={tag} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--text-color)]/40"></div>
                <span className="text-lg font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
