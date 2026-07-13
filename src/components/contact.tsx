"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";

const highlights = [
  "CS sophomore at UT Dallas",
  "Fintech and automation experience",
  "Computer vision and ML wins",
  "End-to-end product delivery",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-screen-xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Divider */}
      <div className="mb-20 h-px w-full bg-white/6" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl border border-white/8 bg-[#111]"
      >
        <div className="relative p-8 sm:p-12 lg:p-16">
          {/* Background accent */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#b9ff66] opacity-[0.04] blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b9ff66]">
                Contact
              </p>
              <h2 className="font-display text-5xl font-black leading-[0.88] tracking-[-0.04em] text-[#f0f0f0] sm:text-6xl lg:text-7xl">
                Let&apos;s build
                <br />
                <span className="text-[#333]">something</span>
                <br />
                <span className="italic text-[#b9ff66]">real.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#555]">
                Open to opportunities where product quality matters and
                implementations need to stand up under real usage.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:min-w-[220px]">
              <a
                href="mailto:ved.sp@outlook.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b9ff66] px-6 py-3.5 text-sm font-bold text-[#080808] transition hover:bg-[#c8ff7a]"
              >
                <Mail className="h-4 w-4" />
                Send an email
              </a>
              <a
                href="/VedP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#888] transition hover:border-white/20 hover:text-[#f0f0f0]"
              >
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </div>
          </div>

          {/* Highlight pills */}
          <div className="relative mt-12 flex flex-wrap gap-3 border-t border-white/6 pt-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/6 bg-[#1a1a1a] px-4 py-2 text-sm text-[#555]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b9ff66]">
            <span className="text-[9px] font-black text-[#080808]">VP</span>
          </div>
          <span className="text-sm text-[#333]">Ved Patel</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:ved.sp@outlook.com"
            className="text-sm text-[#333] transition hover:text-[#b9ff66]"
          >
            ved.sp@outlook.com
          </a>
          <a
            href="https://github.com/nshah2006/NexDrop/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[#333] transition hover:text-[#f0f0f0]"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="text-sm text-[#222]">
          {new Date().getFullYear()}
        </p>
      </motion.footer>
    </section>
  );
}
