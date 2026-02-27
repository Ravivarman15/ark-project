import Navbar from "@/components/ark/Navbar";
import HeroSection from "@/components/ark/HeroSection";
import QuickGateways from "@/components/ark/QuickGateways";
import NestlingsSection from "@/components/ark/NestlingsSection";
import TrustStrip from "@/components/ark/TrustStrip";
import ProgramsSection from "@/components/ark/ProgramsSection";
import WhyARKSection from "@/components/ark/WhyARKSection";
import ResultsSection from "@/components/ark/ResultsSection";
import TestimonialsSection from "@/components/ark/TestimonialsSection";
import LeadFormSection from "@/components/ark/LeadFormSection";
import FounderSection from "@/components/ark/FounderSection";
import FAQSection from "@/components/ark/FAQSection";
import FinalCTASection from "@/components/ark/FinalCTASection";
import Footer from "@/components/ark/Footer";
import LocalPresenceSection from "@/components/ark/LocalPresenceSection";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import SEOHead from "@/components/SEOHead";
import { LocalBusinessSchema, EducationalOrgSchema, FAQPageSchema } from "@/components/SchemaMarkup";

const homeFaqs = [
  { q: "How is ARK different from other coaching centres in Chennai?", a: "ARK is a structured academic ecosystem — not just a tuition centre. We have a proven weekly testing framework, monthly parent transparency reports, performance analytics, and a remedial system." },
  { q: "What boards do you cover?", a: "We cover ICSE, CBSE, and Tamil Nadu State Board for Classes 6–12." },
  { q: "What is ARK's NEET qualification success rate?", a: "ARK has consistently maintained an 80% NEET qualification rate among our coached students with 3 government medical seat holders." },
  { q: "How small are the batches at ARK?", a: "We keep batch sizes small intentionally — 15-20 for tuition and 20 for NEET coaching — to ensure personalised attention." },
  { q: "Do you provide performance reports to parents?", a: "Yes. Parents receive detailed monthly performance reports covering attendance, weekly test scores, subject-wise performance, and overall academic standing." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ARK Learning Arena — Best NEET Coaching & Tuition in Chennai"
        description="Chennai's premier academic institution — NEET coaching with 80% qualification rate, Class 6-12 tuition, board exam preparation. Small batches, weekly testing, parent reports."
        canonical="https://tuitionwithark.com/"
      />
      <LocalBusinessSchema />
      <EducationalOrgSchema />
      <FAQPageSchema faqs={homeFaqs} />

      <Navbar />
      <main>
        <HeroSection />
        <QuickGateways />
        <NestlingsSection />
        <TrustStrip />
        <LocalPresenceSection />
        <ProgramsSection />
        <WhyARKSection />
        <ResultsSection />
        <TestimonialsSection />
        <LeadFormSection />
        <FounderSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppSticky />
    </div>
  );
};

export default Index;
