"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-color)]/60 hover:text-[var(--text-color)] transition-colors text-sm font-semibold uppercase tracking-widest mb-8">
          <FiArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-chillax text-[var(--text-color)]">Privacy Policy.</h1>
          <p className="text-[var(--text-color)]/60 text-lg md:text-xl font-light mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="flex flex-col gap-12 text-[var(--text-color)]/80 leading-relaxed text-lg font-light">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">1. Introduction</h2>
            <p>
              Welcome to my portfolio website. I value your privacy and am committed to protecting your personal information. This Privacy Policy explains how any information is collected, used, and safeguarded when you visit this website.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">2. Information Collection</h2>
            <p>
              This website is a static portfolio and does not actively track or collect personal data such as your name, address, or payment details. If you choose to contact me via email or the contact form, I will only use the information provided (like your email and name) to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">3. Analytics and Cookies</h2>
            <p>
              This site may use standard basic analytics tools (such as Vercel Analytics) to monitor general traffic and performance. These tools do not collect personally identifiable information. I do not use marketing cookies or cross-site tracking mechanisms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">4. Third-Party Links</h2>
            <p>
              My portfolio contains links to external sites, including GitHub, LinkedIn, Twitter/X, and live project deployments. Please be aware that I am not responsible for the privacy practices of these other sites. I encourage you to read the privacy policies of any website you visit.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">5. Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time to reflect any changes in my practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-chillax text-[var(--text-color)]">6. Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please feel free to reach out via the <Link href="/contact" className="text-[var(--text-color)] underline decoration-[var(--border-color)] underline-offset-4 hover:decoration-[var(--text-color)] transition-colors font-medium">contact page</Link>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
