import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Mail,
  Globe,
  Layout,
  ChevronUp,
  CheckCircle2,
  Cpu,
  Send,
  Loader2,
  Phone,
  Briefcase,
  Terminal,
  Gamepad2,
  Users,
  ShieldCheck,
  ClipboardList,
  Heart,
} from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mqakpnvl", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const skills = {
    Frontend: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
    Backend: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 70 },
      { name: "JWT Auth", level: 50 },
    ],
    Database: [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 50 },
    ],
    Core: [
      { name: "DSA", level: 60 },
      { name: "Git & GitHub", level: 80 },
      { name: "WordPress", level: 85 },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "HireHub - Job Portal",
      category: "MERN",
      stack: ["React", "Node", "Express", "MongoDB", "Firebase"],
      description:
        "Role-based job portal with secure authentication, job filtering, and application tracking.",
      github: "https://github.com/Tarundhote/job_portal",
      live: "#",
      icon: <Users size={24} />,
    },
    {
      id: 2,
      title: "Hospital Management",
      category: "FullStack",
      stack: ["React", "Node", "Express", "MongoDB"],
      description:
        "End-to-end management system for hospital appointments, doctors, and patient records.",
      github: "https://github.com/Tarundhote/hospital-management-system",
      live: "#",
      icon: <ShieldCheck size={24} />,
    },
    {
      id: 3,
      title: "Task Manager",
      category: "Utility",
      stack: ["JavaScript", "Local Storage", "Tailwind"],
      description:
        "Student-focused productivity tool for tracking tasks and deadlines with persistent data.",
      github: "https://github.com/Tarundhote/student-task-manager",
      live: "#",
      icon: <ClipboardList size={24} />,
    },
    {
      id: 4,
      title: "Factory Pro",
      category: "Frontend",
      stack: ["HTML", "CSS", "JS", "Bootstrap"],
      description:
        "Responsive industrial business website with optimized layout and modern UI components.",
      github: "#",
      live: "https://factory-pro-gold.vercel.app/index.html",
      icon: <Layout size={24} />,
    },
    {
      id: 5,
      title: "Contact Manager",
      category: "FullStack",
      stack: ["React", "Context API", "JSON Server"],
      description:
        "A secure CMS to store, edit, and manage professional contacts efficiently.",
      github: "https://github.com/Tarundhote/contact-management-system",
      live: "#",
      icon: <Users size={24} />,
    },
    {
      id: 6,
      title: "SBSS Platform",
      category: "Frontend",
      stack: ["React", "Vite", "Tailwind"],
      description:
        "A custom platform built for specialized service management and user interaction.",
      github: "https://github.com/Tarundhote/sbss",
      live: "#",
      icon: <Globe size={24} />,
    },
    {
      id: 7,
      title: "NGO Help Us",
      category: "Social",
      stack: ["HTML", "CSS", "JS"],
      description:
        "Landing page for a non-profit organization focused on community support and donations.",
      github: "https://github.com/Tarundhote/ngohelpus",
      live: "#",
      icon: <Heart size={24} />,
    },
    {
      id: 8,
      title: "Safe Tour",
      category: "Utility",
      stack: ["React", "APIs", "Maps"],
      description:
        "Travel safety companion application for planning and tracking safe routes.",
      github: "https://github.com/Tarundhote/Safe-tour",
      live: "#",
      icon: <ShieldCheck size={24} />,
    },
    {
      id: 9,
      title: "Tic Tac Toe Game",
      category: "Games",
      stack: ["React", "State Management"],
      description:
        "Classic Tic Tac Toe with local multiplayer and win-tracking logic.",
      github: "https://github.com/Tarundhote/tic-tac-toe",
      live: "#",
      icon: <Gamepad2 size={24} />,
    },
    {
      id: 10,
      title: "Dream Website",
      category: "WordPress",
      stack: ["WordPress", "Elementor", "PHP"],
      description:
        "Client-based project featuring custom design and layout structure during internship.",
      github: "#",
      live: "https://wp.cloud1.me/dream/",
      icon: <Layout size={24} />,
    },
  ];

  const categories = [
    "All",
    "MERN",
    "FullStack",
    "Frontend",
    "Utility",
    "Games",
    "WordPress",
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] font-['Poppins'] selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-[#0F172A]/80 backdrop-blur-xl border-white/5">
        <div className="max-w-[1260px] w-full mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
              T
            </div>
            <span className="text-xl font-bold tracking-tight">TarunDev</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-blue-500 transition-colors uppercase tracking-widest opacity-70 hover:opacity-100"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* 0. HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen flex items-center pt-28 px-6 overflow-hidden relative"
      >
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full"></div>

        <div className="max-w-[1260px] w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for Hire
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                Tarun{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
                  Dhote
                </span>
              </h1>
              <h2 className="text-2xl font-medium opacity-70">
                Frontend-Focused MERN Developer
              </h2>
              <p className="text-lg opacity-60 max-w-xl leading-relaxed">
                Building responsive, user-friendly, and modern web experiences.
                Specializing in high-performance React applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20"
              >
                View Projects <ExternalLink size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-2 mb-6 opacity-40">
                <Terminal size={18} />{" "}
                <span className="text-xs font-mono">portfolio_status.js</span>
              </div>
              <div className="space-y-4 font-mono text-sm lg:text-base">
                <p>
                  <span className="text-pink-500">const</span>{" "}
                  <span className="text-blue-400">tarun</span> ={" "}
                  <span className="text-yellow-400">{"{"}</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-emerald-400">"MERN Developer"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-blue-400">graduation</span>:{" "}
                  <span className="text-emerald-400">"2026"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-blue-400">skills</span>: [
                  <span className="text-emerald-400">"React"</span>,{" "}
                  <span className="text-emerald-400">"Node"</span>,{" "}
                  <span className="text-emerald-400">"DSA"</span>],
                </p>
                <p className="pl-6">
                  <span className="text-blue-400">experience</span>:{" "}
                  <span className="text-emerald-400">"Frontend Intern"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-blue-400">hiring_status</span>:{" "}
                  <span className="text-blue-500">true</span>
                </p>
                <p>
                  <span className="text-yellow-400">{"}"}</span>;
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-bounce">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. ABOUT SECTION */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-[1260px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest">
                01. Introduction
              </div>
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="text-lg opacity-60 leading-relaxed">
                I am a final-year B.Tech student at{" "}
                <span className="text-blue-500 font-bold">
                  Sushila Devi Bansal College of Technology, Indore
                </span>
                . With a CGPA of 7.09, I specialize in building user-centric,
                high-performance web applications.
              </p>
              <p className="text-lg opacity-60 leading-relaxed">
                My passion lies in bridging the gap between design and
                technology. I am constantly exploring new frameworks and
                optimizing code for better scalability and user experience.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-2xl font-bold text-blue-500">2026</div>
                  <p className="text-[10px] uppercase opacity-40 font-bold">
                    Graduation
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-2xl font-bold text-green-500">10+</div>
                  <p className="text-[10px] uppercase opacity-40 font-bold">
                    Projects
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-2xl font-bold text-purple-500">7.09</div>
                  <p className="text-[10px] uppercase opacity-40 font-bold">
                    CGPA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-blue-500/5 transition-all">
                <Briefcase className="text-blue-500 mb-4" />
                <h3 className="text-lg font-bold">Frontend Intern</h3>
                <p className="text-sm opacity-50 mt-2">
                  Currently gaining professional experience at Cloud1 Web
                  Solution.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-green-500/5 transition-all">
                <Cpu className="text-green-500 mb-4" />
                <h3 className="text-lg font-bold">DSA Enthusiast</h3>
                <p className="text-sm opacity-50 mt-2">
                  Solving complex algorithmic problems with optimized logic in
                  C++.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 bg-black/10">
        <div className="max-w-[1260px] w-full mx-auto">
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
              02. Career
            </div>
            <h2 className="text-4xl font-bold">Professional Experience</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-white/5">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-[#0F172A] shadow-lg shadow-blue-500/20"></div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl max-w-4xl hover:border-blue-500/30 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-500">
                      Frontend Developer Intern
                    </h3>
                    <p className="text-lg font-medium opacity-80 mt-1">
                      Cloud1 Web Solution, Indore
                    </p>
                  </div>
                  <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-500">
                    Feb 2026 – Present
                  </span>
                </div>
                <ul className="space-y-4 opacity-60 text-base">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1.5">▹</span>
                    Developing and maintaining responsive web pages using HTML,
                    CSS, and JavaScript.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1.5">▹</span>
                    Customizing WordPress themes to align with client branding
                    and specific project requirements.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1.5">▹</span>
                    Optimizing site performance and cross-browser compatibility
                    to enhance overall user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-[1260px] w-full mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
                03. Portfolio
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">My Recent Work</h2>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/5 rounded-[2rem] border border-white/5 max-w-fit">
                {categories.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "hover:bg-white/5 opacity-50 hover:opacity-100"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-8 rounded-[40px] bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col h-full hover:bg-white/[0.07]"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-blue-500 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-blue-500 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] px-2 py-1 rounded-md bg-white/5 border border-white/5 opacity-60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="opacity-50 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-32 px-6 bg-black/10">
        <div className="max-w-[1260px] w-full mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
              04. Arsenal
            </div>
            <h2 className="text-4xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-8">
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-500"></div> {category}
                </h3>
                <div className="space-y-6">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="opacity-40 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-[1260px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                  05. Connection
                </div>
                <h2 className="text-4xl font-bold">Let's Build Something</h2>
                <p className="opacity-50 text-lg leading-relaxed max-w-md">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-30 uppercase tracking-widest mb-1">
                      Send an Email
                    </p>
                    <a
                      href="mailto:tarundhote05@gmail.com"
                      className="text-xl font-bold hover:text-blue-500 transition-colors"
                    >
                      tarundhote05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-green-500/10 rounded-3xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-30 uppercase tracking-widest mb-1">
                      Call Me
                    </p>
                    <a
                      href="tel:+917898921512"
                      className="text-xl font-bold hover:text-green-500 transition-colors"
                    >
                      +91 7898921512
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <a
                  href="https://linkedin.com/in/tarun-dhote"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500 transition-all"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Tarundhote"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500 transition-all"
                >
                  <Github />
                </a>
              </div>
            </div>

            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all"
                    placeholder="Tarun Dhote"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all"
                    placeholder="abc01@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50"
                >
                  {formStatus === "sending" ? (
                    <Loader2 className="animate-spin" />
                  ) : formStatus === "success" ? (
                    <>
                      Message Sent! <CheckCircle2 />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-[1260px] w-full mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-8 opacity-40">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xs">
              T
            </div>
            <span className="text-lg font-bold tracking-tighter">TarunDev</span>
          </div>
          <p className="text-xs opacity-30 font-medium tracking-widest uppercase">
            Designed & Developed with Passion by Tarun Dhote • © 2026
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 bg-white text-black p-4 rounded-full shadow-2xl z-50 hover:scale-110 active:scale-90 transition-all"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        body { background-color: #0F172A; }
        
        /* Smooth Fade In */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        section {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default App;
