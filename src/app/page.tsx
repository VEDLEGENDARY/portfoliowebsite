"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const heroStats = [
  { value: "500+", label: "accounts supported at VFIN" },
  { value: "9,000+", label: "transactions processed" },
  { value: "6,000+", label: "mutual fund entries automated" },
  { value: "30-40%", label: "traffic and sales lift from client redesigns" },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI / ML Systems",
    text: "Computer vision, text classification, and analysis pipelines built to turn raw data into decisions.",
  },
  {
    icon: BarChart3,
    title: "Fintech Automation",
    text: "REST APIs, transactional workflows, and daily data operations built for reliability and scale.",
  },
  {
    icon: Rocket,
    title: "Product Delivery",
    text: "Fast iteration across web, Android, and iOS experiences with a focus on shippable features.",
  },
  {
    icon: ShieldCheck,
    title: "Systems Thinking",
    text: "Clean architecture, maintainable code, and deployment-aware design for production environments.",
  },
];

const educationHighlights = [
  "Comet Robotics - Programmer",
  "26th Rank at The International VEXU Robotics Competition",
  "1st Place National Win at TSA for Website Development",
];

const experienceEntries = [
  {
    role: "Junior Full Stack Developer Intern",
    org: "VisorFin Tech Services (VFIN)",
    time: "Jun 2025 - Feb 2026",
    place: "Gurugram, Delhi NCR",
    icon: BriefcaseBusiness,
    accent: "from-cyan-400/20 to-blue-500/5",
    bullets: [
      "Architected about 10 RESTful APIs using Node.js and Python to securely process legal and transactional data for 500+ accounts and 9,000+ transactions.",
      "Automated 6,000+ mutual fund data entries to update daily through cloud hosting with Python and PostgreSQL, removing 20+ hours of manual work each week.",
      "Integrated 12 systematic and interactive investment-plan calculators into Kotlin Android and Swift iOS apps, delivering features one day ahead of schedule.",
    ],
  },
  {
    role: "Tutor",
    org: "Schoolhouse & Learn To Be",
    time: "2023 - 2024",
    place: "Remote",
    icon: GraduationCap,
    accent: "from-violet-400/20 to-fuchsia-500/5",
    bullets: [
      "Developed and taught curriculum for SAT Math, VEX robotics, and Computer Science, leading to an average score increase of 50 points.",
      "Designed interactive coding workshops with Python projects and exercises that improved confidence and class participation.",
      "Maintained about 90% student retention across sessions by keeping lessons structured, practical, and engaging.",
    ],
  },
];

