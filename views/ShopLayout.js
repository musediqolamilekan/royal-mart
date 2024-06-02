import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopLayout = ({ items, title }) => {
  return (
    <div className="shopLayout">
      <div className="shopLayout__header">
        <h2 className="title shopLayout__title">{title}</h2>
        <button className="shopLayout__btn">See All</button>
      </div>
      <div className="shopLayout__container">
        {items.map((item, index) => (
          <Link href={item.link} key={index} className="shopLayout__item">
            <Image
              src={item.src}
              alt={item.name}
              className="shopLayout__image"
            />
            <div className="shopLayout__details">
              <p className="shopLayout__name">{item.name}</p>
              <p className="shopLayout__price">${item.slash}</p>
              <p className="shopLayout__slash">${item.price}</p>
            </div>
            <div className="shopLayout__discount">-{item.discount}%</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopLayout;