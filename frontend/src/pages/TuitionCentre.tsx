import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowRight, Phone, MessageCircle, Users, BarChart3, Target, Award, ClipboardList, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { faqCategories } from "@/data/faqData";
import { useState } from "react";

const tuitionFaqs = faqCategories.find(c => c.id === "tuition")?.faqs.slice(0, 10) ?? [];

const boards = [
    { name: "CBSE", desc: "Complete CBSE curriculum coverage with NCERT-focused teaching, chapter-wise testing, and board exam pattern preparation for all subjects.", color: "bg-blue-50 border-blue-200" },
    { name: "ICSE", desc: "Comprehensive ICSE coaching covering the extended syllabus with application-based learning, practical support, and answer writing training.", color: "bg-green-50 border-green-200" },
    { name: "Tamil Nadu State Board", desc: "State Board aligned coaching with Tamil medium support, government exam pattern focus, and competitive exam preparation integration.", color: "bg-purple-50 border-purple-200" },
];

const features = [
    { icon: ClipboardList, title: "Weekly Testing Framework", desc: "Every student is assessed weekly. Tests are tracked, analyzed, and used to create targeted improvement plans. No student goes unnoticed." },
    { icon: BarChart3, title: "Monthly Performance Analytics", desc: "Data-driven performance reports with subject-wise breakdown, trend analysis, and improvement tracking delivered to parents monthly." },
    { icon: Users, title: "Parent Transparency Reports", desc: "Full visibility into your child's academic journey — attendance, test scores, behaviour, and academic standing reported every month." },
    { icon: Target, title: "Remedial System", desc: "When weekly tests identify struggling students, they receive targeted remedial sessions to close knowledge gaps immediately." },
    { icon: Shield, title: "Accountability Structure", desc: "Clear attendance policy, discipline expectations, and academic accountability. Structure is what creates results at ARK." },
    { icon: Award, title: "95%+ Board Distinction Rate", desc: "Our structured approach consistently produces board toppers with 95%+ distinction rate across CBSE, ICSE, and State Board." },
];

const subjects = [
    { name: "Science", topics: ["Physics — Mechanics, Optics, Electricity", "Chemistry — Elements, Reactions, Organic", "Biology — Life Processes, Genetics, Ecology", "Practical support and lab concepts"] },
    { name: "Mathematics", topics: ["Algebra, Geometry, Trigonometry", "Statistics and Probability", "Calculus (Class 11-12)", "Problem-solving and formula mastery"] },
    { name: "Social Studies", topics: ["History and Civics", "Geography and Map Work", "Economics (Class 11-12)", "Political Science and Current Affairs"] },
    { name: "Languages", topics: ["English Grammar and Writing Skills", "Reading Comprehension and Analysis", "Tamil / Hindi Language Support", "Essay and Creative Writing"] },
];

