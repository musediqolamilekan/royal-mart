import React from 'react'
import ShopLayout from '@/views/ShopLayout';
import { products } from '@/data/data';

const sneaker = products.filter(product => product.category === 'menShop' && product.type === 'sneakers');

const Sneakers = () => {
  return (
    <div>
        <ShopLayout items={sneaker} title="Men Sneakers" />
    </div>
  )
}

export default Sneakers