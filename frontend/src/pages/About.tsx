import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Users, BookOpen, BarChart3, Award, Shield, Heart, Lightbulb, ArrowRight, Phone, MessageCircle, CheckCircle2, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, LocalBusinessSchema, EducationalOrgSchema } from "@/components/SchemaMarkup";

const coreValues = [
  { icon: Shield, title: "Discipline Creates Destiny", desc: "At ARK, discipline is not a rule — it's a culture. We believe that structured habits, accountability, and consistency are the true foundations of academic excellence. Every student is held to the highest standards of attendance, effort, and integrity." },
  { icon: Target, title: "Systems Over Shortcuts", desc: "We don't believe in last-minute cramming or rote memorization. ARK runs on proven systems — weekly testing frameworks, performance analytics, remedial interventions, and data-driven improvement strategies that produce consistent, repeatable results." },
  { icon: Heart, title: "Parent Transparency", desc: "Parents are not kept in the dark. Monthly performance reports, regular parent-teacher meetings, and open communication ensure that families have complete visibility into their child's academic journey at ARK." },
  { icon: Users, title: "Individual Attention", desc: "With intentionally small batches of 15-20 students, every learner at ARK receives personalised coaching, doubt resolution, and mentorship. We know every student by name, by strength, and by the areas where they need support." },
  { icon: Lightbulb, title: "Concept-First Teaching", desc: "Understanding trumps memorization. Our faculty ensures that students grasp fundamentals deeply before progressing. This NCERT-first approach builds the kind of clarity that translates to high scores in both board exams and competitive tests like NEET." },
  { icon: TrendingUp, title: "Data-Driven Improvement", desc: "Every test, every score, every trend is tracked and analyzed. Our performance analytics system identifies patterns, predicts outcomes, and enables targeted interventions that accelerate improvement systematically." },
];

const milestones = [
  { year: "2015", title: "Founded in Chennai", desc: "ARK Learning Arena was established with a vision to create a structured, discipline-driven academic institution that would raise the standard of coaching in Chennai." },
  { year: "2017", title: "NEET Program Launched", desc: "Introduced the structured 2-year NEET coaching program with NCERT-first methodology, weekly testing framework, and performance analytics." },
  { year: "2019", title: "First NEET Qualifiers", desc: "First batch of NEET qualifiers graduated with a 75% qualification rate, validating our structured approach to medical entrance preparation." },
  { year: "2021", title: "Programs Expanded", desc: "Launched ARK Nestlings (Early Childhood), NEET Foundation, and expanded tuition coverage to all three major boards — CBSE, ICSE, and State Board." },
  { year: "2023", title: "Landmark Results", desc: "Achieved 80% NEET qualification rate, produced 3 government medical seat holders, and maintained a 95%+ board distinction rate across all programs." },
  { year: "2024", title: "Franchise & Growth", desc: "Top scorer achieved 680/720 in NEET (AIR 4,821). Launched franchise model with three formats — Flagship, Studio, and POD — to expand the ARK system across Chennai and Tamil Nadu." },
];

const programs = [
  { name: "NEET Coaching", desc: "2-year structured NEET preparation with NCERT-based curriculum, weekly testing, monthly mocks, and 80% qualification rate.", href: "/neet-coaching-in-chennai" },
  { name: "Class 6–10 Tuition", desc: "Foundation to board exam excellence across CBSE, ICSE, and State Board with weekly assessments and parent transparency.", href: "/class-6-10-tuition" },
  { name: "Class 11–12 Science", desc: "Advanced Physics, Chemistry, Biology, and Mathematics coaching with integrated board + NEET preparation.", href: "/class-11-12-science-coaching" },
  { name: "Board Exam Prep", desc: "Intensive board examination preparation with mock tests, answer writing training, and 95%+ distinction rate.", href: "/tuition-centre-in-chennai" },
  { name: "NEET Foundation", desc: "Early-start NEET preparation for Class 8–10 students, building strong Science foundations and competitive exam readiness.", href: "/class-11-12-science-coaching" },
  { name: "ARK Nestlings", desc: "Early childhood program (ages 3–7) combining structured daycare with foundational academics, phonics, and character education.", href: "/" },
];

