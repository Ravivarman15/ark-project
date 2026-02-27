import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, User, Tag } from "lucide-react";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { blogPosts } from "@/data/blogData";

const categories = ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];

import { useState } from "react";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
    const featured = blogPosts.filter(p => p.featured);

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title="Blog | ARK Learning Arena — NEET & Education Insights" description="Expert insights on NEET preparation, board exam strategies, tuition tips, and education guidance from ARK Learning Arena Chennai." />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />
            <Navbar />

            <main className="pt-[72px]">
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-20">
                    <div className="container-ark">
                        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                            <h1 className="text-4xl md:text-5xl font-black mb-4">ARK <span className="text-[#FFC107]">Blog</span></h1>
                            <p className="text-white/70 text-lg max-w-2xl">Expert insights on NEET preparation, board exam strategies, study tips, and education guidance from ARK Learning Arena's experienced faculty in Chennai.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured */}
                <section className="section-padding bg-white">
                    <div className="container-ark">
                        <h2 className="text-2xl font-black text-ark-navy mb-6">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featured.slice(0, 3).map((post, i) => (
                                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <Link to={`/blog/${post.slug}`} className="block bg-gradient-to-br from-[#0B2C55] to-[#0d3360] rounded-2xl p-6 text-white hover:shadow-card-hover transition-all group h-full">
                                        <span className="text-xs font-bold bg-[#FFC107] text-[#0B2C55] px-3 py-1 rounded-full">{post.category}</span>
                                        <h3 className="text-xl font-black mt-4 mb-3 group-hover:text-[#FFC107] transition-colors leading-tight">{post.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                        <div className="flex items-center gap-4 text-white/40 text-xs">
                                            <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Posts */}
                <section className="section-padding bg-muted/30">
                    <div className="container-ark">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {categories.map(c => (
                                <button key={c} onClick={() => setActiveCategory(c)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === c ? "bg-[#0B2C55] text-white" : "bg-white text-muted-foreground hover:bg-muted"}`}>{c}</button>
                            ))}
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((post, i) => (
                                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.08 }}>
                                    <Link to={`/blog/${post.slug}`} className="block bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group h-full">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-bold bg-[#FFC107]/15 text-ark-navy px-3 py-1 rounded-full">{post.category}</span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-black text-ark-navy mb-2 group-hover:text-[#FFC107] transition-colors leading-tight">{post.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                                            <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-3">{post.tags.map(t => (<span key={t} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{t}</span>))}</div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
