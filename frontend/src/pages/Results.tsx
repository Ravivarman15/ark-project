import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
    Trophy,
    TrendingUp,
    Target,
    GraduationCap,
    ArrowRight,
    Award,
    HeartHandshake,
    ClipboardList,
    Brain,
    Users,
    CalendarCheck,
    LineChart,
    Sparkles,
    ShieldCheck,
    BookOpen,
    CheckCircle2,
    Activity,
    Heart,
    Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { useCountUp } from "@/hooks/useCountUp";

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */

// SECTION 2 — Batch snapshot timeline
const batches = [
    {
        year: "2025",
        highest: "650",
        range: "400 – 650",
        highlights: [
            "Multiple students crossed 500+",
            "Government & Private Medical admissions",
            "Structured mentoring-based improvement",
            "Individual academic roadmaps",
        ],
    },
    {
        year: "2024",
        highest: "640+",
        range: "400 – 640",
        highlights: [
            "Strong Government quota admissions",
            "Significant score improvements",
            "Students from diverse backgrounds succeeded",
        ],
    },
    {
        year: "2023",
        highest: "610+",
        range: "400 – 610",
        highlights: [
            "Multiple 500+ achievers",
            "State Quota admissions",
            "7.5% Government School Quota seats",
            "Private Medical College admissions",
        ],
    },
];

// SECTION 3 — Result metrics
const metrics = [
    {
        icon: TrendingUp,
        value: 120,
        prefix: "+",
        suffix: "",
        unit: "Marks",
        label: "Average Improvement",
        desc: "Typical score gain from first diagnostic to final NEET attempt.",
    },
    {
        icon: Activity,
        value: 210,
        prefix: "+",
        suffix: "",
        unit: "Marks",
        label: "Highest Improvement",
        desc: "Our biggest single-student turnaround through structured mentoring.",
    },
    {
        icon: Target,
        value: 4,
        prefix: "",
        suffix: " / 10",
        unit: "",
        label: "Students Crossed 500+",
        desc: "Four out of every ten students broke the 500 mark.",
    },
    {
        icon: GraduationCap,
        value: 100,
        prefix: "",
        suffix: "%",
        unit: "",
        label: "Personalised Mentoring",
        desc: "Every student receives a 1-on-1 mentor and a custom roadmap.",
    },
];

// SECTION 4 — Student success cards (first = highest score)
const students = [
    { name: "Ananya S", score: 650, category: "Government MBBS", ribbon: "Top Scorer 2025", img: "/assets/students/ananya-s.jpg" },
    { name: "Harish Kumar", score: 624, category: "Government MBBS", ribbon: "Govt. Quota", img: "/assets/students/harish-kumar.jpg" },
    { name: "Priyadharshini R", score: 602, category: "Government MBBS", ribbon: "State Quota", img: "/assets/students/priyadharshini-r.jpg" },
    { name: "Vignesh S", score: 588, category: "Private Medical College", ribbon: "+180 Improvement", img: "/assets/students/vignesh-s.jpg" },
    { name: "Sneha M", score: 563, category: "7.5% Govt. School Quota", ribbon: "Reservation Benefit", img: "/assets/students/sneha-m.jpg" },
    { name: "Aravind K", score: 542, category: "Private Medical College", ribbon: "+150 Improvement", img: "/assets/students/aravind-k.jpg" },
    { name: "Deepika R", score: 519, category: "7.5% Govt. School Quota", ribbon: "Reservation Benefit", img: "/assets/students/deepika-r.jpg" },
];

// SECTION 5 — What makes ARK different
const arkDifference = [
    { icon: ClipboardList, text: "Personalised Study Roadmap" },
    { icon: LineChart, text: "Weekly Performance Analysis" },
    { icon: BookOpen, text: "Daily MCQ Practice" },
    { icon: Activity, text: "Individual Error Tracking" },
    { icon: Users, text: "Parent Review Meetings" },
    { icon: CalendarCheck, text: "Revision Planning" },
    { icon: Heart, text: "Psychological Support" },
    { icon: Target, text: "Strategy Based On Target Score" },
];

