import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Kavitha Rajan",
    role: "Parent of NEET 2024 Qualifier",
    text: "ARK transformed my daughter's approach to studies. The weekly tests and monthly parent reports gave us complete clarity on her progress. She qualified NEET in her first attempt!",
    rating: 5,
    type: "Parent",
  },
  {
    name: "Arun Babu",
    role: "NEET 2024, AIR 6,102",
    text: "The discipline system at ARK was different from anywhere else I had studied. Every test was tracked, every weak area was remediated. The HRC concept mastery framework genuinely helped me secure 672 marks.",
    rating: 5,
    type: "Student",
  },
  {
    name: "Mrs. Priya Suresh",
    role: "Parent of Board Topper",
    text: "The performance analytics and transparency at ARK is something you won't find at other coaching centres. We knew exactly where our son stood every single month. He scored 98% in boards.",
    rating: 5,
    type: "Parent",
  },
  {
    name: "Deepika R.",
    role: "Class 12 CBSE, 97%",
    text: "Small batches, dedicated teachers, and real individual attention. ARK didn't just prepare me for exams — it built my confidence and discipline. Forever grateful.",
    rating: 5,
    type: "Student",
  },
  {
    name: "Mr. Suresh Kumar",
    role: "Parent of NEET Qualifier",
    text: "Moving my son to ARK was the best academic decision we made. The structured system, accountability, and mentorship is unparalleled. He's now pursuing MBBS at a Government college.",
    rating: 5,
    type: "Parent",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-ark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
            What Parents & Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real stories from the ARK community. Discipline creates destiny — hear it from those who've lived it.
          </p>
        </motion.div>

        {/* Desktop 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-ark-yellow mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ark-navy flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-ark-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${t.type === "Parent" ? "bg-ark-yellow/15 text-ark-navy" : "bg-ark-pink/15 text-ark-pink"}`}>
                  {t.type}
                </span>
              </div>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-ark-yellow text-sm">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <Quote className="w-8 h-8 text-ark-yellow mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{testimonials[current].text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ark-navy flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-bold text-ark-navy text-sm">{testimonials[current].name}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-ark-navy flex items-center justify-center hover:bg-ark-navy hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-ark-navy w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-ark-navy flex items-center justify-center hover:bg-ark-navy hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
