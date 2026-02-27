import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { faqCategories, allFAQs } from "@/data/faqData";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    const filteredFaqs = useMemo(() => {
        const cats = activeCategory === "all" ? faqCategories : faqCategories.filter(c => c.id === activeCategory);
        if (!search.trim()) return cats;
        return cats.map(c => ({
            ...c,
            faqs: c.faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())),
        })).filter(c => c.faqs.length > 0);
    }, [activeCategory, search]);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="FAQs | ARK Learning Arena Chennai" description="Frequently asked questions about NEET coaching, tuition, board exam preparation, and ARK Learning Arena's academic programs in Chennai." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
            <FAQPageSchema faqs={allFAQs} />
            <Navbar />

            <main className="pt-[72px]">
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-20">
                    <div className="container-ark text-center">
                        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                            <h1 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked <span className="text-[#FFC107]">Questions</span></h1>
                            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">Everything you need to know about ARK Learning Arena's NEET coaching, tuition programs, and academic services in Chennai. {allFAQs.length} comprehensive FAQs answered.</p>
                            <div className="relative max-w-md mx-auto">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input type="text" placeholder="Search FAQs..." value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFC107]/50" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="section-padding bg-white">
                    <div className="container-ark">
                        {/* Category tabs */}
                        <div className="flex flex-wrap gap-2 mb-10 justify-center">
                            <button onClick={() => setActiveCategory("all")} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === "all" ? "bg-[#0B2C55] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>All ({allFAQs.length})</button>
                            {faqCategories.map(c => (
                                <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === c.id ? "bg-[#0B2C55] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{c.title.replace(" FAQs", "")} ({c.faqs.length})</button>
                            ))}
                        </div>

                        {/* FAQ Sections */}
                        <div className="max-w-3xl mx-auto space-y-12">
                            {filteredFaqs.map(cat => (
                                <div key={cat.id}>
                                    <h2 className="text-2xl font-black text-ark-navy mb-2">{cat.title}</h2>
                                    <p className="text-muted-foreground text-sm mb-6">{cat.description}</p>
                                    <div className="space-y-3">
                                        {cat.faqs.map((faq, i) => {
                                            const key = `${cat.id}-${i}`;
                                            return (
                                                <div key={key} className="border border-border rounded-xl overflow-hidden">
                                                    <button onClick={() => setOpenFaq(openFaq === key ? null : key)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors">
                                                        <span className="font-bold text-ark-navy pr-4 text-sm">{faq.q}</span>
                                                        <ChevronDown className={`w-5 h-5 text-[#FFC107] flex-shrink-0 transition-transform duration-300 ${openFaq === key ? "rotate-180" : ""}`} />
                                                    </button>
                                                    {openFaq === key && (
                                                        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                                                            {faq.a}
                                                            {faq.links?.map(l => (<Link key={l.href} to={l.href} className="block mt-2 text-ark-navy font-semibold hover:text-[#FFC107] transition-colors text-sm">→ {l.text}</Link>))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <h3 className="text-2xl font-black text-ark-navy mb-3">Still Have Questions?</h3>
                            <p className="text-muted-foreground mb-6">Our admissions counsellors are ready to help. Contact us or book a free consultation.</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Button className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow rounded-full px-8" onClick={() => window.location.href = "/"}>Book Free Assessment <ArrowRight className="ml-2 w-4 h-4" /></Button>
                                <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-[#0B2C55] text-[#0B2C55] font-semibold px-6 py-2 rounded-full hover:bg-[#0B2C55] hover:text-white transition-colors">Call +91 76393 99217</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
