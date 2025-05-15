"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Code2, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Hero() {
  const words = [
    {
      text: "Build.",
    },
    {
      text: "Design.",
    },
    {
      text: "Deploy.",
    },
    {
      text: "Innovate.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 md:px-6 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-20 blur-3xl">
          <div className="aspect-square h-[30rem] rounded-full bg-gradient-to-tr from-primary to-purple-500" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-20 blur-3xl">
          <div className="aspect-square h-[30rem] rounded-full bg-gradient-to-tr from-blue-500 to-primary" />
        </div>
        <svg
          className="absolute right-0 top-0 opacity-10 md:opacity-20"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_2)">
            <path d="M400 0H0V400H400V0Z" fill="url(#paint0_radial_2_2)" />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_2_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200 200) rotate(90) scale(200)"
            >
              <stop stopColor="white" />
              <stop offset="0.569" stopColor="white" stopOpacity="0.569" />
              <stop offset="0.993" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_2_2">
              <rect width="400" height="400" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span>Available for work</span>
            </div>

            <div className="space-y-4">
              <motion.h1
                className="text-3xl md:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi <span className="wave">👋</span> , I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Rajan Shrestha
                </span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-2xl font-medium text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <TypewriterEffect
                  words={words}
                  className="text-xl md:text-2xl"
                />
              </motion.div>
            </div>

            <motion.p
              className="text-muted-foreground max-w-md text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I craft responsive websites where technology meets creativity.
              Frontend developer who loves building exceptional digital
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full px-6 py-2 shadow-lg transition-all hover:shadow-primary/30"
              >
                <Link href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-blue-600 transition-all duration-500" />
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                size="lg"
                className="group rounded-full border-primary/20 hover:border-primary/50 transition-colors"
              >
                <a
                  href="/Rajan Shrestha Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <Code className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <Code2 className="h-4 w-4" />
                </div>
              </div>
              <div className="text-sm">
                <span className="font-medium">1+ years</span> of experience in
                frontend development
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Profile image with frame */}
              <div className="relative z-10 h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full border-4 border-background bg-gradient-to-br from-background to-muted p-2 shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-full bg-background">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -right-2 top-10 flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-medium">React</span>
                </motion.div>

                <motion.div
                  className="absolute -left-6 top-1/3 flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-medium">TypeScript</span>
                </motion.div>
                <motion.div
                  className="absolute -right-4 bottom-1/4 flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-medium">JavaScript</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-0 left-10 flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-xs font-medium">Next.js</span>
                </motion.div>
              </div>

              {/* Featured project card */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
