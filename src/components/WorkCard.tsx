import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface WorkCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project, onSelect }) => {
  return (
    <article
      id={`work-card-${project.id}`}
      onClick={() => onSelect && onSelect(project)}
      className="group flex flex-col bg-white border border-[#e0e0e0] hover:border-[#999999] rounded-[8px] overflow-hidden transition-all duration-150 cursor-pointer"
    >
      {/* Top Metadata Strip */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e0e0e0] bg-[#fafafa]">
        <span className="font-mono text-[14px] text-[#555555] uppercase tracking-[0.08em]">
          {project.type}
        </span>
        <span className="font-mono text-[14px] text-[#101010] font-medium uppercase tracking-[0.08em]">
          {project.title}
        </span>
      </div>

      {/* Mockup Preview Area */}
      <div className="relative aspect-[16/10] bg-[#f9f9f9] p-4 flex items-center justify-center overflow-hidden border-b border-[#e0e0e0]">
        <div className="w-full h-full bg-white rounded-md border border-[#e0e0e0] overflow-hidden shadow-xs group-hover:scale-[1.01] transition-transform duration-200 flex flex-col">
          {/* Mini browser top chrome */}
          <div className="h-5 bg-[#f0f0f0] border-b border-[#e0e0e0] flex items-center px-2 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d0d0d0]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d0d0d0]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d0d0d0]" />
            <div className="ml-2 w-24 h-2 rounded-xs bg-[#e4e4e4]" />
          </div>
          {/* Mockup Image */}
          <div className="relative flex-1 w-full bg-white overflow-hidden">
            <img
              src={project.previewImage}
              alt={project.subtitle || project.title}
              className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              onError={(e) => {
                // Graceful fallback if local image is not yet uploaded in /public
                const fallbackUrl = project.id === 'telemedicina'
                  ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'
                  : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80';
                if (e.currentTarget.src !== fallbackUrl) {
                  e.currentTarget.src = fallbackUrl;
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Action Strip */}
      <div className="flex items-center justify-between px-4 py-3 bg-white group-hover:bg-[#fafafa] transition-colors">
        <span className="font-mono text-[14px] text-[#101010] uppercase tracking-[0.08em] font-normal">
          VIEW MORE DETAILS
        </span>
        <ArrowRight className="w-4 h-4 text-[#101010] transform group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};
