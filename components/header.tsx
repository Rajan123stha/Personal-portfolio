"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-20 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/90 md:px-6 px-4 ${
        scrolled ? "bg-background/100 shadow-sm" : "bg-background/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/">DevRajan</Link>
        </motion.div>

        <nav className="hidden md:flex gap-6">
          {["about", "skills", "experience", "projects", "contact"].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={`#${item}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
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
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {["about", "skills", "experience", "projects", "contact"].map(
                    (item) => (
                      <Link
                        key={item}
                        href={`#${item}`}
                        className="text-base font-medium py-2 transition-colors hover:text-primary"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    )
                  )}
                </nav>
                <div className="flex items-center gap-4 mt-8">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:contact@example.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
