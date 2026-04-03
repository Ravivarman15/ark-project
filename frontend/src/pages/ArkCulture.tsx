import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import {
  cultureCategories,
  highlightCards,
  type CultureItem,
  type CultureCategory,
} from "@/data/cultureData";

// Import cinematic hero scenes
import scene1 from "@/assets/culture/scene1.png";
import scene2 from "@/assets/culture/scene2.png";
import scene3 from "@/assets/culture/scene3.png";
import scene4 from "@/assets/culture/scene4.png";
import scene5 from "@/assets/culture/scene5.png";
import scene6 from "@/assets/culture/scene6.png";

const heroScenes = [
  {
    image: scene1,
    title: "Welcome to ARK Learning Arena",
    subtitle: "Where discipline meets direction. Enter a world of focused excellence.",
    accent: "ARK",
    accentWord: "Arena"
  },
  {
    image: scene2,
    title: "Classroom Mastery",
    subtitle: "Active learning and concept-first teaching that build academic foundations.",
    accent: "Learning",
    accentWord: "Focus"
  },
  {
    image: scene3,
    title: "Personal Mentorship",
    subtitle: "Small batches ensure every student receives individual guidance and support.",
    accent: "Supportive",
    accentWord: "Culture"
  },
  {
    image: scene4,
    title: "Structured Discipline",
    subtitle: "Weekly testing and performance tracking that ensure consistent improvement.",
    accent: "Structured",
    accentWord: "Growth"
  },
  {
    image: scene5,
    title: "Vibrant Campus Life",
    subtitle: "Celebrating every milestone and festival together as one ARK family.",
    accent: "Community",
    accentWord: "Spirit"
  },
  {
    image: scene6,
    title: "Proven Excellence",
    subtitle: "Transforming potential into performance with consistent top results.",
    accent: "Legacy",
    accentWord: "Success"
  }
];

/* ─────────────────── Lightbox ─────────────────── */

interface LightboxProps {
  items: CultureItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[currentIndex];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Content */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.url}
            controls
            autoPlay
            className="max-w-full max-h-[70vh] rounded-xl object-contain"
          />
        ) : (
          <img
            src={item.url}
            alt={item.title}
            className="max-w-full max-h-[70vh] rounded-xl object-contain"
          />
        )}
        <div className="mt-4 text-center px-4">
          <h3 className="text-white font-bold text-lg">{item.title}</h3>
          <p className="text-white/60 text-sm mt-1">{item.description}</p>
          <p className="text-white/30 text-xs mt-2">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </motion.div>

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </motion.div>
  );
}

/* ─────────────────── Motion Hero ─────────────────── */

