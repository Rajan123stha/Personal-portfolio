"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  "about",
  "skills",
  "experience",
  "projects",
  "whyMe",
  "contact",
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Rajan123stha" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajan-shrestha-1624a1224/",
  },
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-40 w-full border-b border-border backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-sm bg-background/95" : "bg-background/60"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        <div className="container max-w-6xl mx-auto px-6 flex h-16 items-center justify-between">
          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="/"
              className="inline-flex items-center font-mono text-[22px] font-semibold tracking-tight"
            >
              <span className="bg-gradient-to-b from-indigo-500 to-violet-500 bg-clip-text text-[30px] font-light text-transparent">{`{`}</span>
              <span className="flex items-center gap-1.5 px-1">
                <span className="border-r border-border pr-1.5 text-[14px] uppercase tracking-widest text-foreground">
                  dev
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-[22px] font-bold text-transparent">
                  Rajan
                </span>
              </span>
              <span className="bg-gradient-to-b from-indigo-500 to-violet-500 bg-clip-text text-[30px] font-light text-transparent">{`}`}</span>
            </Link>
          </motion.div>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.2 }}
              >
                <Link
                  href={`#${item}`}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    active === item
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === item && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-muted"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{item}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* ── Desktop social + mobile toggle ── */}
          <div className="flex items-center gap-1">
            <motion.div
              className="hidden md:flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </Link>
              ))}
            </motion.div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-72 border-l border-border bg-background shadow-xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-1 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Menu
                </p>
                {navItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={`#${item}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        active === item
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                    >
                      <span className="capitalize">{item}</span>
                      {active === item && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6 border-t border-border space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Connect
                </p>
                <div className="flex gap-2">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{label}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