const stats = [
  { value: "500+", label: "Students Coached" },
  { value: "80%", label: "NEET Qualification Rate" },
  { value: "3+", label: "Govt. Medical Seats" },
  { value: "95%+", label: "Board Distinction Rate" },
  { value: "10+", label: "Years of Excellence" },
  { value: "20", label: "Max Batch Size" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="About ARK Learning Arena | Best Coaching in Chennai" description="Learn about ARK Learning Arena — Chennai's premier academic institution founded on discipline, systems, and accountability. 500+ students coached, 80% NEET qualification rate, 10+ years of excellence." />
      <LocalBusinessSchema />
      <EducationalOrgSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]} />
      <Navbar />

      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-16 md:py-24">
          <div className="container-ark">
            <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <GraduationCap className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-[#FFC107] text-sm font-semibold">About ARK Learning Arena</span>
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                  Where <span className="text-[#FFC107]">Discipline</span> Meets <span className="text-[#FF4CAF]">Direction</span>
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  ARK Learning Arena is Chennai's premier academic institution, founded on the belief that discipline, structured systems, and expert mentorship create academic destiny. For over a decade, we have been building confident, result-oriented students through a uniquely systematic approach to education.
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  What started as a single classroom in Chennai has grown into a comprehensive academic ecosystem serving 500+ students across NEET coaching, Class 6–12 tuition, board exam preparation, and early childhood programs. Our results — an 80% NEET qualification rate, 3 government medical seat holders, and a 95%+ board distinction rate — are not exceptions. They are the natural outcomes of a system built right.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  At ARK, we don't just prepare students for exams — we build the habits, skills, and character that sustain academic excellence for life. Every test is tracked. Every gap is addressed. Every parent is informed. That's the ARK difference.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-8 py-6 rounded-full" onClick={() => window.location.href = "/"}>
                    Book Free Assessment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a href="tel:+917639399217" className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition-colors">
                    <Phone className="w-4 h-4" /> +91 76393 99217
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div key={s.label} className={`bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center ${i === 0 ? "col-span-2" : ""}`}>
                      <div className="text-3xl font-black text-[#FFC107]">{s.value}</div>
                      <div className="text-white/50 text-sm mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section-padding bg-white">
          <div className="container-ark max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-ark-navy mb-4">Our <span className="text-[#FFC107]">Founder's Vision</span></h2>
            </div>
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl font-bold text-ark-navy leading-relaxed mb-6 italic">
                "I founded ARK because I saw too many bright students fail — not because they lacked talent, but because they lacked structure. Education without discipline is just information. At ARK, we don't just teach subjects — we build systems that transform potential into performance."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0B2C55] flex items-center justify-center text-[#FFC107] font-black text-xl">P</div>
                <div>
                  <div className="font-black text-ark-navy text-lg">Prathiba</div>
                  <div className="text-muted-foreground">Founder & Academic Director, ARK Learning Arena</div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-black text-ark-navy mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">To create a disciplined, systems-driven academic environment in Chennai where every student is individually tracked, every parent is transparently informed, and every result is the natural outcome of a proven process — not chance.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-black text-ark-navy mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">To become India's most trusted academic institution — known for producing consistently excellent results through structured systems, expert mentorship, and an unwavering commitment to discipline and accountability in education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-ark">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-ark-navy mb-4">Our <span className="text-[#FFC107]">Core Values</span></h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">These are not slogans on a wall. These are the operating principles that guide every decision, every policy, and every interaction at ARK Learning Arena.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2C55] flex items-center justify-center mb-4"><v.icon className="w-6 h-6 text-[#FFC107]" /></div>
                  <h3 className="text-lg font-black text-ark-navy mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="section-padding bg-white">
          <div className="container-ark">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-ark-navy mb-4">Our <span className="text-[#FFC107]">Programs</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive academic programs designed for every stage of a student's journey — from early childhood to medical entrance.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={p.href} className="block bg-muted/30 rounded-2xl p-6 hover:shadow-card transition-all group h-full">
                    <h3 className="text-lg font-black text-ark-navy mb-2 group-hover:text-[#FFC107] transition-colors">{p.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{p.desc}</p>
                    <span className="text-[#FFC107] font-semibold text-sm flex items-center gap-1">Learn More <ArrowRight className="w-3 h-3" /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white">
          <div className="container-ark max-w-3xl">
            <h2 className="text-4xl font-black text-center mb-12">Our <span className="text-[#FFC107]">Journey</span></h2>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFC107] flex items-center justify-center flex-shrink-0"><span className="text-[#0B2C55] font-black text-sm">{m.year}</span></div>
                  <div className="flex-1"><h3 className="font-black text-lg mb-1">{m.title}</h3><p className="text-white/60 text-sm leading-relaxed">{m.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The ARK System */}
        <section className="section-padding bg-white">
          <div className="container-ark">
            <h2 className="text-4xl font-black text-ark-navy text-center mb-4">The <span className="text-[#FFC107]">ARK System</span></h2>
            <p className="text-muted-foreground text-center text-lg mb-12 max-w-3xl mx-auto">Our five-pillar academic system is what transforms ordinary students into consistent high performers. It is designed, tested, and proven over 10+ years of coaching in Chennai.</p>
            <div className="grid md:grid-cols-5 gap-4 mb-16">
              {[
                { step: "01", title: "Diagnostic", desc: "Comprehensive Academic Diagnostic Assessment to identify strengths, weaknesses, and baseline." },
                { step: "02", title: "Structured Plan", desc: "Personalized academic plan with topic roadmap, milestones, and target-setting." },
                { step: "03", title: "Weekly Testing", desc: "Chapter-wise practice tests every week with immediate feedback and analytics." },
                { step: "04", title: "Analytics & Remediation", desc: "Performance data analysis, gap identification, and targeted remedial sessions." },
                { step: "05", title: "Report & Review", desc: "Monthly parent transparency reports and periodic academic reviews." },
              ].map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B2C55] flex items-center justify-center mx-auto mb-3"><span className="text-[#FFC107] font-black">{s.step}</span></div>
                  <h3 className="font-black text-ark-navy text-sm mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* System Visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="absolute -inset-4 bg-ark-navy/5 rounded-[2.5rem] blur-2xl -z-10" />
                <img
                  src="/neet_strategy_featured_1772101358857.png"
                  alt="Structured academic planning and NCERT mastery at ARK Chennai"
                  className="rounded-3xl shadow-2xl border-4 border-white w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-ark-navy font-black text-xs">Planning & Accountability</span>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-ark-navy">Precision <span className="text-[#FFC107]">Planning</span> for Peak <span className="text-[#FF4CAF]">Performance</span></h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every student at ARK works with a structured academic planner — a live roadmap that tracks NCERT mastery across Biology, Physics, and Chemistry. Our month-by-month strategy ensures that no topic is missed and revision is systematically baked into the learning cycle.
                </p>
                <ul className="space-y-3">
                  {[
                    "NCERT line-by-line coverage tracking",
                    "Customized monthly milestone planners",
                    "Integrated revision and mock test calendars",
                    "Personalized gap-filling strategies"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 font-semibold text-ark-navy text-sm">
                      <div className="w-2 h-2 rounded-full bg-ark-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
          <div className="container-ark">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Experience the <span className="text-[#FFC107]">ARK Difference</span></h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Join 500+ families who trust ARK with their children's academic futures. Book a free Academic Diagnostic Assessment and discover the structured path to excellence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-10 py-6 text-lg rounded-full" onClick={() => window.location.href = "/"}>
                Book Free Assessment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="https://wa.me/917639399217" className="flex items-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"><MessageCircle className="w-5 h-5" /> WhatsApp Us</a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
              <Link to="/results-achievements" className="hover:text-[#FFC107]">Our Results →</Link>
              <Link to="/testimonials" className="hover:text-[#FFC107]">Testimonials →</Link>
              <Link to="/neet-coaching-in-chennai" className="hover:text-[#FFC107]">NEET Coaching →</Link>
              <Link to="/blog" className="hover:text-[#FFC107]">Blog →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer /><WhatsAppSticky />
    </div>
  );
}
