import React from 'react';
import { PillButton } from './PillButton';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-[#e0e0e0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          id="brand-logo"
          href="#" 
          className="flex items-center gap-2 font-mono text-[14px] text-[#101010] uppercase tracking-[0.12em] font-medium hover:opacity-80 transition-opacity"
        >
          <img src="/favicon.png" alt="" className="inline-block w-5 h-5 rounded-full object-cover" />
          CRISTI SALAZAR
        </a>

        {/* Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          <a 
            id="nav-link-work"
            href="#selected-works" 
            className="font-mono text-[14px] text-[#555555] hover:text-[#101010] uppercase tracking-[0.1em] transition-colors"
          >
            WORK
          </a>
          <a 
            id="nav-link-projects"
            href="#selected-works" 
            className="font-mono text-[14px] text-[#555555] hover:text-[#101010] uppercase tracking-[0.1em] transition-colors"
          >
            PROJECTS
          </a>
          <a 
            id="nav-link-experiments"
            href="#ai-experiments" 
            className="font-mono text-[14px] text-[#555555] hover:text-[#101010] uppercase tracking-[0.1em] transition-colors"
          >
            AI EXPERIMENTS
          </a>
        </nav>

        {/* Action CTA */}
        <div>
          <PillButton
            id="nav-contact-cta"
            onClick={onContactClick}
            variant="primary"
          >
            CONTACT ME
          </PillButton>
        </div>
      </div>
    </header>
  );
};
