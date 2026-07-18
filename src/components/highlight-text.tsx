import { Fragment } from "react";

/**
 * Auto-wraps recruiter-relevant keywords in an accent "dotted underline" style.
 * Longer phrases are matched first so "REST APIs" wins over "APIs".
 */
const KEYWORDS = [
  "computer vision",
  "machine learning",
  "full-stack",
  "end-to-end",
  "real-time",
  "CI/CD",
  "REST APIs",
  "REST API",
  "pipelines",
  "pipeline",
  "automated",
  "automation",
  "production",
  "scalable",
  "LLMs",
  "LLM",
  "APIs",
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = new RegExp(
  `(${KEYWORDS.sort((a, b) => b.length - a.length).map(escape).join("|")})`,
  "gi",
);

const KEYSET = new Set(KEYWORDS.map((k) => k.toLowerCase()));

export function HighlightText({ children }: { children: string }) {
  const parts = children.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        KEYSET.has(part.toLowerCase()) ? (
          <span key={i} className="hl">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