// SECTION 6 — Philosophy targets
const philosophyTargets = [
    { target: "650+", label: "The high achievers aiming for the very top." },
    { target: "550+", label: "Strong, consistent performers chasing a confident seat." },
    { target: "450–500", label: "Students leveraging reservation benefits for admission." },
    { target: "Max Growth", label: "Those whose win is the biggest possible improvement." },
];

// SECTION 7 — Our promise
const promises = [
    { icon: HeartHandshake, title: "Honest Guidance", desc: "Realistic targets and clear advice — never inflated claims." },
    { icon: ShieldCheck, title: "Transparent Results", desc: "Documented, verifiable outcomes across every batch." },
    { icon: Users, title: "Individual Attention", desc: "Small batches so no student is ever a number." },
    { icon: Brain, title: "Continuous Mentoring", desc: "A mentor walking with each student till the final exam." },
    { icon: LineChart, title: "Data-Driven Preparation", desc: "Every decision backed by performance analytics." },
];

const monogramGradients = [
    "from-[#0B2C55] to-[#1a4d8f]",
    "from-[#123e74] to-[#0B2C55]",
    "from-[#0d3360] to-[#2156a0]",
    "from-[#0B2C55] to-[#0d3360]",
    "from-[#16467f] to-[#0B2C55]",
    "from-[#0B2C55] to-[#1e4f93]",
    "from-[#103a6e] to-[#0B2C55]",
];

/* ─────────────────────────────────────────────────────────────
   SMALL COMPONENTS
   ───────────────────────────────────────────────────────────── */

