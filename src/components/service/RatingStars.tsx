import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
  showRatingText?: boolean;
  reviews?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  size = 18, 
  showRatingText = false,
  reviews
}) => {
  // Calculate full and partial stars
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star 
            key={`full-${i}`} 
            size={size}
            fill="#FFCD3C"
            stroke="#FFCD3C"
            strokeWidth={1}
            className="text-yellow-400"
          />
        ))}
        
        {/* Partial star if needed */}
        {partialStar > 0 && (
          <div className="relative">
            {/* Background empty star */}
            <Star 
              size={size}
              stroke="#D1D5DB"
              fill="none"
              strokeWidth={1}
              className="text-gray-300"
            />
            
            {/* Partial filled star with clip */}
            <div 
              className="absolute top-0 left-0 overflow-hidden" 
              style={{ width: `${partialStar * 100}%` }}
            >
              <Star 
                size={size}
                fill="#FFCD3C"
                stroke="#FFCD3C"
                strokeWidth={1}
                className="text-yellow-400"
              />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            size={size}
            stroke="#D1D5DB"
            fill="none"
            strokeWidth={1}
            className="text-gray-300"
          />
        ))}
      </div>
      
      {showRatingText && (
        <span className="ml-2 font-semibold text-sm">
          {rating.toFixed(1).replace('.', ',')} 
          {reviews && (
            <span className="text-site-gray-300 text-xs ml-1">({reviews})</span>
          )}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
