"use client";

import { motion } from "framer-motion";

const principles = [
  { id: "01", title: "Make it", desc: "Bringing ideas to life through robust and scalable code, ensuring every product is built with the future in mind." },
  { id: "02", title: "Collaborate", desc: "Working closely with cross-functional teams to align technical solutions with business goals and user needs." },
  { id: "03", title: "Build Performant Code", desc: "Prioritizing speed, efficiency, and optimization to deliver seamless user experiences across all devices." },
  { id: "04", title: "Maintain Quality & Scale", desc: "Implementing best practices, thorough testing, and clean architecture to ensure long-term maintainability." },
];

export default function About() {
  return (
    <>
      
      <section className="py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-16 text-center" style={{ fontFamily: "var(--font-chillax)" }}>
            About.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {principles.map((p, i) => (
              <div key={p.id} className="flex flex-col border-t border-[var(--border-color)] pt-6">
                <span className="text-xl font-medium text-[var(--text-color)]/40 mb-4">{p.id}</span>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-chillax)" }}>{p.title}</h3>
                <p className="text-[var(--text-color)]/70 text-lg leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto border-t border-[var(--border-color)] pt-16">
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-chillax)" }}>Who I am</h2>
            <div className="flex flex-col gap-6 text-[var(--text-color)]/80 text-lg leading-relaxed font-light">
              <p>
                I am Abdulsamad Hamzat, a passionate Full-Stack Developer with a proven track record in building 
                innovative and reliable software solutions. Over the years, I have honed my skills across the stack, 
                specializing in React, Next.js, Node.js, and Python.
              </p>
              <p>
                My journey began with a curiosity for how things work on the web, which evolved into a career 
                focused on creating high-performance applications. I thrive in dynamic environments where I can 
                tackle complex technical challenges and collaborate with talented individuals.
              </p>
              <p>
                Whether it's architecting a robust backend database, crafting an intuitive mobile interface in 
                React Native, or integrating complex smart contracts, my goal is always to deliver software 
                that works seamlessly and scales gracefully.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
