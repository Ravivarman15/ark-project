import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-ark-yellow/10 blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 rounded-full bg-ark-pink/10 blur-3xl" />
      </div>

      <div className="container-ark relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/15 px-4 py-2 rounded-full">
            Take Action Today
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-4">
            Serious About
            <br />
            <span className="text-ark-yellow">Academic Growth?</span>
          </h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Start with structure. Join ARK Learning Arena and give your child the system, mentorship, and discipline they need to excel.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-ark-yellow text-ark-navy font-black hover:bg-ark-yellow-light shadow-yellow group px-10 py-6 text-lg"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+917639399217"
              className="flex items-center gap-2 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/917639399217?text=Hi%2C%20I%27m%20serious%20about%20my%20child%27s%20academic%20growth.%20Can%20we%20discuss%20enrollment%3F"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Limited seats available each batch. Early registration recommended.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
