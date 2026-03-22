"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Travel Management System Trabra (Fullstack)",
    image: "image/trabra.png",
    description:
      "Built a fullstack travel management system using Next.js to handle both website content and internal business operations. The platform allows admins to update website content dynamically while managing client inquiries, follow-ups, and complete booking workflows through a centralized dashboard.",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "RAG"],
    category: "fullstack",
    codeLink: "#",
    demoLink: "https://tour.alpineramble.com/",
  },
  {
    title: "dgMarket – Tender Management Platform",
    image: "image/dgmarket.png",
    description:
      "Developed a full-featured tender management platform where users can browse and publish tenders. Built the frontend using React and collaborated with backend systems to implement multi-role authentication, secure workflows, and dynamic data handling. Also worked closely with the SEO team to improve performance and search visibility.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Redux", "REST API", "SEO"],
    category: "react",
    demoLink: "https://webdg.dgmarket.com/",
    codeLink: "#",
  },
  {
    title: "Consultancy Website Platform",
    image: "image/consultancy.png",
    description:
      "Designed and developed a responsive consultancy website tailored to business requirements, featuring structured destination pages, blog system, and integrated contact workflows. Focused on performance, clean UI/UX, and scalability for future content expansion.",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    category: "react",
    codeLink: "#",
    demoLink: "https://staredum.com/",
  },
  {
    title: "YouTube Comment Sentiment Analyzer",
    image: "/image/sentiment.png",
    description:
      "Classifies YouTube comments as positive, negative, or neutral using the Naive Bayes algorithm. React frontend communicating with a Python backend via RESTful APIs.",
    skills: ["React", "Python", "Naive Bayes", "JavaScript", "RESTful API"],
    category: "ai",
    demoLink: "https://comment-sentiment-analyser-rose.vercel.app/",
    codeLink: "https://github.com/Rajan123stha/comment-sentiment-analyser",
  },
  {
    title: "Student Study Point",
    image: "image/studypoint.png",
    description:
      "Academic resource platform with notes, syllabi, and past papers. Includes admin dashboard for content management and advanced search and filter features.",
    skills: ["React", "Express", "Node", "Tailwind CSS", "TypeScript"],
    category: "fullstack",
    demoLink: "https://edu-resources-mocha.vercel.app/",
    codeLink: "https://github.com/Rajan123stha/EduResources",
  },

  // {
  //   title: "ApplyLeap",
  //   description:
  //     "A platform for students to get all the necessary information about studying abroad. Built with React and Payload CMS, hosted on AWS with a custom subdomain.",
  //   image: "image/applyleap1.png",
  //   skills: ["React", "Payload", "Wagtail", "AWS", "Tailwind", "Figma"],
  //   demoLink: "https://applyleap.com",
  //   codeLink: "https://github.com/Rajan123stha/applyleap",
  //   category: "react",
  // },

  // {
  //   title: "Resume Analyzer Tool",
  //   image: "image/resumeanalyze.png",
  //   description:
  //     "Compares resumes with job descriptions to identify missing keywords and suggest improvements using natural language processing (NLP).",
  //   skills: ["React", "NLP", "Tailwind CSS", "TypeScript"],
  //   category: "ai",
  //   demoLink: "https://resume-analyzer-kohl.vercel.app/",
  //   codeLink: "https://github.com/Rajan123stha/ResumeAnalyzer",
  // },

  // {
  //   title: "Fullstack Ecommerce Platform",
  //   image: "image/ecommerce.png",
  //   description:
  //     "Fully functional e-commerce platform featuring product catalog, cart, checkout, and payment gateway integration with a responsive and user-friendly UI.",
  //   skills: ["React", "Express", "MongoDB", "Payment Gateway"],
  //   category: "fullstack",
  //   codeLink: "https://github.com/Rajan123stha/Ecommerce-system-cretiveCrefted",
  //   demoLink: "#",
  // },
  // {
  //   title: "Hostel Management System",
  //   image: "image/project.jpg",
  //   description:
  //     "Helps hostel administrators manage students, rooms, and assignments. Includes room allocation, student records, and a management dashboard.",
  //   skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  //   category: "fullstack",
  //   codeLink: "https://github.com/Rajan123stha/Hostel-Management-System",
  //   demoLink: "#",
  // },
];

const tabs = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ai", label: "AI / ML" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active,
  );

  return (
    <motion.section
      id="projects"
      className="relative py-28 overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative accents */}
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
        className="pointer-events-none absolute -top-32 -left-20 h-[400px] w-[400px] rounded-full bg-primary/4 blur-[90px]"
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 space-y-3">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-base text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            A selection of things I've built — from CMS-driven platforms to
            AI-powered tools.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                active === tab.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filtered.map((project, index) => (
            <motion.div key={project.title + index} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover links overlay */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          {project.demoLink !== "#" && (
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white transition-colors shadow"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          )}
          {project.codeLink !== "#" && (
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white transition-colors shadow"
            >
              <Github className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold text-foreground leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1 mt-auto">
          {project.demoLink !== "#" && (
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-2 text-xs font-medium text-foreground hover:bg-muted hover:border-primary/40 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          )}
          {project.codeLink !== "#" && (
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-2 text-xs font-medium text-foreground hover:bg-muted hover:border-primary/40 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
