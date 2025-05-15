"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
            "Frontend developer with expertise in HTML, CSS, and JavaScript, proficient in React, and a solid foundation in Express an MongoDB. Experienced in building websites with WordPress and Wagtail as backends and deploying them on AWS. Passionate about creating seamless web experiences, staying updated with industry trends, and excelling in collaborative environments.",
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
            <span>Kathmandu, Nepal</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
