import React from 'react';
import Star from './Star';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating" style={{ display: 'flex' }}>
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} filled={true} />
      ))}
      {halfStar && <Star half={true} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={index + fullStars + (halfStar ? 1 : 0)} filled={false} />
      ))}
    </div>
  );
};

export default StarRating;
