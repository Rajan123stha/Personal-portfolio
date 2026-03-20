"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Rajan123stha",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajan-shrestha-1624a1224/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your@email.com",
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative border-t border-border bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      <div className="container max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* ── Brand ── */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-xl font-bold tracking-tight">DevRajan</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Frontend & fullstack developer building scalable, CMS-driven web
              applications with clean architecture.
            </p>
          </motion.div>

          {/* ── Quick nav ── */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Social ── */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rajan Shrestha. All rights
            reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-muted/40 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
