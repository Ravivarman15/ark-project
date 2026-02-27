import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, CheckCircle2, ArrowRight, Phone, BookOpen, Target, Award, BarChart3, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { faqCategories } from "@/data/faqData";
import { useState } from "react";

const faqs = [...(faqCategories.find(c => c.id === "tuition")?.faqs.slice(2, 6) ?? []), ...(faqCategories.find(c => c.id === "neet")?.faqs.slice(4, 8) ?? [])];

const streams = [
    { name: "Physics", topics: ["Mechanics — Laws of Motion, Work Energy Power, Rotational Motion", "Thermodynamics — Heat, Kinetic Theory, Laws of Thermodynamics", "Electrostatics & Current Electricity", "Magnetism & Electromagnetic Induction", "Optics — Wave and Ray Optics", "Modern Physics & Semiconductor Electronics", "Board exam numerical problem mastery", "NEET Physics problem-solving integration"], icon: Target, color: "bg-blue-50 border-blue-200" },
    { name: "Chemistry", topics: ["Physical Chemistry — Solutions, Electrochemistry, Chemical Kinetics", "Organic Chemistry — Hydrocarbons, Alcohols, Aldehydes, Amines", "Inorganic Chemistry — Coordination Compounds, p-Block, d-Block", "NCERT-based problem solving for NEET", "Reaction mechanism understanding", "Board exam answer writing techniques", "Laboratory practical support", "Previous year pattern analysis"], icon: FlaskConical, color: "bg-green-50 border-green-200" },
    { name: "Biology", topics: ["Botany — Plant Physiology, Genetics, Ecology, Biotechnology", "Zoology — Human Physiology, Reproduction, Evolution", "NCERT line-by-line mastery (360 marks in NEET)", "Diagram drawing and labeling practice", "High-weightage chapter focused preparation", "Board exam structured answer writing", "Previous year analysis and pattern study", "Mock test based performance tracking"], icon: BookOpen, color: "bg-purple-50 border-purple-200" },
    { name: "Mathematics", topics: ["Calculus — Limits, Continuity, Derivatives, Integration", "Algebra — Matrices, Determinants, Permutations, Probability", "Coordinate Geometry — Conic Sections, 3D Geometry", "Trigonometry — Inverse, Properties, Applications", "Statistics & Mathematical Reasoning", "Board exam speed and accuracy training", "Formula mastery and shortcut techniques", "Problem pattern recognition"], icon: BarChart3, color: "bg-amber-50 border-amber-200" },
];

const dualBenefits = [
    { title: "Board Exam Excellence", desc: "Complete board syllabus coverage with mock tests, answer writing training, and 95%+ distinction rate preparation for Class 11 and 12 across CBSE, ICSE, and State Board.", icon: Award },
    { title: "NEET Integration", desc: "For aspiring medical students, our Science coaching seamlessly integrates NEET preparation with board studies — covering NCERT mastery, mock tests, and competitive exam readiness simultaneously.", icon: GraduationCap },
];

export default function Class1112Page() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Class 11-12 Science Coaching in Chennai | ARK" description="Expert Class 11-12 Science coaching in Chennai. Physics, Chemistry, Biology, Maths for CBSE, ICSE & State Board. Board exam + NEET integrated preparation at ARK." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Class 11-12 Science Coaching", url: "/class-11-12-science-coaching" }]} />
            <FAQPageSchema faqs={faqs} />
            <Navbar />

            <main className="pt-[72px]">
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "Class 11-12 Science Coaching", href: "/class-11-12-science-coaching" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mt-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"><span className="text-[#FFC107]">Class 11–12 Science</span> Coaching in Chennai — Board Exam + <span className="text-[#FF4CAF]">NEET Ready</span></h1>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">ARK Learning Arena's Class 11-12 Science coaching in Chennai provides in-depth Physics, Chemistry, Biology, and Mathematics instruction aligned with CBSE, ICSE, and Tamil Nadu State Board curricula. For NEET aspirants, our program integrates board preparation with competitive exam readiness — covering both goals simultaneously without academic overload.</p>
                            <p className="text-white/60 leading-relaxed mb-8">Expert faculty, small focused batches, weekly chapter-wise tests, and monthly full-length mock exams ensure that every Class 11 and 12 student at ARK is prepared not just for board exams but for the competitive challenges ahead. Our students in Chennai consistently achieve 95%+ in boards while simultaneously qualifying for NEET.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-8 py-6 rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-4 h-4" /></Button>
                                <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold"><Phone className="w-4 h-4" /> +91 76393 99217</a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Dual Benefits */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Two Goals, <span className="text-[#FFC107]">One Program</span></h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {dualBenefits.map(b => (
                                <div key={b.title} className="bg-muted/30 rounded-2xl p-8 border-l-4 border-[#FFC107]">
                                    <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 rounded-xl bg-ark-navy flex items-center justify-center"><b.icon className="w-6 h-6 text-[#FFC107]" /></div><h3 className="text-xl font-black text-ark-navy">{b.title}</h3></div>
                                    <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subjects */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">Subject-Wise Curriculum</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">Deep, comprehensive coverage of each Science stream with board exam and NEET preparation focus.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {streams.map(s => (
                                <div key={s.name} className={`rounded-2xl border-2 ${s.color} p-6`}>
                                    <div className="flex items-center gap-3 mb-4"><s.icon className="w-6 h-6 text-ark-navy" /><h3 className="text-xl font-black text-ark-navy">{s.name}</h3></div>
                                    <ul className="space-y-2">{s.topics.map(t => (<li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{t}</li>))}</ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-ark max-w-3xl">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Class 11-12 Science FAQs</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-border rounded-xl overflow-hidden">
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
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Excel in Class 11-12 <span className="text-[#FFC107]">Science</span></h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Whether targeting board exam distinction or NEET qualification, ARK's structured coaching gives you the best of both worlds.</p>
                        <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment</Button>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107]">NEET Coaching →</Link>
                            <Link to="/class-6-10-tuition" className="hover:text-[#FFC107]">Class 6-10 Tuition →</Link>
                            <Link to="/results-achievements" className="hover:text-[#FFC107]">Results →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
