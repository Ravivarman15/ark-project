import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, BlogPostingSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);
    const related = blogPosts.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 3);

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-ark-navy mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-[#FFC107] font-bold hover:underline">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SEOHead title={post.metaTitle} description={post.metaDescription} canonical={`https://tuitionwithark.com/blog/${post.slug}`} />
            <LocalBusinessSchema />
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }]} />
            <BlogPostingSchema title={post.title} description={post.metaDescription} author={post.author} datePublished={post.date} url={`/blog/${post.slug}`} />
            <Navbar />

            <main className="pt-[72px]">
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-12 md:py-16">
                    <div className="container-ark max-w-4xl">
                        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-bold bg-[#FFC107] text-[#0B2C55] px-3 py-1 rounded-full">{post.category}</span>
                                <span className="text-white/50 text-sm flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} read</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">{post.title}</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#FFC107] flex items-center justify-center text-[#0B2C55] font-black">{post.author[0]}</div>
                                <div>
                                    <div className="font-bold">{post.author}</div>
                                    <div className="text-white/50 text-sm">{post.authorRole} • {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Article Image */}
                {post.image && (
                    <section className="bg-white pt-8">
                        <div className="container-ark max-w-4xl">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto max-h-[500px] object-cover rounded-3xl shadow-2xl"
                            />
                        </div>
                    </section>
                )}

                {/* Article Content */}
                <section className="section-padding bg-white">
                    <div className="container-ark max-w-4xl">
                        <article className="prose prose-lg max-w-none prose-slate prose-headings:text-ark-navy prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-relaxed">
                            <p className="text-xl font-medium text-ark-navy/80 leading-relaxed mb-10 border-l-4 border-ark-yellow pl-6">
                                {post.excerpt}
                            </p>

                            <div className="space-y-12">
                                {post.content.map((section, idx) => (
                                    <div key={idx} className="scroll-mt-24">
                                        <h2 className="text-3xl font-black mb-6">{section.heading}</h2>
                                        <p className="mb-6">{section.text}</p>
                                        {section.subsections?.map((sub, sIdx) => (
                                            <div key={sIdx} className="bg-muted/30 p-8 rounded-2xl mb-6 last:mb-0 border-l-2 border-ark-pink">
                                                <h3 className="text-xl font-bold text-ark-navy mb-3">{sub.subheading}</h3>
                                                <p className="text-muted-foreground">{sub.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="bg-muted/30 rounded-2xl p-8 my-12 border border-border">
                                <h2 className="text-2xl font-black text-ark-navy mb-4 italic">Teacher's Note</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">This article is part of ARK Learning Arena's educational resource library, designed to provide actionable insights for students and parents in Chennai preparing for NEET, board exams, and academic excellence.</p>
                                <p className="text-muted-foreground leading-relaxed font-semibold">Our content is written by experienced educators with years of coaching experience at ARK's Chennai centre. Success is a system, and we are here to help you build yours.</p>
                            </div>

                            <div className="bg-[#0B2C55] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                <h3 className="text-2xl md:text-3xl font-black text-[#FFC107] mb-4 relative z-10">Start Your Professional Academic Journey Today</h3>
                                <p className="text-white/80 mb-8 max-w-2xl relative z-10">Don't leave your child's academic future to chance. At ARK, we provide the direction, discipline, and data-driven mentorship required to succeed in competitive exams.</p>
                                <Button className="bg-[#FFC107] text-[#0B2C55] font-black hover:bg-[#ffd133] px-8 h-14 text-lg rounded-xl relative z-10" onClick={() => window.location.href = "/"}>
                                    Book Free Diagnostic Assessment <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>

                            <div className="mt-16 pt-10 border-t border-border">
                                <h3 className="text-xl font-black text-ark-navy mb-6">Expert Resources for Chennai Students</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link to="/neet-coaching-in-chennai" className="p-4 bg-muted/20 hover:bg-ark-yellow/10 rounded-xl transition-colors border border-transparent hover:border-ark-yellow font-bold text-ark-navy">→ NEET Coaching Mastery Guide</Link>
                                    <Link to="/results-achievements" className="p-4 bg-muted/20 hover:bg-ark-yellow/10 rounded-xl transition-colors border border-transparent hover:border-ark-yellow font-bold text-ark-navy">→ ARK's Verified Results Portfolio</Link>
                                    <Link to="/tuition-centre-in-chennai" className="p-4 bg-muted/20 hover:bg-ark-yellow/10 rounded-xl transition-colors border border-transparent hover:border-ark-yellow font-bold text-ark-navy">→ The Parents' Guide to Chennai Tuitions</Link>
                                    <Link to="/faq" className="p-4 bg-muted/20 hover:bg-ark-yellow/10 rounded-xl transition-colors border border-transparent hover:border-ark-yellow font-bold text-ark-navy">→ Frequently Asked Questions</Link>
                                </div>
                            </div>
                        </article>
                        <div className="flex flex-wrap gap-2 mt-12 pt-10 border-t border-border">
                            {post.tags.map(t => (<span key={t} className="text-sm bg-muted px-4 py-1.5 rounded-full text-muted-foreground font-medium flex items-center gap-2 hover:bg-muted/50 cursor-default"><Tag className="w-3 h-3" />{t}</span>))}
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                {related.length > 0 && (
                    <section className="section-padding bg-muted/30">
                        <div className="container-ark">
                            <h2 className="text-2xl font-black text-ark-navy mb-6">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {related.map(p => (
                                    <Link key={p.slug} to={`/blog/${p.slug}`} className="block bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group">
                                        <span className="text-xs font-bold bg-[#FFC107]/15 text-ark-navy px-3 py-1 rounded-full">{p.category}</span>
                                        <h3 className="text-lg font-black text-ark-navy mt-3 mb-2 group-hover:text-[#FFC107] transition-colors leading-tight">{p.title}</h3>
                                        <p className="text-muted-foreground text-sm">{p.excerpt.slice(0, 100)}...</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer /><WhatsAppSticky />
        </div>
    );
}
