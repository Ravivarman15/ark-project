import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How is ARK different from other coaching centres in Chennai?",
    a: "ARK is a structured academic ecosystem — not just a tuition centre. We have a proven weekly testing framework, monthly parent transparency reports, performance analytics, and a remedial system. Every student is tracked individually. Our accountability structure sets us apart from conventional coaching institutes.",
  },
  {
    q: "What boards do you cover?",
    a: "We cover ICSE, CBSE, and Tamil Nadu State Board for Classes 6–12. Our faculty is trained for all major boards, ensuring concept clarity aligned with each board's syllabus.",
  },
  {
    q: "Do you provide performance reports to parents?",
    a: "Yes, absolutely. Parent transparency is one of our core values. Parents receive detailed monthly performance reports covering attendance, weekly test scores, subject-wise performance, and overall academic standing. We also conduct regular parent-teacher meetings.",
  },
  {
    q: "What is ARK's NEET qualification success rate?",
    a: "ARK has consistently maintained an 80% NEET qualification rate among our coached students. We have produced 3 government medical seat holders. Our structured 2-year NEET program, NCERT-focused curriculum, and weekly testing model make the difference.",
  },
  {
    q: "Is discipline mandatory at ARK?",
    a: "Yes. Discipline is not optional at ARK — it is the foundation. We have a clear attendance policy, behaviour expectations, and academic accountability structures. This is what separates our results from ordinary coaching centres.",
  },
  {
    q: "How small are the batches at ARK?",
    a: "We keep batch sizes small intentionally to ensure every student receives personalised attention. This allows our faculty to identify individual challenges, address doubts promptly, and monitor each student's progress closely.",
  },
  {
    q: "Do you have a Franchise opportunity?",
    a: "Yes, ARK offers franchise opportunities with three models — Flagship (₹22L), Studio (₹13L), and POD (₹7L). Each comes with full training, academic support, brand usage rights, and ongoing mentorship. Contact us for a detailed franchise prospectus.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-bold text-ark-navy pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-ark-yellow flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ark max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about ARK Learning Arena.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
