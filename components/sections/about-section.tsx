"use client";

import { motion } from "framer-motion";
import { profileData, aboutPillars } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Brain, 
  Cpu, 
  Code2, 
  Target, 
  Compass, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Brain,
  Cpu,
  Code2,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="About & Background"
          title="Engineering Mindset & Strategic Goals"
          subtitle="BCA student at Drona College of Education and Technology (Kumaun University, Nainital). Passionate about Data Science, Machine Learning, Data Analytics, and building clean, production-ready AI applications."
        />

        {/* Core Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-sky-500/20 bg-card/60 backdrop-blur-md relative overflow-hidden group hover:border-sky-500/40">
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-500" />
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Core Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {profileData.aboutMission}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-indigo-500/20 bg-card/60 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/40">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Career Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {profileData.careerGoal}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-cyan-500/20 bg-card/60 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Learning Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {profileData.learningPhilosophy}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

        </div>

        {/* Core Capabilities & Strengths */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center sm:text-left">
            Core Engineering Pillars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.iconName] || CheckCircle2;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sky-400 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground text-base mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}