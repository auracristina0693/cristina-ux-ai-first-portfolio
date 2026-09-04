import React from 'react';

interface PillButtonProps {
  id?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary';
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const PillButton: React.FC<PillButtonProps> = ({
  id,
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  rel,
  className = '',
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[0.08em] font-normal transition-all duration-150 rounded-full px-6 py-2.5 leading-none select-none cursor-pointer";
  
  const variants = {
    primary: "bg-[#101010] text-white hover:bg-[#333333] active:bg-black border border-[#101010]",
    ghost: "bg-transparent text-[#555555] border border-[#999999] hover:text-[#101010] hover:border-[#101010]",
    secondary: "bg-[#f4f4f4] text-[#101010] border border-[#e0e0e0] hover:bg-[#eaeaea]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a id={id} href={href} target={target} rel={rel} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
