"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <Badge variant="default" className="mb-3 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
        {badge}
      </Badge>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}