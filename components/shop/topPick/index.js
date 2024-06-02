import React from 'react';
import firstTopPick from '../../../assets/shops/topPick-1.jpg';
import secondTopPick from '../../../assets/shops/topPick-2.jpg';
import thirdTopPick from '../../../assets/shops/topPick-3.jpg';
import fourthTopPick from '../../../assets/shops/topPick-4.jpg';
import seventhTopPick from '../../../assets/shops/topPick-7.jpg';
import eighthTopPick from '../../../assets/shops/topPick-8.jpg';
import ninthTopPick from '../../../assets/shops/topPick-9.jpg';
import tenthTopPick from '../../../assets/shops/topPick-10.jpg';
import GenericCategory from '../../../views/GenericCategory'; 

const topPicks = [
  { src: firstTopPick, name: "Men's Fashion 2-in-1 Short Sleeve&Shorts Set - Grey", price: 176.90 },
  { src: secondTopPick, name: "Sequels Collection Sequels All Black Sweatshirt With White Stripes", price: 10.87 },
  { src: thirdTopPick, name: "3 In 1 Men's Sport Gym Nicker.", price: 247.89 },
  { src: fourthTopPick, name: "Naviforce Brown Luxury Men's Leather Strap Wrist Watch", price: 670.80 },
  { src: seventhTopPick, name: "Forecast 2019 Fashion Spinning Straps Wrist Watch- Gold", price: 1200 },
  { src: eighthTopPick, name: "2024 Men's Casual Shoes Popular Colour Design Sneakers Big Size 39-47", price: 255.67 },
  { src: ninthTopPick, name: "2024 Mens Casual Sci-Fi Warrior Shoes Running Sneakers - Black/Green", price: 609.78 },
  { src: tenthTopPick, name: "ASHION 2024 Men's Fashion Sneakers Shoes - A Perfect Blend Of Style And Comfort", price: 65 },
];

const TopPicks = () => {
  return <GenericCategory title="Top Picks" items={topPicks} link="/" />;
};

export default TopPicks;
