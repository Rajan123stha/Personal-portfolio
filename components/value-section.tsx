"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Server,
  Zap,
  Cloud,
  CheckCircle2,
  Layers,
  Rocket,
  Brain,
} from "lucide-react";

const learning = [
  { icon: Server, text: "Advanced system design for scalable applications" },
  { icon: Zap, text: "Performance optimization in React apps" },
  { icon: Layers, text: "Backend architecture using Node.js" },
  { icon: Cloud, text: "Cloud infrastructure and DevOps basics (AWS)" },
];

const reasons = [
  {
    icon: CheckCircle2,
    text: "Strong foundation in React and modern frontend development",
  },
  { icon: Rocket, text: "Experience with real-world CMS and AWS deployment" },
  { icon: Brain, text: "Ability to build complete systems, not just UI" },
  {
    icon: BookOpen,
    text: "Fast learner with focus on scalable and maintainable solutions",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ValueSection() {
  return (
    <motion.section
      id="whyMe"
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
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-primary/4 blur-[90px]"
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
              The Full Picture
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why Work With Me
          </motion.h2>

          <motion.p
            className="text-base text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            What I bring to the table today — and where I'm actively pushing my
            craft.
          </motion.p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ── LEFT: Why hire me ── */}
          <motion.div
            className="rounded-2xl border border-border bg-background p-8 space-y-6 shadow-sm"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Rocket className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What I Bring
                </p>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  Why Hire Me
                </h3>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Items */}
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── RIGHT: Currently Learning ── */}
          <motion.div
            className="rounded-2xl border border-border bg-background p-8 space-y-6 shadow-sm"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Always Growing
                </p>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  Currently Learning
                </h3>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Items */}
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {learning.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Badge */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary font-medium">
              🚀 Actively leveling up — not just maintaining.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
