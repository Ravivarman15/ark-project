import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ExternalLink, ShieldCheck, Check } from "lucide-react";

const localProfiles = [
    {
        name: "Justdial",
        rating: "4.9",
        reviews: "127",
        icon: "https://www.google.com/s2/favicons?sz=64&domain=justdial.com",
        url: "https://www.justdial.com/Chennai/ARK-Learning-Arena"
    },
    {
        name: "UrbanPro",
        rating: "5.0",
        reviews: "45",
        icon: "https://www.google.com/s2/favicons?sz=64&domain=urbanpro.com",
        url: "https://www.urbanpro.com/chennai/ark-learning-arena"
    },
    {
        name: "IndiaMART",
        rating: "Verified",
        reviews: "TrustSeal",
        icon: "https://www.google.com/s2/favicons?sz=64&domain=indiamart.com",
        url: "https://www.indiamart.com/ark-learning-arena"
    },
    {
        name: "Google",
        rating: "4.9",
        reviews: "185",
        icon: "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        url: "https://g.page/arklearningarena"
    },
];

function ProfileCard({ profile, index }: { profile: typeof localProfiles[0]; index: number }) {
    const [error, setError] = useState(false);

    return (
        <motion.a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-border/60 p-5 rounded-2xl shadow-sm hover:shadow-xl hover:border-ark-yellow transition-all group relative overflow-hidden flex flex-col items-center text-center"
        >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>

            <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                {!error ? (
                    <img
                        src={profile.icon}
                        alt={profile.name}
                        className="w-full h-full object-contain"
                        onError={() => setError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-ark-navy flex items-center justify-center text-ark-yellow font-black text-xl rounded-lg">
                        {profile.name[0]}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-1 mb-1">
                <Check className="w-3 h-3 text-green-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Verified Listing</span>
            </div>

            <h3 className="text-base font-black text-ark-navy mb-1">{profile.name}</h3>

            <div className="flex items-center justify-center gap-1">
                {profile.name === "IndiaMART" ? (
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                        <ShieldCheck className="w-3 h-3 text-green-600" />
                        <span className="text-[10px] font-bold text-green-700">{profile.rating}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] font-bold text-ark-navy">{profile.rating} <span className="text-muted-foreground ml-0.5">({profile.reviews})</span></span>
                    </div>
                )}
            </div>
        </motion.a>
    );
}

export default function LocalPresenceSection() {
    return (
        <section className="py-20 bg-muted/20 border-y border-border overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ark-yellow/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ark-pink/5 rounded-full blur-3xl -z-10" />

            <div className="container-ark px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border shadow-sm mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-black text-ark-navy uppercase tracking-[0.2em]">100% Verified Presence</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-ark-navy mb-6 tracking-tight">
                        Trusted Across <span className="text-ark-yellow">Major Platforms</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        ARK Learning Arena maintains a consistent, top-rated profile across India's leading discovery platforms. We prioritize transparency and student outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {localProfiles.map((profile, i) => (
                        <ProfileCard key={profile.name} profile={profile} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
