"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="w-10 h-10 rounded-lg border border-border/50 text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 p-6 flex flex-col justify-between animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col space-y-3 mt-4">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-sky-400 border border-sky-500/20 font-semibold"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-border/50 flex flex-col gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full"
            >
              <Button variant="default" className="w-full justify-center gap-2">
                Download Resume
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profileData.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}