import React from 'react';

const Star = ({ filled, half }) => {
  if (half) {
    return (
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'relative' }}
      >
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="#e0ba6f" />
            <stop offset="50%" stopColor="#ccc" />
          </linearGradient>
        </defs>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="url(#halfGrad)"
        />
      </svg>
    );
  }
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill={filled ? '#e0ba6f' : '#ccc'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={filled ? '#e0ba6f' : '#ccc'}
      />
    </svg>
  );
};

export default Star;
