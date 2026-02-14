"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description?: string;
    isLast?: boolean;
}

function TimelineItem({ year, title, company, description, isLast }: TimelineItemProps) {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Mobile line */}
            <div className="md:hidden absolute left-[7px] top-2 bottom-0 w-[1px] bg-border" />

            <div className="md:grid md:grid-cols-12 md:gap-8 group">
                {/* Year Section */}
                <div className="md:col-span-3 text-right hidden md:block relative">
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">{year}</span>
                </div>

                {/* Center Line (Desktop) */}
                <div className="hidden md:flex md:col-span-1 justify-center relative">
                    <div className="h-full w-[1px] bg-border group-hover:bg-foreground/20 transition-colors relative">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-background border border-foreground z-10" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-8 mb-10 relative">
                    {/* Mobile Dot */}
                    <div className="md:hidden absolute left-[-25px] top-2 w-2 h-2 rounded-full bg-background border border-foreground z-10" />
                    <span className="md:hidden text-xs font-mono text-muted-foreground mb-1 block">{year}</span>

                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm font-medium text-foreground/80 mb-2">{company}</p>
                    {description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
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
