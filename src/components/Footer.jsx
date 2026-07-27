"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto py-16 border-t border-[var(--border-color)] mt-24 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xs">
          <h3 className="text-xl font-bold mb-4 font-chillax text-[var(--text-color)]">Abdulsamad.</h3>
          <p className="text-[var(--text-color)]/70 text-sm leading-relaxed mb-6">
            A software engineer specializing in building full-stack applications. I enjoy creating seamless user experiences and writing scalable code.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full font-medium hover:scale-105 transition-transform text-sm">
            Get In Touch
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-[var(--text-color)] mb-2 tracking-wide uppercase text-xs">Quick Links</h4>
            <Link href="/" className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">Work</Link>
            <Link href="/about" className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">About</Link>
            <Link href="/notes" className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">Notes</Link>
            <Link href="/contact" className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-[var(--text-color)] mb-2 tracking-wide uppercase text-xs">Social</h4>
            <a href="https://github.com/Abdulsamad-sama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">
              <FiGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hamzat-abdulsamad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://x.com/tomio_sama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-color)]/70 hover:text-[var(--text-color)] text-sm transition-colors">
              <FiTwitter size={16} /> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-color)]">
        <p className="text-[var(--text-color)]/50 text-xs">
          &copy; {new Date().getFullYear()} Abdulsamad Hamzat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
