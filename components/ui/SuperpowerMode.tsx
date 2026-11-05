"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

interface ActionItem {
  label: string;
  type: "scroll" | "external";
  target: string;
}

interface Message {
  sender: "agent" | "user";
  text: string;
  action?: ActionItem;
}

// 1. Levenshtein Distance for handling typos and spelling variations
function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function wordSimilarity(w1: string, w2: string): number {
  const longer = w1.length > w2.length ? w1 : w2;
  const shorter = w1.length > w2.length ? w2 : w1;
  if (longer.length === 0) return 1.0;
  return (longer.length - getLevenshteinDistance(longer, shorter)) / longer.length;
}

export default function SuperpowerMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agent",
      text: "Hello! I am Portfolio AI Agent ⚡ — an autonomous assistant built for the AWS Student Builder Challenge. Ask me in English or Hinglish about Durgesh's ML pipelines, technical competencies, hiring availability, or trigger real-time actions across this portfolio.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleAction = (action: ActionItem) => {
    if (action.type === "external") {
      window.open(action.target, "_blank", "noopener,noreferrer");
    } else {
      const element = document.getElementById(action.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // 2. High-Accuracy Intent Classification Engine
  const evaluateIntent = (rawText: string): { reply: string; action?: ActionItem } => {
    const q = rawText.toLowerCase().trim();
    const tokens = q.split(/[\s,?.!_+-]+/).filter(Boolean);

    const intentDatabase: Record<
      string,
      {
        phrases: string[];
        keywords: string[];
        reply: string;
        action?: ActionItem;
      }
    > = {
      identity: {
        phrases: [
          "who are you", "what is your name", "tumhara naam kya hai", "tera naam kya hai",
          "tum kaun ho", "apna intro do", "who created you", "kisne banaya", "who made you",
          "kya ho tum", "tell me about yourself"
        ],
        keywords: ["identity", "name", "naam", "bot", "agent", "creator", "made", "banaya"],
        reply:
          "I am Portfolio AI Agent ⚡ — an autonomous client-side portfolio intelligence assistant engineered by Durgesh Maurya. I serve as the 'Tech Superpower' feature for the AWS Student Builder Challenge, mapping natural language requests into direct UI actions and ML technical briefings.",
      },

      superpower: {
        phrases: [
          "what is your superpower", "tech superpower kya hai", "superpower mode",
          "aws superpower", "superpower explain", "kya superpower hai"
        ],
        keywords: ["superpower", "power", "easter", "egg", "challenge", "aws"],
        reply:
          "The Tech Superpower here is 'Agentic ML & Cloud Intelligence': transforming traditional static portfolios into autonomous, self-navigating interactive systems powered by browser-level NLP matching and hosted with CI/CD on AWS Amplify.",
      },

      hiring_availability: {
        phrases: [
          "are you available", "hire karna hai", "job offer", "internship offer",
          "available for work", "kab join kar sakte ho", "looking for job",
          "remote or onsite", "location preference", "joining date", "notice period"
        ],
        keywords: ["hire", "hiring", "available", "internship", "job", "joining", "relocate", "remote", "onsite"],
        reply:
          "Durgesh is actively seeking Data Science and Machine Learning Engineering internship opportunities with immediate availability. He is flexible across both remote workflows and on-site locations across India.",
        action: { label: "Connect for Opportunities", type: "scroll", target: "contact" },
      },

      projects: {
        phrases: [
          "kya banaya hai", "kaam dikhao", "project dikhao", "show projects", "best project",
          "what did you build", "case studies", "machine learning projects", "olist project",
          "toxic comment project", "spacex project", "fraud detection"
        ],
        keywords: [
          "project", "projects", "work", "portfolio", "model", "pipeline", "toxic", "olist",
          "spacex", "fraud", "classification", "banaya", "models"
        ],
        reply:
          "Durgesh has engineered production-grade Machine Learning pipelines: 1) Olist Customer Intelligence dual-pipeline with live Discord ops alerts, 2) Toxic Comment Multi-label NLP Classifier, 3) SpaceX Falcon 9 First-Stage Recovery Predictor, and 4) Credit Card Anomaly Detection with imbalanced sampling.",
        action: { label: "Explore Project Case Studies", type: "scroll", target: "projects" },
      },

      skills: {
        phrases: [
          "kya aata hai", "skills kya hai", "kisme expert ho", "tech stack", "what are your skills",
          "programming languages", "technologies", "tools known", "frameworks"
        ],
        keywords: [
          "skill", "skills", "tech", "stack", "tools", "python", "sql", "fastapi", "scikit",
          "lightgbm", "pytorch", "aws", "amplify", "mongodb", "docker", "aata"
        ],
        reply:
          "Durgesh's core technical stack spans Data Science & ML Engineering: Python, SQL, Scikit-learn, LightGBM, PyTorch, FastAPI, MongoDB, Exploratory Data Analysis, and AWS Amplify Cloud Deployment.",
        action: { label: "Inspect Tech Stack", type: "scroll", target: "skills" },
      },

      resume: {
        phrases: [
          "resume download", "cv download", "resume chahiye", "cv chahiye", "resume dikhao",
          "cv dikhao", "download cv", "get resume", "pdf link", "biodata"
        ],
        keywords: ["resume", "cv", "curriculum", "vitae", "pdf", "download", "biodata"],
        reply:
          "You can inspect and directly download Durgesh's verified technical resume detailing his machine learning projects, IBM credentials, and academic background.",
        action: { label: "Download / Inspect Resume", type: "scroll", target: "resume" },
      },

      contact: {
        phrases: [
          "baat karni hai", "contact kaise kare", "email kya hai", "kaise jude", "how to contact",
          "how to reach", "send message", "linkedin link", "github link"
        ],
        keywords: ["contact", "email", "reach", "message", "touch", "connect", "mail", "linkedin", "github"],
        reply:
          "You can reach Durgesh directly at durgeshmaurya5039@gmail.com, connect via LinkedIn (durgesh277208), or check his repositories on GitHub (durgesh693).",
        action: { label: "Open Contact Form", type: "scroll", target: "contact" },
      },

      education: {
        phrases: [
          "kahan se padhe", "college konsa hai", "degree konsi hai", "education background",
          "which college", "which university", "bca kahan se", "droan college", "kumaun university"
        ],
        keywords: ["education", "college", "degree", "bca", "university", "kumaun", "droan", "padhai", "academic"],
        reply:
          "Durgesh is pursuing a Bachelor of Computer Applications (BCA) at Droan College, affiliated with Kumaun University, Nainital (Class of 2027), focusing on Computer Science and Applied Machine Learning.",
        action: { label: "View Academic Timeline", type: "scroll", target: "education" },
      },

      certifications: {
        phrases: [
          "certificates dikhao", "ibm certificate", "coursera credentials", "konsi certificate hai",
          "verified badges", "hackathon certificates"
        ],
        keywords: ["certificate", "certificates", "certification", "certifications", "ibm", "coursera", "badges"],
        reply:
          "Durgesh holds 15+ verified credentials, headlined by the comprehensive IBM Data Science Professional Specialization, Data Analysis with Python, Machine Learning with Python, and IIT Guwahati's Convolve 4.0 Hackathon certificate.",
        action: { label: "View Verified Certifications", type: "scroll", target: "certifications" },
      },

      casual_social: {
        phrases: [
          "chai peene chaloge", "coffee peene chaloge", "shadi karoge", "girlfriend hai",
          "kahan rehte ho", "where do you live", "party kab hai", "single ho ya committed"
        ],
        keywords: ["chai", "coffee", "tea", "drink", "girlfriend", "shadi", "marry", "live", "rehte", "single"],
        reply:
          "Durgesh loves long engineering sessions powered by good tea and coffee! While I am an AI agent living inside AWS Amplify, you can definitely reach out to Durgesh directly to connect over tech discussions.",
        action: { label: "Send a Direct Message", type: "scroll", target: "contact" },
      },

      general_ai_offtopic: {
        phrases: [
          "write python code", "tell me a joke", "write a poem", "what is quantum computing",
          "weather kaisa hai", "solve this math", "generate code"
        ],
        keywords: ["joke", "poem", "weather", "quantum", "fibonacci", "script", "math"],
        reply:
          "I specialize specifically as the Portfolio Intelligence Agent! Rather than generic scripts, I can guide you through Durgesh's actual deployed ML systems like his Toxic Comment Classifier or Olist Intelligence.",
        action: { label: "Inspect ML Pipelines", type: "scroll", target: "projects" },
      },

      salary_pricing: {
        phrases: [
          "salary kitni loge", "package kya chahiye", "expected salary", "hourly rate",
          "compensation", "charges kya hai"
        ],
        keywords: ["salary", "package", "rate", "cost", "charge", "stipend", "compensation"],
        reply:
          "Compensation and stipends are structured according to standard industry benchmarks for Data Science and ML Engineering internship roles. Durgesh is eager to discuss terms directly.",
        action: { label: "Discuss Opportunities", type: "scroll", target: "contact" },
      },

      trolling_abuse: {
        phrases: [
          "you are useless", "bekar ho", "faltu ho", "stupid bot", "asdfghjk",
          "bakwas", "gadhe", "pagal", "shut up"
        ],
        keywords: ["useless", "stupid", "idiot", "bekar", "faltu", "bakwas", "garbage", "trash"],
        reply:
          "Input anomaly filtered! My neural intent filters prioritize productive technical conversations. Here are key sections you can inspect right away:",
        action: { label: "Inspect Featured Projects", type: "scroll", target: "projects" },
      },

      greetings: {
        phrases: [
          "hello", "hi", "hey", "namaste", "pranam", "kya haal", "good morning", "good evening", "whats up"
        ],
        keywords: ["hello", "hi", "hey", "namaste", "pranam", "greetings", "morning", "evening", "sup"],
        reply:
          "Greetings! Welcome to Durgesh's Tech Superpower hub on AWS Amplify. Feel free to ask about his ML projects, download his technical CV, or evaluate his skill stack.",
      },
    };

    // Stage 1: Phrase matching
    for (const [key, config] of Object.entries(intentDatabase)) {
      if (config.phrases.some((phrase) => q.includes(phrase))) {
        return { reply: config.reply, action: config.action };
      }
    }

    // Stage 2: Token frequency & fuzzy scoring
    let bestMatch: (typeof intentDatabase)[keyof typeof intentDatabase] | null = null;
    let highestScore = 0;

    for (const config of Object.values(intentDatabase)) {
      let score = 0;
      for (const token of tokens) {
        for (const kw of config.keywords) {
          if (token === kw) {
            score += 3.2;
          } else if (token.includes(kw) || kw.includes(token)) {
            score += 1.8;
          } else if (wordSimilarity(token, kw) >= 0.72) {
            score += 1.3;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = config;
      }
    }

    if (highestScore >= 1.5 && bestMatch) {
      return { reply: bestMatch.reply, action: bestMatch.action };
    }

    // Fallback
    return {
      reply:
        "I couldn't map that query with high confidence. I can instantly help you explore Durgesh's featured ML projects, tech stack, academic background, or technical resume.",
      action: { label: "View Featured Projects", type: "scroll", target: "projects" },
    };
  };

  const executeQuery = (queryText: string) => {
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    setIsTyping(true);

    setTimeout(() => {
      const result = evaluateIntent(queryText);
      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: result.reply,
          action: result.action,
        },
      ]);
      setIsTyping(false);
    }, 350);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeQuery(input);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: "agent",
        text: "Conversation reset. What aspect of Durgesh's Data Science and Machine Learning background would you like to review?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) - Ultra High Z-Index */}
      <div className="fixed bottom-6 right-6 z-[99999] flex items-center gap-2 group">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-zinc-900 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg shadow-xl font-mono whitespace-nowrap">
          ⚡ Tech Superpower: Launch Portfolio AI Agent
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle Portfolio AI Agent"
          className="h-12 w-12 rounded-full bg-zinc-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all hover:bg-emerald-950/80 cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-6 w-6 animate-pulse" />}
        </button>
      </div>

      {/* Floating Chat Modal (Fixed position right above button) */}
      {isOpen && (
        <div
          style={{ bottom: "84px" }}
          className="fixed right-4 sm:right-6 z-[99999] w-[92vw] sm:w-[420px] h-[520px] max-h-[80vh] bg-zinc-950 border-2 border-emerald-500 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col font-sans text-xs overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-zinc-100 text-sm flex items-center gap-1.5">
                  Portfolio AI Agent
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                </p>
                <p className="text-[10px] text-zinc-400 font-mono">AWS Amplify Superpower Engine</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Reset conversation"
                type="button"
                className="text-zinc-400 hover:text-zinc-100 p-1.5 rounded transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-zinc-400 hover:text-zinc-100 p-1.5 rounded transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="flex gap-1.5 p-2 bg-zinc-900/60 border-b border-zinc-800 shrink-0 overflow-x-auto">
            <button
              onClick={() => executeQuery("Show featured projects")}
              type="button"
              className="whitespace-nowrap px-2.5 py-1 bg-zinc-800 hover:bg-emerald-950 hover:text-emerald-300 border border-zinc-700 rounded-full text-[11px] text-zinc-300 transition-colors cursor-pointer"
            >
              🚀 Top Projects
            </button>
            <button
              onClick={() => executeQuery("What is your tech stack?")}
              type="button"
              className="whitespace-nowrap px-2.5 py-1 bg-zinc-800 hover:bg-emerald-950 hover:text-emerald-300 border border-zinc-700 rounded-full text-[11px] text-zinc-300 transition-colors cursor-pointer"
            >
              ⚡ Tech Skills
            </button>
            <button
              onClick={() => executeQuery("Are you available for internship?")}
              type="button"
              className="whitespace-nowrap px-2.5 py-1 bg-zinc-800 hover:bg-emerald-950 hover:text-emerald-300 border border-zinc-700 rounded-full text-[11px] text-zinc-300 transition-colors cursor-pointer"
            >
              💼 Availability
            </button>
            <button
              onClick={() => executeQuery("Download resume")}
              type="button"
              className="whitespace-nowrap px-2.5 py-1 bg-zinc-800 hover:bg-emerald-950 hover:text-emerald-300 border border-zinc-700 rounded-full text-[11px] text-zinc-300 transition-colors cursor-pointer"
            >
              📄 Resume
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-950">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "agent" && (
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs mt-0.5">
                    <Sparkles className="h-3 w-3" />
                  </div>
                )}
                <div
                  className={`max-w-[84%] rounded-xl px-3.5 py-2.5 leading-relaxed text-xs ${
                    m.sender === "user"
                      ? "bg-emerald-600 text-white font-medium"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-200"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.action && (
                    <button
                      onClick={() => handleAction(m.action!)}
                      type="button"
                      className="mt-2.5 w-full text-left font-mono font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1.5 rounded transition-all flex items-center justify-between text-[11px] cursor-pointer"
                    >
                      <span>{m.action.label}</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 items-center text-zinc-500 font-mono text-[11px]">
                <Bot className="h-3.5 w-3.5 animate-spin text-emerald-400" />
                Processing intent parameters & actions...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Query Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything (e.g., 'who are you', 'kya banaya hai')..."
              className="flex-1 bg-zinc-950 border border-zinc-700 focus:border-emerald-500 rounded-lg px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none text-xs"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-emerald-600 hover:bg-emerald-500 text-zinc-950 px-3.5 py-2 rounded-lg font-bold flex items-center justify-center transition-all disabled:opacity-40 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}