import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Loader2, CheckCircle2, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const programs = [
  "NEET Coaching (Class 11–12)",
  "NEET Foundation (Class 8–10)",
  "NEET Repeaters Batch",
  "Tuition (Class 6–12)",
  "Board Exam Preparation",
  "ARK Nestlings",
];

// API base URL — uses Vite proxy in dev, Render backend in production
const API_BASE = import.meta.env.PROD
  ? (import.meta.env.VITE_API_URL || "https://ark-backend-39nq.onrender.com")
  : "";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  grade?: string;
  program?: string;
}

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    program: "",
  });
  // Honeypot ref — invisible to users, bots auto-fill it
  const honeypotRef = useRef<HTMLInputElement>(null);

  // ── Client-side validation ──
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Student name is required (min 2 characters).";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else {
      const cleaned = form.phone.replace(/[\s\-\(\)]/g, "");
      if (!/^\+?\d{10,15}$/.test(cleaned)) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    if (!form.grade.trim()) {
      newErrors.grade = "Current grade is required.";
    }

    if (!form.program) {
      newErrors.program = "Please select a program.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Form submission ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/api/assessment-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          honeypot: honeypotRef.current?.value || "",
        }),
      });

      // Safely parse JSON — response may be empty or non-JSON
      let data: any = null;
      try {
        const text = await res.text();
        if (text) data = JSON.parse(text);
      } catch {
        // Response wasn't valid JSON — handled below
      }

      if (!res.ok || !data?.success) {
        // Never expose backend details to the user
        setServerError("Something went wrong. Please try again or contact us directly.");
        return;
      }

      setSubmitted(true);
    } catch {
      // Network error, server down, CORS, etc. — always friendly message
      setServerError("Unable to submit right now. Please try again shortly or call us at +91 76393 99217.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Clear individual error on change ──
  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="lead-form" className="section-padding bg-white">
      <div className="container-ark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ark-yellow text-sm font-semibold tracking-widest uppercase bg-ark-yellow/10 px-4 py-2 rounded-full">
              Free Academic Assessment
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-ark-navy mt-6 mb-4">
              Start Your Child's
              <br />
              <span className="text-ark-yellow">Success Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Book a free academic assessment today. Our experts will evaluate your child's current level, identify gaps, and create a personalised study strategy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Diagnostic Test — Identify strengths & gaps",
                "Performance Breakdown — Subject-wise analysis",
                "Strategy Discussion — Personalized roadmap",
                "No obligation. Limited slots each week.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ark-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ark-navy text-xs font-black">✓</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+917639399217"
                className="flex items-center gap-2 text-ark-navy border-2 border-ark-navy px-5 py-3 rounded-xl font-semibold hover:bg-ark-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/917639399217?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20academic%20assessment%20for%20my%20child."
                className="flex items-center gap-2 text-white bg-green-500 px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-hero rounded-3xl p-8 shadow-card-hover">
              <h3 className="text-white text-2xl font-black mb-2">Book Free Assessment</h3>
              <p className="text-white/60 text-sm mb-6">Fill in your details and we'll call you within 24 hours.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success State ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center py-8"
                  >
                    {/* Animated checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                      className="relative w-20 h-20 mx-auto mb-5"
                    >
                      <div className="absolute inset-0 rounded-full bg-ark-yellow/20 animate-ping" />
                      <div className="relative w-20 h-20 rounded-full bg-ark-yellow flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-ark-navy" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-white text-xl font-black mb-2"
                    >
                      Thank You! Your Assessment Request Has Been Received.
                    </motion.h4>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="space-y-2"
                    >
                      <p className="text-white/70 text-sm flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-ark-yellow" />
                        Please check your email for confirmation.
                      </p>
                      <p className="text-white/50 text-xs mt-3">
                        Our team will contact you within 24 hours to schedule your assessment.
                      </p>
                    </motion.div>

                    {/* Confetti-like dots */}
                    <div className="flex justify-center gap-1.5 mt-6">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + i * 0.06 }}
                          className="w-2 h-2 rounded-full bg-ark-yellow"
                          style={{ opacity: 1 - i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form State ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Honeypot — hidden from users, traps bots */}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
                      <label htmlFor="ark_website_url">Website</label>
                      <input
                        ref={honeypotRef}
                        type="text"
                        id="ark_website_url"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Student Name */}
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-1.5 block">Student Name *</label>
                      <Input
                        placeholder="Enter student's name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow ${errors.name ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-1.5 block">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="student@example.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow ${errors.email ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-1.5 block">Phone Number *</label>
                      <Input
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow ${errors.phone ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Current Grade */}
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-1.5 block">Current Grade *</label>
                      <Input
                        placeholder="e.g., Class 10 / Class 12"
                        value={form.grade}
                        onChange={(e) => updateField("grade", e.target.value)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-ark-yellow ${errors.grade ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.grade && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.grade}
                        </p>
                      )}
                    </div>

                    {/* Program of Interest */}
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-1.5 block">Program of Interest *</label>
                      <Select onValueChange={(v) => updateField("program", v)}>
                        <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-ark-yellow ${errors.program ? "border-red-400 focus:border-red-400" : ""}`}>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((p) => (
                            <SelectItem key={p} value={p}>{p}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.program && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.program}
                        </p>
                      )}
                    </div>

                    {/* Server error */}
                    {serverError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/20 border border-red-400/40 rounded-lg px-4 py-3"
                      >
                        <p className="text-red-200 text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {serverError}
                        </p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-ark-yellow text-ark-navy font-black hover:bg-ark-yellow-light shadow-yellow py-6 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Book My Free Assessment
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-white/40 text-xs text-center">
                      No spam. 100% confidential. Limited slots available.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
