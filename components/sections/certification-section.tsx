"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationSection() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Competencies"
          title="Certifications & Credentials"
          subtitle="Industry certifications validating specialization in data science, predictive analytics, and Python workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.featured && (
                    <Badge variant="default" className="gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-sky-400 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs font-mono text-muted-foreground mb-6">
                  Issued: {cert.issueDate} • ID: {cert.credentialIdPlaceholder}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                    Core Skills Demonstrated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 rounded bg-secondary text-[11px] font-medium text-foreground border border-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Credential Verified
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}