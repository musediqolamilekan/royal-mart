import React from 'react';
import FirstCategory from '../../assets/category-1.png';
import SecondCategory from '../../assets/category-2.png';
import ThirdCategory from '../../assets/category-3.png';
import FourthCategory from '../../assets/category-4.png';
import FifthCategory from '../../assets/category-5.png';
import Image from 'next/image';

const categories = [
  { src: FirstCategory, alt: 'First Category', label: 'Clothes & Dress' },
  { src: SecondCategory, alt: 'Second Category', label: 'Phone & Tablets' },
  { src: ThirdCategory, alt: 'Third Category', label: 'Fashion Deals' },
  { src: FourthCategory, alt: 'Fourth Category', label: 'Mobile Accessories' },
  { src: FifthCategory, alt: 'Fifth Category', label: 'Computing Deals' },
];

const TopCategories = () => {
  return (
    <div className='homePage__categories'>
      <div className="homePage__categories-header">
        <h2 className="title homePage__categories-title">Top Categories</h2>
        <button className="homePage__categories-btn">See All</button>
      </div>
      <div className='homePage__categories-wrapper'>
        {categories.map((category, index) => (
          <div key={index} className='homePage__categories-flex'>
            <Image src={category.src} alt={category.alt} className='img' />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
