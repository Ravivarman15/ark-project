import { useEffect } from "react";

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
}

export default function SEOHead({ title, description, canonical, ogImage }: SEOHeadProps) {
    useEffect(() => {
        document.title = title;
        const setMeta = (name: string, content: string, attr = "name") => {
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
            el.content = content;
        };
        setMeta("description", description);
        setMeta("og:title", description, "property");
        setMeta("og:description", description, "property");
        if (ogImage) setMeta("og:image", ogImage, "property");
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
            if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
            link.href = canonical;
        }
    }, [title, description, canonical, ogImage]);
    return null;
}
