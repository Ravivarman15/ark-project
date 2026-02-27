import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CheckCircle, Clock, Users, BookOpen, Target, Award,
  ChevronRight, GraduationCap, MessageCircle, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProgramDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  ageGroup: string;
  duration: string;
  batchSize: string;
  highlights: string[];
  curriculum: { subject: string; topics: string[] }[];
  features: { icon: string; title: string; desc: string }[];
  outcomes: string[];
  color: string;
  accentColor: string;
}

interface Props {
  program: ProgramDetail | null;
  onClose: () => void;
}

const tabs = ["Overview", "Highlights", "Curriculum", "Outcomes"] as const;
type Tab = typeof tabs[number];

function ModalContent({ program, onClose }: { program: ProgramDetail; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleEnquiry = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("lead-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    /* ── Full-screen flex overlay — centres the modal ── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
    >
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="absolute inset-0 bg-ark-navy/80 backdrop-blur-md"
      />

      {/* Modal panel */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 40 }}
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
        className="
          relative z-10 flex flex-col bg-white shadow-2xl
          w-full max-w-3xl
          rounded-3xl
          max-h-[calc(100dvh-24px)] sm:max-h-[88vh]
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className={`${program.color} relative flex-shrink-0 rounded-t-3xl overflow-hidden`}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-5 pt-5 pb-0 md:px-8 md:pt-7">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              {program.subtitle}
            </span>

            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-1.5 pr-10">
              {program.title}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl pr-4">
              {program.tagline}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { icon: Users, label: program.ageGroup },
                { icon: Clock, label: program.duration },
                { icon: BookOpen, label: program.batchSize },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-xl px-3 py-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-white text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 mt-5 -mb-px overflow-x-auto scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 py-2.5 text-xs md:text-sm font-bold rounded-t-xl transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-white text-ark-navy shadow-sm"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tab Content — scrollable ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain bg-white min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -14 }}
              transition={{ duration: 0.18 }}
              className="p-5 md:p-8"
            >
              {/* OVERVIEW */}
              {activeTab === "Overview" && (
                <div className="space-y-6">
                  <div className="bg-muted/40 rounded-2xl p-5 border border-border">
                    <h3 className="text-base font-black text-ark-navy mb-2">About This Program</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-ark-navy mb-4">What Makes It Special</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.features.map((f, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-4 border border-border rounded-2xl hover:border-ark-yellow/60 hover:bg-ark-yellow/5 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-xl bg-ark-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Target className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-ark-navy text-sm mb-1">{f.title}</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* HIGHLIGHTS */}
              {activeTab === "Highlights" && (
                <div>
                  <p className="text-muted-foreground text-sm mb-5">
                    Everything included in the <span className="font-bold text-ark-navy">{program.title}</span> program:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-start gap-3 bg-white border border-border rounded-2xl p-3.5 hover:border-ark-yellow/60 hover:shadow-sm transition-all"
                      >
                        <div className="w-6 h-6 rounded-full bg-ark-yellow/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-ark-navy" />
                        </div>
                        <span className="text-sm text-ark-navy font-medium leading-snug">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* CURRICULUM */}
              {activeTab === "Curriculum" && (
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm mb-2">
                    Structured curriculum for <span className="font-bold text-ark-navy">{program.ageGroup}</span>:
                  </p>
                  {program.curriculum.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="rounded-2xl border border-border overflow-hidden"
                    >
                      <div className="flex items-center gap-3 px-4 py-3 bg-ark-navy">
                        <div className="w-6 h-6 rounded-full bg-ark-yellow flex items-center justify-center flex-shrink-0">
                          <span className="text-ark-navy text-xs font-black">{i + 1}</span>
                        </div>
                        <span className="text-white font-bold text-sm">{c.subject}</span>
                      </div>
                      <div className="p-4 flex flex-wrap gap-2 bg-muted/20">
                        {c.topics.map((t, j) => (
                          <span
                            key={j}
                            className="text-xs bg-white border border-ark-yellow/30 text-ark-navy font-medium px-3 py-1 rounded-full shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* OUTCOMES */}
              {activeTab === "Outcomes" && (
                <div>
                  <p className="text-muted-foreground text-sm mb-5">
                    What students achieve after completing this program:
                  </p>
                  <div className="space-y-3">
                    {program.outcomes.map((o, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-ark-navy/5 to-transparent border border-border"
                      >
                        <div className="w-7 h-7 rounded-full bg-ark-pink flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-ark-navy font-medium leading-relaxed">{o}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 rounded-2xl bg-ark-navy text-white text-center">
                    <Award className="w-8 h-8 text-ark-yellow mx-auto mb-2" />
                    <p className="font-bold text-sm">Ready to achieve these results?</p>
                    <p className="text-white/60 text-xs mt-1">Book a free assessment with our counsellors today.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer CTA — always visible ── */}
        <div className="flex-shrink-0 border-t border-border bg-white px-4 py-3 md:px-8 md:py-4 rounded-b-3xl">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Button
              onClick={handleEnquiry}
              className="flex-1 bg-ark-yellow hover:bg-ark-yellow-light text-ark-navy font-black text-sm h-11 shadow-yellow rounded-xl"
            >
              Book Free Assessment
            </Button>
            <a
              href={`https://wa.me/917639399217?text=${encodeURIComponent(`Hi, I'm interested in the ${program.title} program at ARK Learning Arena. Can you share more details?`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 h-11 border-2 border-ark-navy text-ark-navy font-bold text-sm rounded-xl hover:bg-ark-navy hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917639399217"
              className="sm:hidden flex items-center justify-center gap-2 h-11 border-2 border-muted text-muted-foreground font-bold text-sm rounded-xl hover:border-ark-navy hover:text-ark-navy transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProgramDetailModal({ program, onClose }: Props) {
  return createPortal(
    <AnimatePresence mode="wait">
      {program && <ModalContent key={program.id} program={program} onClose={onClose} />}
    </AnimatePresence>,
    document.body
  );
}
