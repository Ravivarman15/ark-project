import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, ReviewSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";

const testimonials = [
    { name: "Mrs. Kavitha Rajan", role: "Parent of NEET 2024 Qualifier", text: "ARK transformed my daughter's approach to studies. The weekly tests and monthly parent reports gave us complete clarity on her progress. She qualified NEET in her first attempt!", rating: 5, type: "Parent" },
    { name: "Arun Babu", role: "NEET 2024, AIR 6,102", text: "The discipline system at ARK was different from anywhere else I had studied. Every test was tracked, every weak area was remediated. The HRC concept mastery framework genuinely helped me secure 672 marks.", rating: 5, type: "Student" },
    { name: "Mrs. Priya Suresh", role: "Parent of Board Topper", text: "The performance analytics and transparency at ARK is something you won't find at other coaching centres. We knew exactly where our son stood every single month. He scored 98% in boards.", rating: 5, type: "Parent" },
    { name: "Deepika R.", role: "Class 12 CBSE, 97%", text: "Small batches, dedicated teachers, and real individual attention. ARK didn't just prepare me for exams — it built my confidence and discipline. Forever grateful.", rating: 5, type: "Student" },
    { name: "Mr. Suresh Kumar", role: "Parent of NEET Qualifier", text: "Moving my son to ARK was the best academic decision we made. The structured system, accountability, and mentorship is unparalleled. He's now pursuing MBBS at a Government college.", rating: 5, type: "Parent" },
    { name: "Divya R.", role: "NEET 2024, AIR 7,834", text: "ARK's NCERT-first approach made all the difference. While others were confused with multiple reference books, I mastered NCERT completely. 665 marks and a government medical seat — all thanks to ARK.", rating: 5, type: "Student" },
    { name: "Mrs. Lakshmi Narayanan", role: "Parent of Class 10 Topper", text: "We enrolled our daughter in Class 8 and the foundation she built was incredible. By Class 10, she scored 97% in boards without any last-minute panic. ARK's weekly testing made all the difference.", rating: 5, type: "Parent" },
    { name: "Vikram S.", role: "Class 10 CBSE, 96%", text: "The mock board tests at ARK prepared me so well that the actual board exam felt easy. The answer writing training was especially helpful. I knew exactly how to present my answers for maximum marks.", rating: 5, type: "Student" },
    { name: "Mr. Rajesh Menon", role: "Parent of NEET Foundation Student", text: "Starting early was the best decision. Our son joined ARK's NEET Foundation in Class 9. Now in Class 11, he's already ahead of his peers. The structured approach gives parents peace of mind.", rating: 5, type: "Parent" },
    { name: "Ananya S.", role: "NEET 2024, Qualified", text: "When I joined ARK as a repeater, I was demotivated. The faculty and counsellors rebuilt my confidence. The diagnostic assessment identified exactly where I went wrong, and the focused remediation worked.", rating: 5, type: "Student" },
    { name: "Mrs. Kamala Devi", role: "Parent of Nestlings Student", text: "ARK Nestlings has been wonderful for my 5-year-old. The combination of play-based learning and structured academics is exactly what young children need. The daily updates give us full visibility.", rating: 5, type: "Parent" },
    { name: "Karthik M.", role: "Class 12 CBSE, 98%", text: "ARK's systematic approach to board exam preparation is phenomenal. The timed mock tests, answer writing sessions, and personalized revision plans helped me achieve 98% — the highest in my school.", rating: 5, type: "Student" },
];

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Reviews & Testimonials | ARK Learning Arena Chennai" description="Read reviews from parents and students at ARK Learning Arena Chennai. Real testimonials about our NEET coaching, tuition, and board exam preparation programs." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Testimonials", url: "/testimonials" }]} />
            <ReviewSchema reviews={testimonials.map(t => ({ author: t.name, rating: t.rating, text: t.text }))} />
            <Navbar />

            <main className="pt-[72px]">
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
                    <div className="container-ark text-center">
                        <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">What Parents & Students <span className="text-[#FFC107]">Say About ARK</span></h1>
                            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">Real stories from the ARK community in Chennai. These are verified testimonials from parents whose children have been coached at ARK Learning Arena and students who have achieved their academic goals through our structured system.</p>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" />)}
                                <span className="text-white/80 font-bold text-lg ml-2">4.9/5.0</span>
                            </div>
                            <p className="text-white/50 text-sm">Based on 127+ verified reviews</p>
                        </motion.div>
                    </div>
                </section>

                {/* Google Review CTA */}
                <section className="bg-[#FFC107] py-6">
                    <div className="container-ark flex flex-wrap items-center justify-between gap-4">
                        <div><h3 className="text-[#0B2C55] font-black text-lg">Had a great experience at ARK?</h3><p className="text-[#0B2C55]/70 text-sm">Your review helps other parents make the right choice for their children.</p></div>
                        <a href="https://g.page/r/arklearningarena/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0B2C55] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0B2C55]/90 transition-colors">
                            <Star className="w-5 h-5 text-[#FFC107]" /> Leave a Google Review <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </section>

                {/* All Testimonials */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((t, i) => (
                                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.08 }} className="bg-muted/30 rounded-2xl p-6 hover:shadow-card transition-all">
                                    <Quote className="w-8 h-8 text-[#FFC107] mb-4" />
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.text}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-ark-navy flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                                        <div className="flex-1"><div className="font-bold text-ark-navy text-sm">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${t.type === "Parent" ? "bg-[#FFC107]/15 text-ark-navy" : "bg-[#FF4CAF]/15 text-[#FF4CAF]"}`}>{t.type}</span>
                                    </div>
                                    <div className="flex gap-1 mt-3">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />)}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
                    <div className="container-ark">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Join the <span className="text-[#FFC107]">ARK Family</span></h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Experience the ARK difference yourself. Book a free Academic Diagnostic Assessment and see why hundreds of families in Chennai trust ARK with their children's education.</p>
                        <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-5 h-5" /></Button>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                            <Link to="/results-achievements" className="hover:text-[#FFC107]">Results →</Link>
                            <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107]">NEET Coaching →</Link>
                            <Link to="/tuition-centre-in-chennai" className="hover:text-[#FFC107]">Tuition Centre →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
