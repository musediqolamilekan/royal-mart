import React from 'react';
import ShopLayout from '@/views/ShopLayout';
import {products } from '@/data/data';

const belowSalesItems = products.filter(product => product.category === 'belowSales');

const BelowSales = () => {
  return (
    <ShopLayout items={belowSalesItems} title="Shop | Below $100" />
  );
};

export default BelowSales;