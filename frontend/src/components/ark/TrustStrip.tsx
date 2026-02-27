import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 80, suffix: "%", label: "NEET Qualification Rate", color: "text-ark-yellow" },
  { value: 60, suffix: "%", label: "Government Medical Seats", color: "text-ark-pink" },
  { value: 1000, suffix: "+", label: "Students Coached", color: "text-ark-yellow" },
  { value: 95, suffix: "%", label: "Board Distinction Rate", color: "text-ark-pink" },
  { value: 10, suffix: "+", label: "Years of Excellence", color: "text-ark-yellow" },
  { value: 100, suffix: "%", label: "Academic Discipline", color: "text-ark-pink" },
];

function CountStat({ value, suffix, label, color, delay }: { value: number; suffix: string; label: string; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(inView ? value : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className={`text-4xl md:text-5xl font-black ${color} leading-none mb-2`}>
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-ark-navy-deep py-14 border-y border-white/10">
      <div className="container-ark">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase">
            Our Track Record
          </span>
          <h2 className="text-white text-3xl font-black mt-2">
            Results That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <CountStat key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["Weekly Testing Model", "Parent Reporting System", "NCERT-Based Curriculum", "Small Batch Sizes", "Experienced Faculty"].map((badge) => (
            <span
              key={badge}
              className="bg-white/8 border border-white/15 text-white/80 text-xs font-semibold px-4 py-2 rounded-full"
            >
              ✦ {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
