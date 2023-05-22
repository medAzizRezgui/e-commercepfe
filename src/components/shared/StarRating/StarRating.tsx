import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';

export const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 6;
  const fullStars = Math.floor(rating);

  const renderStars = () => {
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar className="fill-yellow-400" />);
    }

    // Render empty stars
    for (let i = fullStars + 1; i < totalStars; i++) {
      stars.push(<BiStar className="fill-yellow-400" />);
    }

    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};
