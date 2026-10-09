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
      className="group flex flex-col gap-5 p-4 bg-white border border-[#e0e0e0] hover:border-[#6163C8] rounded-[14px] shadow-[0_1px_2px_rgba(16,16,16,0.04),0_8px_24px_rgba(16,16,16,0.05)] transition-colors duration-150"
    >
      {/* Visual Image */}
      <div className="aspect-[16/10] bg-[#f4f4f4] border border-[#e0e0e0] rounded-[10px] overflow-hidden">
        <img
          src={experiment.image}
          alt={experiment.title}
          className={`w-full h-full group-hover:scale-[1.02] transition-transform duration-300 ${
            experiment.imageFit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-1 pb-1">
        <span className="self-start px-3 py-1 rounded-full bg-[#f4f4f4] border border-[#e0e0e0] text-[13px] text-[#555555]">
          {experiment.code}
        </span>
        <h3 className="text-[24px] leading-tight text-[#101010] tracking-[0.01em]">
          {experiment.title} <strong className="font-bold">With AI</strong>
        </h3>
        <p className="text-[15px] leading-relaxed text-[#555555]">{experiment.description}</p>
      </div>
    </article>
  );
};
