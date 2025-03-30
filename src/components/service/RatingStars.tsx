
import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 18 }) => {
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
  return <div className="flex">{stars}</div>;
};

export default RatingStars;
