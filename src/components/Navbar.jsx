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
      <div className="flex font-chillax font-medium bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full p-[6px] lg:text-lg md:text-sm text-[14.5px] items-center gap-1 sm:gap-2 shadow-sm dark:shadow-none transition-colors duration-300">
        
        {links.map((link) => {
          const isActive = pathname === link.path || (link.path === "/projects" && pathname === "/");
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`relative px-4 sm:px-6 py-2 flex items-center justify-center transition-colors z-10 ${
                isActive 
                  ? "text-white dark:text-black font-semibold" 
                  : "text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-bubble"
                  className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}

        <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 hidden md:block mx-1"></div>

        <div className="px-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 -m-3 rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 bg-transparent border-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
