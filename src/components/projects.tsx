"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Chip } from "@/components/chip";
import { HighlightText } from "@/components/highlight-text";
import { Tilt } from "@/components/tilt";

type Project = {
  index: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  linkLabel: string;
  badge: string;
  accent: string;
  extraLink?: string;
  extraLabel?: string;
};

const projects: Project[] = [
  {
    index: "02",
    name: "TruScope",
    category: "Fine-tuned LLM",
    description:
      "Detects bias and clickbait in news. Ships as a web app and Chrome extension — live with a 5.0 rating.",
    tags: ["LLM", "Classification", "Extension"],
    image: "/truscope.png",
    link: "https://truscope.app/",
    extraLink:
      "https://chromewebstore.google.com/detail/truscope/pncjbinbmlfgkgedabggpfgafomgjamn/",
    linkLabel: "Live app",
    extraLabel: "Chrome Store",
    badge: "Live · 5.0★",
    accent: "#60a5fa",
  },
  {
    index: "03",
    name: "NaviEats",
    category: "Full-stack web app",
    description:
      "Navigation-first food discovery app. Ranked #1 nationally at TSA Web Dev against the country's best.",
    tags: ["Web", "Backend", "UX"],
    image: "/navieats.png",
    link: "https://navieats.netlify.app/",
    linkLabel: "Live demo",
    badge: "#1 National",
    accent: "#fb923c",
  },
  {
    index: "04",
    name: "VFIN",
    category: "Production fintech",
    description:
      "API layer for a live fintech app. 500+ accounts, 6,000+ daily-synced fund entries, 12 calculators on iOS & Android.",
    tags: ["Node.js", "Python", "PostgreSQL"],
    image: "/vfin.png",
    link: "https://play.google.com/store/search?q=vfin&c=apps",
    linkLabel: "Play Store",
    badge: "Production",
    accent: "#34d399",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
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
        transition={{ duration: 0.7, ease }}
        className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            className="section-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--color-accent)" }}
          >
            Selected work
          </p>
          <h2 className="shine-text font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-7xl">
            Projects
          </h2>
        </div>
        <p
          className="max-w-xs text-sm leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Award-winning ML, live LLM apps, and production backends — built to
          solve real problems.
        </p>
      </motion.div>

      {/* ── Featured card (NexDrop) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="group mb-5 overflow-hidden rounded-3xl transition-all duration-300"
        style={{ border: "1px solid var(--color-border)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-border-hover)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 12px 60px -12px var(--color-accent-glow)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-border)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        <div className="grid lg:grid-cols-2">
          <div
            className="relative min-h-[280px] overflow-hidden lg:min-h-[460px]"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <Image
              src="/nexdrop.png"
              alt="NexDrop — satellite imagery ROI scoring app"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="project-img"
            />
          </div>

          <div
            className="flex flex-col justify-between p-7 sm:p-10"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <div>
              <div className="mb-5">
                {/* Top row: accent "Featured" label + ghost "01" index mirroring the grid cards */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    className="font-display text-xs font-semibold uppercase tracking-[0.35em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    01 — Featured
                  </span>
                  <span
                    className="font-display text-2xl font-extrabold tabular-nums"
                    style={{ color: "var(--color-border-hover)" }}
                  >
                    01
                  </span>
                </div>
                <h3
                  className="font-display mt-2 text-4xl font-extrabold tracking-[-0.02em]"
                  style={{ color: "var(--color-foreground)" }}
                >
                  NexDrop
                </h3>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  AI/ML
                </p>
              </div>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                <HighlightText>
                  {
                    "Computer-vision pipeline that extracts roof areas from satellite imagery and scores rainwater-harvesting ROI — with automated CI/CD around precipitation and surface-area analysis."
                  }
                </HighlightText>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip color="#b9ff66" dot>
                  MLH Win
                </Chip>
                {["OpenCV", "TensorFlow", "Scikit-learn", "CI/CD"].map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/nshah2006/NexDrop/"
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200"
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
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
        {projects.map((project) => (
          <motion.div key={project.name} variants={fadeUp} className="h-full">
            <Tilt max={9} className="h-full rounded-2xl">
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300"
                style={{ border: "1px solid var(--color-border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--color-border-hover)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 18px 50px -12px var(--color-accent-glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--color-border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="relative h-52 overflow-hidden sm:h-56"
                  style={{ backgroundColor: "var(--color-surface-raised)" }}
                >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="project-img"
              />
            </div>

            <div
              className="flex flex-1 flex-col p-5"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3
                  className="font-display text-xl font-extrabold tracking-tight"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {project.name}
                </h3>
                <span
                  className="font-display text-2xl font-extrabold tabular-nums"
                  style={{ color: "var(--color-border-hover)" }}
                >
                  {project.index}
                </span>
              </div>

              <p
                className="mb-3 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-accent)" }}
              >
                {project.category}
              </p>

              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                <HighlightText>{project.description}</HighlightText>
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <Chip color={project.accent} dot>
                  {project.badge}
                </Chip>
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "var(--color-foreground)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-foreground)")
                    }
                  >
                    {project.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.extraLink && (
                  <a
                    href={project.extraLink}
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
                    {project.extraLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                </div>
              </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
