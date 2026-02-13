import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    title?: string;
    children: React.ReactNode;
}

export function Section({ id, title, children, className, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 border-b border-border last:border-0", className)}
            {...props}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className="text-2xl font-bold tracking-tight mb-8 md:mb-12 uppercase">{title}</h2>
                )}
                {children}
            </div>
        </section>
    );
}
