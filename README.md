<div align="center">

<br />

<img src="https://img.shields.io/badge/VP-portfolio-b9ff66?style=for-the-badge&labelColor=080808" alt="Ved Patel Portfolio" />

# Ved Patel — Portfolio

**Software Engineer · Dallas, TX**

*I build intelligent, resilient, elegant, scalable software.*

[vedp.dev](https://vedp.dev) · [Email](mailto:ved.sp@outlook.com) · [LinkedIn](https://www.linkedin.com/in/vedpatel2006/) · [GitHub](https://github.com/VEDLEGENDARY)

<br />

<div>
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

</div>

---

## Overview

Personal production portfolio for **Ved Patel** — a software engineer focused on AI/ML systems, computer vision, and production fintech APIs. The site doubles as a live resume and showcase of real shipped work.

**Live at:** [vedp.dev](https://vedp.dev)

---

## Featured Projects

| # | Project | Category | Highlight |
|---|---------|----------|-----------|
| 01 | **NexDrop** | AI/ML · Computer Vision | MLH Winner — satellite imagery ROI scoring pipeline |
| 02 | **TruScope** | Fine-tuned LLM | Live web app + Chrome extension · 5.0 rating |
| 03 | **NaviEats** | Full-stack Web App | #1 National · TSA Web Dev |
| 04 | **VFIN** | Production Fintech | 500+ accounts · 6,000+ daily-synced fund entries |

---

## Experience

**Full-Stack Developer Intern — VisorFin Tech Services** *(Jun 2025 – Feb 2026)*
- ~10 REST APIs in Node.js and Python for 500+ accounts
- Automated daily pipeline syncing 6,000+ fund entries — cut 20+ hours/week of manual work
- Shipped 12 investment calculators to Kotlin (Android) and Swift (iOS) ahead of schedule

**STEM & CS Tutor — Schoolhouse · Learn To Be** *(2023 – 2024)*
- SAT Math, VEX Robotics, CS — students averaged +50 point score gains
- ~90% student retention with structured, project-based lessons

---

## Education

**UT Dallas** — B.S. Computer Science *(2025 – 2029, Richardson TX)*

- 26th — International VEXU Robotics
- 1st Place National — TSA Web Dev
- Comet Robotics — Programmer

---

## Tech Stack

`Python` `TypeScript` `Java` `C++` `Go` `SQL` `Node.js` `React` `Next.js` `Express.js` `PostgreSQL` `MongoDB` `Redis` `GraphQL` `REST APIs` `Supabase` `TensorFlow` `PyTorch` `OpenCV` `Scikit-learn` `Docker` `Kubernetes` `AWS` `CI/CD` `Kotlin` `Swift` `Tailwind CSS` `Git` `Linux`

---

## Architecture

```
portfoliowebsite/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts (Inter + Bricolage Grotesque), metadata
│   │   ├── page.tsx            # Page composition — Preloader, Navbar, Hero, Projects, Background, Contact
│   │   └── globals.css         # Tailwind v4 theme tokens, CSS custom properties, shared utilities
│   └── components/
│       ├── navbar.tsx          # Fixed sticky navbar (hide-on-scroll-down, show-on-scroll-up)
│       ├── hero.tsx            # Full-viewport hero with rotating headline, portrait, tech marquee
│       ├── projects.tsx        # Featured NexDrop card + 3-column project grid
│       ├── background.tsx      # Experience entries, education card, skills chip cloud
│       ├── contact.tsx         # CTA card, social links, footer
│       ├── preloader.tsx       # Animated loading screen (count 0→100, cycling words)
│       ├── chip.tsx            # Shared pill/tag component (neutral + accent-colored variants)
│       ├── highlight-text.tsx  # Accent keyword highlighting in body copy
│       └── theme-provider.tsx  # Dark/light theme context (persisted via localStorage)
├── public/
│   ├── VedP_Resume.pdf         # Downloadable resume
│   ├── profilepic.jpeg         # Portrait
│   ├── nexdrop.png             # Project screenshot
│   ├── truscope.png
│   ├── navieats.png
│   └── vfin.png
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Design System

- **Colors:** `#b9ff66` accent (lime green) · `#080808` background · `#f0f0f0` foreground · with full light-mode override set
- **Typography:** [Inter](https://fonts.google.com/specimen/Inter) (body) · [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (display headings)
- **Motion:** Framer Motion — staggered enter animations, `whileInView` triggers, `AnimatePresence` for rotating headline words and preloader exit
- **Theme:** CSS custom property tokens in `globals.css`; toggled via `data-theme` attribute on `<html>`

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy

Deployed via [Vercel](https://vercel.com). Push to `main` to trigger a production deployment.

---

<div align="center">
  <sub>Built with focus by Ved Patel · © 2026</sub>
</div>
