import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  title,
  className = '',
}) => {
  return (
    <div id={id} className={`w-full pb-3 mb-10 border-b border-[#e0e0e0] ${className}`}>
      <h2 className="font-mono text-[14px] font-medium text-[#555555] uppercase tracking-[0.18em]">
        {title}
      </h2>
    </div>
  );
};