function Counter({ value, prefix = "", suffix = "", duration = 2000 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const count = useCountUp(inView ? value : 0, duration);
    return (
        <span ref={ref}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

function StudentAvatar({ name, img, index }: { name: string; img?: string; index: number }) {
    const [errored, setErrored] = useState(false);
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    if (img && !errored) {
        return (
            <img
                src={img}
                alt={`${name} — ARK NEET student`}
                loading="lazy"
                onError={() => setErrored(true)}
                className="w-full h-full object-cover"
            />
        );
    }

    return (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${monogramGradients[index % monogramGradients.length]}`}>
            <span className="text-4xl md:text-5xl font-black text-[#FFC107]/90 tracking-tight">{initials}</span>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function ResultsPage() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title="NEET Results & Student Success | ARK Learning Arena Chennai"
                description="ARK Learning Arena's NEET results — average +120 mark improvement, students scoring 400–650, Government & Private medical admissions through General, Reserved and 7.5% quota. Every student gets a strategy."
                canonical="https://tuitionwithark.com/results-achievements"
            />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "NEET Results & Success", url: "/results-achievements" }]} />
            <Navbar />

            <main className="pt-[72px]">
                {/* ── SECTION 1 — HERO ── */}
                <section ref={heroRef} className="relative bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-20 md:py-28 overflow-hidden">
                    {/* Parallax decorative layers */}
                    <motion.div style={{ y: parallaxY }} className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#FFC107]/10 blur-3xl" />
                    </motion.div>
                    <motion.div style={{ y: parallaxY2 }} className="absolute inset-0 pointer-events-none">
                        <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-[#1a4d8f]/40 blur-3xl" />
                    </motion.div>

                    <div className="container-ark relative z-10">
                        <Breadcrumbs items={[{ label: "NEET Results & Success", href: "/results-achievements" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mt-6 max-w-4xl mx-auto">
                            <span className="inline-flex items-center gap-2 bg-[#FFC107]/15 rounded-full px-4 py-1.5 mb-6 mx-auto">
                                <Trophy className="w-4 h-4 text-[#FFC107]" />
                                <span className="text-[#FFC107] text-sm font-semibold">NEET Results & Student Success</span>
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.12] mb-6">
                                Every student gets a <span className="text-[#FFC107]">strategy</span>.
                                <br className="hidden sm:block" /> Every mark counts.
                                <br className="hidden sm:block" /> Every <span className="text-[#FFC107]">dream</span> matters.
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                                From potential to performance. From preparation to medical college. At ARK, success is measured by how far every
                                student grows — not by showcasing a single topper.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 3 — RESULT METRICS ── */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-ark-navy mb-3">Results That Reflect Real Growth</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Not a single number on a poster — a system that moves every student forward.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {metrics.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className="group relative rounded-2xl p-6 bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFC107]/10 blur-2xl group-hover:bg-[#FFC107]/20 transition-all" />
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-[#FFC107] flex items-center justify-center mb-4">
                                            <m.icon className="w-6 h-6 text-[#0B2C55]" />
                                        </div>
                                        <div className="text-4xl md:text-[2.75rem] font-black text-[#FFC107] leading-none">
                                            <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                                            {m.unit && <span className="text-lg font-bold text-white/70 ml-1">{m.unit}</span>}
                                        </div>
                                        <h3 className="font-bold text-lg mt-3">{m.label}</h3>
                                        <p className="text-white/60 text-sm mt-1 leading-relaxed">{m.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Government MBBS admission routes */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 rounded-2xl bg-muted/40 border border-border p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-ark-navy flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-6 h-6 text-[#FFC107]" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-ark-navy text-lg leading-tight">Government MBBS Admissions</h3>
                                        <p className="text-muted-foreground text-sm">Secured across every eligible pathway</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 md:ml-auto">
                                    {["General Category", "Reserved Category", "7.5% Govt. School Quota"].map((route) => (
                                        <span key={route} className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-semibold text-ark-navy shadow-card">
                                            <CheckCircle2 className="w-4 h-4 text-ark-yellow" />
                                            {route}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 2 — NEET RESULTS SNAPSHOT (timeline) ── */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
                            <span className="text-[#FFC107] text-sm font-semibold tracking-widest uppercase bg-[#FFC107]/15 px-4 py-2 rounded-full">Results Snapshot</span>
                            <h2 className="text-3xl md:text-4xl font-black mt-6">A Track Record Across Every Batch</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-5">
                            {batches.map((b, i) => (
                                <motion.div
                                    key={b.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                    whileHover={{ y: -6 }}
                                    className="bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/[0.12] transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-xs font-bold text-[#0B2C55] bg-[#FFC107] px-3 py-1 rounded-full">{b.year} Batch</span>
                                        <Award className="w-5 h-5 text-[#FFC107]" />
                                    </div>
                                    <div className="mb-5">
                                        <div className="text-white/50 text-xs uppercase tracking-wide">Highest Score</div>
                                        <div className="text-5xl font-black text-[#FFC107] leading-none mt-1">{b.highest}</div>
                                        <div className="text-white/60 text-sm mt-2">
                                            Scores from <span className="text-white font-semibold">{b.range}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {b.highlights.map((h) => (
                                            <li key={h} className="flex items-start gap-2.5 text-sm text-white/80">
                                                <CheckCircle2 className="w-4 h-4 text-[#FFC107] flex-shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 4 — STUDENT SUCCESS CARDS ── */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
                            <span className="text-ark-pink text-sm font-semibold tracking-widest uppercase bg-ark-pink/10 px-4 py-2 rounded-full">Student Success Stories</span>
                            <h2 className="text-3xl md:text-4xl font-black text-ark-navy mt-6 mb-3">Real Students. Real Seats.</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Behind every score is a roadmap, a mentor, and months of disciplined effort.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {students.map((s, i) => (
                                <motion.div
                                    key={s.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                                >
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ring-2 ring-[#FFC107]/40" />

                                    {/* Portrait */}
                                    <div className="relative h-52 bg-muted overflow-hidden">
                                        <StudentAvatar name={s.name} img={s.img} index={i} />
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2C55]/85 to-transparent" />
                                        {/* Achievement ribbon */}
                                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-ark-pink text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                                            <Star className="w-3 h-3" />
                                            {s.ribbon}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="font-black text-ark-navy text-lg group-hover:text-ark-pink transition-colors">{s.name}</h3>
                                        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ark-navy bg-muted px-3 py-1.5 rounded-full">
                                            <GraduationCap className="w-3.5 h-3.5 text-ark-yellow" />
                                            {s.category}
                                        </div>

                                        {/* Trending NEET score highlight */}
                                        <div className="mt-4 rounded-xl bg-gradient-to-r from-[#0B2C55] to-[#0d3360] p-3.5 shadow-card group-hover:shadow-yellow transition-shadow duration-300">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-[#FFC107]/20 flex items-center justify-center">
                                                        <TrendingUp className="w-4 h-4 text-[#FFC107]" />
                                                    </span>
                                                    <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">NEET Score</span>
                                                </div>
                                                <div className="flex items-baseline gap-0.5">
                                                    <span className="text-3xl font-black text-[#FFC107] leading-none drop-shadow-[0_0_12px_rgba(255,193,7,0.45)]">
                                                        <Counter value={s.score} />
                                                    </span>
                                                    <span className="text-xs font-bold text-white/40">/720</span>
                                                </div>
                                            </div>
                                            {/* Animated score bar */}
                                            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(s.score / 720) * 100}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                                                    className="h-full rounded-full bg-gradient-to-r from-[#FFC107] to-[#ffd95e]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-muted-foreground/70 text-xs mt-8">
                            Student names shown are representative of ARK's NEET outcomes. Verified photographs are added with student and parent consent.
                        </p>
                    </div>
                </section>

                {/* ── SECTION 5 — WHAT MAKES ARK DIFFERENT ── */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-black text-ark-navy mb-3">
                                We don't just coach. <span className="text-ark-yellow">We mentor.</span>
                            </h2>
                            <p className="text-muted-foreground">Every ARK student receives a complete support system — not just classes.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {arkDifference.map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-ark-yellow/40"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-ark-navy/5 group-hover:bg-ark-yellow flex items-center justify-center mb-4 transition-colors">
                                        <item.icon className="w-6 h-6 text-ark-navy group-hover:text-ark-navy" />
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-ark-yellow flex-shrink-0 mt-1" />
                                        <span className="font-bold text-ark-navy leading-snug">{item.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 6 — ARK PHILOSOPHY ── */}
                <section className="section-padding bg-gradient-to-br from-[#071c36] via-[#0B2C55] to-[#0d3360] text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#FFC107]/5 blur-3xl pointer-events-none" />
                    <div className="container-ark relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-12">
                            <Sparkles className="w-8 h-8 text-[#FFC107] mx-auto mb-5" />
                            <p className="text-2xl md:text-3xl font-black leading-snug">
                                "We believe every student deserves a <span className="text-[#FFC107]">realistic path</span> to medical admission."
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {philosophyTargets.map((p, i) => (
                                <motion.div
                                    key={p.target}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.1 }}
                                    className="bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-[#FFC107] leading-none mb-2">{p.target}</div>
                                    <p className="text-white/70 text-sm leading-relaxed">{p.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center text-white/80 text-lg max-w-2xl mx-auto mt-12">
                            At ARK, success is measured by <span className="text-[#FFC107] font-semibold">student growth</span> — not by showcasing only one topper.
                        </motion.p>
                    </div>
                </section>

                {/* ── SECTION 7 — OUR PROMISE ── */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
                            <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/15 px-4 py-2 rounded-full">Our Promise</span>
                            <h2 className="text-3xl md:text-4xl font-black text-ark-navy mt-6">What Every ARK Parent Can Count On</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {promises.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.08 }}
                                    whileHover={{ y: -6 }}
                                    className="group text-center rounded-2xl p-6 bg-muted/30 hover:bg-ark-navy transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-ark-yellow flex items-center justify-center mx-auto mb-4">
                                        <p.icon className="w-7 h-7 text-ark-navy" />
                                    </div>
                                    <h3 className="font-black text-ark-navy group-hover:text-white transition-colors">{p.title}</h3>
                                    <p className="text-muted-foreground group-hover:text-white/70 text-sm mt-2 leading-relaxed transition-colors">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
                    <div className="container-ark">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">
                                Your Child's Path Starts With a <span className="text-[#FFC107]">Strategy</span>
                            </h2>
                            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                                Every result on this page began with one free Academic Diagnostic Assessment. Let's map your child's realistic route to medical college.
                            </p>
                            <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => (window.location.href = "/")}>
                                Book Free Assessment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                                <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107] transition-colors">NEET Coaching →</Link>
                                <Link to="/tuition-centre-in-chennai" className="hover:text-[#FFC107] transition-colors">Tuition Centre →</Link>
                                <Link to="/testimonials" className="hover:text-[#FFC107] transition-colors">Testimonials →</Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppSticky />
        </div>
    );
}
