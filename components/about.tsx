"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Globe, Database, Cloud, Layers } from "lucide-react";

const skills = [
  { icon: Code2, label: "React / Next.js & JavaScript / TypeScript" },
  { icon: Globe, label: "WordPress & Wagtail CMS" },
  { icon: Database, label: "Express & MongoDB" },
  { icon: Cloud, label: "AWS Cloud Deployments" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/4 blur-[100px]"
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* ── Two-column grid ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── LEFT COLUMN: text + stats ── */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crafting seamless{" "}
              <span className="text-primary">web experiences</span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              className="text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend developer with expertise in HTML, CSS, and JavaScript,
              proficient in React, and a solid foundation in Express and
              MongoDB. Experienced in building websites with WordPress and
              Wagtail as backends and deploying them on AWS.
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Passionate about creating polished interfaces, staying current
              with industry trends, and thriving in collaborative, fast-moving
              teams.
            </motion.p>

            {/* Location */}
            <motion.div
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span>Kathmandu, Nepal</span>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: skill cards ── */}
          <div className="space-y-6">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Core Stack
            </motion.p>

            <div className="space-y-3">
              {skills.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-muted/40 px-5 py-4 transition-colors hover:bg-muted hover:border-primary/30"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
