<div align="center">

<br />

```
vedp.dev

██╗   ██╗███████╗██████╗ ██████╗ ██████╗ ███████╗██╗   ██╗
██║   ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║
██║   ██║█████╗  ██║  ██║██████╔╝██║  ██║█████╗  ██║   ██║
╚██╗ ██╔╝██╔══╝  ██║  ██║██╔═══╝ ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ╚████╔╝ ███████╗██████╔╝██║██╗  ██████╔╝███████╗ ╚████╔╝ 
  ╚═══╝  ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═════╝ ╚══════╝  ╚═══╝  
```

### *"I build intelligent, resilient, elegant, scalable software."*

<br />

[![Live](https://img.shields.io/badge/live-vedp.dev-B9FF66?style=for-the-badge&labelColor=080808)](https://vedp.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=B9FF66&labelColor=080808)](https://nextjs.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Physics_Engine-B9FF66?style=for-the-badge&labelColor=080808)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-All_Rights_Reserved-888888?style=for-the-badge&labelColor=080808)]()

<br />
<br />

**Contact** · [ved.sp@outlook.com](mailto:ved.sp@outlook.com) &nbsp;|&nbsp; **Connect** · [LinkedIn](https://linkedin.com/in/ved-patel-1ab48b274) &nbsp;|&nbsp; **Code** · [GitHub](https://github.com/VEDLEGENDARY)

</div>

<br />

---

<div align="center">

## 01 — Overview

</div>

A motion-first, physics-driven personal portfolio built with **Next.js 16** and **Framer Motion**. Engineered around clean dark surfaces, high-contrast typography, and an electric lime accent. Every card tilts, every button breathes, and every section earns its scroll.

> Built to feel like production software. Designed to read like a story.

<br />

---

<div align="center">

## 02 — Core Physics & Motion System

</div>

### `01` CardTilt3D — Physics Engine

The flagship interaction. Every card tracks continuous mouse coordinates and applies spring-interpolated 3D rotation (`rotateX`, `rotateY`) with smooth depth scaling on hover.

| Parameter | Value |
|---|---|
| Perspective | `1000px` 3D viewport |
| Spring Config | `stiffness: 300` · `damping: 25` · `mass: 0.5` |
| Hardware Accel. | `will-change: transform` + `transformStyle: preserve-3d` (no `overflow: hidden` on tilt layers) |

### `02` MagneticButton

Interactive CTAs use proximity-attraction physics — buttons draw toward the cursor as it enters their radius, for tactile, weighted feedback.

### `03` HighlightText — Auto-Renderer

A regex-driven keyword highlighter. Detects technical terms (`LLM`, `REST APIs`, `CI/CD`, `Python`, `PostgreSQL`, etc.) on the fly and wraps them in accent styling with interactive glow states.

### `04` Scroll-Aware Frosted Navbar

| State | Behavior |
|---|---|
| At top (`y = 0`) | Fully transparent, `0px` blur — preserves the sharp background noise grid |
| Scrolled (`y > 8px`) | Transitions to `rgba(8, 8, 8, 0.75)` with `20px` backdrop blur, tuned to avoid conflicting stacking-context isolation |

<br />

---

<div align="center">

## 03 — Design System

### Color Palette

</div>

<div align="center">

| Preview | Token | Hex | Role |
|:---:|---|---|---|
| ![#080808](https://img.shields.io/badge/-%20%20%20%20%20%20-080808?style=flat-square) | **Canvas** | `#080808` | Main dark background |
| ![#111111](https://img.shields.io/badge/-%20%20%20%20%20%20-111111?style=flat-square) | **Surface** | `#111111` | Elevated card surfaces |
| ![#F0F0F0](https://img.shields.io/badge/-%20%20%20%20%20%20-F0F0F0?style=flat-square) | **Primary** | `#F0F0F0` | Headline & primary text |
| ![#888888](https://img.shields.io/badge/-%20%20%20%20%20%20-888888?style=flat-square) | **Secondary** | `#888888` | Muted subtitles & labels |
| ![#B9FF66](https://img.shields.io/badge/-%20%20%20%20%20%20-B9FF66?style=flat-square) | **Electric Lime** | `#B9FF66` | Accent & focus highlights |

### Typography

| Role | Family | Weights | Details |
|---|---|---|---|
| Display / Headlines | `Bricolage Grotesque` | `800` Extrabold | Optical sizing enabled, tight tracking (`-0.03em`) |
| Body / Interface | `Inter` | `400` · `500` · `600` | High-legibility UI scaling |

</div>

<br />

---

<div align="center">

## 04 — Architecture & Directory Tree

</div>

```
portfoliowebsite/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout, fonts, metadata & viewport
│   │   ├── page.tsx             ← Main section orchestration
│   │   └── globals.css          ← Design tokens, glass utilities & keyframes
│   │
│   ├── components/
│   │   ├── navbar.tsx           ← Frosted glass nav & scroll-aware blur engine
│   │   ├── hero.tsx             ← Animated headline, rotating text loop & CTAs
│   │   ├── hero-canvas.tsx      ← WebGL ambient layer
│   │   ├── projects.tsx         ← Featured project grid with 3D tilt
│   │   ├── background.tsx       ← Work experience, education & tech chip cloud
│   │   ├── contact.tsx          ← CTA section & pill-button footer
│   │   ├── card-tilt.tsx        ← CardTilt3D engine (spring physics)
│   │   ├── magnetic-button.tsx  ← Cursor-attracted interactive wrapper
│   │   ├── highlight-text.tsx   ← Auto keyword accent renderer
│   │   ├── chip.tsx             ← Pill tag component
│   │   ├── cursor.tsx           ← Custom interactive cursor
│   │   ├── preloader.tsx        ← Entry sequence animation
│   │   └── theme-provider.tsx   ← Theme context manager
│   │
│   ├── hooks/
│   │   └── useIntersection.ts   ← Viewport gate for lazy rendering
│   │
│   └── providers/
│       └── lenis-provider.tsx   ← Smooth scrolling engine (Lenis)
│
└── public/
    ├── VedP_Resume.pdf          ← Professional resume document
    ├── nexdrop.png              ← Project previews
    └── profilepic.jpeg          ← Headshot media
```

<br />

---

<div align="center">

## 05 — Featured Projects

*Add project cards here — screenshot, stack badges, and a one-line pitch for each shipped project (e.g. NexDrop).*

</div>

<br />

---

<div align="center">

## 06 — Experience & Education

</div>

```
EXPERIENCE
├─ VisorFin Tech Services ─────────────────────────── [ Gurugram, IN | Jun 2025 – Feb 2026 ]
│  Role: Junior Full Stack Developer
│  • Built ~10 REST APIs in Node.js & Python handling legal and transactional data for 500+ accounts.
│  • Automated a daily data pipeline syncing 6,000+ fund entries, cutting 20+ hours of manual effort weekly.
│  • Shipped 12 native investment calculator components for Android (Kotlin) and iOS (Swift).
│
└─ Schoolhouse · Learn To Be ──────────────────────── [ Remote | 2023 – 2024 ]
   Role: STEM & CS Tutor
   • Conducted interactive Python workshops & tutored SAT Math, VEX Robotics, and CS fundamentals.
   • Maintained ~90% student retention through structured, project-based lesson plans.

EDUCATION
└─ The University of Texas at Dallas ───────────────── [ Richardson, TX | 2025 – 2029 ]
   Degree: B.S. in Computer Science (Minor in Marketing & Entrepreneurship)
   • 26th Place World Rank — International VEXU Robotics Championship
   • 1st Place National — TSA Web Development
   • Active Programmer — Comet Robotics
```

<br />

---

<div align="center">

## 07 — Tech Stack

</div>

<div align="center">

**Languages**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)

**Frontend & Mobile**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Backend & Databases**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

**AI, Machine Learning & DevOps**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

<br />

---

<div align="center">

## 08 — Local Development

</div>

**Prerequisites**
- Node.js `v20.0.0` or higher
- Package manager: `pnpm` (recommended), `npm`, or `yarn`

```bash
# 1. Clone repository
git clone https://github.com/VEDLEGENDARY/portfoliowebsite.git
cd portfoliowebsite

# 2. Install dependencies
pnpm install

# 3. Run development server (Turbopack)
pnpm dev
```

Navigate to `http://localhost:3000` to view the running application.

```bash
# Production build check
pnpm build
pnpm start
```

<br />

---

<div align="center">

```
╔═══════════════════════════════════════╗
║   Built with precision by Ved Patel   ║
║   © 2026  ·  All rights reserved      ║
╚═══════════════════════════════════════╝
```

[ved.sp@outlook.com](mailto:ved.sp@outlook.com) &nbsp;·&nbsp; [linkedin.com/in/ved-patel-1ab48b274](https://linkedin.com/in/ved-patel-1ab48b274) &nbsp;·&nbsp; [github.com/VEDLEGENDARY](https://github.com/VEDLEGENDARY)

</div>
