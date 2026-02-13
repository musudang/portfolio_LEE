"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GridItem } from "@/components/GridItem";
import {
  BookOpen,
  Code,
  Award,
  Globe,
  Users,
  Heart,
  GraduationCap,
  Gamepad2,
  Terminal,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <Navbar />

      <main className="pt-16">
        {/* Introduction / Hero */}
        <Section id="about" className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Hello, I'm <span className="text-muted-foreground">Lee.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A passionate developer and researcher dedicated to building clean, efficient, and user-centric solutions.
              I specialize in web technologies and have a keen interest in AI and data science.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                View Projects
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </Section>

        {/* Papers & Projects */}
        <Section id="projects" title="Papers & Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GridItem colSpan="2" className="flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <BookOpen className="h-8 w-8 text-muted-foreground" />
                  <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors"><ExternalLink className="h-5 w-5" /></a>
                </div>
                <h3 className="text-2xl font-bold mb-2">Research Paper: Advanced AI Algorithms</h3>
                <p className="text-muted-foreground">
                  Published in International Journal of Computer Science. Explored the efficiency of transformer models in low-resource environments.
                </p>
              </div>
              <div className="mt-8 flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Python</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">PyTorch</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">LaTeX</span>
              </div>
            </GridItem>
            <GridItem className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Code className="h-8 w-8 text-muted-foreground" />
                  <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors"><ExternalLink className="h-5 w-5" /></a>
                </div>
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-muted-foreground text-sm">
                  A minimalist high-contrast portfolio built with Next.js and Tailwind CSS.
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Tailwind</span>
              </div>
            </GridItem>
            <GridItem className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Code className="h-8 w-8 text-muted-foreground" />
                  <a href="#" className="p-2 hover:bg-secondary rounded-full transition-colors"><ExternalLink className="h-5 w-5" /></a>
                </div>
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Full-stack application with real-time inventory management.
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Node.js</span>
              </div>
            </GridItem>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4">
                <span className="text-sm text-muted-foreground font-mono">2023 - Present</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                <p className="text-muted-foreground mb-2">Tech Solutions Inc.</p>
                <p className="text-muted-foreground">
                  Developed and maintained internal tools using React and TypeScript. Collaborated with the design team to improve user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4">
                <span className="text-sm text-muted-foreground font-mono">2022 - 2023</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold">Research Assistant</h3>
                <p className="text-muted-foreground mb-2">University Lab</p>
                <p className="text-muted-foreground">
                  Assisted in data analysis and visualization for a machine learning research project.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Tools / Skills */}
        <Section id="tools" title="Tools & Technologies">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JavaScript", "TypeScript", "React", "Next.js", "Python", "Node.js", "Tailwind CSS", "Git", "Docker", "Figma", "SQL", "C++"].map((tool) => (
              <div key={tool} className="flex items-center gap-2 p-4 rounded-lg bg-secondary/50 border border-border">
                {tool === "JavaScript" && <Terminal className="h-5 w-5" />}
                {tool === "React" && <Code className="h-5 w-5" />}
                {/* Add specific icons if needed, using general icons for now */}
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Education & Certificates */}
        <Section id="education" title="Education & Certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GridItem className="space-y-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University of Technology • 2020 - 2024</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Major in Software Engineering</li>
                <li>GPA: 3.8/4.0</li>
                <li>Dean's List 2021, 2022</li>
              </ul>
            </GridItem>
            <GridItem className="space-y-4">
              <Award className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">AWS Certified Solutions Architect</h3>
                <p className="text-muted-foreground">Amazon Web Services • 2023</p>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold">Google Data Analytics</h3>
                <p className="text-muted-foreground">Google • 2022</p>
              </div>
            </GridItem>
          </div>
        </Section>

        {/* Other Sections: Abroad, Clubs, Volunteer, Hobbies */}
        <Section id="extras" title="Beyond Work">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Abroad Experience */}
            <GridItem className="space-y-4">
              <Globe className="h-6 w-6" />
              <h3 className="font-bold">Abroad Experience</h3>
              <p className="text-sm text-muted-foreground">
                Exchange Semester in Seoul, South Korea. Learned cultural adaptability and basic Korean.
              </p>
            </GridItem>

            {/* Clubs */}
            <GridItem className="space-y-4">
              <Users className="h-6 w-6" />
              <h3 className="font-bold">Clubs</h3>
              <p className="text-sm text-muted-foreground">
                President of Coding Club. Organized 3 hackathons and monthly workshops.
              </p>
            </GridItem>

            {/* Volunteer */}
            <GridItem className="space-y-4">
              <Heart className="h-6 w-6" />
              <h3 className="font-bold">Volunteer</h3>
              <p className="text-sm text-muted-foreground">
                Tech mentor for local high school students. Helped 20+ students build their first website.
              </p>
            </GridItem>

            {/* Hobbies */}
            <GridItem className="space-y-4">
              <Gamepad2 className="h-6 w-6" />
              <h3 className="font-bold">Hobbies</h3>
              <p className="text-sm text-muted-foreground">
                Photography, Hiking, and playing Strategy Games.
              </p>
            </GridItem>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
