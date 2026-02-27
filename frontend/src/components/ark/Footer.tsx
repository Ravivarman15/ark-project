import { Phone, MessageCircle, MapPin, Mail, Instagram, Youtube, Facebook, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import arkLogo from "@/assets/ark-logo.jpeg";

const serviceLinks = [
  { label: "NEET Coaching", href: "/neet-coaching-in-chennai" },
  { label: "Class 6–10 Tuition", href: "/class-6-10-tuition" },
  { label: "Class 11–12 Science", href: "/class-11-12-science-coaching" },
  { label: "Board Exam Prep", href: "/tuition-centre-in-chennai" },
  { label: "NEET Foundation", href: "/class-11-12-science-coaching" },
  { label: "Repeaters Batch", href: "/neet-coaching-in-chennai" },
];

const companyLinks = [
  { label: "About ARK", href: "/about" },
  { label: "Our Results", href: "/results-achievements" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

const supportLinks = [
  { label: "Book Assessment", href: "/#lead-form" },
  { label: "Fee Structure", href: "/#contact" },
  { label: "Admission Form", href: "/#lead-form" },
  { label: "Partner With ARK", href: "https://ark-learning-hub.vercel.app", external: true },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ark-navy-deep text-white">
      <div className="container-ark py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + NAP */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={arkLogo} alt="ARK Learning Arena Logo" className="w-12 h-12 rounded-xl object-cover shadow-yellow" />
              <div>
                <div className="text-white font-black text-lg">ARK Learning Arena</div>
                <div className="text-ark-yellow text-xs tracking-wider">WHERE DISCIPLINE MEETS DIRECTION</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Chennai's premier academic institution — building confident, disciplined, and result-oriented students through structured systems, expert mentorship, and data-driven academic improvement.
            </p>

            {/* NAP Block - Name, Address, Phone (consistent for local SEO) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="ARK Learning Arena" />
              <div className="space-y-3">
                <a href="tel:+917639399217" className="flex items-center gap-3 text-white/80 hover:text-ark-yellow transition-colors text-sm" itemProp="telephone">
                  <Phone className="w-4 h-4 text-ark-yellow flex-shrink-0" />
                  <span className="font-semibold">+91 76393 99217</span>
                </a>
                <a href="mailto:info@tuitionwithark.com" className="flex items-center gap-3 text-white/70 hover:text-ark-yellow transition-colors text-sm">
                  <Mail className="w-4 h-4 text-ark-yellow flex-shrink-0" />
                  <span itemProp="email">info@tuitionwithark.com</span>
                </a>
                <div className="flex items-start gap-3 text-white/70 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-4 h-4 text-ark-yellow flex-shrink-0 mt-0.5" />
                  <span>
                    <span itemProp="streetAddress">2/A, 132, Bazar Line, Ramapuram, St. Thomas Mount</span>,{" "}
                    <span itemProp="addressLocality">Chennai</span>,{" "}
                    <span itemProp="addressRegion">Tamil Nadu</span>,{" "}
                    <span itemProp="addressCode">600016</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/arklearningarena", label: "Instagram" },
                { Icon: Youtube, href: "https://www.youtube.com/@arklearningarena", label: "YouTube" },
                { Icon: Facebook, href: "https://www.facebook.com/arklearningarena", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-ark-yellow hover:text-ark-navy flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wider uppercase">Programs</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/55 hover:text-ark-yellow text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/55 hover:text-ark-yellow text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-ark-yellow text-sm transition-colors flex items-center gap-1">
                      {link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link to={link.href} className="text-white/55 hover:text-ark-yellow text-sm transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="ARK Learning Arena Chennai Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.7334614353515!2d80.19379799839477!3d13.005910899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674f2b60a9db%3A0xb476aab0ccf6505f!2sARK%20Learning%20Arena%20(%20TuitionWithARK%20)!5e0!3m2!1sen!2sin!4v1772170638558!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* WhatsApp CTA banner */}
        <div className="mt-8 bg-green-600/20 border border-green-500/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-bold">Get Instant Help on WhatsApp</div>
              <div className="text-white/60 text-sm">Our counsellors reply within minutes</div>
            </div>
          </div>
          <a
            href="https://wa.me/917639399217?text=Hi%2C%20I%20need%20help%20with%20admissions%20at%20ARK%20Learning%20Arena."
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Now
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ARK Learning Arena. All rights reserved. | tuitionwithark.com
          </p>
          <div className="flex gap-4 text-white/40 text-sm">
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
