import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Target,
  Users,
  Award,
  Star,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import poster1 from "@/assets/poster_1.png";
import poster2 from "@/assets/poster_2.png";
import studentImg from "@/assets/student-cutout.png";
import { programDetails } from "@/data/programDetails";

/* ─── Poster slides ─── */
const posterSlides = [
  { id: "p1", image: poster1, alt: "ARK – Nestlings Program" },
  { id: "p2", image: poster2, alt: "ARK – NEET Crash Course" },
];

/* ─── Stats & Checks (used in content section below) ─── */
const stats = [
  { label: "Qualification Rate", value: 80, suffix: "%" },
  { label: "Govt Seats Secured", value: 3, suffix: "" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Students Mentored", value: 1000, suffix: "+" },
];
const checks = [
  "Weekly Testing System",
  "Parent Transparency Reports",
  "Performance Analytics",
  "NCERT-Based Curriculum",
];

/* ─── Per-program card colors + icon (Vedantu pastel style) ─── */
const programMeta: Record<string, { Icon: React.ElementType; bg: string; iconColor: string }> = {
  "ark-nestlings": { Icon: Users, bg: "#EEF0FF", iconColor: "#5C6BC0" },
  "ark-tuition": { Icon: BookOpen, bg: "#FFF8E1", iconColor: "#F9A825" },
  "board-exam-prep": { Icon: Target, bg: "#E0F7EF", iconColor: "#2E7D52" },
  "neet-coaching": { Icon: GraduationCap, bg: "#FFEBF0", iconColor: "#C2185B" },
  "neet-foundation": { Icon: Star, bg: "#FFF3E0", iconColor: "#E65100" },
  "repeaters-batch": { Icon: Zap, bg: "#F3EEFF", iconColor: "#6A1B9A" },
};
const defaultMeta = { Icon: Award, bg: "#F5F5F5", iconColor: "#0B2C55" };

/* ══════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════ */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let start: number;
        const tick = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 2000, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 4)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex items-baseline gap-0.5">
      <span className="text-3xl md:text-4xl font-black text-[#FFC107]">{count}</span>
      <span className="text-xl md:text-2xl font-black text-[#FFC107]">{suffix}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════
   POPULAR PROGRAMS — Vedantu exact card style
   (icon top-center, name + arrow bottom)
