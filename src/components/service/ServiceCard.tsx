import React from 'react';
import { Clock, ExternalLink, ArrowRight } from 'lucide-react';
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
  const highlightColor = service.highlight ? "text-site-green-400" : "text-[#0096ff]";
  const buttonBgColor = service.highlight ? "bg-site-green-400 hover:bg-site-green-500" : "bg-[#0096ff] hover:bg-[#0080e0]";

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02] bg-white-card ${
        service.highlight 
          ? 'border-2 border-site-green-400 relative' 
          : 'border border-gray-200'
      }`}
    >
      {service.highlight && (
        <div className="absolute top-0 right-0 bg-site-green-400 text-white text-xs font-bold px-2 py-0.5 rounded-bl">
          ANBEFALET
        </div>
      )}
      <div className={compactView ? "p-2" : "p-6"}>
        {/* Header with logo and name */}
        <div className="flex flex-col items-center mb-1">
          {service.logo && (
            <a 
              href={service.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={service.logo} 
                alt={`${service.name} logo`} 
                className="h-11 mb-0.5 object-contain"
              />
            </a>
          )}
          <div className="text-center">
            <h3 className={`${compactView ? 'text-base' : 'text-xl'} font-bold`}>{service.name}</h3>
            <div className="flex items-center justify-center mt-0.5">
              <RatingStars 
                rating={service.rating} 
                showRatingText={false} 
                reviews={0} 
                size={compactView ? 16 : 18} 
              />
              <span className={`${highlightColor} ml-1 font-semibold`}>
                {service.rating.toFixed(1).replace('.', ',')}
              </span>
              <span className="text-site-gray-300 text-xs ml-1">
                ({service.reviews})
              </span>
            </div>
            
            {/* Mobile-only button - appears below stars */}
            {compactView && (
              <div className="md:hidden mt-3 -mx-2">
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-4 rounded-md text-base font-semibold transition-colors ${
                    buttonBgColor
                  } text-white flex items-center justify-center`}
                >
                  {service.cta} <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Price box */}
        <div className="bg-white p-1.5 rounded-md mb-1.5">
          <div className="flex flex-col">
            <span className="font-semibold">Pris:</span>
            <span className={`${highlightColor} font-bold text-sm mt-0.5 whitespace-pre-line`}>
              {service.id === 1 
                ? "2500 kr. (op til 35 m²)\n48,40 kr/m² derefter" 
                : service.price}
            </span>
          </div>
        </div>

        {/* Features list */}
        <div className="mb-1.5">
          {compactView ? (
            <FeaturesList 
              features={service.features} 
              compact={true} 
              highlightColor={highlightColor}
            />
          ) : (
            <>
              <h4 className="font-bold mb-2">Inkluderer:</h4>
              <FeaturesList 
                features={service.features}
                highlightColor={highlightColor}
              />
            </>
          )}
        </div>
        
        {!compactView && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-site-gray-300">
              <Clock size={14} className="mr-1" />
              <span>Svar inden for 24 timer</span>
            </div>
            <a 
              href={service.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${highlightColor} hover:underline text-sm flex items-center`}
            >
              Besøg hjemmeside <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        )}

        {/* Call to action buttons - hidden on mobile if compactView is true */}
        <div className={`grid ${compactView ? 'md:grid-cols-1 hidden md:block' : 'grid-cols-2'} gap-1 mt-auto`}>
          <a 
            href={service.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`block w-full text-center py-1.5 px-2 rounded-md font-semibold transition-colors ${
              buttonBgColor
            } text-white flex items-center justify-center`}
          >
            {service.cta} <ArrowRight size={20} className="ml-2" />
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
