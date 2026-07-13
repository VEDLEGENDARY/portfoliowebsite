"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, ExternalLink } from "lucide-react";
import { Chip } from "@/components/chip";
import { Highlight } from "@/components/highlight";
import { type ReactNode } from "react";

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
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: ReactNode[];
};

const experience: ExperienceEntry[] = [
  {
    role: "Junior Full Stack Developer Intern",
    org: "VisorFin Tech Services (VFIN)",
    period: "Jun 2025 – Feb 2026",
    location: "Gurugram, Delhi NCR",
    bullets: [
      <>
        Architected ~10 <Highlight>RESTful APIs</Highlight> in Node.js and
        Python to securely process legal and transactional data for 500+
        accounts and 9,000+ transactions.
      </>,
      <>
        Built a <Highlight>daily automation pipeline</Highlight> syncing 6,000+
        mutual fund entries via cloud-hosted Python and PostgreSQL — eliminating
        20+ hours of manual work per week.
      </>,
      <>
        Integrated 12 <Highlight>investment-plan calculators</Highlight> into
        Kotlin Android and Swift iOS apps, delivered one day ahead of schedule.
      </>,
    ],
  },
  {
    role: "Tutor",
    org: "Schoolhouse & Learn To Be",
    period: "2023 – 2024",
    location: "Remote",
    bullets: [
      <>
        Developed and taught curriculum for SAT Math,{" "}
        <Highlight>VEX Robotics</Highlight>, and CS — average student score
        increase of 50 points.
      </>,
      <>
        Designed interactive <Highlight>Python coding workshops</Highlight> that
        increased confidence and class participation across all sessions.
      </>,
      "Maintained ~90% student retention through structured, practical lessons built around real project outcomes.",
    ],
  },
];

const education = {
  school: "The University of Texas at Dallas",
  degree: "B.S. in Computer Science",
  period: "Aug 2025 – May 2029",
  location: "Richardson, TX",
  highlights: [
    { icon: Trophy, text: "26th at International VEXU Robotics Competition" },
    { icon: Trophy, text: "1st Place National — TSA Website Development" },
    { icon: GraduationCap, text: "Comet Robotics — Programmer" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Background() {
  return (
    <section
      id="background"
      className="relative mx-auto max-w-screen-xl px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Divider */}
      <div
        className="mb-20 h-px w-full"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--color-accent)" }}
          >
            Background
          </p>
          <h2
            className="font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Experience &amp; Education
          </h2>
        </div>
        <a
          href="/VedP_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 sm:self-auto"
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
          {experience.map((entry, i) => (
            <motion.article
              key={entry.org}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              {/* Large ghost index */}
              <span
                className="font-display pointer-events-none absolute right-6 top-4 select-none text-7xl font-black"
                style={{ color: "var(--color-ghost)" }}
              >
                0{i + 1}
              </span>

              <div className="relative">
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-raised)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h3
                      className="font-display text-xl font-black"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {entry.role}
                    </h3>
                    <p
                      className="mt-0.5 text-sm font-semibold"
                      style={{ color: "var(--color-muted)" }}
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
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)" }}
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl p-6 sm:p-8"
            style={{
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <div className="mb-5 flex items-start gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
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
                  className="font-display text-xl font-black leading-tight"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {education.school}
                </h3>
                <p
                  className="mt-0.5 text-sm"
                  style={{ color: "var(--color-muted)" }}
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
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-raised)",
                    }}
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-muted)" }}
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
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                  transition={{
                    duration: 0.3,
                    delay: 0.02 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
