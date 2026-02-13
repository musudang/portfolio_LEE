import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                        LEE
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#about" className="hover:text-foreground transition-colors">
                            About
                        </Link>
                        <Link href="#projects" className="hover:text-foreground transition-colors">
                            Projects
                        </Link>
                        <Link href="#experience" className="hover:text-foreground transition-colors">
                            Experience
                        </Link>
                        <Link href="#contact" className="hover:text-foreground transition-colors">
                            Contact
                        </Link>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
