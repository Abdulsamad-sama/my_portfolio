"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiFile } from "react-icons/fi";

const principles = [
  { id: "01", title: "Make it", desc: "Bringing ideas to life through robust and scalable code, ensuring every product is built with the future in mind." },
  { id: "02", title: "Collaborate", desc: "Working closely with cross-functional teams to align technical solutions with business goals and user needs." },
  { id: "03", title: "Build Performant Code", desc: "Prioritizing speed, efficiency, and optimization to deliver seamless user experiences across all devices." },
  { id: "04", title: "Maintain Quality & Scale", desc: "Implementing best practices, thorough testing, and clean architecture to ensure long-term maintainability." },
];

export default function AboutContent() {
  return (
    <>

      <section className="py-24 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h1 className="text-3xl md:text-6xl font-extrabold mb-16 text-center font-chillax text-[var(--text-color)]">
            I'm Abdulsamad Hamzat
          </h1>

          {/* Profile Image + Bio */}
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-t-[70%] overflow-hidden border border-[var(--border-color)] shrink-0 shadow-sm dark:shadow-none">
              <Image
                src="/abdulsamad.JPG"
                alt="Abdulsamad Hamzat"
                width={320}
                height={320}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>

            <div>
              <div className="flex flex-col gap-6 text-[var(--text-color)]/80 text-lg md:text-lg leading-relaxed font-light">
                <h2 className="text-xl font-bold text-wrap font-chillax text-[var(--text-color)]">a passionate Full-Stack Developer with a proven track record in building
                  innovative and reliable software solutions.</h2>
                <p>
                  Over the years, I have honed my skills across the stack,
                  specializing in React, Next.js, Node.js, and Python.
                </p>
                <p>
                  My journey began with a curiosity for how things work on the web, which evolved into a career
                  focused on creating high-performance applications. I thrive in dynamic environments where I can
                  tackle complex technical challenges and collaborate with talented individuals.
                </p>

              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                <Link
                  href="mailto:hamzatabdulsamad34@gmail.com"
                  className="  px-6 py-2 bg-[var(--text-color)] text-[var(--bg-color)] rounded-[18px] font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-black/5 dark:shadow-white/5"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/Abdulsamad_Hamzat_CV.pdf"
                  download
                  className="px-6 py-2 border border-[var(--border-color)] text-[var(--text-color)] rounded-[18px] font-semibold text-lg hover:scale-105 transition-transform hover:bg-[var(--text-color)]/5"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {principles.map((p, i) => (
              <div key={p.id} className="flex flex-col border-t border-[var(--border-color)] pt-6">
                <span className="text-5xl font-extrabold text-[var(--text-color)]/40 mb-4">{p.id}</span>
                <h3 className="text-4xl font-bold mb-4 font-chillax text-[var(--text-color)]">{p.title}</h3>
                <p className="text-[var(--text-color)]/70 text-lg leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section >
    </>
  );
}
