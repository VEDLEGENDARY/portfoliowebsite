"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#background" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Products shipped" },
  { value: "#1", label: "TSA National" },
  { value: "MLH", label: "Hackathon win" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section
      className="relative flex h-[100svh] min-h-[620px] flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* grid + glow backdrop */}
      <div className="vp-grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[150px]"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Nav ── */}
      <motion.nav
        className="relative z-20 flex shrink-0 items-center justify-between px-5 py-5 sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-black"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
          >
            VP
          </div>
          <span
            className="text-sm font-bold tracking-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            Ved Patel
          </span>
        </div>

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

        <div className="flex items-center gap-2">
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
              e.currentTarget.style.borderColor = "var(--color-border-hover)";
              e.currentTarget.style.color = "var(--color-foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-muted)";
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

      {/* ── Hero body (fills remaining viewport) ── */}
      <div className="relative z-10 flex flex-1 items-center px-5 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-screen-xl items-center gap-10 min-[900px]:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </span>
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                Software Engineer · Dallas, TX
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,6.2vw,5.6rem)]"
              style={{ color: "var(--color-foreground)" }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 }}
                >
                  I build
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.37 }}
                  style={{ color: "var(--color-accent)" }}
                >
                  intelligent
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.44 }}
                >
                  software.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-7 max-w-md text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              AI, computer vision, and production fintech APIs — shipped to real
              users at real scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200"
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
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/VedP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                Resume
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78, ease }}
              className="mt-10 flex gap-8 border-t pt-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: "var(--color-subtle)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="relative mx-auto hidden w-full max-w-[340px] min-[900px]:block min-[900px]:max-w-full"
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
                className="h-[clamp(320px,44vh,460px)] w-full object-cover object-top"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.78) 0%, transparent 100%)",
                }}
              />
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
                  AI/ML · Automation · Full-stack
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-8 rounded-2xl px-4 py-2.5 shadow-2xl sm:-right-6"
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
              <p className="text-[11px]" style={{ color: "var(--color-subtle)" }}>
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
              className="absolute -left-3 bottom-24 rounded-2xl px-4 py-2.5 shadow-2xl sm:-left-6"
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
              <p className="text-[11px]" style={{ color: "var(--color-subtle)" }}>
                TSA Web Dev
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 flex shrink-0 justify-center pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full pt-2"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <div
            className="h-1.5 w-1 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
