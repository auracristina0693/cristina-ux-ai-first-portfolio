import React from 'react';
import { workflowSteps } from '../data/portfolioData';

const stepDescriptions = [
  'Stitch and Figma turn a prompt into screens and a design system.',
  "Claude Code's artifacts turn those screens into a working prototype.",
  'Git and deploy take the prototype live as a real product.',
];

const stepIcons = [
  '/illustrations/workflow-01.svg',
  '/illustrations/workflow-02.svg',
  '/illustrations/workflow-03.svg',
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
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-14">
          {workflowSteps.map((step, index) => {
            const id = String(step.stepNumber).padStart(2, '0');
            return (
              <li
                key={step.stepNumber}
                id={`workflow-step-${step.stepNumber}`}
                className="flex flex-col gap-5 p-4 bg-white border border-[#e0e0e0] hover:border-[#6163C8] rounded-[14px] shadow-[0_1px_2px_rgba(16,16,16,0.04),0_8px_24px_rgba(16,16,16,0.05)] transition-colors duration-150"
              >
                <div className="relative aspect-[16/10] bg-[#f4f4f4] border border-[#e0e0e0] rounded-[10px] overflow-hidden flex items-center justify-center">
                  <span className="title-mono font-mono absolute left-4 top-3 text-[40px] leading-none text-[#101010]">
                    {id}
                  </span>
                  <img src={stepIcons[index]} alt="" aria-hidden="true" className="w-[120px] h-[120px] shrink-0" />
                </div>
                <div className="flex flex-col gap-3 px-1 pb-1">
                  <span className="self-start px-3 py-1 rounded-full bg-[#f4f4f4] border border-[#e0e0e0] text-[13px] text-[#555555]">
                    W {id}
                  </span>
                  <h3 className="text-[24px] leading-tight text-[#101010] tracking-[0.01em]">{step.label}</h3>
                  <p className="text-[15px] leading-relaxed text-[#555555]">{stepDescriptions[index]}</p>
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
