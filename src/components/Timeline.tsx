"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description?: string;
    isLast?: boolean;
    isSubItem?: boolean;
}

function TimelineItem({ year, title, company, description, isLast, isSubItem }: TimelineItemProps) {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Mobile line */}
            <div className="md:hidden absolute left-[7px] top-2 bottom-0 w-[1px] bg-border" />

            <div className="md:grid md:grid-cols-12 md:gap-8 group">
                {/* Year Section */}
                <div className="md:col-span-3 text-right hidden md:block relative">
                    <span className={`font-mono transition-colors ${
                        isSubItem 
                            ? "text-xs text-muted-foreground/70 group-hover:text-foreground" 
                            : "text-sm text-muted-foreground group-hover:text-foreground"
                    }`}>
                        {year}
                    </span>
                </div>

                {/* Center Line (Desktop) */}
                <div className="hidden md:flex md:col-span-1 justify-center relative">
                    <div className="h-full w-[1px] bg-border group-hover:bg-foreground/20 transition-colors relative">
                        <div className={`absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-background border transition-colors z-10 ${
                            isSubItem
                                ? "w-1.5 h-1.5 border-muted-foreground group-hover:border-foreground"
                                : "w-2 h-2 border-foreground"
                        }`} />
                    </div>
                </div>

                {/* Content Section */}
                <div className={`md:col-span-8 relative ${isSubItem ? "mb-6" : "mb-10"}`}>
                    {/* Mobile Dot */}
                    <div className={`md:hidden absolute rounded-full bg-background border z-10 ${
                        isSubItem
                            ? "left-[-24px] top-2.5 w-1.5 h-1.5 border-muted-foreground"
                            : "left-[-25px] top-2 w-2 h-2 border-foreground"
                    }`} />
                    <span className={`md:hidden font-mono mb-1 block ${
                        isSubItem ? "text-[11px] text-muted-foreground/70" : "text-xs text-muted-foreground"
                    }`}>
                        {year}
                    </span>

                    <h3 className={isSubItem ? "text-[15px] font-semibold text-foreground/90" : "text-lg font-bold"}>
                        {title}
                    </h3>
                    <p className={`font-medium mb-1 ${
                        isSubItem ? "text-xs text-muted-foreground" : "text-sm text-foreground/80 mb-2"
                    }`}>
                        {company}
                    </p>
                    {description && (
                        <p className={`leading-relaxed ${
                            isSubItem ? "text-xs text-muted-foreground/80" : "text-sm text-muted-foreground"
                        }`}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Timeline({ items }: { items: Omit<TimelineItemProps, "isLast">[] }) {
    return (
        <div className="max-w-3xl mx-auto">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    {...item}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
}
