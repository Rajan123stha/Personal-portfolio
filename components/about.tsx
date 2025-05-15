"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-muted py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container space-y-6">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "I'm a passionate frontend developer with 5+ years of experience creating modern and responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks like Tailwind.",
            "My journey in web development started when I built my first website in college. Since then, I've worked with startups and established companies to deliver high-quality digital products.",
            "When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

