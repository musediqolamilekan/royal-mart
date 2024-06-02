import React from 'react';
import StarRating from './StarRating';

const RatingBreakdown = ({ breakdown }) => (
  <div className="rating-breakdown">
    {breakdown.map((item, index) => (
      <div key={index} className="bar">
        <div className="stars">
          <StarRating rating={5 - index} />
        </div>
        <div className="bar-outer">
          <div
            className="bar-inner"
            style={{ width: `${(item / breakdown.reduce((a, b) => a + b)) * 100}%` }}
          ></div>
        </div>
        <div className="count">{item}</div>
      </div>
    ))}
  </div>
);

export default RatingBreakdown;
