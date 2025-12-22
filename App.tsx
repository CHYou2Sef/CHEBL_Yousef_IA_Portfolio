import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import CertificationsSection from './components/CertificationsSection';
import ParticleBackground from './components/ParticleBackground';
import { PROFILE, EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from './constants';
import { MapPin, Mail, Download, ChevronRight, Calendar, Award, Terminal, Cpu, Globe, Search } from 'lucide-react';

const getSkillLogo = (skillName: string): string | null => {
  const iconMap: Record<string, string> = {
    "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "Android (Java)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    "Oracle 10g": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    "Arduino UNO": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    "Raspberry PI 5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Linux (Ubuntu, Kali, RedHat)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "ESP32": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Espressif_Logo.svg",
    "ESP8266": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Espressif_Logo.svg"
  };

  if (iconMap[skillName]) return iconMap[skillName];

  // Partial matching for complex strings like "Linux (Ubuntu...)"
  if (skillName.includes("Linux")) return iconMap["Linux (Ubuntu, Kali, RedHat)"];
  if (skillName.includes("ESP32") || skillName.includes("ESP8266")) return iconMap["ESP32"];

  return null;
};

function App() {
  const [projectSearch, setProjectSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from projects
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.type)))];

  // Filter logic
  const filteredProjects = PROJECTS.filter(project => {
    const searchLower = projectSearch.toLowerCase();
    const matchesSearch = (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
    const matchesCategory = activeCategory === 'All' || project.type === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-blue-500/30 font-sans transition-colors duration-300 relative">
      {/* Global Dust Animation */}
      <ParticleBackground />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10" />

        <div className="flex flex-col items-center text-center gap-12 relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
                Available for Internship
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                  {PROFILE.name}
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {PROFILE.title} specializing in <span className="text-slate-900 dark:text-slate-200 font-medium">AI, IoT, and Embedded Systems</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-none border border-slate-200 dark:border-transparent group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <MapPin size={20} />
                </div>
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-none border border-slate-200 dark:border-transparent group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400">{PROFILE.email}</a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="#contact" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 dark:shadow-blue-900/40 hover:-translate-y-0.5">
                Contact Me
              </a>
              <a
                href="/Youssef_CHEBL_PFE2026_EN.pdf"
                download="Youssef_CHEBL_PFE2026_EN.pdf"
                className="px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* Chat Interface - Centered below text with more prominence */}
          <div className="w-full max-w-2xl relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-10 dark:opacity-20 hover:opacity-20 dark:hover:opacity-30 transition duration-1000"></div>
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors duration-300 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit spanning from low-level embedded programming to modern web frameworks and deep learning architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((category) => (
              <div key={category.name} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-900/10 transition-all group backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all">
                    {category.name.includes('IoT') || category.name.includes('Hardware') ?
                      <Cpu className="text-blue-600 dark:text-blue-400" size={24} /> :
                      category.name.includes('Web') ?
                        <Globe className="text-blue-600 dark:text-blue-400" size={24} /> :
                        <Terminal className="text-blue-600 dark:text-blue-400" size={24} />
                    }
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const logoUrl = getSkillLogo(skill);
                    return (
                      <span key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                        {logoUrl && <img src={logoUrl} alt={skill} className="w-4 h-4 object-contain" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Added Here */}
      <div className="relative z-10">
        <CertificationsSection />
      </div>

      {/* Experience Section */}
      <section id="experience" className="py-24 scroll-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">My internships and professional experiences.</p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {EXPERIENCE.map((job, index) => (
              <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-blue-600/30 dark:shadow-blue-900/50 z-10">
                  <Award size={16} className="text-white" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-blue-400 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{job.role}</h3>
                    <span className="text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full whitespace-nowrap mt-2 sm:mt-0 w-fit border border-blue-200 dark:border-blue-900/30">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {job.company}
                    <span className="text-slate-400 dark:text-slate-600 mx-1">|</span>
                    <span className="text-slate-600 dark:text-slate-400 font-normal">{job.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-3 leading-relaxed">
                        <ChevronRight size={14} className="mt-1 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Education</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative overflow-hidden shadow-sm dark:shadow-none backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-3 opacity-5 dark:opacity-10 text-slate-900 dark:text-white">
                  <Calendar size={100} />
                </div>
                <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-500 relative z-10">
                  <Calendar size={20} />
                  <span className="text-sm font-mono font-semibold">{edu.period}</span>
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 min-h-[3.5rem] relative z-10">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-sm mb-2 relative z-10">{edu.institution}</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm relative z-10 flex items-center gap-2">
                  <MapPin size={12} /> {edu.location}
                </p>
                {edu.details && (
                  <div className="mt-6 text-sm text-blue-700 dark:text-blue-300/80 bg-blue-50 dark:bg-blue-900/10 p-3 rounded border border-blue-100 dark:border-blue-900/20 relative z-10">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 scroll-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">A selection of academic and personal projects.</p>
            </div>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all font-medium shadow-sm dark:shadow-none">
              <Globe size={18} />
              View GitHub
            </a>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">

            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-800 rounded-xl leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
                placeholder="Search projects by title, tech, or description..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Search className="text-slate-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* New Contact Section */}
      <div className="relative z-10">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-8 transition-colors duration-300 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Youssef Chebl. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href={PROFILE.links.linkedin} className="text-slate-500 hover:text-blue-600 dark:text-slate-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href={PROFILE.links.github} className="text-slate-500 hover:text-blue-600 dark:text-slate-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;