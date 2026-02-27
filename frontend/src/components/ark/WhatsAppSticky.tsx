import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppSticky() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-show tooltip after button appears
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShowTooltip(true), 1500);
      const h = setTimeout(() => setShowTooltip(false), 5000);
      return () => { clearTimeout(t); clearTimeout(h); };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-24 lg:bottom-8 right-4 z-[60] flex items-center gap-2"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-ark-navy text-xs font-bold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap"
              >
                Chat with us on WhatsApp 💬
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/917639399217?text=Hi%20ARK%20Learning%20Arena%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <span className="absolute inset-[-4px] rounded-full bg-green-400/20 animate-pulse" />
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
