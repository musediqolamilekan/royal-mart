import { products } from '@/data/data';
import ShopLayout from '@/views/ShopLayout';
import React from 'react';

const items = products.filter(product => product.category === 'belowSales');

const TopDeals = () => {
  return (
    <div>
        <ShopLayout items={items} title="Top Deals" />
    </div>
  )
}

export default TopDeals