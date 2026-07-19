"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Mail } from "lucide-react";
import { Chip } from "@/components/chip";
import { Magnetic } from "@/components/magnetic";

const highlights = [
  "AI/ML · LLMs · Computer Vision",
  "Production fintech APIs",
  "Automation pipelines",
  "Full-stack web apps",
  "End-to-end product delivery",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/VEDLEGENDARY",
    icon: Code2,
  },
  {
    label: "Email",
    href: "mailto:ved.sp@outlook.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-screen-xl px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Divider */}
      <div
        className="mb-20 h-px w-full"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      {/* ── CTA card ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <div
          className="relative p-8 sm:p-12 lg:p-16"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[120px]"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p
                className="section-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.35em]"
                style={{ color: "var(--color-accent)" }}
              >
                Contact
              </p>
              <h2
                className="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-7xl"
                style={{ color: "var(--color-foreground)" }}
              >
                Let&apos;s build
                <br />
                <span style={{ color: "var(--color-accent)" }}>something real.</span>
              </h2>
              <p
                className="mt-7 max-w-md text-lg leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                Open to internships and roles in AI, automation, and product.
                Let&apos;s talk.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[220px] lg:flex-col">
              <Magnetic>
                <a
                  href="mailto:ved.sp@outlook.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-accent-text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-accent-dark)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-accent)";
                  }}
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>
              </Magnetic>
              <a
                href="/VedP_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold"
              >
                Resume PDF
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Highlight pills */}
          <div
            className="relative mt-10 flex flex-wrap gap-2.5 border-t pt-10"
            style={{ borderColor: "var(--color-border)" }}
          >
            {highlights.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row"
        aria-label="Site footer"
      >
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-black"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
          >
            VP
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-foreground)" }}
          >
            Ved Patel
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-foreground)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-foreground)")
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/vedpatel2006/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--color-foreground)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-foreground)")
            }
          >
            <ExternalLink className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p
          className="text-sm"
          style={{ color: "var(--color-faint)" }}
        >
          © {new Date().getFullYear()} Ved Patel
        </p>
      </motion.footer>
    </section>
  );
}
