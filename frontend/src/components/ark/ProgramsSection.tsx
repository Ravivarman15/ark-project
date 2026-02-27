import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Baby, BookOpen, GraduationCap, FlaskConical, RotateCcw } from "lucide-react";
import ProgramDetailModal from "@/components/ark/ProgramDetailModal";
import { programDetails } from "@/data/programDetails";
import type { ProgramDetail } from "@/components/ark/ProgramDetailModal";

const programs = [
  {
    icon: Baby,
    title: "ARK Nestlings",
    subtitle: "Early Childhood",
    description: "A nurturing space for young minds with daycare, structured learning, and homework support. Dream. Believe. Achieve.",
    badge: "Ages 3–7",
    color: "border-ark-pink",
    badgeColor: "bg-ark-pink/10 text-ark-pink",
  },
  {
    icon: BookOpen,
    title: "ARK Tuition",
    subtitle: "Class 6–12",
    description: "Expert tuition for ICSE, CBSE, and State Board students. Weekly tests, remedial classes, and continuous parent updates.",
    badge: "All Boards",
    color: "border-ark-yellow",
    badgeColor: "bg-ark-yellow/10 text-ark-yellow-dark",
  },
  {
    icon: Star,
    title: "Board Exam Prep",
    subtitle: "Class 10 & 12",
    description: "Intensive Board preparation with concept clarity, full-length mock tests, and performance analytics. 95%+ distinction rate.",
    badge: "Boards Focused",
    color: "border-ark-navy",
    badgeColor: "bg-ark-navy/10 text-ark-navy",
  },
  {
    icon: FlaskConical,
    title: "NEET Coaching",
    subtitle: "2-Year Program",
    description: "NCERT-based structured NEET preparation. Weekly practice, mock exams, 600+ score strategy, and expert mentoring.",
    badge: "Class 11–12",
    color: "border-ark-yellow",
    badgeColor: "bg-ark-yellow/10 text-ark-yellow-dark",
  },
  {
    icon: GraduationCap,
    title: "NEET Foundation",
    subtitle: "Early Prep",
    description: "Early NEET preparation for Class 8–10 students. Concept building, Olympiad readiness, and structured testing calendar.",
    badge: "Class 8–10",
    color: "border-ark-pink",
    badgeColor: "bg-ark-pink/10 text-ark-pink",
  },
  {
    icon: RotateCcw,
    title: "Repeaters Batch",
    subtitle: "NEET Repeaters",
    description: "Specially designed for NEET repeaters. Diagnostic assessment, targeted remediation, and accelerated preparation strategy.",
    badge: "Crash Program",
    color: "border-ark-navy",
    badgeColor: "bg-ark-navy/10 text-ark-navy",
  },
];

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);

  return (
    <section id="programs" className="section-padding bg-muted/30">
      <div className="container-ark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
            From Nestlings to NEET
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ARK builds a structured academic journey — from early childhood through to NEET qualification. Every program is designed with measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group bg-white rounded-2xl p-6 border-2 ${program.color} shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-ark-navy flex items-center justify-center group-hover:bg-ark-yellow transition-colors duration-300">
                  <program.icon className="w-6 h-6 text-white group-hover:text-ark-navy transition-colors duration-300" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.badgeColor}`}>
                  {program.badge}
                </span>
              </div>

              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                {program.subtitle}
              </div>
              <h3 className="text-xl font-black text-ark-navy mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {program.description}
              </p>

              <button
                onClick={() => setSelectedProgram(programDetails[program.title] ?? null)}
                className="flex items-center gap-2 text-ark-navy font-bold text-sm group-hover:text-ark-yellow transition-colors"
              >
                Explore Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal — rendered via portal outside section */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>

  );
}
