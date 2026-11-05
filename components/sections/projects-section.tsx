"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectModal } from "@/components/ui/project-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink, Eye, Cpu } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Machine Learning", "Data Science", "Computer Vision"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Engineering Work"
          title="Machine Learning Case Studies"
          subtitle="Explore end-to-end Machine Learning pipelines, predictive analytics models, and interactive data applications built with real-world datasets."
        />

        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              className="rounded-full text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden group border-border/70 hover:border-sky-500/40 transition-all duration-300">
                <div>
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden flex items-center justify-center border-b border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/80 via-slate-900 to-indigo-950/80 opacity-90 group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center px-4 text-center">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-2 text-sky-400">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-sky-300 font-semibold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <Badge variant="default" className="text-[10px]">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-sky-400 font-medium">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 text-xs text-muted-foreground">
                    <p className="line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-secondary text-[11px] font-mono text-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-4 border-t border-border/40 flex items-center justify-between gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs gap-1.5 text-sky-400 hover:text-sky-300 p-0 h-auto"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Case Study
                  </Button>

                  <div className="flex items-center gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}