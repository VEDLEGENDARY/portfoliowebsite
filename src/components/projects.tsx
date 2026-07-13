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
    linkLabel: "View source",
    badge: "MLH Win",
    accent: "#b9ff66",
  },
  {
    index: "02",
    name: "TruScope",
    category: "Fine-tuned LLM · Chrome Extension",
    description:
      "Bias and clickbait detection stack spanning a web app and Chrome extension, powered by a fine-tuned language model. Shipped to the Chrome Web Store with a 5.0 rating.",
    tags: ["AI", "Text Classification", "Browser Extension"],
    image: "/truscope.png",
    link: "https://truscope.app/",
    extraLink:
      "https://chromewebstore.google.com/detail/truscope/pncjbinbmlfgkgedabggpfgafomgjamn/",
    linkLabel: "Live App",
    extraLabel: "Chrome Store",
    badge: "Live · 5.0★",
    accent: "#60a5fa",
  },
  {
    index: "03",
    name: "NaviEats",
    category: "TSA National #1 · Web Dev",
    description:
      "Backend web project ranked #1 nationally at TSA. A polished, performance-focused solution with production-ready architecture and thoughtful UX flows.",
    tags: ["Web Dev", "Backend", "National #1"],
    image: "/navieats.png",
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
      "API layer supporting a live fintech product handling legal and transactional data for 500+ accounts. Scalable Node.js & Python endpoints, daily automation, and 12 investment calculators.",
    tags: ["Node.js", "Python", "PostgreSQL", "Mobile APIs"],
    image: "/vfin.png",
    link: "https://play.google.com/store/search?q=vfin&c=apps",
    linkLabel: "Play Store",
    badge: "Production",
    accent: "#34d399",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-screen-xl px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      {/* ── Section header ── */}
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
            Selected work
          </p>
          <h2
            className="font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Projects
          </h2>
        </div>
        <p
          className="max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--color-subtle)" }}
        >
          From hackathon wins to fintech production — ML, backend, and
          full-stack work that solves real problems.
        </p>
      </motion.div>

      {/* ── Featured card (NexDrop) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group mb-5 overflow-hidden rounded-3xl"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <div className="grid lg:grid-cols-2">
          {/* Image pane */}
          <div
            className="relative min-h-[280px] overflow-hidden lg:min-h-[440px]"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <Image
              src="/nexdrop.png"
              alt="NexDrop — satellite imagery ROI scoring app"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            {/* Very thin vignette, no heavy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
          </div>

          {/* Content pane */}
          <div
            className="flex flex-col justify-between p-7 sm:p-10"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <div>
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <span
                    className="font-display text-xs font-semibold uppercase tracking-[0.35em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    01 — Featured
                  </span>
                  <h3
                    className="font-display mt-2 text-4xl font-black tracking-[-0.03em]"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    NexDrop
                  </h3>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    MLH-winning hackathon · AI/ML
                  </p>
                </div>
                <div
                  className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(185,255,102,0.12)",
                    color: "#b9ff66",
                    border: "1px solid rgba(185,255,102,0.25)",
                  }}
                >
                  MLH Win
                </div>
              </div>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                Computer vision pipeline extracting roof areas from satellite
                imagery and scoring ROI for water-harvesting lead generation.
                Built with OpenCV, TensorFlow, and Scikit-learn, with automated
                CI/CD around precipitation history and surface area analysis.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["OpenCV", "TensorFlow", "Scikit-learn", "CI/CD"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-raised)",
                      color: "var(--color-subtle)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/nshah2006/NexDrop/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200"
                style={{
                  backgroundColor: "var(--color-foreground)",
                  color: "var(--color-background)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b9ff66";
                  e.currentTarget.style.color = "#080808";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-foreground)";
                  e.currentTarget.style.color = "var(--color-background)";
                }}
              >
                View source
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Remaining 3 projects ── */}
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {projects.slice(1).map((project) => (
          <motion.div
            key={project.name}
            variants={fadeUp}
            className="group relative flex flex-col overflow-hidden rounded-2xl"
            style={{ border: "1px solid var(--color-border)" }}
          >
            {/* Project image — tall crop, very minimal overlay */}
            <div
              className="relative h-52 overflow-hidden sm:h-56"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
              {/* Minimal bottom scrim only */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Badge overlay */}
              <div
                className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm"
                style={{
                  backgroundColor: `${project.accent}22`,
                  color: project.accent,
                  border: `1px solid ${project.accent}44`,
                }}
              >
                {project.badge}
              </div>
            </div>

            {/* Card body */}
            <div
              className="flex flex-1 flex-col p-5"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3
                  className="font-display text-xl font-black"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {project.name}
                </h3>
                <span
                  className="font-display text-xs"
                  style={{ color: "var(--color-faint)" }}
                >
                  {project.index}
                </span>
              </div>

              <p
                className="mb-3 text-xs"
                style={{ color: "var(--color-subtle)" }}
              >
                {project.category}
              </p>

              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[11px]"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-raised)",
                      color: "var(--color-subtle)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-foreground)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--color-subtle)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-subtle)")
                    }
                  >
                    {"extraLabel" in project ? String(project.extraLabel) : ""}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
