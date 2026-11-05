"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export function InitialLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F17] text-white pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-xl animate-pulse" />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
        >
          {profileData.name}
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-3 text-xs tracking-widest uppercase text-slate-400 font-mono"
        >
          Initializing Portfolio Environment
        </motion.p>
      </div>
    </motion.div>
  );
}