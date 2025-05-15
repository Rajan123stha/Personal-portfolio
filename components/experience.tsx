"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Fullstack Developer Intern",
      company: "HiddenLayer Pvt. Ltd.",
      period: "Aug, 2024 - Present",
      description:
        "Tracked and reported website bugs to developers for timely resolution. Collaborated with the Marketing Manager to execute SEO strategies and improve website visibility."

    },
    {
      title: "Assistant Website Manager",
      company: "Thames International College",
      period: "April, 2023 — November, 2023",
      description:
        "",
    },
    
  ];

  return (
    <motion.section
      id="experience"
      className="py-16 bg-muted"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative pl-8 border-l-2 border-primary ${
                index !== experiences.length - 1 ? "pb-8" : ""
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <motion.div
                className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
              />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-primary font-medium">{exp.company}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
