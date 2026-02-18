"use client";

import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Code, Dumbbell, Dog, Music, Play, X, FileText, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year?: string;
  category?: string;
  files?: { name: string; url: string }[];
  customLinks?: { name: string; url: string }[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "FRESC LEAP",
      description: "Carbon emission tracking and reduction project. Applying economic models to environmental data.",
      tags: ["Research", "Climate Economics", "Data Analysis"],
      year: "2025",
      category: "Research",
      files: [
        { name: "Project Results", url: "/files/FRESC_LEAP_RESULTS.pdf" },
        { name: "Project Posters", url: "/files/FRESC_LEAP_POSTERS.pdf" }
      ]
    },
    {
      title: "Korea Industry Sector: Greenhouse Gas Policy: Research",
      description: "Academic research paper analyzing policy impacts on local food systems.",
      tags: ["Academic", "Economics", "Paper"],
      year: "2025",
      category: "Research",
      files: [
        { name: "Research Paper", url: "/files/Korea_Industry_Sector_Greenhouse_Gas_Policy_Paper.pdf" },
        { name: "Policy Research", url: "/files/Korea_Industry_Sector_Greenhouse_Gas_Policy_Research.pdf" }
      ]
    },
    {
      title: "Investment Expert Training",
      description: "Agricultural Investor Starter: Agriculture, Fisheries and Food Industry.",
      tags: ["Finance", "Agriculture", "Analysis"],
      year: "2025",
      category: "Training",
      files: [
        { name: "Training Presentation", url: "/files/Investment_Expert_Training_presentation.pdf" },
        { name: "Training Paper", url: "/files/Investment_Expert_Training_paper.pdf" }
      ]
    },
    {
      title: "TEMAN",
      description: "A community application for foreigners in Korea. Bridging cultural gaps through technology.",
      tags: ["Flutter", "Firebase", "Community"],
      link: "https://connect-korea--musudang41.replit.app",
      customLinks: [
        { name: "application_detail", url: "https://iris-tank-0cf.notion.site/TEMAN-2f9d16a0171980c1993bc631264d9e6d?source=copy_link" }
      ],
      year: "2026",
      category: "App Dev"
    },
    {
      title: "Surfly.info",
      description: "A comprehensive surfing platform developed with fellow students. Provides real-time wave reports and spot guides.",
      tags: ["Web Dev", "React", "Data Aggregation"],
      link: "https://surfly.info",
      year: "2025",
      category: "Web Platform"
    },
    {
      title: "Infoseller",
      description: "Army Startup Competition entry. An innovative information marketplace solution.",
      tags: ["Startup", "Business Plan", "MVP"],
      year: "2023",
      category: "Startup",
      files: [
        { name: "Paper", url: "/files/INFOSELLER_PAPER.pdf" },
        { name: "Presentation", url: "/files/INFOSELLER_PRESENTATION.pdf" }
      ]
    },
    {
      title: "Food Marketing Strategy",
      description: "Strategic marketing portfolio and project presentation.",
      tags: ["Marketing", "Strategy", "PPT"],
      year: "2025",
      category: "Business",
      files: [
        { name: "Strategy Presentation", url: "/files/FOOD_MARKETING_STRATEGY.pdf" }
      ]
    },
    {
      title: "KT&G Start-up Contest",
      description: "Fitting Room (platform service business).",
      tags: ["Startup", "Business", "Platform"],
      year: "2023",
      category: "Startup",
      files: [
        { name: "Contest Paper", url: "/files/KT&G_STARTUP_CONTEST_PAPER.pdf" },
        { name: "Presentation", url: "/files/KT&G_STARTUP_CONTEST_PRESENTATION.pdf" }
      ]
    }
  ];

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
              className="relative aspect-[3/4] md:aspect-square bg-secondary rounded-sm overflow-hidden w-[90%] mx-auto"
            >
              <Image
                src="/profile.png"
                alt="Seung Hun, Lee"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                  Seung Hun, Lee
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Food & Resource Economics / Climate Change
                </p>
              </div>

              <div className="space-y-6 text-xl leading-relaxed max-w-2xl text-foreground/80">
                <p>
                  I'm a senior student passionate about <span className="text-foreground font-medium">environmental economics</span> and <span className="text-foreground font-medium">entrepreneurship</span>.
                </p>
                <div className="pt-4">
                  <h3 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">Abroad Experience</h3>
                  <div className="grid grid-cols-2 gap-4 text-base">
                    <div>
                      <h4 className="font-bold mb-1">Indonesia</h4>
                      <p className="text-muted-foreground">(2002-2020)</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Korea</h4>
                      <p className="text-muted-foreground">(2021- present)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">Contact</h3>
                <div className="flex gap-6 items-center text-base">
                  <Link href="#contact" className="p-2.5 bg-secondary rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors">
                    <Phone size={18} />
                  </Link>
                  <a href="https://www.instagram.com/raphaelseunghunlee/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">Languages</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-base">
                  <span className="font-medium">Korean (Native)</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="font-medium">English (Fluent)</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="font-medium">Indonesian (Intermediate)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section >

        {/* Projects Section */}
        < section id="projects" className="py-24 border-t border-border" >
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
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section >

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

        {/* Experience Section */}
        < section id="experience" className="py-24 border-t border-border" >
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
                      <p className="text-muted-foreground text-sm">Food & Resource Economics</p>
                      <p className="text-muted-foreground text-sm">Minor in Climate Change</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Internship</h3>
                    <div>
                      <p className="font-medium">PT. Tekniko (2020)</p>
                      <p className="text-muted-foreground text-sm">Indonesia</p>
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-sm mt-2 border border-border/50">
                      <Image
                        src="/internship.jpg"
                        alt="Internship at PT. Tekniko"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>



                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Certificates</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm font-mono list-disc list-inside marker:text-foreground/50">
                      <li>TOEFL</li>
                      <li>OPIc</li>
                      <li>TIBA (Indonesian as a Foreign Language Test)</li>
                      <li>FRESC: LEAP (Research paper contest)</li>
                      <li>START-UP CONTEST: INFOSELLER</li>
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
                  description: "Deepened understanding in economics and started climate change major."
                },
                {
                  year: "2023 - 2024",
                  title: "Sophomore Year",
                  company: "Korea University",
                  description: "Returned to academic life. Completed multiple projects."
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
                  description: "Entered university."
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
        </section >

        {/* Extracurricular Section */}
        < section id="extracurricular" className="py-24 border-t border-border" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Extracurricular</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Clubs</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                    <h3 className="text-xl font-bold mb-1">Korea Univ. Judo Team</h3>
                    <p className="text-muted-foreground">Active Member</p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                    <h3 className="text-xl font-bold mb-1">Korea Univ. MMA Team</h3>
                    <p className="text-muted-foreground">Active Member</p>
                  </div>

                  {/* Extracurricular Photo Collage */}
                  <div className="relative h-[400px] w-full mt-6 rounded-sm overflow-hidden">
                    {/* Wrestling Group - Top Left */}
                    <div className="absolute top-0 left-0 w-[55%] h-[50%] z-10 transition-transform duration-300 hover:z-50 hover:scale-105 border-2 border-background shadow-lg rounded-sm overflow-hidden">
                      <Image
                        src="/wrestling_group.jpg"
                        alt="Wrestling Team"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Canaan Farmers - Top Right */}
                    <div className="absolute top-[5%] right-0 w-[50%] h-[40%] z-20 transition-transform duration-300 hover:z-50 hover:scale-105 border-2 border-background shadow-lg rounded-sm overflow-hidden">
                      <Image
                        src="/canaan_farmers.jpg"
                        alt="Canaan Farmers"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Judo Practice - Center Left */}
                    <div className="absolute top-[45%] left-[-5%] w-[45%] h-[45%] z-30 transition-transform duration-300 hover:z-50 hover:scale-105 border-2 border-background shadow-lg rounded-sm overflow-hidden">
                      <Image
                        src="/judo_practice.jpg"
                        alt="Judo Practice"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Animalmate Cage - Bottom Right Center */}
                    <div className="absolute bottom-0 right-[25%] w-[40%] h-[45%] z-20 transition-transform duration-300 hover:z-50 hover:scale-105 border-2 border-background shadow-lg rounded-sm overflow-hidden">
                      <Image
                        src="/animalmate_cage.jpg"
                        alt="Animal Shelter"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Animalmate Walk - Bottom Right */}
                    <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[40%] z-10 transition-transform duration-300 hover:z-50 hover:scale-105 border-2 border-background shadow-lg rounded-sm overflow-hidden">
                      <Image
                        src="/animalmate_walk.jpg"
                        alt="Walking Dog"
                        fill
                        className="object-cover"
                      />
                    </div>
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
                  <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                    <h3 className="text-xl font-bold mb-1">National Institute for International Education (NIIED)</h3>
                    <p className="text-muted-foreground">Volunteer</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Assisted participants and supported Korean university briefings at the 2018 Study in Korea Fair in Indonesia.</p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors">
                    <h3 className="text-xl font-bold mb-1">KOWIN Indonesia Korean School</h3>
                    <p className="text-muted-foreground">Assistant Teacher</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Served as an Assistant Teacher, supporting Korean language education for the local Korean community.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Hobbies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tech & Coding Card */}
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors space-y-4 relative group">
                  <Code className="absolute top-6 right-6 h-6 w-6 text-muted-foreground/20 group-hover:text-foreground/40 transition-colors" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Tech & Coding</h3>
                      <a
                        href="https://github.com/musudang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                      >
                        <span className="text-sm font-medium group-hover:underline">GitHub</span>
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      A self-taught developer specializing in AI-augmented rapid prototyping. I bridge the gap between abstract ideas and functional digital products, leveraging modern AI toolchains to build scalable solutions for the startup ecosystem.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Antigravity", "C++", "TypeScript", "Docker", "Tailwind CSS", "Flutter", "Dart", "React", "Python", "Java", "Git", "Vercel"].map(tool => (
                      <span key={tool} className="px-2.5 py-1 bg-secondary text-xs font-medium rounded-sm border border-border/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Lifestyle Card */}
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors flex flex-col justify-center relative group">
                  <Dumbbell className="absolute top-6 right-6 h-6 w-6 text-muted-foreground/20 group-hover:text-foreground/40 transition-colors" />
                  <h3 className="text-xl font-bold mb-2">Active Lifestyle</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    I find strength in the balance of a disciplined routine and the thrill of new challenges. Driven by a passion for sports and a diligent mindset, I stay consistent while always seeking growth. Every new endeavor is a chance to evolve, powered by stable habits and the courage to try something new.
                  </p>
                </div>

                {/* Animal Lover Card */}
                <div className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors flex flex-col justify-center relative group">
                  <Dog className="absolute top-6 right-6 h-6 w-6 text-muted-foreground/20 group-hover:text-foreground/40 transition-colors" />
                  <h3 className="text-xl font-bold mb-2">Animal Lover</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Passionate about animal welfare.
                  </p>
                </div>

                {/* Music Enthusiast Card */}
                <MusicCard />
              </div>
            </div>
          </motion.div>
        </section >

        {/* Contact Footer */}
        <section id="contact" className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Let's Talk.
              </h2>
              <div className="flex flex-col gap-6 text-lg">
                <p className="text-muted-foreground max-w-md">
                  Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>

                <div className="space-y-4 mt-4">
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

                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com/musudang" target="_blank" className="p-4 rounded-full bg-secondary hover:bg-foreground hover:text-background transition-all duration-300">
                    <Github size={20} />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="p-4 rounded-full bg-secondary hover:bg-foreground hover:text-background transition-all duration-300">
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 p-8 rounded-2xl border border-border/50">
              <ContactForm />
            </div>
          </div>

          <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono uppercase tracking-wider">
            <span>© 2026 Musudang. All rights reserved.</span>
            <span>Design by Antigravity</span>
          </div>
        </section>

      </main >
    </div >
  );
}

