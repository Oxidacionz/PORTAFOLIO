import React from 'react';
import { Certificate } from '../../types';
import { Award } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center text-center transition-all hover:shadow-xl">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${certificate.color}`}>
        <Award className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{certificate.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{certificate.issuer}</p>
      <span className="text-[10px] font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-500 dark:text-gray-300 mt-auto">
        {certificate.year}
      </span>
    </div>
  );
};
