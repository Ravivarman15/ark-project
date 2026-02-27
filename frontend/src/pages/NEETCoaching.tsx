import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, ArrowRight, Phone, MessageCircle, BookOpen, Target, Users, Award, TrendingUp, Star, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { faqCategories } from "@/data/faqData";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const neetFaqs = faqCategories.find(c => c.id === "neet")?.faqs.slice(0, 10) ?? [];

const curriculum = [
    { subject: "Biology", icon: BookOpen, topics: ["Complete Botany — all NCERT chapters with diagram mastery", "Complete Zoology — all chapters with high-weightage focus", "NCERT line-by-line mastery for 360-mark Biology section", "Previous year Biology analysis and pattern recognition"], color: "bg-green-50 border-green-200" },
    { subject: "Physics", icon: Target, topics: ["Mechanics, Thermodynamics, and Waves", "Electrostatics, Current Electricity, and Magnetism", "Optics, Modern Physics, and Semiconductor Electronics", "Numerical problem-solving and formula mastery"], color: "bg-blue-50 border-blue-200" },
    { subject: "Chemistry", icon: Award, topics: ["Physical Chemistry — Equilibrium, Thermodynamics, Electrochemistry", "Organic Chemistry — Reaction mechanisms and named reactions", "Inorganic Chemistry — Periodic trends and coordination compounds", "NCERT problems and previous year question analysis"], color: "bg-purple-50 border-purple-200" },
];

const results = [
    { name: "Priya S.", score: "680/720", rank: "AIR 4,821", achievement: "Govt. Medical Seat" },
    { name: "Arjun K.", score: "672/720", rank: "AIR 6,102", achievement: "Govt. Medical Seat" },
    { name: "Divya R.", score: "665/720", rank: "AIR 7,834", achievement: "Govt. Medical Seat" },
    { name: "Meera J.", score: "648/720", rank: "AIR 12,450", achievement: "Private Medical Seat" },
];

const whyARK = [
    { icon: Users, title: "Small Batches of 20", desc: "Not 50-100 like mass coaching centres. Every student gets individual attention and doubt-clearing." },
    { icon: BookOpen, title: "NCERT-First Approach", desc: "80% of NEET is NCERT-based. We ensure complete NCERT mastery before any reference material." },
    { icon: BarChart3, title: "Weekly Testing System", desc: "Every student is tested weekly. Results feed into individual performance analytics and remedial plans." },
    { icon: Target, title: "600+ Score Strategy", desc: "Structured topic roadmap prioritizing high-weightage chapters to maximize scores systematically." },
    { icon: Clock, title: "Monthly Parent Reports", desc: "Full transparency with attendance, test scores, subject-wise performance, and improvement tracking." },
    { icon: Award, title: "Proven 80% Qualification Rate", desc: "Consistent results with 3 government medical seat holders. Our system works." },
];

const studyPlan = [
    { phase: "Phase 1 (Apr–Aug)", title: "Foundation Building", desc: "Complete syllabus coverage with NCERT mastery, chapter-wise tests, and concept building across all three subjects." },
    { phase: "Phase 2 (Sep–Dec)", title: "Intensive Practice", desc: "Deep revision, problem-solving intensive, unit-wise mock tests, and advanced problem exposure." },
    { phase: "Phase 3 (Jan–Mar)", title: "Mock Exam Series", desc: "Full-length NEET mock exams, previous year paper analysis, and exam strategy refinement." },
    { phase: "Phase 4 (Apr–May)", title: "Final Sprint", desc: "Daily mock tests, personalized gap analysis, rapid revision, and exam temperament building." },
];

