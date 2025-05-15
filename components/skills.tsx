"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const frontendSkills = [
    { name: "React", value: 95 },
    { name: "TypeScript", value: 90 },
    { name: "Tailwind CSS", value: 85 },
    { name: "Next.js", value: 80 },
    { name: "Node.js", value: 70 },
    { name: "Express.js", value: 80 },
    { name: "Redux.js", value: 70 },
    { name: "MongoDB", value: 65 },
  ]

  const otherSkills = [
    { name: "UI/UX Design", value: 75 },
    { name: "Figma", value: 70 },
    { name: "WordPress", value: 80 },
    { name: "Wagtail/Payload CMS", value: 70 },
    { name: "AWS", value: 60 },
    { name: "Git/Github", value: 85 },
    { name: "Testing (Jest, Cypress)", value: 75 },
  ]

  return (
    <motion.section
      id="skills"
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
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Programming Skills</h3>
          <div className="space-y-3">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                >
                  <Progress value={skill.value} className="h-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Other Skills</h3>
          <div className="space-y-3">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                >
                  <Progress value={skill.value} className="h-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

