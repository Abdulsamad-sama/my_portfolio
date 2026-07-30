"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function ContactContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hamzatabdulsamad34@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="py-24 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 font-chillax text-[var(--text-color)]">Contact.</h1>
            <p className="text-[var(--text-color)]/60 text-xl md:text-2xl font-light">Have a project in mind? Let's work together.</p>
          </div>

          <form className="flex flex-col gap-8 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide uppercase text-[var(--text-color)]/70">First Name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[var(--border-color)] py-3 px-2 outline-none focus:border-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)]/20"
                  placeholder="John"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide uppercase text-[var(--text-color)]/70">Last Name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[var(--border-color)] py-3 px-2 outline-none focus:border-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)]/20"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wide uppercase text-[var(--text-color)]/70">Email</label>
              <input
                type="email"
                className="bg-transparent border-b border-[var(--border-color)] py-3 px-2 outline-none focus:border-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)]/20"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wide uppercase text-[var(--text-color)]/70">Subject</label>
              <input
                type="text"
                className="bg-transparent border-b border-[var(--border-color)] py-3 px-2 outline-none focus:border-[var(--text-color)] transition-colors placeholder:text-[var(--text-color)]/20"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wide uppercase text-[var(--text-color)]/70">Message</label>
              <textarea
                className="bg-transparent border-b border-[var(--border-color)] py-3 px-2 outline-none focus:border-[var(--text-color)] transition-colors resize-none h-32 placeholder:text-[var(--text-color)]/20 text-lg"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 px-8 py-5 bg-[var(--text-color)] text-[var(--bg-color)] rounded-[18px] font-semibold text-lg hover:scale-[1.02] transition-transform w-full md:w-auto self-end"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors text-sm font-medium"
            >
              <FiMail size={16} />
              {copied ? "Copied!" : "hamzatabdulsamad34@gmail.com"}
              <FiCopy size={14} className="ml-2 text-[var(--text-color)]/40" />
            </button>
            <a href="https://github.com/Abdulsamad-sama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors text-sm font-medium">
              <FiGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hamzat-abdulsamad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors text-sm font-medium">
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://x.com/tomio_sama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors text-sm font-medium">
              <FaXTwitter size={16} /> X
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
