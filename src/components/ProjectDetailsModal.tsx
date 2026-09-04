import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight } from 'lucide-react';
import { PillButton } from './PillButton';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#e0e0e0] rounded-[8px] overflow-hidden shadow-2xl animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e0e0e0] bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white border border-[#e0e0e0] rounded text-[14px] font-mono uppercase text-[#555555]">
              {project.type}
            </span>
            <h3 className="font-mono text-[16px] font-medium text-[#101010] uppercase tracking-[0.06em]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555555] hover:text-[#101010] hover:bg-[#f0f0f0] rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Case Study Header */}
          <div>
            <span className="block font-mono text-[12px] text-[#888888] uppercase tracking-[0.14em] mb-1">
              CASE STUDY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#101010] mb-2 tracking-tight">
              {project.subtitle || project.title}
            </h2>
            {project.description && (
              <p className="font-sans text-[15px] text-[#444444] leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          {/* Badges strip if available */}
          {(project.client || project.methodology || project.role) && (
            <div className="flex flex-wrap items-center gap-2">
              {project.client && (
                <span className="px-2.5 py-1 bg-rose-50 border border-rose-200 text-rose-800 rounded-full font-mono text-[12px]">
                  Client: {project.client}
                </span>
              )}
              {project.methodology && (
                <span className="px-2.5 py-1 bg-[#f4f4f4] border border-[#e0e0e0] text-[#444444] rounded-full font-mono text-[12px]">
                  {project.methodology}
                </span>
              )}
              {project.role && (
                <span className="px-2.5 py-1 bg-[#f4f4f4] border border-[#e0e0e0] text-[#444444] rounded-full font-mono text-[12px]">
                  {project.role}
                </span>
              )}
            </div>
          )}

          {/* Main Visual */}
          <div className="w-full aspect-[16/9] rounded-[6px] border border-[#e0e0e0] overflow-hidden bg-[#f5f5f5]">
            <img
              src={project.previewImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const fallbackUrl = project.id === 'telemedicina'
                  ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'
                  : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80';
                if (e.currentTarget.src !== fallbackUrl) {
                  e.currentTarget.src = fallbackUrl;
                }
              }}
            />
          </div>

          {/* Details */}
          <div>
            <h4 className="font-mono text-[14px] text-[#888888] uppercase tracking-[0.14em] mb-2">
              OVERVIEW & USER FLOW
            </h4>
            <p className="font-mono text-[16px] text-[#101010] leading-relaxed mb-4">
              {project.overviewText || project.description || project.subtitle || `Detailed case study and user flow specifications for ${project.title}. Designed with an AI-first prototyping workflow.`}
            </p>
          </div>

          {/* Highlights */}
          <div className="pt-2 border-t border-[#f0f0f0]">
            <div className="p-4 bg-[#fafafa] border border-[#e0e0e0] rounded-[6px]">
              <span className="block font-mono text-[14px] text-[#888888] uppercase tracking-[0.08em] mb-1">
                {project.impactLabel || "IMPACT"}
              </span>
              <span className="font-mono text-[15px] text-[#101010] leading-relaxed">
                {project.impactValue || "Measurable outcome delivered for this project."}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e0e0e0] bg-[#fafafa]">
          <PillButton variant="ghost" onClick={onClose}>
            CLOSE
          </PillButton>
          <PillButton
            variant="primary"
            href={
              project.detailsUrl && project.detailsUrl.startsWith('http')
                ? project.detailsUrl
                : `mailto:auracristina0693@gmail.com?subject=Inquiry%20about%20${project.title}`
            }
            target={project.detailsUrl && project.detailsUrl.startsWith('http') ? "_blank" : undefined}
            rel={project.detailsUrl && project.detailsUrl.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            See more <ArrowUpRight className="inline w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>
    </div>
  );
};
