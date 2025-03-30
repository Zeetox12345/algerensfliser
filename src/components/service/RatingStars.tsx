
import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star 
        key={i} 
        size={18} 
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
