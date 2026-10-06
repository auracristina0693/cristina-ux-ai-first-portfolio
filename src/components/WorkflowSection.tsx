import React from 'react';
import { workflowSteps } from '../data/portfolioData';

const stepDescriptions = [
  'Stitch and Figma turn a prompt into screens and a design system.',
  "Claude Code's artifacts turn those screens into a working prototype.",
  'Git and deploy take the prototype live as a real product.',
];

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

        {/* Workflow Steps — catalog cards */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left mb-14">
          {workflowSteps.map((step, index) => {
            const id = String(step.stepNumber).padStart(2, '0');
            return (
              <li
                key={step.stepNumber}
                id={`workflow-step-${step.stepNumber}`}
                className="flex flex-col bg-white border border-[#e0e0e0] rounded-[8px] hover:border-[#999999] transition-colors overflow-hidden"
              >
                <div className="flex flex-col justify-between gap-10 p-6 min-h-[200px] flex-1">
                  <span className="font-mono text-[54px] leading-none tracking-[0.025em] text-[#101010]">
                    {id}
                  </span>
                  <p className="font-mono text-[14px] text-[#555555] leading-relaxed">
                    {stepDescriptions[index]}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 px-3 py-2.5 border-t border-[#e0e0e0]">
                  <span className="font-mono text-[11px] text-[#555555] uppercase tracking-[0.08em]">
                    W {id}
                  </span>
                  <span className="font-mono text-[12px] text-[#555555] uppercase tracking-[0.08em] text-right">
                    {step.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Live Rebuild Status Badge */}
        <div>
          <span className="font-mono text-[14px] text-[#888888] tracking-[0.04em] block leading-relaxed">
            This portfolio itself was designed and built using this exact workflow —<br />
            from Figma to finished page.
          </span>
        </div>
      </div>
    </section>
  );
};
