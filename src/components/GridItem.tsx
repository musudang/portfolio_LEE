import { cn } from "@/lib/utils";

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    colSpan?: "1" | "2" | "3" | "full";
    rowSpan?: "1" | "2";
}

export function GridItem({ children, className, colSpan = "1", rowSpan = "1", ...props }: GridItemProps) {
    const colSpanClasses = {
        "1": "col-span-1",
        "2": "col-span-1 md:col-span-2",
        "3": "col-span-1 md:col-span-3",
        "full": "col-span-1 md:col-span-full",
    };

    const rowSpanClasses = {
        "1": "row-span-1",
        "2": "row-span-1 md:row-span-2",
    };

    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow",
                colSpanClasses[colSpan],
                rowSpanClasses[rowSpan],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
