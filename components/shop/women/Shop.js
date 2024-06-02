import React from 'react'
import ShopLayout from '@/views/ShopLayout';
import { products } from '@/data/data';

const items = products.filter(
  product => product.category === 'belowSales' || product.category === 'menShop'
);


const Shop = () => {
  return (
    <div>
        <ShopLayout items={items} title="Just For You" />
    </div>
  )
}

export default Shop