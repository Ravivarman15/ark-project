import { useEffect } from "react";

// Inject JSON-LD structured data into page head
export function JsonLd({ data }: { data: Record<string, unknown> }) {
    useEffect(() => {
        const id = `jsonld-${JSON.stringify(data["@type"])}`;
        let script = document.getElementById(id) as HTMLScriptElement | null;
        if (!script) {
            script = document.createElement("script");
            script.id = id;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
        return () => { script?.remove(); };
    }, [data]);
    return null;
}

// LocalBusiness schema for ARK
export function LocalBusinessSchema() {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://tuitionwithark.com/#localbusiness",
            name: "ARK Learning Arena",
            alternateName: "ARK Chennai",
            description: "Chennai's premier academic institution offering NEET coaching, Class 6-12 tuition, board exam preparation, and foundation programs with structured academic systems and expert mentorship.",
            url: "https://tuitionwithark.com",
            telephone: "+917639399217",
            email: "info@tuitionwithark.com",
            address: { "@type": "PostalAddress", streetAddress: "ARK Learning Arena", addressLocality: "Chennai", addressRegion: "Tamil Nadu", postalCode: "600000", addressCountry: "IN" },
            geo: { "@type": "GeoCoordinates", latitude: "13.0827", longitude: "80.2707" },
            openingHours: ["Mo-Sa 08:00-20:00"],
            priceRange: "₹₹",
            image: "https://tuitionwithark.com/ark-logo.jpeg",
            sameAs: ["https://www.instagram.com/arklearningarena", "https://www.youtube.com/@arklearningarena", "https://www.facebook.com/arklearningarena"],
            hasOfferCatalog: {
                "@type": "OfferCatalog", name: "ARK Programs",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "NEET Coaching", description: "2-year structured NEET preparation program with NCERT-based curriculum, weekly testing, and 80% qualification rate." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Class 6-10 Tuition", description: "Expert tuition for ICSE, CBSE, and State Board with weekly assessments and parent transparency reports." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Class 11-12 Science Coaching", description: "Specialized Science coaching for Class 11-12 with board exam prep and NEET integration." } },
                ],
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", worstRating: "1", ratingCount: "127" },
        }} />
    );
}

// BreadcrumbList schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
                "@type": "ListItem", position: i + 1, name: item.name,
                item: item.url.startsWith("http") ? item.url : `https://tuitionwithark.com${item.url}`,
            })),
        }} />
    );
}

// FAQPage schema
export function FAQPageSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
                "@type": "Question", name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        }} />
    );
}

// EducationalOrganization schema
export function EducationalOrgSchema() {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "ARK Learning Arena",
            url: "https://tuitionwithark.com",
            description: "Chennai's premier academic institution — NEET coaching, Class 6-12 tuition, board exam preparation.",
            address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
            telephone: "+917639399217",
            founder: { "@type": "Person", name: "Prathiba", jobTitle: "Founder & Academic Director" },
        }} />
    );
}

// BlogPosting schema
export function BlogPostingSchema({ title, description, author, datePublished, url }: { title: string; description: string; author: string; datePublished: string; url: string }) {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            author: { "@type": "Person", name: author },
            datePublished,
            publisher: { "@type": "Organization", name: "ARK Learning Arena", logo: { "@type": "ImageObject", url: "https://tuitionwithark.com/ark-logo.jpeg" } },
            url: url.startsWith("http") ? url : `https://tuitionwithark.com${url}`,
        }} />
    );
}

// Review schema
export function ReviewSchema({ reviews }: { reviews: { author: string; rating: number; text: string }[] }) {
    return (
        <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ARK Learning Arena",
            review: reviews.map((r) => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.author },
                reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
                reviewBody: r.text,
            })),
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: String(reviews.length + 122) },
        }} />
    );
}
