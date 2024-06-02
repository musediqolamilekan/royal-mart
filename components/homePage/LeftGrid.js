import React from 'react';
import firstPopular from '../../assets/popular-1.avif';
import secondPopular from '../../assets/popular-2.avif';
import thirdPopular from '../../assets/popular-3.avif';
import fourthPopular from '../../assets/popular-4.avif';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const categories = [
  { name: 'Clothes & Watches', icon: '👗', path: 'clothes-and-watches' },
  { name: 'Electronics', icon: '📱', path: 'electronics' },
  { name: 'Home & Kitchen', icon: '🏠', path: 'home-and-kitchen' },
  { name: 'Books', icon: '📚', path: 'books' },
  { name: 'Beauty & Personal Care', icon: '💄', path: 'beauty-and-personal-care' },
];

const popularItems = [
  { src: firstPopular, alt: 'First Popular', score: 4.6 },
  { src: secondPopular, alt: 'Second Popular', score: 4.8 },
  { src: thirdPopular, alt: 'Third Popular', score: 4.7 },
  { src: fourthPopular, alt: 'Fourth Popular', score: 4.9 },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const LeftGrid = ({ onCategoryClick, activeCategory }) => {
  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            onClick={activeCategory === category.path ? null : () => onCategoryClick(category)}
            className={activeCategory === category.path ? 'active' : '' }
          >
            <span role="img" aria-label={category.name}>{category.icon}</span> {category.name}
          </li>
        ))}
      </ul>
      <div className='homePage__popular'>
        <h3>Popular Deals</h3>
        <Slider {...sliderSettings}>
          {popularItems.map((item, index) => (
            <div key={index} className='homePage__popular-box'>
              <Image src={item.src} alt={item.alt} className='img' />
              <button>Popularity Score: {item.score}</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LeftGrid;
