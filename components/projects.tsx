"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const projects = [
    {
      title: "ApplyLeap",
      description:
        "ApplyLeap website using React for the frontend and Payload CMS as the backend. Implemented a custom subdomain for the backend and hosted the website on AWS. A platform for students to get all the necessary information about studying abroad.",
      image: "image/applyleap1.png",
      skills: ["React", "Payload", "Wagtail", "AWS", "Tailwind", "Figma"],
      demoLink: "https://applyleap.com",
      codeLink: "https://github.com/Rajan123stha/applyleap",
      category: "react",
    },
    {
      title: "YouTube Comment Sentiment Analyzer",
      image: "/image/analyzer.png",
      description:
        "Tool to classify YouTube comments as positive, negative, or neutral using the Naive Bayes algorithm. The frontend is built using React and communicates with a Python-based backend via RESTful APIs.",
      skills: ["React", "Python", "Naive Bayes", "JavaScript", "RESTful API"],
      category: "ai",
      demoLink: "https://proud-beach-0f5f24200.6.azurestaticapps.net/",
      codeLink: "https://github.com/Rajan123stha/comment-sentiment-analyser",
    },
    {
      title: "Student Study Point",
      image: "image/studypoint.png",
      description:
        "This allows students to access academic resources like notes, syllabi, and past papers. Admin dashboard for content management and advanced search and filter features.",
      skills: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
      category: "fullstack",
      demoLink: "https://thankful-pond-0e378f91e.6.azurestaticapps.net/",
      codeLink: "https://github.com/Rajan123stha/student-study-point",
    },
    {
      title: "Resume Analyzer Tool",
      image: "image/resumeanalyze.png",
      description:
        "Built a web-based tool that compares resumes with job descriptions to identify missing keywords and suggest improvements using natural language processing (NLP).",
      skills: ["React", "NLP", "Tailwind CSS", "TypeScript"],
      category: "ai",
      demoLink: "https://victorious-mud-03e11ed00.6.azurestaticapps.net/",
      codeLink: "https://github.com/Rajan123stha/resume-analyzer",
    },
    {
      title: "WordPress Theme for Portfolio",
      image: "image/theme.png",
      description:
        "Developed a custom, reusable WordPress theme for a portfolio website, enabling users to update content like experience and project details via the WordPress admin dashboard.",
      skills: ["WordPress", "HTML", "JavaScript", "Theme Development"],
      category: "CMS Projects",
      demoLink: "https://lemonchiffon-caribou-673567.hostingersite.com/",
      codeLink: "#",
    },
    {
      title: "Fully Functional Ecommerce Website",
      image: "image/ecommerce.png",
      description:
        "Created a fully functional e-commerce platform featuring product catalog, cart, checkout, and payment gateway integration. Focused on a responsive and user-friendly UI.",
      skills: ["React", "Express", "MongoDB", "Payment Gateway"],
      category: "fullstack",
      codeLink:
        "https://github.com/Rajan123stha/Ecommerce-system-cretiveCrefted",
      demoLink: "#",
    },
    {
      title: "Hostel Management System",
      image: "image/project.jpg",
      description:
        "Project to help hostel administrators manage students, rooms, and assignments. Included features like room allocation, student records, and dashboard.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
      category: "Academic Projects",
      codeLink: "https://github.com/Rajan123stha/Hostel-Management-System",
      demoLink: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="py-16 container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <Tabs defaultValue="all" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="ai">AI/ML</TabsTrigger>
        </TabsList>

        {["all", "react", "fullstack", "ai"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects
                .filter(
                  (project) =>
                    category === "all" || project.category === category
                )
                .map((project, index) => (
                  <motion.div key={index} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group-hover:border-primary transition-colors"
          >
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group-hover:border-primary transition-colors"
          >
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
