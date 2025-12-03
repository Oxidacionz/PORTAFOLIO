import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  align = 'left',
  className = ''
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <h2 className={`text-3xl font-bold text-sky-800 dark:text-sky-300 mb-6 ${alignment[align]} ${className}`}>
      {children}
    </h2>
  );
};