function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Default YouTube ID (Lofi Girl) - can be replaced with user's link
  const videoId = "wQWCIggOhZE";

  return (
    <>
      <div
        onClick={() => setIsPlaying(true)}
        className="p-6 bg-card border border-border rounded-sm hover:border-foreground/20 transition-all cursor-pointer flex flex-col justify-center relative group"
      >
        <Music className="absolute top-6 right-6 h-6 w-6 text-muted-foreground/20 group-hover:text-foreground/40 transition-colors" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
          <Play className="h-12 w-12 text-foreground opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100" />
        </div>

        <h3 className="text-xl font-bold mb-2">Music Enthusiast</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Appreciation for music. Click to play.
        </p>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setIsPlaying(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:musudang@korea.ac.kr?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            required
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all placeholder:text-muted-foreground/50"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            required
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all placeholder:text-muted-foreground/50"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
        <textarea
          id="message"
          placeholder="How can I help you?"
          required
          rows={6}
          className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all resize-none placeholder:text-muted-foreground/50"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-foreground text-background font-medium py-3 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        Send Message <Mail className="h-4 w-4" />
      </button>
    </form>
  );
}


function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-7xl max-h-[95vh] bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-border bg-card/50">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded-sm text-muted-foreground uppercase tracking-wider">
                {project.category || "Project"}
              </span>
              {project.year && <span className="text-xs text-muted-foreground font-mono">{project.year}</span>}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold border-b border-border pb-2">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold border-b border-border pb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-sm border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="pt-4 space-y-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-medium py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Visit Project <ArrowUpRight size={16} />
                </a>
                {project.customLinks && project.customLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-secondary text-foreground font-medium py-3 rounded-md hover:opacity-90 transition-opacity border border-border"
                  >
                    {link.name} <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            )}

            {/* Files List */}
            {project.files && project.files.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-lg font-bold">Project Files</h3>
                <div className="space-y-2">
                  {project.files.map((file, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFile(file.url)}
                      className={`w-full flex items-center gap-3 p-3 rounded-md border text-left transition-all ${selectedFile === file.url ? "bg-secondary border-foreground" : "bg-card border-border hover:border-foreground/50"}`}
                    >
                      <div className="p-2 bg-background rounded-sm border border-border">
                        <FileText size={20} className="text-blue-500" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="font-medium text-sm truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">Click to view</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2 bg-secondary/30 rounded-lg border border-border overflow-hidden min-h-[600px] flex flex-col">
            {selectedFile ? (
              <iframe
                src={selectedFile}
                className="w-full h-full min-h-[70vh]"
                title="File Preview"
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8">
                <FileText size={48} className="mb-4 opacity-20" />
                <p>Select a file to preview</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
