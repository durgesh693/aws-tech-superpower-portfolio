"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Terminal, 
  Database, 
  Binary, 
  Table, 
  LineChart, 
  BarChart2, 
  BarChart,
  BarChart3,
  Cpu, 
  TrendingUp, 
  Layers, 
  PieChart, 
  Sliders, 
  Filter, 
  CheckCircle, 
  CheckCircle2,
  Brain, 
  Zap, 
  Server, 
  Layout, 
  HardDrive, 
  Cloud,
  GitBranch, 
  Github, 
  Code, 
  Box,
  Code2,
  Globe,
  FileSpreadsheet,
  Workflow,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Database,
  Binary,
  Table,
  LineChart,
  BarChart2,
  BarChart,
  BarChart3,
  Cpu,
  TrendingUp,
  Layers,
  PieChart,
  Sliders,
  Filter,
  CheckCircle,
  CheckCircle2,
  Brain,
  Zap,
  Server,
  Layout,
  HardDrive,
  Cloud,
  GitBranch,
  Github,
  Code,
  Box,
  Code2,
  Globe,
  FileSpreadsheet,
  Workflow,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Proficiency"
          title="Skills & Technologies"
          subtitle="Categorized technology stack across Data Analysis, Machine Learning, Deep Learning, Cloud, and Software Engineering workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border/40 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-xs font-mono text-muted-foreground font-normal">
                    {cat.skills.length} Tech
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => {
                    const IconComp = skill.iconName && iconMap[skill.iconName] 
                      ? iconMap[skill.iconName] 
                      : Code2;

                    return (
                      <div
                        key={skillIdx}
                        className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default ${
                          skill.featured
                            ? "bg-sky-500/10 border-sky-500/30 text-sky-300 hover:bg-sky-500/20"
                            : "bg-secondary/60 border-border/60 text-foreground hover:bg-secondary"
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-muted-foreground/70 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Engineering Competency
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}