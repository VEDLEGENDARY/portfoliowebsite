"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "NexDrop",
    category: "MLH-winning hackathon · AI/ML",
    description:
      "Computer vision pipeline that extracts roof areas from satellite imagery and scores ROI for water-harvesting lead generation. Built with OpenCV, TensorFlow, and Scikit-learn.",
    tags: ["OpenCV", "TensorFlow", "Scikit-learn", "CI/CD"],
    image: "/nexdrop.png",
    link: "https://github.com/nshah2006/NexDrop/",
    linkLabel: "Source",
    badge: "MLH Win",
    accent: "#b9ff66",
  },
  {
    index: "02",
    name: "TruScope",
    category: "Fine-tuned LLM · Chrome Extension",
    description:
      "Bias and clickbait detection stack spanning a web app and Chrome extension, powered by a fine-tuned language model. Shipped to the Chrome Web Store.",
    tags: ["AI", "Text Classification", "Browser Extension"],
    link: "https://truscope.app/",
    extraLink:
      "https://chromewebstore.google.com/detail/truscope/pncjbinbmlfgkgedabggpfgafomgjamn/",
    linkLabel: "Live App",
    extraLabel: "Chrome Store",
    badge: "Live",
    accent: "#60a5fa",
  },
  {
    index: "03",
    name: "NaviEats",
    category: "TSA National Winner · Web Dev",
    description:
      "Backend web project ranked #1 nationally at TSA. A polished, performance-focused solution with production-ready architecture and thoughtful user flows.",
    tags: ["Web Dev", "Backend", "National #1"],
    link: "https://navieats.netlify.app/",
    linkLabel: "Live Demo",
    badge: "#1 National",
    accent: "#fb923c",
  },
  {
    index: "04",
    name: "VFIN",
    category: "Production fintech app",
    description:
      "API layer supporting a live fintech product handling legal and transactional data. Scalable endpoints, daily automation, and investment calculators embedded in mobile.",
    tags: ["Node.js", "Python", "PostgreSQL", "Mobile APIs"],
    link: "https://play.google.com/store/search?q=vfin&c=apps",
    linkLabel: "Play Store",
    image: "/vfinapp_logo.png",
    badge: "Production",
    accent: "#34d399",
  },
  {
    index: "05",
    name: "Navix Designs",
    category: "Client web agency",
    description:
      "Custom React and Next.js sites for clients with redesigns delivering 30–40% traffic and sales lift. Stack: React, TypeScript, Tailwind, Express, PostgreSQL, Supabase.",
    tags: ["React", "Next.js", "Express", "Supabase"],
    badge: "+40% traffic",
    accent: "#e879f9",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-screen-xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
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
            Selected work
          </p>
          <h2 className="font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-[#f0f0f0] sm:text-6xl">
            Projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[#555]">
          From hackathon wins to fintech production — ML, backend, and
          full-stack work that solves real problems.
        </p>
      </motion.div>

      {/* Featured large card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group mb-6 overflow-hidden rounded-3xl border border-white/8 bg-[#111]"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image pane */}
          <div className="relative min-h-[300px] overflow-hidden bg-[#0d0d0d] lg:min-h-[420px]">
            <Image
              src="/nexdrop.png"
              alt="NexDrop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] opacity-0 lg:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-100 lg:opacity-0" />
          </div>

          {/* Content pane */}
          <div className="flex flex-col justify-between p-8 sm:p-10">
            <div>
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-[#b9ff66]">
                    01 — Featured
                  </span>
                  <h3 className="font-display mt-2 text-4xl font-black tracking-[-0.03em] text-[#f0f0f0]">
                    NexDrop
                  </h3>
                  <p className="mt-1 text-sm text-[#555]">
                    MLH-winning hackathon · AI/ML
                  </p>
                </div>
                <div className="rounded-full border border-[#b9ff66]/30 bg-[#b9ff66]/10 px-3 py-1 text-xs font-bold text-[#b9ff66]">
                  MLH Win
                </div>
              </div>

              <p className="leading-relaxed text-[#888]">
                Computer vision pipeline that extracts roof areas from satellite
                imagery and scores ROI for water-harvesting lead generation.
                Built with OpenCV, TensorFlow, and Scikit-learn, plus automated
                CI/CD around precipitation history and surface area analysis.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["OpenCV", "TensorFlow", "Scikit-learn", "CI/CD"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 bg-[#1a1a1a] px-3 py-1 text-xs text-[#666]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/nshah2006/NexDrop/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f0f0f0] px-5 py-2.5 text-sm font-bold text-[#080808] transition hover:bg-[#b9ff66]"
              >
                View source
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid: remaining projects */}
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {projects.slice(1).map((project) => (
          <motion.div
            key={project.name}
            variants={fadeUp}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#111] p-6 transition duration-300 hover:border-white/12 hover:bg-[#151515]"
          >
            {/* Accent dot */}
            <div
              className="mb-4 flex items-center justify-between"
            >
              <span className="font-display text-xs text-[#333]">
                {project.index}
              </span>
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: project.accent }}
              />
            </div>

            {/* Logo for VFIN */}
            {project.image && project.name === "VFIN" && (
              <div className="mb-4 h-10 w-10 overflow-hidden rounded-xl border border-white/8 bg-[#1a1a1a] p-1.5">
                <Image
                  src={project.image}
                  alt={`${project.name} logo`}
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="font-display text-xl font-black text-[#f0f0f0]">
                {project.name}
              </h3>
              <span
                className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
                style={{
                  background: `${project.accent}18`,
                  color: project.accent,
                }}
              >
                {project.badge}
              </span>
            </div>
            <p className="mb-3 text-xs text-[#555]">{project.category}</p>
            <p className="flex-1 text-sm leading-relaxed text-[#666]">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/6 bg-[#1a1a1a] px-2.5 py-0.5 text-[11px] text-[#555]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#999] transition hover:text-[#f0f0f0]"
                >
                  {project.linkLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {"extraLink" in project && project.extraLink && (
                <a
                  href={project.extraLink as string}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#666] transition hover:text-[#999]"
                >
                  {"extraLabel" in project ? String(project.extraLabel) : ""}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
