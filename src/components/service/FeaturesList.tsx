
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <ul className="mb-6 space-y-2.5">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <Check className="text-site-green-400 mr-2 shrink-0 mt-0.5" size={18} />
          <span className="text-sm font-medium">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
