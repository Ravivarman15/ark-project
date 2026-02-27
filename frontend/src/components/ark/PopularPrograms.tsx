import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    GraduationCap,
    BookOpen,
    Target,
    Users,
    Award,
    Star,
    Zap,
} from "lucide-react";
import { programDetails } from "@/data/programDetails";
import type { ProgramDetail } from "@/components/ark/ProgramDetailModal";

/* ─────────────────────────────────────────────────────────
   Icon & accent-colour map keyed by program id
   — extend whenever a new program is added
──────────────────────────────────────────────────────────── */
const programMeta: Record<
    string,
    { Icon: React.ElementType; badge: string; accent: string }
> = {
    "ark-nestlings": {
        Icon: Users,
        badge: "Ages 3–7",
        accent: "#FF4CAF",
    },
    "ark-tuition": {
        Icon: BookOpen,
        badge: "Class 6–12",
        accent: "#FFC107",
    },
    "board-exam-prep": {
        Icon: Target,
        badge: "Class 10 & 12",
        accent: "#FFC107",
    },
    "neet-coaching": {
        Icon: GraduationCap,
        badge: "Class 11–12",
        accent: "#FFC107",
    },
    "neet-foundation": {
        Icon: Star,
        badge: "Class 8–10",
        accent: "#FF4CAF",
    },
    "repeaters-batch": {
        Icon: Zap,
        badge: "NEET Repeaters",
        accent: "#FFC107",
    },
};

/* Fallback for any future program not yet in the map */
const defaultMeta = { Icon: Award, badge: "Program", accent: "#FFC107" };

/* ─────────────────────────────────────────────────────────
   Individual Program Card
──────────────────────────────────────────────────────────── */
function ProgramCard({
    program,
    onClick,
}: {
    program: ProgramDetail;
    onClick: () => void;
}) {
    const meta = programMeta[program.id] ?? defaultMeta;
    const { Icon, badge, accent } = meta;

    return (
        <article
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            aria-label={`View ${program.title} program`}
            className="
        flex-shrink-0 w-[220px] sm:w-[240px] md:w-[250px]
        rounded-2xl overflow-hidden bg-white
        border border-gray-100
        shadow-[0_2px_12px_rgba(11,44,85,0.07)]
        hover:shadow-[0_8px_32px_rgba(11,44,85,0.15)]
        hover:-translate-y-1
        transition-all duration-300 cursor-pointer
        group focus:outline-none focus:ring-2 focus:ring-[#FFC107]
      "
            style={{ scrollSnapAlign: "start" }}
        >
            {/* ── Poster / Visual Header ── */}
            <div
                className={`${program.color} relative h-[130px] sm:h-[140px] flex flex-col justify-end p-4 overflow-hidden`}
            >
                {/* Decorative large icon background */}
                <Icon
                    className="absolute -right-3 -top-3 opacity-[0.12] text-white"
                    style={{ width: 90, height: 90 }}
                    strokeWidth={1.2}
                />

                {/* Badge */}
                <span
                    className="inline-flex items-center w-fit text-[10px] font-bold px-2.5 py-1 rounded-full mb-2"
                    style={{
                        background: `${accent}22`,
                        color: accent,
                        border: `1px solid ${accent}44`,
                    }}
                >
                    {badge}
                </span>

                {/* Icon circle */}
                <div
                    className="absolute top-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: `${accent}33`, border: `1.5px solid ${accent}55` }}
                >
                    <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} style={{ width: 18, height: 18 }} />
                </div>
            </div>

            {/* ── Card Body ── */}
            <div className="p-4">
                <h4 className="text-[#0B2C55] font-black text-[14px] leading-snug mb-1 group-hover:text-[#0B2C55]">
                    {program.title}
                </h4>
                <p className="text-[11px] text-[#0B2C55]/50 font-medium mb-0.5">
                    {program.subtitle}
                </p>
                <p className="text-[12px] text-[#0B2C55]/60 leading-relaxed line-clamp-2 mb-3">
                    {program.tagline}
                </p>

                {/* Metadata pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="text-[10px] font-semibold bg-[#0B2C55]/07 text-[#0B2C55]/70 px-2 py-0.5 rounded-full border border-[#0B2C55]/08">
                        {program.ageGroup}
                    </span>
                    <span className="text-[10px] font-semibold bg-[#0B2C55]/07 text-[#0B2C55]/70 px-2 py-0.5 rounded-full border border-[#0B2C55]/08">
                        {program.duration}
                    </span>
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-[#FFC107] group-hover:text-[#e6ac00] transition-colors">
                        Learn More
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#FFC107]/10 group-hover:bg-[#FFC107] flex items-center justify-center transition-all duration-300">
                        <ArrowRight
                            className="w-3.5 h-3.5 text-[#FFC107] group-hover:text-[#0B2C55] transition-colors"
                        />
                    </span>
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────────────────────────────────
   Popular Programs Strip (exported — used in HeroSection)
──────────────────────────────────────────────────────────── */
export default function PopularPrograms({
    onProgramClick,
}: {
    onProgramClick?: (program: ProgramDetail) => void;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const programs = Object.values(programDetails);

    const syncArrows = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanLeft(el.scrollLeft > 4);
        setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        syncArrows();
        const el = scrollRef.current;
        el?.addEventListener("scroll", syncArrows, { passive: true });
        window.addEventListener("resize", syncArrows);
        return () => {
            el?.removeEventListener("scroll", syncArrows);
            window.removeEventListener("resize", syncArrows);
        };
    }, []);

    const scrollBy = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        /* Scroll by approx one card width */
        el.scrollBy({ left: dir === "left" ? -264 : 264, behavior: "smooth" });
    };

    const NavBtn = ({
        dir,
        disabled,
    }: {
        dir: "left" | "right";
        disabled: boolean;
    }) => (
        <button
            onClick={() => scrollBy(dir)}
            disabled={disabled}
            aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
            className={`
        w-8 h-8 rounded-full border-2 flex items-center justify-center
        transition-all duration-200 flex-shrink-0
        ${!disabled
                    ? "border-[#0B2C55]/25 text-[#0B2C55] hover:bg-[#0B2C55] hover:text-white hover:border-[#0B2C55] active:scale-95"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }
      `}
        >
            {dir === "left" ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
        </button>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 px-5 pt-5 pb-4 sm:px-6 sm:pt-6"
        >
            {/* ── Header row ── */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-[#0B2C55] font-black text-base sm:text-lg leading-tight">
                        Popular Programs
                    </h3>
                    {/* Yellow accent underline */}
                    <div className="mt-1 w-10 h-1 bg-[#FFC107] rounded-full" />
                </div>

                {/* Arrow controls — visible only on desktop */}
                <div className="hidden sm:flex items-center gap-2">
                    <NavBtn dir="left" disabled={!canLeft} />
                    <NavBtn dir="right" disabled={!canRight} />
                </div>
            </div>

            {/* ── Scrollable card row ── */}
            <div
                ref={scrollRef}
                className="
          flex gap-3 sm:gap-4
          overflow-x-auto
          pb-2
          /* Hide scrollbar cross-browser */
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
                style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {programs.map((program) => (
                    <ProgramCard
                        key={program.id}
                        program={program}
                        onClick={() => onProgramClick?.(program)}
                    />
                ))}
            </div>

            {/* ── Mobile dot indicators ── */}
            <div className="flex sm:hidden justify-center gap-1.5 mt-3">
                {programs.map((p) => (
                    <div
                        key={p.id}
                        className="w-1.5 h-1.5 rounded-full bg-[#0B2C55]/20"
                    />
                ))}
            </div>
        </motion.div>
    );
}
