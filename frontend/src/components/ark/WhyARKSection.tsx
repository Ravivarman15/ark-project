import { motion } from "framer-motion";
import { ClipboardList, BarChart3, Users, AlertCircle, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Weekly Testing Framework",
    description: "Every student is assessed weekly. No student slips through the cracks. Consistent evaluation ensures concept retention.",
    color: "bg-ark-yellow/10 text-ark-navy",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Analytics",
    description: "Detailed performance reports with subject-wise breakdown, trend analysis, and improvement tracking over time.",
    color: "bg-ark-pink/10 text-ark-pink",
  },
  {
    icon: Users,
    title: "Parent Transparency Reports",
    description: "Parents receive structured monthly reports. Full visibility into attendance, test scores, and academic standing.",
    color: "bg-ark-yellow/10 text-ark-navy",
  },
  {
    icon: AlertCircle,
    title: "Remedial System",
    description: "Struggling students get targeted remedial sessions. No student left behind — every gap is identified and addressed.",
    color: "bg-ark-pink/10 text-ark-pink",
  },
  {
    icon: Shield,
    title: "Accountability Structure",
    description: "Strict attendance, discipline policy, and academic accountability ensure every student performs at their highest potential.",
    color: "bg-ark-yellow/10 text-ark-navy",
  },
  {
    icon: ArrowRight,
    title: "Mentorship Model",
    description: "Beyond academics — character, discipline, confidence, and life skills are built through structured mentorship programs.",
    color: "bg-ark-pink/10 text-ark-pink",
  },
];

const flowSteps = [
  { label: "Student Joins", num: "01" },
  { label: "ADA Taken & SWOT Analysis Done", num: "02" },
  { label: "Tutoring & Mentoring", num: "03" },
  { label: "Weekly Test", num: "04" },
  { label: "Performance Analysis", num: "05" },
  { label: "Parent Report", num: "06" },
  { label: "Remedial / Advance", num: "07" },
  { label: "Measurable Growth", num: "08" },
];

export default function WhyARKSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-ark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
            Our Differentiator
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
            Why ARK Is Different
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ARK is not just a tuition centre. It is a structured academic ecosystem — built on systems, accountability, and data-driven improvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-muted/30 rounded-xl p-5 hover:bg-muted/60 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-ark-navy text-sm mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-hero rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-black mb-6 text-ark-yellow">The ARK System Flow</h3>
            <div className="space-y-4">
              {flowSteps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ark-yellow flex items-center justify-center text-ark-navy font-black text-sm flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">{step.label}</div>
                    {i < flowSteps.length - 1 && (
                      <div className="mt-2 ml-1 w-0.5 h-4 bg-white/20" />
                    )}
                  </div>
                  {i === flowSteps.length - 1 && (
                    <div className="bg-ark-yellow text-ark-navy text-xs font-black px-3 py-1 rounded-full">
                      RESULT
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
