"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#background" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const prev = lastYRef.current;
      lastYRef.current = y;

      if (y <= 40) {
        setVisible(true);
        setScrolled(false);
        return;
      }

      setScrolled(true);

      if (y < prev - 4) {
        // Scrolling up — show navbar
        setVisible(true);
      } else if (y > prev + 6) {
        // Scrolling down — hide navbar
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: visible ? 0 : -90 }}
      transition={{ duration: 0.42, ease }}
    >
      <nav
        className="flex items-center justify-between px-5 py-4 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-10 lg:px-16"
        style={{
          backgroundColor: scrolled ? "var(--color-nav-blur)" : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(18px) saturate(160%)"
            : "none",
        }}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 focus:outline-none">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-black transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
          >
            VP
          </div>
          <span
            className="text-sm font-bold tracking-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            Ved Patel
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[15px] font-medium transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-muted)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-hover)";
              e.currentTarget.style.color = "var(--color-foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-muted)";
            }}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href="/VedP_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn hidden items-center gap-1.5 px-4 py-2 text-xs font-semibold sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href="mailto:ved.sp@outlook.com"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--color-accent-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
            }}
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Hire me</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
