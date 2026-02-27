import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, TrendingUp, GraduationCap, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";

const neetToppers = [
    { student: "Priya S.", score: 680, total: 720, rank: "AIR 4,821", achievement: "Govt. Medical Seat", year: "2024" },
    { student: "Arjun K.", score: 672, total: 720, rank: "AIR 6,102", achievement: "Govt. Medical Seat", year: "2024" },
    { student: "Divya R.", score: 665, total: 720, rank: "AIR 7,834", achievement: "Govt. Medical Seat", year: "2024" },
    { student: "Meera J.", score: 648, total: 720, rank: "AIR 12,450", achievement: "Private Medical Seat", year: "2024" },
    { student: "Karthik V.", score: 635, total: 720, rank: "AIR 18,200", achievement: "Private Medical Seat", year: "2024" },
    { student: "Sneha M.", score: 620, total: 720, rank: "AIR 24,100", achievement: "NEET Qualified", year: "2024" },
];

const boardToppers = [
    { student: "Karthik M.", score: "98%", program: "Class 12 — CBSE", achievement: "State Distinction" },
    { student: "Sneha P.", score: "97%", program: "Class 10 — CBSE", achievement: "School Topper" },
    { student: "Rahul V.", score: "96%", program: "Class 12 — State Board", achievement: "Board Excellence" },
    { student: "Ananya S.", score: "95%", program: "Class 10 — CBSE", achievement: "District Rank" },
    { student: "Vikram R.", score: "95%", program: "Class 12 — ICSE", achievement: "School Topper" },
    { student: "Priya K.", score: "94%", program: "Class 10 — State Board", achievement: "Board Excellence" },
];

const stats = [
    { value: "80%", label: "NEET Qualification Rate", desc: "Consistent qualification rate among coached students" },
    { value: "3+", label: "Government Medical Seats", desc: "Students securing government medical college admissions" },
    { value: "95%+", label: "Board Distinction Rate", desc: "Students achieving distinction in board examinations" },
    { value: "500+", label: "Students Coached", desc: "Students mentored through ARK's academic system" },
    { value: "10+", label: "Years of Excellence", desc: "Years of structured academic coaching in Chennai" },
    { value: "98%", label: "Highest Board Score", desc: "Top board exam score achieved by an ARK student" },
];

const milestones = [
    { year: "2015", event: "ARK Learning Arena founded in Chennai with a vision to create a structured academic ecosystem" },
    { year: "2017", event: "Launched NEET Coaching program with NCERT-first methodology and weekly testing framework" },
    { year: "2019", event: "First batch of NEET qualifiers — 75% qualification rate in inaugural NEET coaching batch" },
    { year: "2021", event: "Expanded to include ARK Nestlings (Early Childhood) and NEET Foundation programs" },
    { year: "2023", event: "Achieved 80% NEET qualification rate, 3 government medical seat holders, 95%+ board distinction rate" },
    { year: "2024", event: "Top scorer Priya S. achieves 680/720 in NEET (AIR 4,821). Franchise model launched across Chennai." },
];

export default function ResultsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Results & Achievements | ARK Learning Arena Chennai" description="ARK Learning Arena's proven results: 80% NEET qualification rate, 3 govt medical seats, 95%+ board distinction rate. View our toppers and achievements." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Results & Achievements", url: "/results-achievements" }]} />
            <Navbar />

            <main className="pt-[72px]">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "Results & Achievements", href: "/results-achievements" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mt-6">
                            <span className="inline-flex items-center gap-2 bg-[#FFC107]/15 rounded-full px-4 py-1.5 mb-5 mx-auto"><Trophy className="w-4 h-4 text-[#FFC107]" /><span className="text-[#FFC107] text-sm font-semibold">Proven Results</span></span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">Our Students <span className="text-[#FFC107]">Shine</span> — Real Scores, Real <span className="text-[#FF4CAF]">Ranks</span></h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-4">ARK Learning Arena's structured academic system consistently produces top performers in NEET and Board examinations in Chennai. Our results are not claims — they are documented, verified, and reproducible outcomes of a system built on discipline, accountability, and expert mentorship.</p>
                            <p className="text-white/60 max-w-2xl mx-auto">These numbers represent real students from Chennai who transformed their academic trajectory through ARK's proven coaching methodology.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {stats.map((s, i) => (
                                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted/30 rounded-2xl p-6 text-center">
                                    <div className="text-4xl md:text-5xl font-black text-[#FFC107] mb-2">{s.value}</div>
                                    <h3 className="text-ark-navy font-bold mb-1">{s.label}</h3>
                                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEET Toppers */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white">
                    <div className="container-ark">
                        <div className="flex items-center gap-3 mb-8"><div className="w-12 h-12 rounded-xl bg-[#FFC107] flex items-center justify-center"><GraduationCap className="w-6 h-6 text-[#0B2C55]" /></div><h2 className="text-3xl font-black">NEET Toppers 2024</h2></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {neetToppers.map((t, i) => (
                                <motion.div key={t.student} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-[#0B2C55] bg-[#FFC107] px-3 py-1 rounded-full flex items-center gap-1"><Trophy className="w-3 h-3" />#{i + 1}</span>
                                        <span className="text-[#FFC107]/80 text-sm font-semibold">{t.rank}</span>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="text-4xl font-black text-[#FFC107]">{t.score}<span className="text-lg text-white/40">/{t.total}</span></div>
                                        <div className="text-white/50 text-sm">NEET {t.year}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-lg">{t.student}</div>
                                        <div className="mt-2 text-xs font-semibold text-[#FF4CAF] bg-[#FF4CAF]/15 px-3 py-1 rounded-full inline-flex items-center gap-1"><TrendingUp className="w-3 h-3" />{t.achievement}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Board Toppers */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <div className="flex items-center gap-3 mb-8"><div className="w-12 h-12 rounded-xl bg-[#FF4CAF] flex items-center justify-center"><Medal className="w-6 h-6 text-white" /></div><h2 className="text-3xl font-black text-ark-navy">Board Toppers</h2></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {boardToppers.map((t, i) => (
                                <motion.div key={t.student} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted/30 rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-3"><Star className="w-5 h-5 text-[#FFC107]" /><span className="text-xs font-bold text-[#FF4CAF] bg-[#FF4CAF]/15 px-3 py-1 rounded-full">{t.achievement}</span></div>
                                    <div className="text-4xl font-black text-[#FFC107] mb-2">{t.score}</div>
                                    <div className="font-bold text-ark-navy text-lg">{t.student}</div>
                                    <div className="text-muted-foreground text-sm">{t.program}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark max-w-3xl">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Our Journey of Excellence</h2>
                        <div className="space-y-6">
                            {milestones.map((m, i) => (
                                <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B2C55] flex items-center justify-center flex-shrink-0"><span className="text-[#FFC107] font-black text-sm">{m.year}</span></div>
                                    <div className="bg-white rounded-xl p-4 shadow-card flex-1"><p className="text-muted-foreground text-sm leading-relaxed">{m.event}</p></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
                    <div className="container-ark">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Your Child Could Be <span className="text-[#FFC107]">Next</span></h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Every topper on this page started with a single step — a free Academic Diagnostic Assessment at ARK. Start your child's success story today.</p>
                        <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-5 h-5" /></Button>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107]">NEET Coaching →</Link>
                            <Link to="/tuition-centre-in-chennai" className="hover:text-[#FFC107]">Tuition Centre →</Link>
                            <Link to="/testimonials" className="hover:text-[#FFC107]">Testimonials →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