const projects = [
  {
    name: "NexDrop",
    category: "MLH-winning hackathon project",
    description:
      "Computer vision and ML pipeline that extracts building roof areas from satellite imagery and scores ROI for water-harvesting lead generation.",
    details:
      "Built with OpenCV, TensorFlow, and Scikit-learn, plus automated CI/CD pipelines around precipitation history and roof surface area analysis.",
    image: "/nexdrop.png",
    link: "https://github.com/nshah2006/NexDrop/",
    linkLabel: "Source",
    accent: "from-cyan-500/18 via-slate-900 to-slate-950",
    tags: ["OpenCV", "TensorFlow", "Scikit-learn", "Automation"],
    featured: true,
  },
  {
    name: "TruScope",
    category: "Fine-tuned AI model + Chrome extension",
    description:
      "Bias and clickbait detection stack spanning a web app and browser extension, powered by a fine-tuned language model.",
    details: "Built as a public-facing product with a production app and Chrome Web Store release.",
    link: "https://truscope.app/",
    extraLink: "https://chromewebstore.google.com/detail/truscope/pncjbinbmlfgkgedabggpfgafomgjamn/",
    linkLabel: "Live App",
    extraLabel: "Chrome Store",
    accent: "from-violet-500/18 via-slate-900 to-slate-950",
    tags: ["AI", "Browser Extension", "Text Classification"],
  },
  {
    name: "NaviEats",
    category: "#1 nationally at TSA",
    description:
      "Backend web development project ranked first nationally, built to support a polished product experience.",
    details: "A performance-focused web solution with production-ready presentation and user flows.",
    link: "https://navieats.netlify.app/",
    linkLabel: "Live Demo",
    accent: "from-amber-500/18 via-slate-900 to-slate-950",
    tags: ["Web Dev", "Backend", "National Winner"],
  },
  {
    name: "VFIN",
    category: "Production fintech app",
    description:
      "API layer work that supported a live fintech product handling legal and transactional data.",
    details:
      "Shipped with scalable endpoints, daily automation, and calculators embedded into mobile app experiences.",
    link: "https://play.google.com/store/search?q=vfin&c=apps",
    linkLabel: "Play Store",
    accent: "from-emerald-400/18 via-slate-900 to-slate-950",
    tags: ["Node.js", "Python", "PostgreSQL", "Mobile APIs"],
  },
  {
    name: "Navix Designs",
    category: "Client websites and redesigns",
    description:
      "Built custom React and TypeScript sites for clients, including redesigns that improved traffic and sales.",
    details:
      "Used React, TypeScript, Tailwind, Express.js, PostgreSQL, Supabase, and Next.js in delivery cycles tuned for measurable outcomes.",
    accent: "from-rose-500/18 via-slate-900 to-slate-950",
    tags: ["React", "Next.js", "Express", "PostgreSQL"],
  },
];

