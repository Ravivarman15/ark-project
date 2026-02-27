import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Breadcrumb {
    label: string;
    href: string;
}

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
    return (
        <nav aria-label="Breadcrumb" className="py-3">
            <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-1">
                    <Link to="/" className="hover:text-ark-navy transition-colors flex items-center gap-1">
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={item.href} className="flex items-center gap-1">
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                        {i === items.length - 1 ? (
                            <span className="font-semibold text-ark-navy">{item.label}</span>
                        ) : (
                            <Link to={item.href} className="hover:text-ark-navy transition-colors">{item.label}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