function CultureMotionHero() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % heroScenes.length);
    }, 4500); // 4.5 seconds per scene
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#0B2C55]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.div
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 4.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroScenes[currentScene].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C55]/90 via-[#0B2C55]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C55]/90 via-transparent to-black/20" />

          {/* Content */}
          <div className="container-ark relative h-full flex flex-col justify-center z-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-[#FFC107] text-sm font-semibold tracking-wide uppercase">
                    Experience ARK Culture
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
                  {heroScenes[currentScene].title.split(" ").map((word, i, arr) => 
                    i === arr.length - 1 ? (
                      <span key={i} className="text-[#FFC107]">{word}</span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h1>
                
                <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-medium drop-shadow-md">
                  {heroScenes[currentScene].subtitle}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#FFC107] text-[#0B2C55] font-black hover:bg-[#ffd133] shadow-yellow group px-10 py-7 text-lg rounded-full"
                    onClick={() => document.getElementById("campus-life")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explore Campus <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="https://wa.me/917639399217"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all text-lg"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    Connect With ARK
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-0 right-0 z-30 container-ark flex gap-2">
        {heroScenes.map((_, i) => (
          <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            {i === currentScene && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-[#FFC107]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
        <div className="flex items-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest">
          <span className="text-[#FFC107]">{currentScene + 1}</span>
          <div className="w-12 h-[1px] bg-white/30" />
          <span>{heroScenes.length}</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Gallery Item ─────────────────── */

interface GalleryItemProps {
  item: CultureItem;
  onClick: () => void;
}

function GalleryItemCard({ item, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-start rounded-2xl overflow-hidden relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {item.type === "video" ? (
          <div className="relative w-full h-full">
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-[#0B2C55] ml-0.5" />
              </div>
            </div>
          </div>
        ) : (
          <img
            src={item.url}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="text-white font-bold text-sm">{item.title}</h4>
        <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
      </div>
      {/* Always-visible bottom bar on mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 group-hover:opacity-0 transition-opacity duration-300 md:opacity-0">
        <h4 className="text-white font-semibold text-xs">{item.title}</h4>
      </div>
    </button>
  );
}

/* ─────────────────── Culture Gallery ─────────────────── */

interface CultureGalleryProps {
  category: CultureCategory;
  onOpenLightbox: (items: CultureItem[], index: number) => void;
}

function CultureGallery({ category, onOpenLightbox }: CultureGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Mouse drag to scroll
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const IconComponent = category.icon;

  return (
    <section id={category.id} className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="container-ark mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B2C55] flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-[#FFC107]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2C55]">
              {category.category.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-[#FFC107]">{word}</span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm sm:text-base">
            {category.description}
          </p>
        </div>

        {/* Gallery with scroll buttons */}
        <div className="relative group/gallery">
          {/* Scroll Arrows — desktop only */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg items-center justify-center text-[#0B2C55] hover:bg-[#FFC107] hover:text-[#0B2C55] transition-all opacity-0 group-hover/gallery:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg items-center justify-center text-[#0B2C55] hover:bg-[#FFC107] hover:text-[#0B2C55] transition-all opacity-0 group-hover/gallery:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 cursor-grab select-none scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* Left padding spacer — ensures first image has proper left margin */}
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-[max(2rem,calc((100vw-80rem)/2+2rem))]" />
            {category.items.map((item, idx) => (
              <GalleryItemCard
                key={`${category.id}-${idx}`}
                item={item}
                onClick={() => onOpenLightbox(category.items, idx)}
              />
            ))}
            {/* Right padding spacer */}
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-[max(2rem,calc((100vw-80rem)/2+2rem))]" />
          </div>

          {/* Scroll indicator dots — mobile only */}
          <div className="flex justify-center gap-1.5 mt-2 md:hidden">
            {category.items.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#0B2C55]/20"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────── Highlight Card ─────────────────── */

interface HighlightCardComponentProps {
  card: typeof highlightCards[number];
  index: number;
}

function HighlightCardComponent({ card, index }: HighlightCardComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden h-[280px] sm:h-[320px] cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${card.accent} transition-opacity duration-300`} />
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_60px_rgba(255,193,7,0.15)]" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3 className="text-white font-black text-xl sm:text-2xl mb-2 drop-shadow-lg">
          {card.title}
        </h3>
        <p className="text-white/85 text-sm leading-relaxed line-clamp-3 drop-shadow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────── Main Page ─────────────────── */

export default function ArkCulturePage() {
  const [lightbox, setLightbox] = useState<{
    items: CultureItem[];
    index: number;
  } | null>(null);

  const openLightbox = useCallback((items: CultureItem[], index: number) => {
    setLightbox({ items, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevLightbox = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: prev.index === 0 ? prev.items.length - 1 : prev.index - 1 }
        : null
    );
  }, []);

  const nextLightbox = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: prev.index === prev.items.length - 1 ? 0 : prev.index + 1 }
        : null
    );
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="ARK Culture — Student Life at ARK Learning Arena, Chennai"
        description="Explore the vibrant culture at ARK Learning Arena — campus life, celebrations, student-teacher bonding, educational trips, and achievements. Experience the ARK difference."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "ARK Culture", url: "/ark-culture" },
        ]}
      />
      <Navbar />

      <main className="pt-[72px]">
        {/* ── Cinematic Motion Hero ── */}
        <CultureMotionHero />

        {/* ── Quick Category Nav ── */}
        <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40 overflow-x-auto scrollbar-none shadow-sm">
          <div className="container-ark py-4 flex gap-4 min-w-max">
            {cultureCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-[#0B2C55] hover:bg-[#FFC107]/10 hover:text-[#FFC107] border border-[#0B2C55]/10 transition-all"
              >
                <cat.icon className="w-4 h-4" />
                {cat.category}
              </a>
            ))}
          </div>
        </div>

        {/* ── Culture Sections ── */}
        <div className="space-y-16 md:space-y-24 py-12 md:py-16">
          {cultureCategories.map((category) => (
            <CultureGallery
              key={category.id}
              category={category}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* ── Highlight Cards ── */}
        <section className="section-padding bg-[#f8f9fb]">
          <div className="container-ark">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 bg-[#0B2C55]/5 rounded-full px-4 py-1.5 mb-4">
                  <Sparkles className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-[#0B2C55] text-sm font-semibold">
                    What Makes ARK Special
                  </span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2C55] mb-4">
                  The ARK{" "}
                  <span className="text-[#FFC107]">Experience</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  More than academics — ARK is where students build confidence,
                  character, and lifelong friendships in a structured, supportive environment.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlightCards.map((card, i) => (
                <HighlightCardComponent key={card.title} card={card} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <section className="bg-gradient-to-r from-[#0B2C55] to-[#0d3360] py-12 md:py-16">
          <div className="container-ark">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "500+", label: "Happy Students" },
                { value: "10+", label: "Years of Excellence" },
                { value: "80%", label: "NEET Success Rate" },
                { value: "100%", label: "Parent Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFC107]">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="section-padding bg-gradient-to-br from-[#0B2C55] to-[#0d3360] text-white text-center">
          <div className="container-ark">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Experience the{" "}
                <span className="text-[#FFC107]">ARK</span>{" "}
                <span className="text-[#FF4CAF]">Culture</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Join 500+ families who trust ARK with their children's academic
                futures. Book a free Academic Diagnostic Assessment and become
                part of the ARK community.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-[#FFC107] text-[#0B2C55] font-bold hover:bg-[#ffd133] shadow-yellow group px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-lg rounded-full"
                  onClick={() => (window.location.href = "/")}
                >
                  Book Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href="https://wa.me/917639399217?text=Hi%2C%20I%20saw%20ARK%20Culture%20page%20and%20want%20to%20know%20more."
                  className="flex items-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917639399217"
                  className="flex items-center gap-2 border-2 border-white/30 hover:border-white px-5 sm:px-6 py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  +91 76393 99217
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppSticky />

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            items={lightbox.items}
            currentIndex={lightbox.index}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
