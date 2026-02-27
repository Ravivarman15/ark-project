import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import arkLogo from "@/assets/ark-logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results-achievements" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMobileLink = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      // Route-based link — use React Router navigation
      navigate(href);
    } else if (href.startsWith("#")) {
      // Hash link — scroll to element on current page
      // If we're not on the homepage and the hash target is a homepage section, navigate home first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-ark-navy shadow-nav py-2"
          : "bg-ark-navy/95 backdrop-blur-sm py-3 lg:py-4"
          }`}
      >
        <div className="container-ark flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={arkLogo}
              alt="ARK Learning Arena Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover shadow-yellow"
            />
            <div className="min-w-0">
              <div className="text-white font-bold text-sm lg:text-lg leading-tight truncate">ARK Learning Arena</div>
              <div className="text-ark-yellow text-[10px] lg:text-xs font-medium tracking-wider">DISCIPLINE MEETS DIRECTION</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/90 hover:text-ark-yellow font-medium text-sm transition-colors link-underline whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname !== "/") {
                      e.preventDefault();
                      navigate("/");
                      setTimeout(() => {
                        const target = document.querySelector(link.href);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }, 500);
                    }
                  }}
                  className="text-white/90 hover:text-ark-yellow font-medium text-sm transition-colors link-underline whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href="tel:+917639399217"
              className="hidden xl:flex items-center gap-2 text-white/80 hover:text-ark-yellow text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 76393 99217</span>
            </a>
            <a
              href="https://ark-learning-hub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-ark-yellow text-ark-yellow font-bold text-xs hover:bg-ark-yellow hover:text-ark-navy transition-colors whitespace-nowrap"
            >
              Partner With ARK
            </a>
            <Button
              className="bg-ark-yellow text-ark-navy font-bold hover:bg-ark-yellow-light shadow-yellow px-4 h-9 text-xs whitespace-nowrap"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Assessment
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden bg-ark-navy-deep border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100vh-64px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleMobileLink(link.href)}
                    className="py-3 px-4 text-left text-white/90 hover:text-ark-yellow hover:bg-white/5 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-4 flex flex-col gap-3 border-t border-white/10 mt-2">
                  <Button
                    className="bg-ark-yellow text-ark-navy font-bold w-full shadow-yellow h-12 text-base"
                    onClick={() => {
                      setMobileOpen(false);
                      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Free Academic Assessment
                  </Button>
                  <a
                    href="https://ark-learning-hub.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 rounded-xl border border-ark-yellow text-ark-yellow font-bold w-full"
                  >
                    Partner With ARK
                  </a>
                  <a
                    href="https://wa.me/917639399217?text=Hi%2C%20I%20found%20ARK%20Learning%20Arena%20online.%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-green-400 text-green-400 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+917639399217"
                    className="flex items-center justify-center gap-2 py-3 text-white/80 font-medium"
                  >
                    <Phone className="w-5 h-5 text-ark-yellow" />
                    +91 76393 99217
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile sticky bottom CTA */}
      <div className="mobile-cta-sticky lg:hidden bg-ark-navy border-t border-white/10 flex">
        <a
          href="tel:+917639399217"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-white font-semibold text-sm border-r border-white/10"
        >
          <Phone className="w-4 h-4 text-ark-yellow" />
          Call Now
        </a>
        <button
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-ark-yellow text-ark-navy font-bold text-sm"
        >
          Book Assessment
        </button>
      </div>
    </>
  );
}
