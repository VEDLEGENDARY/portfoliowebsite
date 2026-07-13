"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Chip } from "@/components/chip";
import { Highlight } from "@/components/highlight";

const stats = [
  { value: "500+", label: "fintech accounts supported" },
  { value: "9,000+", label: "transactions processed by APIs" },
  { value: "6,000+", label: "fund entries auto-synced daily" },
  { value: "20+ hrs", label: "manual work eliminated weekly" },
];

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.05] blur-[140px]"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      {/* ── Nav ── */}
      <motion.nav
        className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-black"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
          >
            VP
          </div>
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: "var(--color-foreground)" }}
          >
            Ved Patel
          </span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-muted)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--color-border-hover)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--color-foreground)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--color-border)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--color-muted)";
            }}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href="/VedP_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 sm:inline-flex"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-hover)";
              e.currentTarget.style.color = "var(--color-foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-muted)";
            }}
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>

          <a
            href="mailto:ved.sp@outlook.com"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
            }}
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Hire me</span>
          </a>
        </div>
      </motion.nav>

      {/* ── Hero body ── */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto max-w-screen-xl px-5 pb-20 pt-8 sm:px-10 lg:px-16"
      >
        {/* Eyebrow chips row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          <span
            className="h-1.5 w-1.5 animate-pulse shrink-0 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <Chip>CS sophomore · UT Dallas · Irving, TX</Chip>
          <Chip>MLH-winning hackathon · AI/ML</Chip>
          <Chip>Fine-tuned LLM · Chrome Extension</Chip>
          <Chip>TSA National #1 · Web Dev</Chip>
          <Chip>Production fintech app</Chip>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "102%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
            className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(2.8rem,8.5vw,8rem)]"
            style={{ color: "var(--color-foreground)" }}
          >
            I build{" "}
            <em className="not-italic" style={{ color: "var(--color-accent)" }}>
              AI-powered
            </em>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "102%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.21 }}
            className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(2.8rem,8.5vw,8rem)]"
            style={{ color: "var(--color-subtle)" }}
          >
            software.
          </motion.h1>
        </div>

        {/* Sub-grid */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_340px]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p
              className="max-w-[520px] text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              From <Highlight>fine-tuned language models</Highlight> and{" "}
              <Highlight>computer vision pipelines</Highlight> to production
              fintech APIs — I build systems that automate real workflows and
              ship to real users.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200"
                style={{
                  backgroundColor: "var(--color-foreground)",
                  color: "var(--color-background)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-accent-text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-foreground)";
                  e.currentTarget.style.color = "var(--color-background)";
                }}
              >
                See my work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/VedP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-border-hover)";
                  e.currentTarget.style.color = "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-muted)";
                }}
              >
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.52 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl p-4"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <div
                    className="font-display text-2xl font-black"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-xs leading-snug"
                    style={{ color: "var(--color-subtle)" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-full"
          >
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image
                src="/profilepic.jpeg"
                alt="Ved Patel — Software Engineer"
                width={680}
                height={860}
                priority
                className="h-[400px] w-full object-cover object-top lg:h-[460px]"
              />
              {/* Very subtle bottom gradient — just enough for the tag to read */}
              <div
                className="absolute inset-x-0 bottom-0 h-28"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.72) 0%, transparent 100%)",
                }}
              />
              {/* Status tag */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl p-3.5 backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(8,8,8,0.55)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--color-accent)" }}
                >
                  Open to opportunities
                </p>
                <p className="mt-0.5 text-sm" style={{ color: "#bbb" }}>
                  AI/ML · Automation · Fintech · Full-stack
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-10 rounded-2xl px-4 py-2.5 shadow-2xl sm:-right-6"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs font-bold"
                style={{ color: "var(--color-accent)" }}
              >
                MLH Winner
              </p>
              <p
                className="text-[11px]"
                style={{ color: "var(--color-subtle)" }}
              >
                NexDrop · 2024
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
              className="absolute -left-3 bottom-28 rounded-2xl px-4 py-2.5 shadow-2xl sm:-left-6"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs font-bold"
                style={{ color: "var(--color-foreground)" }}
              >
                #1 National
              </p>
              <p
                className="text-[11px]"
                style={{ color: "var(--color-subtle)" }}
              >
                TSA Web Dev
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full pt-2"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <div
            className="h-1.5 w-1 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
