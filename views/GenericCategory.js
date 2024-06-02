import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GenericCategory = ({ title, items, link }) => {
  return (
    <div className='category'>
      <div className="category__header">
        <h2 className="title category__title">{title}</h2>
        <Link href={link} className="category__btn">See All</Link>
      </div>
      <div className='category__container'>
        {items.map((item, index) => (
          <Link href="/" key={index} className='category__item'>
            <Image src={item.src} alt={item.name} className='category__image' />
            <div className='category__details'>
              <p className='category__name'>{item.name}</p>
              <p className='category__price'>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenericCategory;
