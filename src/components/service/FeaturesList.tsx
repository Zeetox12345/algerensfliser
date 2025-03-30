import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
  compact?: boolean;
  highlightColor?: string;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ 
  features, 
  compact = false,
  highlightColor = "text-site-green-400"
}) => {
  return (
    <ul className="mb-4 space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <Check className={`${highlightColor} mr-2 shrink-0 mt-0.5`} 
                size={compact ? 16 : 18} />
          <span className="text-sm font-medium break-words">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
