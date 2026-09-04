import React from 'react';
import { Experiment } from '../types';

interface ExperimentCardProps {
  experiment: Experiment;
  onSelect?: (experiment: Experiment) => void;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({ experiment, onSelect }) => {
  return (
    <article
      id={`experiment-card-${experiment.id}`}
      onClick={() => onSelect && onSelect(experiment)}
      className="group flex flex-col bg-white border border-[#e0e0e0] hover:border-[#999999] rounded-[8px] overflow-hidden transition-all duration-150"
    >
      {/* Visual Image */}
      <div className="relative aspect-[16/10] bg-[#f0f0f0] overflow-hidden border-b border-[#e0e0e0]">
        <img
          src={experiment.image}
          alt={experiment.title}
          className={`w-full h-full group-hover:scale-105 transition-transform duration-300 filter contrast-105 lg:grayscale lg:group-hover:grayscale-0 ${
            experiment.imageFit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Header Strip */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f0f0f0] mb-3">
          <h3 className="font-mono text-[14px] font-medium text-[#101010] uppercase tracking-[0.08em]">
            {experiment.title} <strong className="font-bold">With AI</strong>
          </h3>
          <span className="font-mono text-[14px] text-[#888888] uppercase tracking-[0.08em]">
            {experiment.code}
          </span>
        </div>

        {/* Description */}
        <p className="font-mono text-[14px] text-[#555555] leading-relaxed">
          {experiment.description}
        </p>
      </div>
    </article>
  );
};