const featuredProject = projects[0] as (typeof projects)[number] & { image: string; link: string; linkLabel: string };
const secondaryProjects = projects.slice(1);

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-12%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/18 blur-3xl" />
        <div className="absolute bottom-[-16%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-6 sm:px-10 lg:px-12">
        <motion.header
          className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.18)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">Ved Patel</p>
              <p className="text-xs text-slate-400">Resume, projects, and proof of work</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="/VedP_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              <Download className="h-4 w-4" />
              Resume PDF
            </a>
            <a
              href="mailto:ved.sp@outlook.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </motion.header>

        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div className="space-y-8" variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              <BadgeCheck className="h-4 w-4" />
              Computer Science sophomore at UTD
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
              I build software that feels fast, looks expensive, and solves real problems.
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Innovative Computer Science sophomore at The University of Texas at Dallas with hands-on experience building scalable fintech APIs, automated data pipelines, and award-winning computer vision solutions. I like shipping products that make technical depth feel effortless.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <a href="/VedP_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Open Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                See Projects
                <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/8">
                  <div className="text-3xl font-black tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}>
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_32%)]" />
              <div className="relative grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <Image src="/profilepic.jpeg" alt="Ved Patel portrait" width={900} height={1200} priority className="h-full w-full object-cover object-top" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Current focus</p>
                        <p className="mt-1 text-sm font-semibold text-white">Fintech, AI systems, and high-clarity product design</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">At a glance</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 text-cyan-200" /><div><p className="text-sm text-slate-300">Irving, TX 75063</p><p className="text-sm text-slate-400">Based in the Dallas area</p></div></div>
                      <div className="flex items-start gap-3"><CalendarDays className="mt-1 h-4 w-4 text-cyan-200" /><div><p className="text-sm text-slate-300">UT Dallas, Aug 2025 - May 2029</p><p className="text-sm text-slate-400">B.S. in Computer Science</p></div></div>
                      <div className="flex items-start gap-3"><Globe2 className="mt-1 h-4 w-4 text-cyan-200" /><div><p className="text-sm text-slate-300">Production-minded builder</p><p className="text-sm text-slate-400">Web, mobile, backend, and ML</p></div></div>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-white/5 to-violet-300/10 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Download</p>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div><p className="text-lg font-bold text-white">Resume PDF</p><p className="text-sm text-slate-300">Clean, recruiter-ready version</p></div>
                      <a href="/VedP_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition hover:scale-105" aria-label="Open resume PDF"><Download className="h-5 w-5" /></a>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Signal</p>
                    <div className="mt-3 flex items-center gap-3 text-sm text-slate-300"><Award className="h-4 w-4 text-cyan-200" />Award-winning competition work and shipped production features.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12 lg:py-16">
        <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          {capabilities.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeUp} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></div>
                <h2 className="mt-5 text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="background" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <motion.div className="mb-10 flex items-end justify-between gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">Resume snapshot</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Background that reads like a build log, not a buzzword list.</h2>
          </div>
          <a href="/VedP_Resume.pdf" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/10 lg:inline-flex">
            View resume
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><GraduationCap className="h-5 w-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Education</p>
                <h3 className="mt-1 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>The University of Texas at Dallas</h3>
              </div>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div><p className="text-lg font-bold text-white">Bachelor&apos;s, Computer Science</p><p className="mt-1 text-sm text-slate-400">Richardson, TX</p></div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">Aug 2025 - May 2029</div>
              </div>
              <div className="mt-6 space-y-3">
                {educationHighlights.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" /><span>{item}</span></div>)}
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
            {experienceEntries.map((entry) => {
              const Icon = entry.icon;
              return (
                <motion.article key={entry.org} variants={fadeUp} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent}`} />
                  <div className="relative">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-200"><Icon className="h-5 w-5" /></div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Experience</p>
                          <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{entry.role}</h3>
                          <p className="mt-1 text-lg font-semibold text-slate-200">{entry.org}</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right text-sm text-slate-300"><p className="font-semibold text-white">{entry.time}</p><p className="mt-1">{entry.place}</p></div>
                    </div>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                      {entry.bullets.map((bullet) => <li key={bullet} className="flex gap-3 rounded-2xl border border-white/5 bg-slate-950/50 p-4"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" /><span>{bullet}</span></li>)}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <motion.div className="mb-10 flex items-end justify-between gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">Selected projects</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Work that earns attention before you even scroll to the details.</h2>
          </div>
          <p className="hidden max-w-xl text-sm leading-7 text-slate-400 lg:block">These projects mix ML, frontend, backend, and product thinking. Every card below comes from your resume or project notes.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:col-span-7" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
            <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.accent}`} />
            <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[22rem] overflow-hidden">
                <Image src={featuredProject.image} alt={featuredProject.name} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Featured build</p>
                <h3 className="mt-3 text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{featuredProject.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{featuredProject.category}</p>
                <p className="mt-6 text-base leading-8 text-slate-200">{featuredProject.description}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{featuredProject.details}</p>
                <div className="mt-6 flex flex-wrap gap-2">{featuredProject.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">{tag}</span>)}</div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={featuredProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                    {featuredProject.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6 lg:col-span-5">
            {secondaryProjects.map((project) => (
              <motion.article key={project.name} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{project.name}</h3>
                    </div>
                    {project.name === "VFIN" ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 p-2">
                        <Image src="/vfinapp_logo.png" alt="VFIN logo" width={48} height={48} className="h-full w-full object-contain" />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-200"><Layers3 className="h-5 w-5" /></div>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">{project.description}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.details}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                        {project.linkLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.extraLink ? (
                      <a href={project.extraLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10">
                        {project.extraLabel}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <motion.div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(139,92,246,0.16),rgba(15,23,42,0.95))] p-8 shadow-2xl shadow-cyan-950/40 sm:p-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100">Contact</p>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                If the work looks sharp enough, let&apos;s make the next version even better.
              </h2>
              <p className="text-base leading-8 text-slate-200 sm:text-lg">
                Open to opportunities where product quality matters and the implementation needs to stand up under real usage.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a href="mailto:ved.sp@outlook.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                <Mail className="h-4 w-4" />
                ved.sp@outlook.com
              </a>
              <a href="/VedP_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Computer Science at UTD",
              "Fintech and automation experience",
              "Computer vision and ML project wins",
              "Building polished products end-to-end",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
