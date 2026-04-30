import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-ark">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-ark-yellow/10 relative overflow-hidden text-center"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-ark-yellow/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-ark-navy/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-6 py-2 rounded-full">
                Founder's Vision
              </span>
              
              <blockquote className="text-3xl md:text-5xl font-black text-ark-navy mt-10 mb-8 leading-tight italic">
                "Discipline creates destiny.
                <br />
                <span className="text-ark-yellow">Structure creates success."</span>
              </blockquote>

              <div className="max-w-2xl mx-auto">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium">
                  ARK was built on a simple belief: every child is capable of extraordinary results when given the right system, the right mentors, and the right environment.
                </p>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                  <p>
                    After years of working within mainstream education and seeing talented students fail not because of intelligence but due to lack of structure — ARK was born. Not as another coaching centre, but as a complete academic ecosystem.
                  </p>
                  <p>
                    Our model is built on three pillars: <strong className="text-ark-navy">Discipline</strong>, <strong className="text-ark-navy">Systems</strong>, and <strong className="text-ark-navy">Accountability</strong>. These are not just values — they are engineered into every aspect of how ARK operates.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { val: "Discipline", icon: "⚡", desc: "Engineered Routine" },
                    { val: "Consistency", icon: "🎯", desc: "Daily Progress" },
                    { val: "Accountability", icon: "📊", desc: "Data-Driven results" },
                  ].map((v) => (
                    <div key={v.val} className="bg-muted/30 rounded-2xl p-6 text-center border border-transparent hover:border-ark-yellow/30 transition-all duration-300">
                      <div className="text-3xl mb-3">{v.icon}</div>
                      <div className="text-ark-navy font-bold text-lg mb-1">{v.val}</div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{v.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-muted">
                  <div className="text-ark-navy font-black text-2xl">Prathiba R. Augustine</div>
                  <div className="text-ark-yellow text-sm font-bold tracking-wide uppercase mt-1">Managing Partner & Academics Head</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
