"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "rajan1234stha@gmail.com",
    href: "mailto:rajan1234stha@gmail.com",
  },
  // {
  //   icon: Linkedin,
  //   label: "LinkedIn",
  //   value: "linkedin.com/in/your-link",
  //   href: "https://linkedin.com/in/your-link",
  // },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   value: "github.com/your-link",
  //   href: "https://github.com/your-link",
  // },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgzznvz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      className="relative py-28 overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="container relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 space-y-3">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── LEFT: info panel ── */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently open to opportunities in{" "}
                <span className="text-foreground font-medium">frontend</span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  fullstack development
                </span>
                .
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                If you're looking for someone who can build scalable, CMS-driven
                web applications with clean architecture — let's talk.
              </p>
              <p className="text-base font-medium text-foreground">
                Let's build something impactful.
              </p>
            </div>
            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-muted/40 px-5 py-4 transition-colors hover:bg-muted hover:border-primary/30"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: form ── */}
          <motion.div
            className="rounded-2xl border border-border bg-muted/30 p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex min-h-[100px] w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 gap-2 font-medium"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </motion.section>
  );
}
