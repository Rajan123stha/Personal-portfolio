"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "dgMarket",
    period: "June 2025 — Present",
    type: "Full-time",
    details:
      "Working on building and scaling web platforms for tender management and internal business operations. Focused on developing responsive frontend systems, integrating backend APIs, and collaborating with cross-functional teams to deliver production-ready applications.",
    bullets: [
      "Developed and maintained the dgMarket platform, enabling users to browse and publish tenders with a structured and user-friendly interface.",
      "Implemented role-based workflows by integrating frontend with backend APIs, supporting multiple user roles and secure data handling.",
      "Collaborated with backend developers and product teams to build and improve internal tools for business operations and workflow management.",
      "Worked closely with SEO and performance teams to optimize application speed, accessibility, and search engine visibility.",
      "Integrated Google Analytics to track user behavior, monitor traffic, and support data-driven decisions for improving user experience and performance.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company: "HiddenLayer Pvt. Ltd.",
    period: "Aug 2024 — Feb 2025",
    type: "Full-time Internship",
    details:
      "Working on a web app for AI model monitoring and management, built with React.js, Tailwind CSS, and Payload CMS. Deployed on AWS S3 with CloudFront and SSL.",
    bullets: [
      "Designed and developed a fast, responsive frontend using React.js and Tailwind CSS, integrated with Payload CMS for dynamic content updates.",
      "Deployed the app on AWS S3 with CloudFront and SSL, optimizing performance, security, and editorial workflows.",
      "Translated Figma designs into pixel-perfect UI, enhancing UX and reducing overall development time.",
    ],
  },
  {
    title: "Assistant Website Manager",
    company: "Thames International College",
    period: "Apr 2023 — Nov 2023",
    type: "Part-time",
    details:
      "Responsible for managing and maintaining the college's website, ensuring optimal performance and user experience.",
    bullets: [
      "Tracked and reported website bugs to developers for timely resolution.",
      "Collaborated with the Marketing Manager to execute SEO strategies and improve website visibility.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
              Career
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-border"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              {/* Timeline dot */}
              <div className="relative flex-shrink-0 mt-5">
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.2 + 0.15 * index,
                    type: "spring",
                  }}
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="flex-1 mb-2 rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-medium">
                      <Building2 className="h-3.5 w-3.5" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                    <span className="inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-4 h-px bg-border" />

                {/* Details */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.details}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
