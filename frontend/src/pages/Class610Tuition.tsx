import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowRight, Phone, Users, BarChart3, Target, Award, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { faqCategories } from "@/data/faqData";
import { useState } from "react";

const faqs = faqCategories.find(c => c.id === "tuition")?.faqs.slice(0, 8) ?? [];

const classWise = [
    { cls: "Class 6 & 7", focus: "Foundation Building", items: ["Strong basics in Science and Mathematics", "Reading comprehension and writing skills", "Environmental studies and general knowledge", "Study habits and discipline foundation", "Weekly tests and parent communication"] },
    { cls: "Class 8", focus: "Competitive Readiness", items: ["Advanced Science concepts introduction", "Olympiad preparation (Science & Maths)", "NEET Foundation integration available", "NTSE preparation and reasoning skills", "Board exam pattern awareness"] },
    { cls: "Class 9", focus: "Board Preparation Begins", items: ["Full syllabus alignment with board exams", "Science subject specialization begins", "Mathematics advanced problem solving", "Mock test introduction and exam skills", "NEET Foundation continuation"] },
    { cls: "Class 10", focus: "Board Exam Excellence", items: ["Intensive board exam preparation", "Full-length mock board tests monthly", "Answer writing and presentation training", "Previous year paper analysis and strategy", "95%+ distinction rate target preparation"] },
];

const subjects = [
    { name: "Science", desc: "Physics, Chemistry, Biology with practical understanding. Concepts explained with real-world applications and regular lab concept sessions. Board exam pattern aligned teaching with emphasis on diagram-based answers and structured problem solving.", icon: Target },
    { name: "Mathematics", desc: "Algebra, Geometry, Trigonometry, Statistics with strong problem-solving focus. Step-by-step approach to building mathematical thinking. Regular practice sets, formula mastery, and timed problem-solving sessions to build speed and accuracy.", icon: BarChart3 },
    { name: "Social Studies", desc: "History, Geography, Civics, Economics with map work and structured answer writing. Focus on understanding concepts rather than rote memorization. Current affairs integration and critical thinking development.", icon: BookOpen },
    { name: "Languages", desc: "English grammar, writing skills, reading comprehension, essay writing, and Tamil/Hindi language support. Communication skills development alongside curriculum requirements for all boards.", icon: Star },
];

export default function Class610Page() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Class 6-10 Tuition in Chennai | ARK Learning Arena" description="Expert tuition for Class 6-10 in Chennai. CBSE, ICSE & State Board. Weekly testing, parent reports, small batches, and 95%+ distinction rate at ARK Learning Arena." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Class 6-10 Tuition", url: "/class-6-10-tuition" }]} />
            <FAQPageSchema faqs={faqs} />
            <Navbar />

            <main className="pt-[72px]">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "Class 6-10 Tuition", href: "/class-6-10-tuition" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mt-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                                <span className="text-[#FFC107]">Class 6–10 Tuition</span> in Chennai — Build the Foundation for <span className="text-[#FF4CAF]">Excellence</span>
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">ARK Learning Arena provides structured, concept-first tuition for Class 6 to 10 students in Chennai across CBSE, ICSE, and Tamil Nadu State Board. Our approach builds genuine understanding, consistent study habits, and measurable academic improvement through weekly testing, remedial support, and parent transparency reports.</p>
                            <p className="text-white/60 leading-relaxed mb-8">From foundation building in Class 6-7 to intensive board exam preparation in Class 10, every stage of your child's academic journey is planned, tracked, and optimized at ARK's coaching centre in Chennai. Small batches of 15-20 students ensure personalised attention for every learner.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-8 py-6 rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition-colors"><Phone className="w-4 h-4" /> +91 76393 99217</a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Class-wise Breakdown */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">Class-wise Academic Focus</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">Each class level has a specific academic focus designed to build progressively towards board exam excellence and competitive readiness.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {classWise.map((c, i) => (
                                <motion.div key={c.cls} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-muted/30 rounded-2xl p-6 border-l-4 border-[#FFC107]">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-black text-ark-navy">{c.cls}</h3>
                                        <span className="text-xs font-bold bg-[#FFC107]/15 text-ark-navy px-3 py-1 rounded-full">{c.focus}</span>
                                    </div>
                                    <ul className="space-y-2">{c.items.map(t => (<li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{t}</li>))}</ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subjects */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Comprehensive Subject Coverage</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {subjects.map(s => (
                                <div key={s.name} className="bg-white rounded-2xl p-6 shadow-card">
                                    <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-ark-navy flex items-center justify-center"><s.icon className="w-5 h-5 text-[#FFC107]" /></div><h3 className="text-xl font-black text-ark-navy">{s.name}</h3></div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ARK System */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">The ARK Academic System</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[{ icon: Users, title: "Small Batches", desc: "15-20 students per batch for genuine individual attention" }, { icon: BarChart3, title: "Weekly Testing", desc: "Every student assessed weekly with analytics tracking" }, { icon: Award, title: "Parent Reports", desc: "Monthly transparency reports with full academic visibility" }, { icon: Target, title: "Remedial System", desc: "Targeted support for students who need extra help" }].map((f, i) => (
                                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B2C55] flex items-center justify-center mx-auto mb-4"><f.icon className="w-8 h-8 text-[#FFC107]" /></div>
                                    <h3 className="font-black text-ark-navy mb-2">{f.title}</h3>
                                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark max-w-3xl">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Class 6-10 Tuition FAQs</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-border rounded-xl overflow-hidden bg-white">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors">
                                        <span className="font-bold text-ark-navy pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#FFC107] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === i && (<div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}{faq.links?.map(l => (<Link key={l.href} to={l.href} className="block mt-2 text-ark-navy font-semibold hover:text-[#FFC107]">→ {l.text}</Link>))}</div>)}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
                    <div className="container-ark">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Build the <span className="text-[#FFC107]">Right Foundation</span></h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Start with a free Academic Diagnostic Assessment. Discover where your child stands and how ARK's structured system can help them excel.</p>
                        <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment</Button>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/tuition-centre-in-chennai" className="hover:text-[#FFC107]">Tuition Centre →</Link>
                            <Link to="/class-11-12-science-coaching" className="hover:text-[#FFC107]">Class 11-12 Science →</Link>
                            <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107]">NEET Coaching →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
