import React from 'react';
import StarRating from './StarRating';

const RatingOverview = ({ rating, totalRatings }) => (
  <div className="rating-overview">
    <div className="rating-value">{rating.toFixed(1)}/5</div>
    <StarRating rating={rating} />
    <div className='rating-total'>{totalRatings} verified ratings</div>
  </div>
);

export default RatingOverview;
