"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AIHeroGraphic } from "@/components/graphics/ai-hero-graphic";
import { 
  ArrowDown, 
  FileText, 
  Github, 
  Linkedin, 
  Code2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden glow-mesh"
    >
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <Badge variant="default" className="mb-6 px-3.5 py-1.5 gap-2 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
              <span>{profileData.badgeText}</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            <div className="mt-3 text-lg sm:text-xl font-semibold text-slate-300 dark:text-slate-300 flex items-center gap-2 flex-wrap">
              <span>Data Science Student</span>
              <span className="text-sky-500">•</span>
              <span>Machine Learning Enthusiast</span>
              <span className="text-indigo-500">•</span>
              <span>Data Analytics</span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {profileData.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 shadow-sky-500/25">
                  View Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="glass" size="lg" className="w-full sm:w-auto gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border/50 flex items-center gap-4 w-full">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/40"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/40"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/40"
                  aria-label="Kaggle Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <AIHeroGraphic />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-border/60 shadow-xl"
        >
          {profileData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sky-400 text-lg">{metric.suffix}</span>
              </div>
              <span className="mt-1 text-xs font-semibold text-foreground">
                {metric.label}
              </span>
              <span className="text-[11px] text-muted-foreground mt-0.5">
                {metric.description}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Explore Credentials</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
}