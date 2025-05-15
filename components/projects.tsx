"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      category: "react",
    },
    {
      title: "Fitness Tracker App",
      description:
        "A mobile-first web application for tracking workouts, nutrition, and fitness goals with data visualization.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "React", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
      category: "nextjs",
    },
    {
      title: "Social Media Platform",
      description:
        "A full-stack social media platform with real-time messaging, post sharing, and user authentication.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "Socket.io"],
      demoLink: "#",
      codeLink: "#",
      category: "react",
    },
    {
      title: "Design System",
      description: "A comprehensive design system with reusable components, documentation, and theming capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Storybook", "Figma"],
      demoLink: "#",
      codeLink: "#",
      category: "ui",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
          <TabsTrigger value="ui">UI/UX</TabsTrigger>
        </TabsList>

        {["all", "react", "nextjs", "ui"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects
                .filter((project) => category === "all" || project.category === category)
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
  )
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
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="group-hover:border-primary transition-colors">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="group-hover:border-primary transition-colors">
            <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

