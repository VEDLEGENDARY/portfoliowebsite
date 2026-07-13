"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, ExternalLink } from "lucide-react";

const skills = [
  "Python", "Node.js", "TypeScript", "React", "Next.js",
  "PostgreSQL", "Supabase", "REST APIs", "OpenCV",
  "TensorFlow", "Scikit-learn", "Kotlin", "Swift",
  "Tailwind CSS", "Express.js", "Git",
];

const experience = [
  {
    role: "Junior Full Stack Developer Intern",
    org: "VisorFin Tech Services (VFIN)",
    period: "Jun 2025 – Feb 2026",
    location: "Gurugram, Delhi NCR",
    bullets: [
      "Architected ~10 RESTful APIs in Node.js and Python to securely process legal and transactional data for 500+ accounts and 9,000+ transactions.",
      "Automated 6,000+ mutual fund data entries updated daily via cloud hosting with Python and PostgreSQL, removing 20+ hours of manual work each week.",
      "Integrated 12 investment-plan calculators into Kotlin Android and Swift iOS apps, delivered one day ahead of schedule.",
    ],
  },
  {
    role: "Tutor",
    org: "Schoolhouse & Learn To Be",
    period: "2023 – 2024",
    location: "Remote",
    bullets: [
      "Developed and taught curriculum for SAT Math, VEX Robotics, and CS — average score increase of 50 points.",
      "Designed interactive coding workshops with Python projects that improved confidence and class participation.",
      "Maintained ~90% student retention across sessions through structured, practical, and engaging lessons.",
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
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Background() {
  return (
    <section
      id="background"
      className="relative mx-auto max-w-screen-xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Divider line */}
      <div className="mb-20 h-px w-full bg-white/6" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b9ff66]">
            Background
          </p>
          <h2 className="font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-[#f0f0f0] sm:text-6xl">
            Experience
          </h2>
        </div>
        <a
          href="/VedP_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/8 px-5 py-2.5 text-sm font-semibold text-[#666] transition hover:border-white/16 hover:text-[#f0f0f0] sm:self-auto"
        >
          Full resume
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Experience entries */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {experience.map((entry, i) => (
            <motion.article
              key={entry.org}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-6 sm:p-8"
            >
              {/* Index */}
              <span className="font-display absolute right-6 top-6 text-5xl font-black text-[#1a1a1a]">
                0{i + 1}
              </span>

              <div className="relative">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-[#1a1a1a] text-[#b9ff66]">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#555]">
                      Experience
                    </p>
                    <h3 className="font-display mt-1 text-xl font-black text-[#f0f0f0]">
                      {entry.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-[#888]">
                      {entry.org}
                    </p>
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/6 bg-[#1a1a1a] px-3 py-1 text-xs text-[#555]">
                    {entry.period}
                  </span>
                  <span className="rounded-full border border-white/6 bg-[#1a1a1a] px-3 py-1 text-xs text-[#555]">
                    {entry.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-[#666]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b9ff66]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Right column: Education + Skills */}
        <div className="space-y-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-6 sm:p-8"
          >
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-[#1a1a1a] text-[#b9ff66]">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#555]">
                  Education
                </p>
                <h3 className="font-display mt-1 text-xl font-black leading-tight text-[#f0f0f0]">
                  {education.school}
                </h3>
                <p className="mt-0.5 text-sm text-[#666]">
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/6 bg-[#1a1a1a] px-3 py-1 text-xs text-[#555]">
                {education.period}
              </span>
              <span className="rounded-full border border-white/6 bg-[#1a1a1a] px-3 py-1 text-xs text-[#555]">
                {education.location}
              </span>
            </div>

            <div className="space-y-3">
              {education.highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.text}
                    className="flex items-start gap-3 rounded-xl border border-white/6 bg-[#1a1a1a] p-3"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#b9ff66]" />
                    <span className="text-sm text-[#888]">{h.text}</span>
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
            className="rounded-2xl border border-white/8 bg-[#111] p-6 sm:p-8"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#555]">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.02 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-full border border-white/6 bg-[#1a1a1a] px-3 py-1.5 text-sm text-[#888] transition hover:border-[#b9ff66]/30 hover:text-[#b9ff66]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