export default function NEETCoachingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Best NEET Coaching in Chennai | ARK Learning Arena" description="Join Chennai's top NEET coaching centre with 80% qualification rate, small batches of 20, weekly testing, and 3 govt medical seat holders. Expert NCERT-based NEET preparation." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "NEET Coaching in Chennai", url: "/neet-coaching-in-chennai" }]} />
            <FAQPageSchema faqs={neetFaqs} />
            <Navbar />

            <main className="pt-[72px]">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "NEET Coaching in Chennai", href: "/neet-coaching-in-chennai" }]} />
                        <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                                    <GraduationCap className="w-4 h-4 text-[#FFC107]" />
                                    <span className="text-[#FFC107] text-sm font-semibold">NEET Coaching in Chennai</span>
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                                    Best <span className="text-[#FFC107]">NEET Coaching</span> in Chennai — Structured for <span className="text-[#FF4CAF]">Success</span>
                                </h1>
                                <p className="text-white/80 text-lg leading-relaxed mb-4">
                                    ARK Learning Arena is Chennai's premier NEET coaching centre with a proven 80% NEET qualification rate and 3 government medical seat holders. Our structured 2-year NCERT-based program, weekly testing system, and expert faculty consistently produce top NEET performers.
                                </p>
                                <p className="text-white/60 leading-relaxed mb-8">
                                    Whether you're starting NEET preparation in Class 11 or looking for a focused repeater program, ARK's disciplined academic ecosystem gives you the structure, mentorship, and accountability you need to qualify NEET and secure a medical seat.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-8 py-6 rounded-full" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
                                        Book Free Assessment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition-colors">
                                        <Phone className="w-4 h-4" /> +91 76393 99217
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {[{ val: "80%", label: "NEET Qualified" }, { val: "3+", label: "Govt Seats" }, { val: "600+", label: "Score Target" }, { val: "20", label: "Per Batch" }].map(s => (
                                        <div key={s.label} className="text-center"><div className="text-2xl font-black text-[#FFC107]">{s.val}</div><div className="text-white/50 text-xs mt-1">{s.label}</div></div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
                                    <h3 className="text-xl font-black text-[#FFC107] mb-6">NEET 2024 Toppers at ARK</h3>
                                    <div className="space-y-4">
                                        {results.map((r, i) => (
                                            <div key={r.name} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                                                <div className="w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center text-[#0B2C55] font-black text-sm">#{i + 1}</div>
                                                <div className="flex-1"><div className="font-bold">{r.name}</div><div className="text-white/50 text-sm">{r.rank}</div></div>
                                                <div className="text-right"><div className="text-[#FFC107] font-black">{r.score}</div><div className="text-xs text-[#FF4CAF]">{r.achievement}</div></div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/results-achievements" className="flex items-center gap-2 text-[#FFC107] font-bold mt-6 hover:underline">View All Results <ArrowRight className="w-4 h-4" /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why ARK for NEET */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-ark-navy mb-4">Why ARK for <span className="text-[#FFC107]">NEET Coaching</span> in Chennai?</h2>
                            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">ARK is not just another NEET coaching centre in Chennai. We are a structured academic ecosystem built on systems, accountability, and data-driven improvement that consistently produces NEET qualifiers.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyARK.map((item, i) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted/30 rounded-2xl p-6 hover:shadow-card transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-ark-navy flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-[#FFC107]" /></div>
                                    <h3 className="text-lg font-black text-ark-navy mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Classroom Atmosphere Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-ark">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <h2 className="text-3xl md:text-4xl font-black text-ark-navy mb-6">
                                    Chennai's Most <span className="text-[#FFC107]">Disciplined</span> & <span className="text-[#FF4CAF]">Focused</span> NEET Environment
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    At ARK Learning Arena, we believe that the right environment is the first step toward academic mastery. Our classrooms in Chennai are designed for maximum focus, featuring specialized NCERT mastery tools, well-lit study spaces, and an atmosphere that promotes healthy competition and rigorous inquiry.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Modern, well-lit study rooms for maximum focus",
                                        "Interactive teaching with advanced NCERT diagrams",
                                        "Small, quiet batch environments for individual doubt-clearing",
                                        "Disciplined study culture mirroring top national institutes"
                                    ].map(text => (
                                        <div key={text} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span className="font-semibold text-ark-navy">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                                <div className="absolute -inset-4 bg-ark-yellow/10 rounded-[2.5rem] blur-2xl -z-10" />
                                <img
                                    src="/neet_coaching_chennai_featured_1772101332974.png"
                                    alt="Modern NEET coaching classroom in Chennai"
                                    className="rounded-3xl shadow-2xl border-4 border-white w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-ark-navy flex items-center justify-center">
                                            <Users className="w-5 h-5 text-ark-yellow" />
                                        </div>
                                        <div>
                                            <p className="font-black text-ark-navy text-sm">Real Classroom View</p>
                                            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Chennai Learning Centre</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">Our NEET Coaching Curriculum</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-3xl mx-auto">A comprehensive, NCERT-aligned curriculum covering all three NEET subjects with systematic topic progression and weekly practice tests at our Chennai coaching centre.</p>
                        <div className="grid lg:grid-cols-3 gap-6">
                            {curriculum.map((sub) => (
                                <div key={sub.subject} className={`rounded-2xl border-2 ${sub.color} p-6`}>
                                    <div className="flex items-center gap-3 mb-4"><sub.icon className="w-6 h-6 text-ark-navy" /><h3 className="text-xl font-black text-ark-navy">{sub.subject}</h3></div>
                                    <ul className="space-y-3">{sub.topics.map(t => (<li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{t}</li>))}</ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Study Plan */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">NEET 2026 Study Plan</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">Our proven month-by-month NEET preparation strategy has consistently helped ARK students in Chennai score 600+ in NEET.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {studyPlan.map((phase, i) => (
                                <motion.div key={phase.phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-[#0B2C55] to-[#0d3360] rounded-2xl p-6 text-white">
                                    <div className="text-[#FFC107] text-xs font-bold uppercase tracking-wider mb-2">{phase.phase}</div>
                                    <h3 className="text-lg font-black mb-3">{phase.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark max-w-3xl">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">NEET Coaching FAQs</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12">Common questions about NEET coaching at ARK Learning Arena in Chennai.</p>
                        <div className="space-y-3">
                            {neetFaqs.map((faq, i) => (
                                <div key={i} className="border border-border rounded-xl overflow-hidden bg-white">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors">
                                        <span className="font-bold text-ark-navy pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#FFC107] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                                            {faq.a}
                                            {faq.links?.map(l => (<Link key={l.href} to={l.href} className="block mt-2 text-ark-navy font-semibold hover:text-[#FFC107] transition-colors">→ {l.text}</Link>))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
                    <div className="container-ark">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Start Your <span className="text-[#FFC107]">NEET Journey</span>?</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Book a free Academic Diagnostic Assessment and discover exactly where you stand. ARK's structured NEET coaching in Chennai can take you from where you are to where you want to be.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>
                                Book Free Assessment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> Call Now</a>
                            <a href="https://wa.me/917639399217?text=Hi%2C%20I%27m%20interested%20in%20NEET%20coaching%20at%20ARK%20Chennai." className="flex items-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"><MessageCircle className="w-5 h-5" /> WhatsApp</a>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/class-11-12-science-coaching" className="hover:text-[#FFC107] transition-colors">Class 11-12 Science →</Link>
                            <Link to="/results-achievements" className="hover:text-[#FFC107] transition-colors">Our Results →</Link>
                            <Link to="/tuition-centre-in-chennai" className="hover:text-[#FFC107] transition-colors">Tuition Centre →</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppSticky />
        </div>
    );
}
