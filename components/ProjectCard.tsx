import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, MapPin, CheckCircle, ArrowRight, Code2, Layout, Smartphone, Cpu, Globe } from 'lucide-react';
import { PROFILE } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate a catalog-style code based on ID if not present in data
  const projectCode = `PROJ-${new Date().getFullYear().toString().slice(-2)}-${project.id.toUpperCase()}`;

  // Determine domain based on project type
  const getDomain = (type: string) => {
    switch (type) {
      case 'Mobile': return 'Mobile Development';
      case 'Web': return 'Web Technology';
      case 'IoT': return 'IoT & Embedded';
      case 'AI': return 'Artificial Intelligence';
      default: return 'Software Engineering';
    }
  };

  // Determine icon based on type
  const getIcon = (type: string) => {
    switch (type) {
      case 'Mobile': return <Smartphone size={18} />;
      case 'Web': return <Globe size={18} />;
      case 'IoT': return <Cpu size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isMounted) return null;

  return (
    <>
      {/* Card Component */}
      <div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">

        {/* Top Badges */}
        <div className="flex justify-between items-start mb-6">
          <div className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg uppercase tracking-wider flex items-center gap-2">
            {getIcon(project.type)}
            {getDomain(project.type)}
          </div>
          <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">
            {project.type}
          </span>
        </div>

        {/* Title & Code */}
        <div className="mb-4">
          <h4 className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2 tracking-wide uppercase">
            {projectCode}
          </h4>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Location Indicator */}
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6 font-medium">
          <MapPin size={16} className="text-slate-400" />
          <span>On Site / Remote</span>
        </div>

        {/* Description Snippet */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50 dark:border-slate-800/50">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Details
          </button>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-full shadow-lg shadow-emerald-500/20 transition-all text-center hover:scale-[1.02] active:scale-[0.98]"
            >
              Demo
            </a>
          )}

          <a
            href={project.githubUrl || PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 px-6 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center hover:scale-[1.02] active:scale-[0.98]"
          >
            Code
          </a>
        </div>
      </div>

      {/* Modal Portal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">

            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-0 flex-shrink-0">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  {getDomain(project.type)}
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  {project.type}
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 -mr-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2 tracking-tight">{projectCode}</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm sm:text-base">{PROFILE.name} • Portfolio Project</p>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 pt-6 overflow-y-auto custom-scrollbar flex-grow">

              {/* Objectives / Overview Box */}
              <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Project Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Category</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{project.type} Project</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</span>
                    <span className="font-semibold text-slate-900 dark:text-white">On Site / Remote</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Scope Section */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Scope</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Design, development, and deployment of the {project.title.toLowerCase()}.
                    Includes requirement analysis, UI/UX implementation, and backend integration where applicable.
                  </p>
                </div>

                {/* Technologies Section */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-lg">
                    <Layout size={20} className="text-blue-500" />
                    Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 sm:p-8 pt-0 bg-white dark:bg-slate-900 flex-shrink-0">
              <div className="flex gap-4">
                <a
                  href={project.githubUrl || PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-center transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  View Source Code
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 rounded-xl font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;