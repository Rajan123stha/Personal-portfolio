"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  GitBranch,
  PenTool,
  FlaskConical,
  Globe,
} from "lucide-react";

const programmingSkills = [
  { name: "React", level: "Expert" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Advanced" },
  { name: "Redux", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
];

const otherSkills = [
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Figma", level: "Intermediate" },
  { name: "WordPress", level: "Advanced" },
  { name: "Wagtail / Payload CMS", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "Git / GitHub", level: "Advanced" },
  { name: "Jest & Cypress", level: "Intermediate" },
];

const levelConfig: Record<string, { color: string; pct: number }> = {
  Expert: { color: "bg-primary", pct: 100 },
  Advanced: { color: "bg-primary/70", pct: 80 },
  Intermediate: { color: "bg-primary/40", pct: 62 },
};

const groups = [
  {
    icon: Code2,
    label: "Programming",
    title: "Dev Stack",
    skills: programmingSkills,
  },
  {
    icon: Globe,
    label: "Tools & Platforms",
    title: "Tools & Platforms",
    skills: otherSkills,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-28 overflow-hidden bg-muted/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Horizontal rule accents */}
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
        className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-primary/4 blur-[90px]"
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 space-y-3">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Skills
          </motion.h2>

          <motion.p
            className="text-base text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Technologies and tools I work with — from frontend frameworks to
            cloud deployments.
          </motion.p>
        </div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap items-center gap-5 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {Object.entries(levelConfig).map(([label, { color }]) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {groups.map(({ icon: Icon, label, title, skills }, gi) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-border bg-background p-8 shadow-sm space-y-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * gi }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Skill rows */}
              <motion.ul
                className="space-y-3.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map(({ name, level }) => {
                  const { color, pct } = levelConfig[level];
                  return (
                    <motion.li
                      key={name}
                      variants={itemVariants}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {level}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.85,
                            ease: "easeOut",
                            delay: 0.15,
                          }}
                        />
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
