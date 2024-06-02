import React from 'react';
import RatingOverview from './RatingOverview';
import RatingBreakdown from './RatingBreakdown';
import Review from './Review';

const CustomerFeedback = ({ feedback }) => (
  <div className="customer-feedback">
    <h3>Verified Customer Feedback</h3>
    <div className="feedback-summary">
      <RatingOverview rating={feedback.overallRating} totalRatings={feedback.totalRatings} />
      <RatingBreakdown breakdown={feedback.ratingBreakdown} />
    </div>
    <div className="reviews">
      {feedback.reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  </div>
);

export default CustomerFeedback;
