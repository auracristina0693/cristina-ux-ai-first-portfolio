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
      className="group flex flex-col gap-5 p-4 bg-white border border-[#e0e0e0] hover:border-[#6163C8] rounded-[14px] shadow-[0_1px_2px_rgba(16,16,16,0.04),0_8px_24px_rgba(16,16,16,0.05)] transition-colors duration-150 cursor-pointer"
    >
      {/* Preview */}
      <div className="aspect-[16/10] bg-[#f4f4f4] border border-[#e0e0e0] rounded-[10px] overflow-hidden">
        <img
          src={project.previewImage}
          alt={project.subtitle || project.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
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

      {/* Content */}
      <div className="flex flex-col gap-3 px-1">
        <span className="self-start px-3 py-1 rounded-full bg-[#f4f4f4] border border-[#e0e0e0] text-[13px] text-[#555555]">
          {project.type}
        </span>
        <h3 className="text-[24px] leading-tight text-[#101010] tracking-[0.01em]">{project.title}</h3>
        <p className="text-[15px] leading-relaxed text-[#555555]">{project.description}</p>
      </div>

      {/* Action */}
      <div className="mt-auto flex items-center justify-end gap-2 px-1 pt-4 border-t border-[#e0e0e0] text-[15px] text-[#6163C8]">
        <span>VIEW MORE DETAILS</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};
