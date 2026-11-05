"use client";

import { Project } from "@/types/portfolio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, AlertCircle, Sparkles, Cpu, Layers } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl border-border/80 bg-slate-950/95 backdrop-blur-2xl">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="default">{project.category}</Badge>
            <span className="text-xs font-mono text-muted-foreground">Machine Learning Case Study</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-sky-400 font-medium">
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4 text-sm text-slate-300">
          <div>
            <h4 className="font-semibold text-foreground text-base mb-1.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              Executive Summary
            </h4>
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <h5 className="font-semibold text-rose-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem Statement
              </h5>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <h5 className="font-semibold text-emerald-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Solution
              </h5>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="outline" className="text-xs bg-white/5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-2">Key Engineering Features</h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
              {project.keyFeatures.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-slate-200 block mb-1">Technical Challenges</span>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-200 block mb-1">Future Roadmap</span>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.futureImprovements.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              Source Code
            </Button>
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demonstration
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}