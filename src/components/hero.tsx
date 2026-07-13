"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

const stats = [
  { value: "500+", label: "accounts supported" },
  { value: "9,000+", label: "transactions processed" },
  { value: "6,000+", label: "fund entries automated" },
  { value: "30–40%", label: "traffic lift from redesigns" },
];

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden" style={{ position: "relative" }}>
      {/* Static noise grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[600px] w-[600px] rounded-full bg-[#b9ff66] opacity-[0.04] blur-[120px]" />

      {/* Nav */}
      <motion.nav
        className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b9ff66]">
            <span className="text-[10px] font-black text-[#080808]">VP</span>
          </div>
          <span className="text-sm font-semibold tracking-wide text-[#f0f0f0]">
            Ved Patel
          </span>
        </div>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#666] transition-colors hover:text-[#f0f0f0]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/VedP_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-[#999] transition hover:border-white/20 hover:text-[#f0f0f0]"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a
            href="mailto:ved.sp@outlook.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#b9ff66] px-4 py-2 text-xs font-bold text-[#080808] transition hover:bg-[#c8ff7a]"
          >
            <Mail className="h-3.5 w-3.5" />
            Hire me
          </a>
        </div>
      </motion.nav>

      {/* Hero body */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto max-w-screen-xl px-6 pb-16 pt-10 sm:px-10 lg:px-16"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/8 bg-[#111] px-4 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#b9ff66]" />
          <span className="text-xs font-medium text-[#999]">
            CS sophomore at UT Dallas · Irving, TX
          </span>
          <MapPin className="h-3 w-3 text-[#555]" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-[clamp(3rem,9vw,8.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-[#f0f0f0]"
          >
            I build{" "}
            <span className="italic text-[#b9ff66]">software</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="font-display text-[clamp(3rem,9vw,8.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-[#333]"
          >
            that ships.
          </motion.h1>
        </div>

        {/* Sub grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto]">
          {/* Left: description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg space-y-8"
          >
            <p className="text-lg leading-relaxed text-[#666]">
              Fintech APIs, computer vision pipelines, and full-stack products
              with measurable impact. Award-winning at competitions, deployed in
              production.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-6 py-3 text-sm font-bold text-[#080808] transition hover:bg-[#b9ff66]"
              >
                See my work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/VedP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-[#999] transition hover:border-white/20 hover:text-[#f0f0f0]"
              >
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl border border-white/6 bg-[#111] p-4"
                >
                  <div className="font-display text-2xl font-black text-[#f0f0f0]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-tight text-[#555]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[320px] self-start lg:w-[300px]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111]">
              <Image
                src="/profilepic.jpeg"
                alt="Ved Patel"
                width={600}
                height={800}
                priority
                className="h-[380px] w-full object-cover object-top"
              />
              {/* Overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#080808]/80 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#b9ff66]">
                  Open to opportunities
                </p>
                <p className="mt-1 text-sm text-[#999]">
                  Fintech · AI/ML · Full-stack
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 rounded-2xl border border-white/8 bg-[#111] px-4 py-3 shadow-2xl"
            >
              <p className="text-xs font-bold text-[#b9ff66]">MLH Winner</p>
              <p className="text-[11px] text-[#555]">NexDrop · 2024</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute -left-6 bottom-24 rounded-2xl border border-white/8 bg-[#111] px-4 py-3 shadow-2xl"
            >
              <p className="text-xs font-bold text-[#f0f0f0]">#1 National</p>
              <p className="text-[11px] text-[#555]">TSA Web Dev</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 pt-2"
        >
          <div className="h-1.5 w-1 rounded-full bg-[#b9ff66]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
