"use client";

import { motion } from "framer-motion";

export function AIHeroGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto flex items-center justify-center">
      {/* Glow Backdrops */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-cyan-500/20 blur-3xl animate-pulse" />

      {/* Dynamic Grid Layer */}
      <div className="absolute inset-4 rounded-3xl border border-white/10 dark:border-white/10 bg-slate-900/60 dark:bg-slate-950/70 backdrop-blur-xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
        
        {/* Top Visual Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="font-mono text-[11px] text-slate-400 tracking-wider">
            model_pipeline.py
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Abstract Neural / Data Visual */}
        <div className="relative my-auto py-6 flex items-center justify-center">
          {/* Animated Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-56 h-56 rounded-full border border-dashed border-sky-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 rounded-full border border-indigo-500/20"
          />

          {/* Central AI Node Cluster */}
          <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-600/30 border border-sky-400/30 shadow-inner flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white shadow-lg font-mono font-bold text-lg">
              f(x)
            </div>
            <div className="mt-3 font-mono text-xs text-sky-300 font-medium">
              Neural Network Active
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Loss: 0.0142 | Acc: 98.6%
            </div>
          </div>

          {/* Floating Feature Nodes */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 left-4 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-sky-500/30 text-[11px] font-mono text-sky-300 shadow-md backdrop-blur-md"
          >
            Predictive Model
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 right-4 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 shadow-md backdrop-blur-md"
          >
            Feature Vector
          </motion.div>
        </div>

        {/* Bottom Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center font-mono text-[10px]">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="block text-slate-400">STATUS</span>
            <span className="text-emerald-400 font-semibold">OPTIMAL</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="block text-slate-400">STACK</span>
            <span className="text-sky-400 font-semibold">PYTORCH</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="block text-slate-400">LATENCY</span>
            <span className="text-indigo-300 font-semibold">12ms</span>
          </div>
        </div>

      </div>
    </div>
  );
}