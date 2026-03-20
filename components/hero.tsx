"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  { text: "Build." },
  { text: "Design." },
  { text: "Deploy." },
  { text: "Innovate." },
];

const floatingBadges = [
  { label: "React", color: "bg-sky-500", position: "absolute -right-4 top-12" },
  {
    label: "TypeScript",
    color: "bg-blue-600",
    position: "absolute -left-8 top-1/3",
  },
  {
    label: "Next.js",
    color: "bg-foreground",
    position: "absolute -bottom-2 left-8",
  },
  {
    label: "AWS",
    color: "bg-orange-500",
    position: "absolute -right-6 bottom-1/4",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-[100px]" />
        {/* Subtle dot-grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: text ── */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* Availability pill */}
            <motion.div
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for work
            </motion.div>

            {/* Name + typewriter */}
            <div className="space-y-3">
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi 👋, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_auto] animate-gradient">
                  Rajan Shrestha
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <TypewriterEffect
                  words={words}
                  className="text-xl md:text-2xl text-muted-foreground"
                />
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              className="text-base text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I specialize in{" "}
              <span className="text-foreground font-medium">
                React & Next.js
              </span>
              , modern CMS architectures (Wagtail / Payload), and{" "}
              <span className="text-foreground font-medium">
                AWS deployment
              </span>{" "}
              — helping businesses launch fast, manage content easily, and scale
              reliably.
            </motion.p>

            {/* Open to tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {["Frontend / Fullstack roles", "Freelance projects"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {tag}
                  </span>
                ),
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full px-6 shadow-md hover:shadow-primary/25 transition-shadow"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                size="lg"
                className="group rounded-full border-border hover:border-primary/50 transition-colors"
              >
                <a
                  href="/Rajan Shrestha Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Location + exp */}
            <motion.div
              className="flex items-center gap-5 text-sm text-muted-foreground pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Kathmandu, Nepal
              </div>
              <div className="h-3 w-px bg-border" />
              <div>
                <span className="font-semibold text-foreground">1+</span> yr
                frontend experience
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: image ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-full bg-blue-500/8 blur-2xl scale-125" />

              {/* Avatar frame */}
              <div className="relative z-10 h-72 w-72 md:h-80 md:w-80 lg:h-[380px] lg:w-[380px] rounded-full border-2 border-border bg-muted p-1.5 shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Rajan Shrestha"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Floating tech badges */}
                {floatingBadges.map(({ label, color, position }, i) => (
                  <motion.div
                    key={label}
                    className={`${position} flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 shadow-md`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.65 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <span className={`h-2 w-2 rounded-full ${color}`} />
                    <span className="text-xs font-semibold">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient {
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
