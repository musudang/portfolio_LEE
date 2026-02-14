"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    year?: string;
    category?: string;
}

export function ProjectCard({ title, description, tags, link, github, year, category }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative flex flex-col justify-between p-6 h-full bg-card border border-border/50 hover:border-foreground/20 transition-colors"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{category || "Project"}</span>
                        <h3 className="text-xl font-bold group-hover:underline decoration-1 underline-offset-4">{title}</h3>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-full transition-colors">
                                <Github size={18} />
                            </a>
                        )}
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-full transition-colors">
                                <ArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                {year && <div className="text-xs text-muted-foreground font-mono pt-2 border-t border-border/50">{year}</div>}
            </div>
        </motion.div>
    );
}