══════════════════════════════════════════════ */
function PopularProgramCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);

  const sync = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanL(el.scrollLeft > 4);
    setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    sync();
    const el = scrollRef.current;
    el?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scroll = (d: "l" | "r") =>
    scrollRef.current?.scrollBy({ left: d === "l" ? -180 : 180, behavior: "smooth" });

  const programs = Object.values(programDetails);

  const NavArrow = ({ d, dis }: { d: "l" | "r"; dis: boolean }) => (
    <button
      onClick={() => scroll(d)}
      disabled={dis}
      aria-label={d === "l" ? "Scroll left" : "Scroll right"}
      className={`flex-shrink-0 self-center w-7 h-7 rounded-full border-2 flex items-center justify-center
        transition-all duration-200
        ${!dis
          ? "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-50"
          : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
    >
      {d === "l" ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
    </button>
  );

  return (
    /* The whole card — white, rounded, overlaps bottom of poster via negative top margin */
    <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.13)] border border-gray-100 px-5 pt-4 pb-5">

      {/* "Popular Programs" yellow badge — exact Vedantu style */}
      <div className="mb-4">
        <span className="inline-block bg-[#FFC107] text-[#0B2C55] font-black text-[13px]
          px-4 py-1.5 rounded-full tracking-wide shadow-sm">
          Popular Programs
        </span>
      </div>

      {/* Row: left arrow | cards | right arrow */}
      <div className="flex items-center gap-2">
        <NavArrow d="l" dis={!canL} />

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto flex-1
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {programs.map((prog) => {
            const { Icon, bg, iconColor } = programMeta[prog.id] ?? defaultMeta;
            return (
              <div
                key={prog.id}
                className="flex-shrink-0 w-[150px] sm:w-[168px] rounded-xl cursor-pointer
                  group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: bg, scrollSnapAlign: "start" }}
              >
                {/* Icon — centered at top */}
                <div className="flex justify-center pt-4 pb-3 px-3">
                  <div className="w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <Icon style={{ width: 20, height: 20, color: iconColor }} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/[0.05] mx-3" />

                {/* Name + arrow — bottom */}
                <div className="flex items-center justify-between px-3 py-3">
                  <span className="text-[#0B2C55] text-[12px] font-bold leading-snug line-clamp-2 flex-1 pr-1">
                    {prog.title}
                  </span>
                  <ChevronRight
                    size={15}
                    className="flex-shrink-0 text-[#0B2C55]/40 group-hover:text-[#0B2C55] transition-colors"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <NavArrow d="r" dis={!canR} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN HERO SECTION
══════════════════════════════════════════════ */
export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const next = useCallback(() => setSlide(p => (p + 1) % posterSlides.length), []);
  const prev = useCallback(() => setSlide(p => (p === 0 ? posterSlides.length - 1 : p - 1)), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, paused]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section className="relative overflow-x-hidden bg-[#0B2C55] pt-[64px] md:pt-[72px]">

      {/* ══════════════════════════════════════
          1. FULL-WIDTH ROUNDED POSTER SLIDER
          (Exactly Vedantu: rounded card, full
           width, content inside the poster)
      ══════════════════════════════════════ */}
      <div className="bg-[#0B2C55] w-full">
        <div className="max-w-[1100px] mx-auto px-3 sm:px-5 lg:px-8 pt-4 pb-0">
          <div
            className="relative rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.18)] student-cutout"
            style={{ minHeight: 170 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={e => setTouchX(e.targetTouches[0].clientX)}
            onTouchEnd={e => {
              if (!touchX) return;
              const d = touchX - e.changedTouches[0].clientX;
              if (d > 50) next(); else if (d < -50) prev();
              setTouchX(null);
            }}
          >
            {/* Poster image — full width, natural landscape height */}
            <AnimatePresence mode="wait">
              <motion.div
                key={posterSlides[slide].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
              >
                <img
                  src={posterSlides[slide].image}
                  alt={posterSlides[slide].alt}
                  className="w-full h-auto block"
                  style={{ maxHeight: 480 }}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Left arrow */}
            <button onClick={prev} aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10
              bg-black/30 hover:bg-[#FFC107] text-white hover:text-[#0B2C55]
              rounded-full p-2 sm:p-2.5 backdrop-blur-sm
              transition-all duration-200 hover:scale-110 border border-white/20">
              <ChevronLeft size={20} />
            </button>

            {/* Right arrow */}
            <button onClick={next} aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10
              bg-black/30 hover:bg-[#FFC107] text-white hover:text-[#0B2C55]
              rounded-full p-2 sm:p-2.5 backdrop-blur-sm
              transition-all duration-200 hover:scale-110 border border-white/20">
              <ChevronRight size={20} />
            </button>

            {/* Slide dots — inside poster, at bottom center */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {posterSlides.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300
                  ${i === slide
                      ? "w-8 h-2 bg-[#FFC107] shadow-[0_0_8px_rgba(255,193,7,0.6)]"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
          2. POPULAR PROGRAMS WHITE CARD
          Sits directly below the poster,
          slightly pulled up to create
          the Vedantu overlap look
      ══════════════════════════════════════ */}
        <div className="max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] mx-auto px-3 sm:px-5 lg:px-8 -mt-4 sm:-mt-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <PopularProgramCards />
          </motion.div>
        </div>

      </div>

      {/* ══════════════════════════════════════
          3. CONTENT SECTION
          Dark navy background
          Left: headline / CTAs / stats
          Right: student cutout image
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] mt-6">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
          bg-[#FFC107]/[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full
          bg-[#FF4CAF]/[0.03] blur-[80px] pointer-events-none" />
        {/* Floating dots */}
        {[
          { top: "20%", left: "8%", size: 8, dur: 6, del: 0 },
          { top: "65%", left: "52%", size: 5, dur: 5, del: 1 },
          { top: "40%", right: "12%", size: 6, dur: 7, del: 2 },
        ].map((p, i) => (
          <motion.div key={i}
            style={{
              position: "absolute", top: p.top, left: (p as any).left, right: (p as any).right,
              width: p.size, height: p.size, borderRadius: "50%", background: "rgba(255,193,7,0.2)"
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.del }}
          />
        ))}

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 items-center">

            {/* ── Left: Text content ── */}
            <div className="text-white order-2 lg:order-1">

              {/* Pill badge */}
              <motion.div {...fadeUp(0.05)}
                className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12]
                  rounded-full px-3.5 py-1.5 mb-5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inset-0 rounded-full bg-[#FFC107] opacity-75" />
                  <span className="relative block h-2 w-2 rounded-full bg-[#FFC107]" />
                </span>
                <span className="text-[#FFC107] text-xs sm:text-sm font-semibold tracking-wide">
                  Structured Academic & Care Ecosystem
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 {...fadeUp(0.12)}
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] mb-4 tracking-tight">
                Where{" "}
                <span className="relative inline-block">
                  <span className="text-[#FFC107]">Discipline</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-2 bg-[#FFC107]/20 rounded -skew-x-2 pointer-events-none" />
                </span>
                <br />Meets{" "}
                <span className="text-[#FF4CAF]">Direction.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.18)}
                className="text-base sm:text-lg text-white/80 font-medium leading-relaxed mb-2 max-w-lg">
                From Nestlings to NEET — Structured Academic Growth at Every Stage.
              </motion.p>
              <motion.p {...fadeUp(0.22)}
                className="text-white/50 text-sm leading-relaxed mb-7 max-w-lg">
                ARK Learning Arena is a structured academic performance system built to create
                measurable improvement — from Class 6 tuition to NEET qualification.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.27)} className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button size="lg"
                  className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133]
                    hover:shadow-[0_6px_24px_rgba(255,193,7,0.4)] hover:scale-[1.03]
                    transition-all duration-300 group px-7 py-5 text-sm rounded-full"
                  onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Book Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline"
                  className="border-white/25 text-white hover:bg-white/[0.08] hover:border-white/50
                    hover:scale-[1.03] transition-all duration-300 px-7 py-5 text-sm bg-transparent rounded-full"
                  onClick={() => document.getElementById("nestlings")?.scrollIntoView({ behavior: "smooth" })}>
                  Explore Programs
                </Button>
              </motion.div>

              {/* Quick Hints / Gateways */}
              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-x-4 gap-y-2 mb-8 items-center">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Quick Access:</span>
                {[
                  { label: "NEET Coaching", link: "/neet-coaching-in-chennai" },
                  { label: "Tuition Centre", link: "/tuition-centre-in-chennai" },
                  { label: "Class 6-10", link: "/class-6-10-tuition" },
                  { label: "Science 11-12", link: "/class-11-12-science-coaching" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => window.location.href = item.link}
                    className="text-white/70 hover:text-ark-yellow text-xs font-bold transition-colors flex items-center gap-1 group/hint"
                  >
                    {item.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/hint:opacity-100 group-hover/hint:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </motion.div>

              {/* Check items */}
              <motion.div {...fadeUp(0.32)} className="grid grid-cols-2 gap-x-5 gap-y-2.5 mb-8">
                {checks.map((item, i) => (
                  <motion.div key={item}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.36 + i * 0.06 }}
                    className="flex items-center gap-2 group cursor-default">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC107] flex-shrink-0
                      group-hover:scale-110 transition-transform" />
                    <span className="text-white/70 text-xs sm:text-sm font-medium
                      group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats row */}
              <motion.div {...fadeUp(0.40)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-white/[0.1]">
                {stats.map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.44 + i * 0.07 }}
                    className="group cursor-default">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                    <p className="text-white/50 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {s.label}
                    </p>
                    <div className="w-6 h-0.5 bg-[#FFC107]/40 rounded mt-1.5
                      group-hover:w-10 group-hover:bg-[#FFC107] transition-all duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Student cutout image ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end">

              {/* Glow ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full
                bg-[#FFC107]/[0.07] blur-[50px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] rounded-full
                border border-[#FFC107]/[0.1] pointer-events-none" />

              {/* Floating student image */}
              <motion.img
                src={studentImg}
                alt="ARK student"
                className="relative z-10 w-[250px] sm:w-[290px] lg:w-[340px] xl:w-[380px]
                  h-auto object-contain drop-shadow-2xl"
                style={{ mixBlendMode: "luminosity", filter: "contrast(1.05) brightness(1.06)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-4 right-0 lg:-right-2 z-20 bg-white rounded-2xl
                  shadow-[0_8px_28px_rgba(0,0,0,0.18)] px-3 py-2.5 flex items-center gap-2.5">
                <div className="bg-[#0B2C55] rounded-xl p-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-[#0B2C55] font-black text-xs leading-tight">80% Qualified</p>
                  <p className="text-[#0B2C55]/50 text-[10px] font-medium">NEET Success Rate</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute bottom-8 left-0 lg:-left-2 z-20 bg-white rounded-2xl
                  shadow-[0_8px_28px_rgba(0,0,0,0.18)] px-3 py-2.5 flex items-center gap-2.5">
                <div className="bg-[#FFC107] rounded-xl p-1.5">
                  <Star className="w-3.5 h-3.5 text-[#0B2C55]" fill="#0B2C55" />
                </div>
                <div>
                  <p className="text-[#0B2C55] font-black text-xs leading-tight">1000+ Students</p>
                  <p className="text-[#0B2C55]/50 text-[10px] font-medium">Across Chennai</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
