"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, ExternalLink } from "lucide-react";
import { Chip } from "@/components/chip";

const skills = [
  "Python",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "OpenCV",
  "TensorFlow",
  "Scikit-learn",
  "Kotlin",
  "Swift",
  "Tailwind CSS",
  "Express.js",
  "Git",
];

type ExperienceEntry = {
  index: string;
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

const experience: ExperienceEntry[] = [
  {
    index: "01",
    role: "Full-Stack Developer Intern",
    org: "VisorFin Tech Services",
    period: "Jun 2025 – Feb 2026",
    location: "Gurugram, IN",
    bullets: [
      "Built ~10 REST APIs in Node.js and Python handling legal and transactional data for 500+ accounts.",
      "Automated a daily pipeline syncing 6,000+ fund entries — cut 20+ hours of manual work per week.",
      "Shipped 12 investment calculators into Kotlin (Android) and Swift (iOS) apps, a day ahead of schedule.",
    ],
  },
  {
    index: "02",
    role: "STEM & CS Tutor",
    org: "Schoolhouse · Learn To Be",
    period: "2023 – 2024",
    location: "Remote",
    bullets: [
      "Taught SAT Math, VEX Robotics, and CS — students averaged a +50 point score gain.",
      "Ran interactive Python workshops that lifted participation across every session.",
      "Held ~90% student retention with structured, project-based lessons.",
    ],
  },
];

const education = {
  school: "UT Dallas",
  degree: "B.S. Computer Science",
  period: "2025 – 2029",
  location: "Richardson, TX",
  highlights: [
    { icon: Trophy, text: "26th — International VEXU Robotics" },
    { icon: Trophy, text: "1st Place National — TSA Web Dev" },
    { icon: GraduationCap, text: "Comet Robotics — Programmer" },
  ],
};

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export function Background() {
  return (
    <section
      id="background"
      className="relative mx-auto max-w-screen-xl px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div
        className="mb-20 h-px w-full"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--color-accent)" }}
          >
            Career
          </p>
          <h2
            className="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-7xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Experience
          </h2>
        </div>
        <a
          href="/VedP_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 sm:self-auto"
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
          Full resume
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ── Experience entries ── */}
        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {experience.map((entry) => (
            <motion.article
              key={entry.org}
              variants={fadeUp}
              className="rounded-2xl p-6 transition-colors duration-300 sm:p-8"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              {/* Header row */}
              <div className="mb-5 flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-raised)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3
                      className="font-display text-lg font-extrabold tracking-tight sm:text-xl"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {entry.role}
                    </h3>
                    <span
                      className="font-display shrink-0 text-sm font-extrabold tabular-nums"
                      style={{ color: "var(--color-border-hover)" }}
                    >
                      {entry.index}
                    </span>
                  </div>
                  <p
                    className="mt-0.5 text-sm font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {entry.org}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                <Chip>{entry.period}</Chip>
                <Chip>{entry.location}</Chip>
              </div>

              <ul className="space-y-3">
                {entry.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        {/* ── Right: Education + Skills ── */}
        <div className="space-y-5">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <div className="mb-5 flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface-raised)",
                  color: "var(--color-accent)",
                }}
              >
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <h3
                  className="font-display text-lg font-extrabold leading-tight tracking-tight sm:text-xl"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {education.school}
                </h3>
                <p
                  className="mt-0.5 text-sm font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <Chip>{education.period}</Chip>
              <Chip>{education.location}</Chip>
            </div>

            <div className="space-y-2.5">
              {education.highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.text}
                    className="flex items-center gap-3 rounded-xl p-3"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-raised)",
                    }}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
                      {h.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.35em]"
              style={{ color: "var(--color-subtle)" }}
            >
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.02 * i, ease }}
                >
                  <Chip>{skill}</Chip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
