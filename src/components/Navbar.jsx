"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Notes", path: "/notes" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 px-4 py-2 bg-[var(--card-bg)]/70 backdrop-blur-xl border border-[var(--border-color)] rounded-full shadow-md">
        
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.path || (link.path === "/projects" && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-2 rounded-full text-sm transition-colors ${isActive ? 'text-[var(--bg-color)] font-medium' : 'text-[var(--text-color)]/70 hover:text-[var(--text-color)]'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bubble"
                    className="absolute inset-0 bg-[var(--text-color)] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="w-px h-6 bg-[var(--border-color)] mx-2"></div>

        <div className="flex items-center">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-[var(--text-color)]/70 hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
