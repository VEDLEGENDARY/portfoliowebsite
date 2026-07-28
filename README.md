<div align="center">

<br />

```
  ██╗   ██╗███████╗██████╗
  ██║   ██║██╔════╝██╔══██╗
  ██║   ██║█████╗  ██║  ██║
  ╚██╗ ██╔╝██╔══╝  ██║  ██║
   ╚████╔╝ ███████╗██████╔╝
    ╚═══╝  ╚══════╝╚═════╝
  P  A  T  E  L  ·  . D E V
```

<br />

[![Portfolio](https://img.shields.io/badge/vedp.dev-b9ff66?style=for-the-badge&labelColor=080808&color=b9ff66&logoColor=080808)](https://vedp.dev)
&nbsp;
[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
&nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
&nbsp;
[![Tailwind v4](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
&nbsp;
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br />

> *"I build intelligent, resilient, elegant, scalable software."*

<br />

</div>

---

## &nbsp;&nbsp;01 &nbsp;—&nbsp; Overview

A motion-first, physics-driven personal portfolio. Dark surfaces, one electric accent, zero noise. Every card tilts. Every button breathes. Every section earns its scroll.

Built to feel like software. Designed to read like a story.

**Live at:** [vedp.dev](https://vedp.dev) &nbsp;·&nbsp; [ved.sp@outlook.com](mailto:ved.sp@outlook.com) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/ved-patel-1ab48b274) &nbsp;·&nbsp; [GitHub](https://github.com/VEDLEGENDARY)

---

## &nbsp;&nbsp;02 &nbsp;—&nbsp; Design Language

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   PALETTE                                           │
│                                                     │
│   ████  #080808   Canvas          Background        │
│   ████  #111111   Raised          Surface           │
│   ████  #f0f0f0   Primary         Foreground        │
│   ████  #888888   Secondary       Muted             │
│   ████  #b9ff66   Electric lime   Accent            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Typography**

| Role | Family | Weight |
|---|---|---|
| Display / Headlines | Bricolage Grotesque | 800 Extrabold |
| Body / UI | Inter | 400 · 500 · 600 |

Optical sizing enabled on all display text. Letter-spacing pulled tight at `−0.03em` for editorial impact.

**Motion Principles**

- Spring physics over duration curves — every interaction has mass, stiffness, damping.
- Perspective set at `800px` — close enough to feel tactile, far enough to stay elegant.
- Reduced-motion respected at the system level.

---

## &nbsp;&nbsp;03 &nbsp;—&nbsp; Architecture

```
portfoliowebsite/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout · fonts · metadata · viewport
│   │   ├── page.tsx            ← Section orchestration
│   │   └── globals.css         ← Design tokens · glass utilities · keyframes
│   │
│   ├── components/
│   │   ├── navbar.tsx          ← Frosted glass nav · scroll-aware blur engine
│   │   ├── hero.tsx            ← Animated headline · rotating word loop · CTAs
│   │   ├── hero-canvas.tsx     ← WebGL ambient layer
│   │   ├── projects.tsx        ← Featured card + 3-column CardTilt3D grid
│   │   ├── background.tsx      ← Experience · education · tech chip cloud
│   │   ├── contact.tsx         ← CTA section · pill-button footer
│   │   ├── card-tilt.tsx       ← 3D tilt engine (spring physics + glare)
│   │   ├── magnetic-button.tsx ← Cursor-attracted wrapper
│   │   ├── highlight-text.tsx  ← Auto keyword accent renderer
│   │   ├── chip.tsx            ← Pill tag component
│   │   ├── cursor.tsx          ← Custom cursor
│   │   ├── preloader.tsx       ← Entry sequence
│   │   └── theme-provider.tsx  ← Dark / light context
│   │
│   ├── hooks/
│   │   └── useIntersection.ts  ← Viewport gate · lazy render
│   │
│   └── providers/
│       └── lenis-provider.tsx  ← Smooth scroll (Lenis)
│
└── public/
    ├── VedP_Resume.pdf
    ├── nexdrop.png · truscope.png · navieats.png · vfin.png
    └── profilepic.jpeg
```

---

## &nbsp;&nbsp;04 &nbsp;—&nbsp; Motion System

### CardTilt3D
The centrepiece interaction. Every card tracks cursor position and responds with spring-physics 3D rotation (`rotateX` + `rotateY`), a specular glare radial gradient that follows the cursor, and a depth-lift scale on hover. Perspective: `800px`. Spring: `stiffness 320 · damping 22 · mass 0.4`.

```
Cursor enters  →  scale: 1.03
Cursor moves   →  rotateX/Y: ±intensity degrees (spring-interpolated)
Glare follows  →  radial-gradient @ cursor position, opacity spring
Cursor leaves  →  all values spring back to neutral
```

### MagneticButton
All primary CTAs softly orbit toward the cursor within a proximity zone. Makes every interaction feel intentional.

### HighlightText
Recruiter-relevant keywords (`LLM`, `REST APIs`, `CI/CD`, `production`, etc.) are auto-detected via regex and wrapped in `.hl` — accent colour, dotted underline, glow on hover. Zero manual markup required.

### Navbar Blur
Scroll-aware: transparent at `y=0`, full `backdrop-filter: blur(32px) saturate(200%)` once scrolled. Uses `will-change: backdrop-filter` and `isolation: isolate` for GPU compositing.

### Shine Text
Section headings carry a sweeping gradient shimmer — a 250%-wide background animated over 10s. Slow enough to be ambient, fast enough to feel alive.

---

## &nbsp;&nbsp;05 &nbsp;—&nbsp; Featured Projects

```
┌──────────────────────────────────────────────────────┐
│  01  NexDrop        AI/ML · Computer Vision          │
│      MLH Winner — satellite imagery ROI scoring      │
│      OpenCV · TensorFlow · Scikit-learn · CI/CD      │
├──────────────────────────────────────────────────────┤
│  02  TruScope       Fine-tuned LLM                   │
│      Bias + clickbait detector · 5.0★ Chrome Store   │
│      LLM · Classification · Chrome Extension         │
├──────────────────────────────────────────────────────┤
│  03  NaviEats       Full-stack Web App               │
│      #1 National · TSA Web Dev                       │
│      Web · Backend · UX                              │
├──────────────────────────────────────────────────────┤
│  04  VFIN           Production Fintech               │
│      500+ accounts · 6,000+ daily-synced entries     │
│      Node.js · Python · PostgreSQL                   │
└──────────────────────────────────────────────────────┘
```

---

## &nbsp;&nbsp;06 &nbsp;—&nbsp; Experience

**Full-Stack Developer Intern — VisorFin Tech Services** &nbsp;`Jun 2025 – Feb 2026 · Gurugram, IN`

- Built ~10 REST APIs in Node.js + Python handling legal and transactional data for 500+ accounts
- Automated a daily pipeline syncing 6,000+ fund entries — eliminated 20+ hours of manual work per week
- Shipped 12 investment calculators into Kotlin (Android) and Swift (iOS) a day ahead of schedule

**STEM & CS Tutor — Schoolhouse · Learn To Be** &nbsp;`2023 – 2024 · Remote`

- Taught SAT Math, VEX Robotics, and CS — students averaged +50 point score gains
- Held ~90% retention with structured, project-based lessons

---

## &nbsp;&nbsp;07 &nbsp;—&nbsp; Education

**UT Dallas** — B.S. Computer Science &nbsp;`2025 – 2029 · Richardson, TX`

- 26th — International VEXU Robotics Championship
- 1st Place National — TSA Web Development
- Comet Robotics — Programmer

---

## &nbsp;&nbsp;08 &nbsp;—&nbsp; Tech Stack

`Python` `TypeScript` `Java` `C++` `Go` `SQL` `Node.js` `React` `Next.js` `Express.js` `PostgreSQL` `MongoDB` `Redis` `GraphQL` `REST APIs` `Supabase` `TensorFlow` `PyTorch` `OpenCV` `Scikit-learn` `Docker` `Kubernetes` `AWS` `CI/CD` `Kotlin` `Swift` `Tailwind CSS` `Git` `Linux`

---

## &nbsp;&nbsp;09 &nbsp;—&nbsp; Getting Started

```bash
# Clone
git clone https://github.com/VEDLEGENDARY/portfoliowebsite.git
cd portfoliowebsite

# Install (pnpm recommended)
pnpm install

# Dev server (Turbopack — instant HMR)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Requirements:** Node.js 20+ · pnpm

---

## &nbsp;&nbsp;10 &nbsp;—&nbsp; Deploy

Connected to **Vercel**. Every push to `main` triggers a production deployment automatically.

```bash
vercel deploy --prod
```

---

<div align="center">

<br />

```
  ╔═══════════════════════════════════════╗
  ║  Built with precision by Ved Patel   ║
  ║  © 2026  ·  All rights reserved      ║
  ╚═══════════════════════════════════════╝
```

[ved.sp@outlook.com](mailto:ved.sp@outlook.com) &nbsp;·&nbsp; [linkedin.com/in/ved-patel-1ab48b274](https://linkedin.com/in/ved-patel-1ab48b274) &nbsp;·&nbsp; [github.com/VEDLEGENDARY](https://github.com/VEDLEGENDARY)

<br />

</div>
