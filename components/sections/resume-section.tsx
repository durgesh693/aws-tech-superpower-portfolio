"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FileText, Download, Check, Eye } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-32 relative">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Official Curriculum Vitae"
          title="Professional Resume"
          subtitle="Download or preview the official technical resume outlining academic history, machine learning projects, and technical proficiencies."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950 to-indigo-950/80 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                Updated PDF Document
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {profileData.name} — Technical Resume
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Complete overview engineered for recruiters, technical hiring managers, and internship coordinators. Features detailed breakdowns of ML methodologies, tools, and project outcomes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Data Science & Analytics Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Machine Learning Case Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Python & SQL Proficiencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>BCA Academic Track (2024-2027)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <FileText className="w-7 h-7" />
              </div>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full gap-2 shadow-sky-500/20">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                Preview in New Tab
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}