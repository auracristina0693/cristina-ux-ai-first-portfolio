/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PillButton } from './components/PillButton';
import { WorkCard } from './components/WorkCard';
import { ExperimentCard } from './components/ExperimentCard';
import { WorkflowSection } from './components/WorkflowSection';
import { toolLogos } from './components/ToolLogos';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { portfolioProfile, projects, experiments, marginaliaProject } from './data/portfolioData';
import { Clock, Globe, Box } from 'lucide-react';
import { Project, Experiment } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);

  const handleContactClick = () => {
    window.open('https://wa.me/573028400485', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-[#101010] flex flex-col selection:bg-[#101010] selection:text-white">
      {/* Navigation */}
      <Navbar onContactClick={handleContactClick} />

      <main className="flex-1 w-full">
        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                {/* Eyebrow */}
                <span
                  id="hero-title-badge"
                  className="inline-flex items-center gap-2 px-3 py-1 mb-5 bg-[#f4f4f4] border border-[#e0e0e0] rounded-full font-mono text-[12px] text-[#555555] uppercase tracking-[0.12em]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#101010]" />
                  {portfolioProfile.titleBadge}
                </span>

                {/* Display Title */}
                <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.03em] text-gradient leading-[1.05] uppercase mb-8">
                  CRISTINA<br />SALAZAR
                </h1>

                {/* Bio / Value Proposition */}
                <p className="font-mono text-[16px] text-[#101010] leading-relaxed max-w-2xl mb-8">
                  Senior Product Designer specializing in complex user flows
                  and data-driven decisions. My differentiator is an{' '}
                  <strong className="font-semibold text-black">
                    {portfolioProfile.bioHighlight}
                  </strong>{' '}
                  that accelerates the design cycle{' '}
                  <strong className="font-semibold text-black">
                    {portfolioProfile.timeframeHighlight}
                  </strong>
                </p>
              </div>

              {/* Action Button */}
              <div>
                <PillButton 
                  id="hero-explore-cta"
                  href="#selected-works"
                  variant="primary"
                >
                  EXPLORE CASE STUDIES
                </PillButton>
              </div>
            </div>

            {/* Right Hero Image / Avatar Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden flex items-end justify-center shadow-sm">
                <img
                  id="hero-portrait-image"
                  src={portfolioProfile.avatarUrl}
                  alt={portfolioProfile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Meta row */}
          <div id="hero-meta" className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-14 font-mono text-[14px] text-[#101010]">
            <span className="inline-flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#6163C8]" />{portfolioProfile.experienceBadge}</span>
            <span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-[#c8c8c8]" />
            <span className="inline-flex items-center gap-2.5"><Globe className="w-4 h-4 text-[#6163C8]" />{portfolioProfile.locationBadge}</span>
            <span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-[#c8c8c8]" />
            <span className="inline-flex items-center gap-2.5"><Box className="w-4 h-4 text-[#6163C8]" />{portfolioProfile.focusBadge}</span>
          </div>
        </section>

        {/* ================= TOOLS STRIP ================= */}
        <section id="tools-strip" className="w-full border-y border-[#e0e0e0] py-4 bg-[#fafafa] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-8">
              <span className="shrink-0 font-mono text-[14px] uppercase tracking-[0.14em] text-[#101010] font-medium">
                TOOLS :
              </span>
              <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div
                  className="flex w-max items-center animate-marquee font-mono text-[14px] uppercase tracking-[0.14em]"
                  style={{ animationDuration: '40s' }}
                >
                  {/* Dos grupos idénticos: al mover -50% el loop es continuo y nunca queda hueco */}
                  {[0, 1].map((group) => (
                    <div key={group} className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={group === 1}>
                      {Array.from({ length: 6 }).flatMap(() => toolLogos).map((logo, index) => (
                        <span
                          key={`${group}-${logo.name}-${index}`}
                          className="shrink-0 flex items-center text-[#555555] hover:text-[#101010] transition-colors"
                        >
                          {logo.node}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SELECTED WORKS ================= */}
        <section id="selected-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div id="header-selected-works" className="w-full pb-6 mb-10 border-b border-[#e0e0e0] flex flex-col items-center text-center gap-3">
            <img src="/illustrations/featured-works.svg" alt="" aria-hidden="true" className="shrink-0 w-[96px] sm:w-[150px] h-auto" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6163C8] leading-[1.1] tracking-[0.01em]">Featured Works</h2>
            <p className="text-[18px] leading-relaxed text-[#555555] max-w-xl">Three products I designed end to end: a telehealth portal, a fiduciary platform and an e-commerce store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <WorkCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </section>

        {/* ================= AI WORKFLOW SECTION ================= */}
        <WorkflowSection />

        {/* ================= AI EXPERIMENTS & MICRO-PROTOTYPES ================= */}
        <section id="ai-experiments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div id="header-ai-experiments" className="w-full pb-6 mb-12 border-b border-[#e0e0e0] flex flex-col items-center text-center gap-3">
            <img src="/illustrations/projects-built-with-ai.svg" alt="" aria-hidden="true" className="shrink-0 w-[96px] sm:w-[150px] h-auto" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6163C8] leading-[1.1] tracking-[0.01em] max-w-4xl [text-wrap:balance]">Projects Built with AI</h2>
            <p className="text-[18px] leading-relaxed text-[#555555] max-w-2xl">I love learning day by day. The only way to do that is by doing. Below are some of the projects I've built with AI, along with a few small flows made with the workflow I describe above.</p>
          </div>

          {/* Experiments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WorkCard
              project={marginaliaProject}
              onSelect={(proj) => setSelectedProject(proj)}
            />
            {experiments.map((exp) => (
              <ExperimentCard
                key={exp.id}
                experiment={exp}
                onSelect={(experiment) => setSelectedExperiment(experiment)}
              />
            ))}
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section id="contact" className="w-full border-t border-[#e0e0e0] py-24 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <img src="/illustrations/contact-me.svg" alt="" aria-hidden="true" className="shrink-0 w-[96px] sm:w-[150px] h-auto mb-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6163C8] leading-[1.1] tracking-[0.01em] max-w-2xl mb-10">
              Ready to Accelerate Your Product Design Cycle?
            </h2>
            <p className="text-[18px] leading-relaxed text-[#555555] max-w-xl -mt-6 mb-10">
              Let's talk about how an AI-first workflow can shorten your next design cycle.
            </p>

            <PillButton
              id="cta-contact-button"
              onClick={handleContactClick}
              variant="primary"
              className="px-8 py-3.5 gap-2"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2.003c-5.523 0-10 4.477-10 10 0 1.762.464 3.484 1.345 5.001L2 22l5.093-1.336a9.936 9.936 0 004.908 1.24h.005c5.523 0 10-4.477 10-10 0-2.669-1.041-5.176-2.929-7.064a9.936 9.936 0 00-7.076-2.937zm.007 18.174h-.004a8.14 8.14 0 01-4.153-1.13l-.298-.176-3.026.793.807-2.949-.194-.303a8.14 8.14 0 01-1.246-4.354c0-4.502 3.665-8.166 8.169-8.166 2.182 0 4.233.85 5.775 2.392a8.11 8.11 0 012.395 5.777c-.001 4.502-3.665 8.166-8.169 8.166z" />
              </svg>
              CONTACT ME
            </PillButton>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer id="main-footer" className="w-full border-t border-[#e0e0e0] py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Contact Column */}
            <div>
              <span className="block font-mono text-[14px] text-[#888888] uppercase tracking-[0.14em] mb-2">
                CONTACT
              </span>
              <a
                id="footer-email-link"
                href={`mailto:${portfolioProfile.email}`}
                className="font-mono text-[14px] text-[#101010] hover:underline"
              >
                {portfolioProfile.email}
              </a>
            </div>

            {/* Social Column */}
            <div>
              <span className="block font-mono text-[14px] text-[#888888] uppercase tracking-[0.14em] mb-2">
                SOCIAL
              </span>
              <a
                id="footer-linkedin-link"
                href={portfolioProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[14px] text-[#101010] uppercase tracking-[0.08em] hover:underline"
              >
                LINKEDIN
              </a>
            </div>

            {/* Legal / Micro Label Column */}
            <div className="md:text-right">
              <span className="font-mono text-[14px] text-[#888888] uppercase tracking-[0.12em]">
                DESIGNED FOR CLARITY // 2024
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= PROJECT MODAL ================= */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

