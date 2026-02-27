import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Utensils, BookOpen, Palette, Heart, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import nestlingsImage from "@/assets/nestlings-care.jpg";

const trustSignals = [
  { icon: Shield, label: "Safe Supervised Environment", description: "CCTV-monitored, secure campus with trained supervisors" },
  { icon: BookOpen, label: "Homework & Project Assistance", description: "Guided completion of school assignments and projects" },
  { icon: Utensils, label: "Evening Snacks & Dinner", description: "Nutritious meals and snacks provided daily" },
  { icon: Palette, label: "Activity-Based Engagement", description: "Creative, physical, and skill-building activities" },
  { icon: CalendarCheck, label: "One-Day Flexible Care Option", description: "No long-term commitment required — use as needed" },
  { icon: Clock, label: "Extended Hours for Working Parents", description: "Care available until 8:00 PM for maximum flexibility" },
];

const dailySchedule = [
  { time: "3:30 PM", activity: "Arrival & Snacks", color: "bg-ark-yellow" },
  { time: "4:00 PM", activity: "Homework Supervision", color: "bg-ark-pink" },
  { time: "5:30 PM", activity: "Activity Session", color: "bg-ark-yellow" },
  { time: "6:30 PM", activity: "Academic Reinforcement", color: "bg-ark-pink" },
  { time: "7:30 PM", activity: "Dinner", color: "bg-ark-yellow" },
  { time: "8:00 PM", activity: "Pickup", color: "bg-ark-pink" },
];

export default function NestlingsSection() {
  return (
    <section id="nestlings" className="section-padding bg-gradient-to-b from-background to-ark-navy/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-ark-pink/8 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-ark-yellow/8 blur-3xl" />
      </div>

      <div className="container-ark relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-ark-pink text-sm font-semibold tracking-widest uppercase bg-ark-pink/10 px-4 py-2 rounded-full">
            Grades 1–10 · After-School Care
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
            ARK Nestlings – <span className="text-ark-pink">Structured After-School Care</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            When parents are at work or need personal time, ARK ensures your child is cared for, guided, and academically supported — in a safe, structured environment.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto"
        >
          <img
            src={nestlingsImage}
            alt="Children studying in a warm, supervised after-school care environment with a caring mentor"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Trust Signals Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-ark-pink flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-ark-navy">What We Provide</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {trustSignals.map((signal, i) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-border rounded-2xl p-4 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ark-pink/10 flex items-center justify-center mb-3 group-hover:bg-ark-pink/20 transition-colors">
                    <signal.icon className="w-5 h-5 text-ark-pink" />
                  </div>
                  <div className="font-bold text-ark-navy text-sm mb-1">{signal.label}</div>
                  <div className="text-muted-foreground text-xs leading-relaxed">{signal.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Daily Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-ark-yellow flex items-center justify-center">
                <Clock className="w-5 h-5 text-ark-navy" />
              </div>
              <h3 className="text-2xl font-black text-ark-navy">Structured Daily Routine</h3>
            </div>

            <div className="bg-ark-navy rounded-3xl p-6 md:p-8 space-y-0">
              {dailySchedule.map((slot, i) => (
                <motion.div
                  key={slot.time}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 py-4 border-b border-white/10 last:border-b-0"
                >
                  <div className={`${slot.color} rounded-xl px-3 py-2 min-w-[90px] text-center`}>
                    <span className="text-ark-navy text-sm font-black">{slot.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-white font-semibold text-sm md:text-base">{slot.activity}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Flexibility badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex items-center gap-3 bg-ark-yellow/10 border border-ark-yellow/30 rounded-2xl px-5 py-3"
            >
              <Users className="w-5 h-5 text-ark-yellow flex-shrink-0" />
              <div>
                <span className="font-bold text-ark-navy text-sm">One-Day Care Option Available</span>
                <span className="text-muted-foreground text-xs block">No long-term commitment. Use our service whenever you need it.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button
            size="lg"
            className="bg-ark-pink text-white font-bold hover:bg-ark-pink/90 shadow-lg group px-10 text-base"
            onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enquire About Nestlings
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-muted-foreground text-sm mt-3">Safe. Structured. Supportive.</p>
        </motion.div>
      </div>
    </section>
  );
}
