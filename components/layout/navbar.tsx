"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { profileData } from "@/data/profile";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FileText } from "lucide-react";

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const sectionIds = siteConfig.navItems.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-lg px-2 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            DM
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-foreground text-base group-hover:text-sky-400 transition-colors">
              Durgesh Maurya
            </span>
            <span className="text-[10px] text-muted-foreground font-mono -mt-1 hidden sm:inline-block">
              Data Science & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-border/40 shadow-sm">
          {siteConfig.navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-sky-400 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-sky-500/10 dark:bg-sky-400/10 rounded-full border border-sky-500/20 -z-10" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/60 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNav activeSection={activeSection} />
      </div>
    </header>
  );
}