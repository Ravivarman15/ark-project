import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

export default function FounderSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-ark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <img
                src={founderImg}
                alt="ARK Founder"
                className="w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ark-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-black text-xl">Prathiba Ma'am</div>
                <div className="text-ark-yellow text-sm font-semibold">Founder & Academic Director, ARK</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
              Founder's Vision
            </span>
            <blockquote className="text-3xl md:text-4xl font-black text-ark-navy mt-6 mb-6 leading-tight">
              "Discipline creates destiny.
              <br />
              <span className="text-ark-yellow">Structure creates success."</span>
            </blockquote>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARK was built on a simple belief: every child is capable of extraordinary results when given the right system, the right mentors, and the right environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After years of working within mainstream education and seeing talented students fail not because of intelligence but due to lack of structure — ARK was born. Not as another coaching centre, but as a complete academic ecosystem.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our model is built on three pillars: <strong className="text-ark-navy">Discipline</strong>, <strong className="text-ark-navy">Systems</strong>, and <strong className="text-ark-navy">Accountability</strong>. These are not just values — they are engineered into every aspect of how ARK operates.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "Discipline", icon: "⚡" },
                { val: "Consistency", icon: "🎯" },
                { val: "Accountability", icon: "📊" },
              ].map((v) => (
                <div key={v.val} className="bg-white rounded-xl p-4 text-center shadow-card">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="text-ark-navy font-bold text-sm">{v.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
