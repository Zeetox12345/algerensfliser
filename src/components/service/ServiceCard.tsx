
import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import RatingStars from './RatingStars';
import FeaturesList from './FeaturesList';

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    logo: string;
    rating: number;
    reviews: number;
    description: string;
    price: string;
    features: string[];
    cta: string;
    link: string;
    highlight: boolean;
  };
  compactView?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, compactView = false }) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02] ${
        service.highlight 
          ? 'border-2 border-site-green-400 relative' 
          : 'border border-gray-200'
      }`}
    >
      {service.highlight && (
        <div className="absolute top-0 right-0 bg-site-green-400 text-white text-xs font-bold px-3 py-1 rounded-bl">
          ANBEFALET
        </div>
      )}
      <div className={`p-${compactView ? '3' : '6'}`}>
        <div className="flex items-center mb-2">
          {service.logo && (
            <img 
              src={service.logo} 
              alt={`${service.name} logo`} 
              className={`h-${compactView ? '8' : '14'} mr-3 object-contain`}
            />
          )}
          <div>
            <h3 className={`${compactView ? 'text-base' : 'text-xl'} font-bold`}>{service.name}</h3>
            <div className="flex items-center">
              <div className="flex mr-2 scale-90 origin-left">
                <RatingStars rating={service.rating} />
              </div>
              <span className="text-site-gray-300 text-xs">
                {service.rating} ({service.reviews})
              </span>
            </div>
          </div>
        </div>
        
        {!compactView && <p className="mb-4">{service.description}</p>}
        
        <div className="bg-site-gray-100 p-2 rounded-md mb-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Pris:</span>
            <span className="text-site-green-400 font-bold">{service.price}</span>
          </div>
        </div>

        {compactView ? (
          <div className="mb-3">
            <ul className="text-xs space-y-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-site-green-400 mr-1 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <h4 className="font-bold mb-3">Inkluderer:</h4>
            <FeaturesList features={service.features} />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-site-gray-300">
                <Clock size={14} className="mr-1" />
                <span>Svar inden for 24 timer</span>
              </div>
              <a 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-site-green-400 hover:underline text-sm flex items-center"
              >
                Besøg hjemmeside <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </>
        )}

        <div className={`grid ${compactView ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
          <a 
            href={service.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`block w-full text-center py-2 px-3 rounded-md font-semibold transition-colors text-sm ${
              service.highlight 
                ? 'bg-site-green-400 hover:bg-site-green-500 text-white' 
                : 'bg-[#0096ff] hover:bg-[#0080e0] text-white'
            }`}
          >
            {service.cta} →
          </a>
          {!compactView && (
            <a 
              href={service.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 rounded-md font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Læs mere
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
