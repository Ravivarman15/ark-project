import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, BookOpen, FlaskConical, Microscope, ArrowRight } from "lucide-react";

const gateways = [
    {
        title: "NEET Coaching",
        desc: "Complete NCERT mastery in Chennai.",
        link: "/neet-coaching-in-chennai",
        icon: Microscope,
        color: "bg-[#FFF8E1] border-ark-yellow/30",
        iconBg: "bg-ark-yellow",
        iconColor: "text-ark-navy",
        textColor: "text-ark-navy"
    },
    {
        title: "Tuition Centre",
        desc: "Board excellence for Class 6-12.",
        link: "/tuition-centre-in-chennai",
        icon: GraduationCap,
        color: "bg-[#EEF0FF] border-ark-navy/20",
        iconBg: "bg-ark-navy",
        iconColor: "text-ark-yellow",
        textColor: "text-ark-navy"
    },
    {
        title: "Class 6–10",
        desc: "Strong foundation for early success.",
        link: "/class-6-10-tuition",
        icon: BookOpen,
        color: "bg-[#FFEBF0] border-ark-pink/20",
        iconBg: "bg-ark-pink",
        iconColor: "text-white",
        textColor: "text-ark-navy"
    },
    {
        title: "Science 11–12",
        desc: "Excellence in PCMB subjects.",
        link: "/class-11-12-science-coaching",
        icon: FlaskConical,
        color: "bg-[#FFF8E1] border-ark-yellow/30",
        iconBg: "bg-ark-navy",
        iconColor: "text-ark-yellow",
        textColor: "text-ark-navy"
    }
];

export default function QuickGateways() {
    return (
        <section className="bg-white py-12 overflow-hidden">
            <div className="container-ark">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4 px-4 sm:px-0">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-3xl font-black text-ark-navy tracking-tight">
                            Ready to <span className="text-ark-yellow">Dominate</span> Your Academics?
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm font-medium">
                            Select your target program to view detailed curriculum and milestones in Chennai.
                        </p>
                    </div>
                </div>

                {/* Scrollable Container for Mobile */}
                <div
                    className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 px-4 sm:px-0
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            snap-x snap-mandatory"
                >
                    {gateways.map((gate, i) => (
                        <motion.div
                            key={gate.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-shrink-0 w-[240px] md:w-full snap-start"
                        >
                            <Link
                                to={gate.link}
                                className={`group block h-full p-6 rounded-2xl border ${gate.color} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-ark-pink transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-14 h-14 rounded-2xl ${gate.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                                        <gate.icon className={`w-7 h-7 ${gate.iconColor}`} />
                                    </div>

                                    <h3 className={`text-lg font-black ${gate.textColor} leading-tight mb-2 uppercase tracking-wide`}>
                                        {gate.title}
                                    </h3>
                                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                                        {gate.desc}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] text-ark-navy opacity-40 group-hover:opacity-100 group-hover:text-ark-pink transition-all">
                                        Explore Page
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
