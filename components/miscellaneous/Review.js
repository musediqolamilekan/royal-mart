import React from 'react';
import StarRating from './StarRating';

const Review = ({ review }) => (
  <div className="review">
    <StarRating rating={review.rating} />
    <div className="review-text">{review.text}</div>
    <div className="review-meta">
      <span className="review-date">{review.date} by {review.user}</span>
      <span className="review-verified">Verified Purchase</span>
    </div>
  </div>
);

export default Review;
