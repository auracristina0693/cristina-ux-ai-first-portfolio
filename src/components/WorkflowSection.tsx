import React from 'react';
import { workflowSteps, portfolioProfile } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="ai-workflow" className="w-full py-16 border-y border-[#e0e0e0] bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Eyebrow */}
        <span className="font-mono text-[14px] text-[#888888] uppercase tracking-[0.18em] block mb-3">
          AI-FIRST WORKFLOW
        </span>

        {/* Section Headline */}
        <h2 className="font-mono text-[18px] sm:text-[20px] text-[#101010] font-normal leading-relaxed max-w-3xl mx-auto mb-10">
          I design with an AI-first workflow — from research to functional prototype
        </h2>

        {/* Workflow Steps Horizontal Pipeline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.stepNumber}>
              <div 
                id={`workflow-step-${step.stepNumber}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#e0e0e0] rounded-[6px] shadow-2xs flex items-center justify-center gap-2 hover:border-[#999999] transition-colors"
              >
                <span className="font-mono text-[14px] text-[#101010] uppercase tracking-[0.08em]">
                  {step.stepNumber} · {step.label}
                </span>
              </div>
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="hidden sm:block w-4 h-4 text-[#888888] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Live Rebuild Status Badge */}
        <div className="mb-6">
          <span className="font-mono text-[14px] text-[#888888] tracking-[0.04em] block leading-relaxed">
            This portfolio itself was designed and built using this exact workflow —<br />
            from Figma to finished page.
          </span>
        </div>

        {/* Workflow Tools Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {portfolioProfile.workflowTools.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 bg-white border border-[#e0e0e0] text-[#555555] font-mono text-[14px] uppercase tracking-[0.08em] rounded-[4px]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
