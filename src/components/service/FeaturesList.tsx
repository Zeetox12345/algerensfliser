
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
  compact?: boolean;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features, compact = false }) => {
  return (
    <ul className={`mb-6 space-y-${compact ? '1' : '2.5'}`}>
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <Check className={`text-site-green-400 mr-2 shrink-0 ${compact ? 'mt-0 w-3 h-3' : 'mt-0.5'}`} size={compact ? 14 : 18} />
          <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium`}>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
