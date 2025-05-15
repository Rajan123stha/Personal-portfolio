"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <motion.footer
      className="border-t py-6 md:py-8 md:px-6 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-bold text-xl mb-2">DevRajan</div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rajan. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/Rajan123stha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rajan-shrestha-1624a1224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
