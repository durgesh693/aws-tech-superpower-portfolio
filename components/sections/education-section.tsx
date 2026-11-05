"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education Journey"
          subtitle="Foundational computer science degree curriculum combining theoretical principles with modern technology application."
        />

        <div className="relative border-l-2 border-sky-500/30 ml-4 md:ml-32 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-md">
                <GraduationCap className="w-4 h-4" />
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md shadow-sm hover:border-sky-500/30 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <Badge variant="default" className="w-fit">
                    {edu.status}
                  </Badge>

                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                
                <p className="text-sm font-semibold text-sky-400 mt-1 mb-4">
                  Expected Graduation: {edu.expectedGraduation}
                </p>

                <div className="space-y-2 pt-2 border-t border-border/40">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}