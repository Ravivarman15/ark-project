import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Star, TrendingUp, GraduationCap } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const neetToppers = [
  { student: "Priya S.", score: 680, total: 720, rank: "AIR 4,821", achievement: "Govt. Medical Seat", year: "2024" },
  { student: "Arjun K.", score: 672, total: 720, rank: "AIR 6,102", achievement: "Govt. Medical Seat", year: "2024" },
  { student: "Divya R.", score: 665, total: 720, rank: "AIR 7,834", achievement: "Govt. Medical Seat", year: "2024" },
  { student: "Meera J.", score: 648, total: 720, rank: "AIR 12,450", achievement: "Private Medical Seat", year: "2024" },
];

const boardToppers = [
  { student: "Karthik M.", score: "98%", program: "Class 12 – CBSE", achievement: "State Distinction" },
  { student: "Sneha P.", score: "97%", program: "Class 10 – CBSE", achievement: "School Topper" },
  { student: "Rahul V.", score: "96%", program: "Class 12 – State Board", achievement: "Board Excellence" },
  { student: "Ananya S.", score: "95%", program: "Class 10 – CBSE", achievement: "District Rank" },
];

function AnimatedScore({ score, total, delay }: { score: number; total: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(inView ? score : 0, 1800);
  const pct = (score / total) * 100;

  return (
    <div ref={ref} className="relative">
      {/* Circular progress ring */}
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(var(--ark-navy-light))" strokeWidth="6" opacity="0.3" />
        <motion.circle
          cx="40" cy="40" r="34" fill="none"
          stroke="hsl(var(--ark-yellow))"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 34}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
          animate={inView ? { strokeDashoffset: 2 * Math.PI * 34 * (1 - pct / 100) } : {}}
          transition={{ duration: 1.6, delay, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-black text-ark-yellow leading-none">{count}</span>
        <span className="text-[10px] text-white/50">/{total}</span>
      </div>
    </div>
  );
}

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(inView ? value : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-black text-ark-yellow leading-none">{count}{suffix}</div>
      <div className="text-white/60 text-sm mt-2">{label}</div>
    </motion.div>
  );
}

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-gradient-results relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-ark-yellow/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ark-pink/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ark-yellow/3 blur-3xl" />
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
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/15 px-4 py-2 rounded-full">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4">
            Our Toppers{" "}
            <span className="text-ark-yellow">Shine</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real scores. Real ranks. ARK's structured system consistently produces top performers in NEET and Board examinations.
          </p>
        </motion.div>

        {/* Summary stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCounter value={80} suffix="%" label="NEET Qualification" delay={0} />
          <StatCounter value={3} suffix="+" label="Govt. Medical Seats" delay={0.1} />
          <StatCounter value={95} suffix="%" label="Board Distinctions" delay={0.2} />
          <StatCounter value={500} suffix="+" label="Students Coached" delay={0.3} />
        </div>

        {/* NEET Toppers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-ark-yellow flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-ark-navy" />
            </div>
            <h3 className="text-2xl font-black text-white">NEET Toppers 2024</h3>
          </div>

          {/* Desktop grid view */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {neetToppers.map((topper, i) => (
              <motion.div
                key={topper.student}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-white hover:bg-white/[0.14] transition-all duration-300 group"
              >
                {/* Rank badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-ark-navy bg-ark-yellow px-3 py-1 rounded-full flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    #{i + 1}
                  </span>
                  <span className="text-ark-yellow/80 text-xs font-semibold">{topper.rank}</span>
                </div>

                {/* Animated circular score */}
                <div className="flex justify-center mb-4">
                  <AnimatedScore score={topper.score} total={topper.total} delay={i * 0.15} />
                </div>

                {/* Student info */}
                <div className="text-center">
                  <div className="font-bold text-white text-lg group-hover:text-ark-yellow transition-colors">{topper.student}</div>
                  <div className="text-white/50 text-sm mt-0.5">NEET {topper.year}</div>
                  <div className="mt-3 text-[11px] font-semibold text-ark-pink bg-ark-pink/15 px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {topper.achievement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel view */}
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {neetToppers.map((topper, i) => (
                  <CarouselItem key={topper.student} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-white hover:bg-white/[0.14] transition-all duration-300 group h-full"
                    >
                      {/* Rank badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-ark-navy bg-ark-yellow px-3 py-1 rounded-full flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          #{i + 1}
                        </span>
                        <span className="text-ark-yellow/80 text-xs font-semibold">{topper.rank}</span>
                      </div>

                      {/* Animated circular score */}
                      <div className="flex justify-center mb-4">
                        <AnimatedScore score={topper.score} total={topper.total} delay={i * 0.15} />
                      </div>

                      {/* Student info */}
                      <div className="text-center">
                        <div className="font-bold text-white text-lg group-hover:text-ark-yellow transition-colors">{topper.student}</div>
                        <div className="text-white/50 text-sm mt-0.5">NEET {topper.year}</div>
                        <div className="mt-3 text-[11px] font-semibold text-ark-pink bg-ark-pink/15 px-3 py-1 rounded-full inline-flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {topper.achievement}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex -left-4 md:-left-8 lg:-left-12 bg-ark-yellow/20 hover:bg-ark-yellow/40 border-ark-yellow/50 text-ark-yellow h-10 w-10" />
              <CarouselNext className="flex -right-4 md:-right-8 lg:-right-12 bg-ark-yellow/20 hover:bg-ark-yellow/40 border-ark-yellow/50 text-ark-yellow h-10 w-10" />
            </Carousel>
          </div>
        </motion.div>

        {/* Board Toppers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-ark-pink flex items-center justify-center">
              <Medal className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white">Board Toppers</h3>
          </div>

          {/* Desktop grid view */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {boardToppers.map((topper, i) => (
              <motion.div
                key={topper.student}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/[0.12] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Star className="w-5 h-5 text-ark-yellow" />
                  <span className="text-xs font-bold text-ark-pink bg-ark-pink/15 px-3 py-1 rounded-full">
                    {topper.achievement}
                  </span>
                </div>
                <div className="text-4xl font-black text-ark-yellow mb-2">{topper.score}</div>
                <div className="font-bold text-white text-lg group-hover:text-ark-yellow transition-colors">{topper.student}</div>
                <div className="text-white/50 text-sm">{topper.program}</div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel view */}
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {boardToppers.map((topper, i) => (
                  <CarouselItem key={topper.student} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/[0.12] transition-all duration-300 group h-full"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Star className="w-5 h-5 text-ark-yellow" />
                        <span className="text-xs font-bold text-ark-pink bg-ark-pink/15 px-3 py-1 rounded-full">
                          {topper.achievement}
                        </span>
                      </div>
                      <div className="text-4xl font-black text-ark-yellow mb-2">{topper.score}</div>
                      <div className="font-bold text-white text-lg group-hover:text-ark-yellow transition-colors">{topper.student}</div>
                      <div className="text-white/50 text-sm">{topper.program}</div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex -left-4 md:-left-8 lg:-left-12 bg-ark-pink/20 hover:bg-ark-pink/40 border-ark-pink/50 text-ark-pink h-10 w-10" />
              <CarouselNext className="flex -right-4 md:-right-8 lg:-right-12 bg-ark-pink/20 hover:bg-ark-pink/40 border-ark-pink/50 text-ark-pink h-10 w-10" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
