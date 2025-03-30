
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
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star 
        key={i} 
        size={size} 
        className={i < Math.floor(rating) 
          ? "fill-yellow-400 text-yellow-400" 
          : i < rating 
            ? "fill-yellow-400 text-yellow-400 opacity-50" 
            : "text-gray-300"} 
      />
    );
  }
  
  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      {showRatingText && (
        <span className="ml-2 text-sm text-site-gray-300">
          {rating.toFixed(1)} {reviews && `(${reviews})`}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
