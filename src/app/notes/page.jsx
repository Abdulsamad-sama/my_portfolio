"use client";

import { motion } from "framer-motion";

export default function Notes() {
  return (
    <>
      <section className="py-24 max-w-4xl mx-auto px-4 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ fontFamily: "var(--font-chillax)" }}>Notes.</h1>
          <p className="text-[var(--text-color)]/60 text-xl font-light">
            Thoughts, ideas, and technical writings coming soon.
          </p>
        </motion.div>
      </section>
    </>
  );
}
