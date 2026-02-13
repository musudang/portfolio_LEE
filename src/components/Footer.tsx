import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold">LEE</h3>
                        <p className="text-muted-foreground mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="mailto:contact@example.com" className="hover:text-foreground text-muted-foreground transition-colors p-2 rounded-full hover:bg-secondary">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground transition-colors p-2 rounded-full hover:bg-secondary">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground transition-colors p-2 rounded-full hover:bg-secondary">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