export default function TuitionCentrePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Best Tuition Centre in Chennai | ARK Learning Arena" description="Chennai's top tuition centre for Class 6-12. CBSE, ICSE & State Board coaching with weekly testing, parent reports, and 95%+ distinction rate. Small batches of 15-20." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Tuition Centre in Chennai", url: "/tuition-centre-in-chennai" }]} />
            <FAQPageSchema faqs={tuitionFaqs} />
            <Navbar />

            <main className="pt-[72px]">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "Tuition Centre in Chennai", href: "/tuition-centre-in-chennai" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mt-6">
                            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                                <BookOpen className="w-4 h-4 text-[#FFC107]" /><span className="text-[#FFC107] text-sm font-semibold">Tuition Centre in Chennai</span>
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">Chennai's Premier <span className="text-[#FFC107]">Tuition Centre</span> — Where Every Student Is <span className="text-[#FF4CAF]">Tracked</span></h1>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">ARK Learning Arena is not just another tuition centre in Chennai. We are a structured academic ecosystem providing expert coaching for Class 6–12 across CBSE, ICSE, and Tamil Nadu State Board. Our weekly testing framework, monthly parent transparency reports, and remedial system ensure that no student is left behind.</p>
                            <p className="text-white/60 leading-relaxed mb-8">With small batches of 15-20 students, performance analytics, and a 95%+ board distinction rate, ARK delivers measurable academic improvement for students across Chennai — from T. Nagar and Adyar to Velachery, Anna Nagar, and beyond.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-8 py-6 rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition-colors"><Phone className="w-4 h-4" /> +91 76393 99217</a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Boards */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">All Major Boards Covered</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">Expert tuition aligned to your child's specific board curriculum, exam pattern, and marking scheme at our Chennai coaching centre.</p>
                        <div className="grid lg:grid-cols-3 gap-6">
                            {boards.map(b => (
                                <div key={b.name} className={`rounded-2xl border-2 ${b.color} p-8`}>
                                    <h3 className="text-2xl font-black text-ark-navy mb-4">{b.name}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why ARK */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">Why Parents Choose <span className="text-[#FFC107]">ARK</span> in Chennai</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12 max-w-3xl mx-auto">ARK is built on systems, accountability, and measurable improvement. Here's what makes our tuition centre different from every other coaching institute in Chennai.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f, i) => (
                                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-ark-navy flex items-center justify-center mb-4"><f.icon className="w-6 h-6 text-[#FFC107]" /></div>
                                    <h3 className="text-lg font-black text-ark-navy mb-2">{f.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subjects */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-12">Subjects We Cover</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {subjects.map(s => (
                                <div key={s.name} className="bg-muted/30 rounded-2xl p-6">
                                    <h3 className="text-xl font-black text-ark-navy mb-4">{s.name}</h3>
                                    <ul className="space-y-2">{s.topics.map(t => (<li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{t}</li>))}</ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expert Guidance Section */}
                <section className="section-padding bg-muted/30 overflow-hidden">
                    <div className="container-ark">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                                <div className="absolute -inset-4 bg-[#FF4CAF]/10 rounded-[2.5rem] blur-2xl -z-10" />
                                <img
                                    src="/physics_tuition_chennai_featured_1772101487842.png"
                                    alt="Expert teacher explaining physics concepts at ARK Chennai"
                                    className="rounded-3xl shadow-2xl border-4 border-white w-full h-auto object-cover"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-ark-navy" />
                                        <span className="text-ark-navy font-black text-xs">Small Interactive Batches</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <h2 className="text-3xl md:text-4xl font-black text-ark-navy mb-6">
                                    Expert <span className="text-[#FFC107]">Guidance</span> That Builds <span className="text-[#FF4CAF]">Conceptual Clarity</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    At ARK Learning Arena, teaching isn't just about delivering lectures — it's about student interaction. Our expert faculty in Chennai uses visual aids, real-world examples, and step-by-step concept breakdown to ensure that every student masters the 'Why' before the 'How'.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { title: "Direct Interaction", desc: "Small groups mean your child can ask doubts freely." },
                                        { title: "Visual Learning", desc: "Complex concepts explained with diagrams and tools." },
                                        { title: "Personalized Pace", desc: "Teaching speed adjusted to student understanding." },
                                        { title: "Expert Mentors", desc: "Faculty with 10+ years of board exam experience." }
                                    ].map(f => (
                                        <div key={f.title} className="bg-white p-4 rounded-xl shadow-sm border border-border/50">
                                            <div className="text-ark-navy font-black text-sm mb-1">{f.title}</div>
                                            <div className="text-muted-foreground text-[11px] leading-relaxed">{f.desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow px-8 py-6 rounded-full group" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
                                    Join Trial Class <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark max-w-3xl">
                        <h2 className="text-4xl font-black text-ark-navy text-center mb-4">Tuition FAQs</h2>
                        <p className="text-muted-foreground text-center text-lg mb-12">Everything parents need to know about tuition at ARK Learning Arena in Chennai.</p>
                        <div className="space-y-3">
                            {tuitionFaqs.map((faq, i) => (
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
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Give Your Child the <span className="text-[#FFC107]">ARK Advantage</span></h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Book a free Academic Diagnostic Assessment. Discover your child's strengths, weaknesses, and the structured path to academic excellence.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-5 h-5" /></Button>
                            <a href="https://wa.me/917639399217" className="flex items-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"><MessageCircle className="w-5 h-5" /> WhatsApp Us</a>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/class-6-10-tuition" className="hover:text-[#FFC107] transition-colors">Class 6-10 Tuition →</Link>
                            <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107] transition-colors">NEET Coaching →</Link>
                            <Link to="/class-11-12-science-coaching" className="hover:text-[#FFC107] transition-colors">Class 11-12 Science →</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppSticky />
        </div>
    );
}
