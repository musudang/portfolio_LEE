"use client";

import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      <Navbar />

      <main className="pt-24 px-6 md:px-12 lg:px-24">

        {/* About Me / Hero Section */}
        <section id="about" className="min-h-[85vh] flex flex-col justify-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] md:aspect-square bg-secondary rounded-sm overflow-hidden"
            >
              {/* Fallback for failed image generation - Stylish Typography */}
              <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold opacity-5 tracking-tighter select-none">
                MSD
              </div>
              {/* If we had an image, it would go here. For now, a subtle pattern or color. */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                  Musudang
                </h1>
                <p className="text-xl text-muted-foreground">
                  Food & Resource Economics @ Korea University
                </p>
              </div>

              <div className="space-y-4 text-lg leading-relaxed max-w-lg text-foreground/80">
                <p>
                  I'm a senior student passionate about <span className="text-foreground font-medium">environmental economics</span> and <span className="text-foreground font-medium">entrepreneurship</span>.
                </p>
                <p>
                  Growing up in Indonesia gave me a unique perspective on global markets and sustainability. I blend economic research with technical skills to build solutions that matter.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">Languages</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <span className="font-medium">Korean (Native)</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="font-medium">English (Fluent)</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="font-medium">Indonesian (Intermediate)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl">A selection of my technical and entrepreneurial work.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="TEMAN"
              description="A community application for foreigners in Korea. Bridging cultural gaps through technology."
              tags={["Flutter", "Firebase", "Community"]}
              link="https://teman-gamma.vercel.app/"
              year="2026"
              category="App Dev"
            />
            <ProjectCard
              title="Surfly.info"
              description="A comprehensive surfing platform developed with fellow students. Provides real-time wave reports and spot guides."
              tags={["Web Dev", "React", "Data Aggregation"]}
              year="2025"
              category="Web Platform"
            />
            <ProjectCard
              title="Infoseller"
              description="Army Startup Competition entry. An innovative information marketplace solution."
              tags={["Startup", "Business Plan", "MVP"]}
              year="2023"
              category="Startup"
            />
            <ProjectCard
              title="FRESC LEAP"
              description="Carbon emission tracking and reduction project. Applying economic models to environmental data."
              tags={["Research", "Climate Economics", "Data Analysis"]}
              year="2024"
              category="Research"
            />
            <ProjectCard
              title="Climate Change Economics"
              description="Academic research paper analyzing policy impacts on local food systems."
              tags={["Academic", "Economics", "Paper"]}
              year="2024"
              category="Research"
            />
            <ProjectCard
              title="Sikma Marketing"
              description="Strategic marketing portfolio and project presentation."
              tags={["Marketing", "Strategy", "PPT"]}
              year="2024"
              category="Business"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Experience</h2>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Education</h3>
                    <div>
                      <p className="font-medium">Korea University</p>
                      <p className="text-muted-foreground text-sm">B.A. Food & Resource Economics</p>
                      <p className="text-muted-foreground text-sm">Minor in Climate Change Economics</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Internship</h3>
                    <div>
                      <p className="font-medium">PT. Tekniko</p>
                      <p className="text-muted-foreground text-sm">Indonesia</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "React", "Python", "Java", "Git", "Vercel"].map(tool => (
                        <span key={tool} className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-sm border border-border/50">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Certificates</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm font-mono list-disc list-inside marker:text-foreground/50">
                      <li>TOEFL / TOEIC</li>
                      <li>OPIc (Aiming for AL)</li>
                      <li>TIBA / LEAP / INFOSELLER</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-8 pt-2">
              <Timeline items={[
                {
                  year: "2026",
                  title: "4th Year Senior",
                  company: "Korea University",
                  description: "Focusing on graduation requirements and capstone projects."
                },
                {
                  year: "2024 - 2025",
                  title: "Junior Year",
                  company: "Korea University",
                  description: "Deepened studies in macroeconomics and resource management."
                },
                {
                  year: "2023 - 2024",
                  title: "Sophomore Year",
                  company: "Korea University",
                  description: "Returned to academic life. Started multiple web projects including Surfly."
                },
                {
                  year: "2022 - 2023",
                  title: "Military Service",
                  company: "Republic of Korea Army",
                  description: "Served and completed mandatory military duty."
                },
                {
                  year: "2021 - 2022",
                  title: "Freshman Year",
                  company: "Korea University",
                  description: "Entered university. Joined Judo Team and Mixed Martial Arts club."
                },
                {
                  year: "2020",
                  title: "Graduation",
                  company: "High School",
                  description: "Graduated High School."
                },
              ]} />
            </div>
          </div>
        </section>

        {/* Extracurricular Section */}
        <section id="extracurricular" className="py-24 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Clubs</h2>
              <div className="space-y-4">
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                  <h3 className="text-xl font-bold mb-1">Korea Univ. Judo Team</h3>
                  <p className="text-muted-foreground">Active Member</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                  <h3 className="text-xl font-bold mb-1">Mixed Martial Arts</h3>
                  <p className="text-muted-foreground">Korea University Club</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                  <h3 className="text-xl font-bold mb-1">Food Future Partners</h3>
                  <p className="text-muted-foreground">Investment Expert Training</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Volunteer</h2>
              <div className="space-y-4">
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                  <h3 className="text-xl font-bold mb-1">Animalmate</h3>
                  <p className="text-muted-foreground">Abandoned Dog Shelter Volunteer</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Regular weekend volunteering to care for rescued animals. Cleaning cages, walking dogs, and assisting with feedings.</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                  <h3 className="text-xl font-bold mb-1">Canaan Farmers School</h3>
                  <p className="text-muted-foreground">Community Service</p>
                </div>
              </div>
            </div>

          </motion.div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="py-24 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
                Let's Talk.
              </h2>
              <div className="flex flex-col gap-4 text-lg">
                <a href="mailto:musudang@korea.ac.kr" className="flex items-center gap-4 hover:text-muted-foreground transition-colors group">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="border-b border-transparent group-hover:border-foreground transition-colors">musudang@korea.ac.kr</span>
                </a>
                <a href="tel:+821043942277" className="flex items-center gap-4 hover:text-muted-foreground transition-colors group">
                  <Phone className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="border-b border-transparent group-hover:border-foreground transition-colors">+82 10 4394 2277</span>
                </a>
                <span className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="h-5 w-5" /> Seoul, Korea
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" className="p-4 rounded-full bg-foreground text-background hover:scale-110 transition-transform duration-300">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-4 rounded-full bg-foreground text-background hover:scale-110 transition-transform duration-300">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono uppercase tracking-wider">
            <span>© 2026 Musudang. All rights reserved.</span>
            <span>Design by Antigravity</span>
          </div>
        </section>

      </main>
    </div>
  );
}
