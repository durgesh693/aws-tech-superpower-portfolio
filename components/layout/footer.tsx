"use client";

import { siteConfig } from "@/data/site-config";
import { profileData } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Code2, Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background/80 py-12 md:py-16 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border/40">
          
          {/* Left Column: Brand, Short Text & Availability */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-sky-500/20">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-foreground text-lg leading-tight">
                  {profileData.name}
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  Data Scientist | Data Analyst | Machine Learning Enthusiast
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              Building intelligent solutions with Data Science, Machine Learning, and AI while continuously learning modern technologies.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Data Science, Machine Learning, Data Analytics, and AI Internship opportunities.</span>
            </div>
          </div>

          {/* Middle Column: Quick Links & Direct Contact */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Quick Links & Contact
            </h4>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-muted-foreground">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-sky-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-muted-foreground border-t border-border/40">
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{profileData.email}</span>
              </a>
              <a href={`tel:${profileData.phonePlaceholder}`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>{profileData.phonePlaceholder}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social Networks & Back To Top */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-3 md:text-right">
                Social Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/60 bg-card hover:bg-accent text-foreground transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/60 bg-card hover:bg-accent text-foreground transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                </a>
                <a
                  href={profileData.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/60 bg-card hover:bg-accent text-foreground transition-all shadow-sm"
                  aria-label="Kaggle Profile"
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl border border-border/60 bg-card hover:bg-accent transition-all shadow-sm"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <p>© 2026 Durgesh Maurya. All Rights Reserved.</p>

          <p className="flex items-center gap-1.5 justify-center">
            Designed & Developed with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> using Next.js, React, TypeScript and Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}