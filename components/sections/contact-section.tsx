"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateContactForm, ContactFormState, ValidationErrors } from "@/lib/validation";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Direct Communication"
          title="Get In Touch"
          subtitle="Interested in hiring, internship opportunities, or technical collaboration? Send a direct message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am actively seeking Data Science and Data Analytics internship opportunities to apply my technical skills in real-world environments. Passionate about Machine Learning, AI engineering, and data-driven problem solving, I am always open to collaboration and learning from experienced engineering teams. Feel free to reach out to discuss potential roles, ideas, or technical projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Direct Email</span>
                  <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-foreground hover:text-sky-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Location</span>
                  <span className="text-sm font-semibold text-foreground">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-sky-500/40 text-xs font-semibold text-foreground transition-all"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  GitHub
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-sky-500/40 text-xs font-semibold text-foreground transition-all"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  LinkedIn
                </a>
                <a
                  href={profileData.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-sky-500/40 text-xs font-semibold text-foreground transition-all"
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Kaggle
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-lg">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Message Sent Successfully</h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Thank you for contacting Durgesh Maurya. Your message has been sent directly to my inbox and I will respond shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)} className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-medium text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={errors.name ? "border-rose-500/50" : ""}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-medium text-foreground">
                        Your Email
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={errors.email ? "border-rose-500/50" : ""}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder="Opportunity Inquiry / Project Discussion"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={errors.subject ? "border-rose-500/50" : ""}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={errors.message ? "border-rose-500/50" : ""}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <Button type="submit" className="w-full gap-2 mt-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}