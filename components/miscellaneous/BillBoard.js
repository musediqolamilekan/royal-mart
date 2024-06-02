import React from 'react'
import FirstBoard from '../../assets/hero-1.png';
import SecondBoard from '../../assets/hero-2.png';
import ThirdBoard from '../../assets/hero-3.png';
import FourthBoard from '../../assets/hero-4.jpg';
import Image from 'next/image';

const BillBoard = () => {
  return (
    <div className='billBoard'>
        <Image src={FirstBoard} alt='bill-board' className='billBoard__img'/>
        <Image src={SecondBoard} alt='bill-board' className='billBoard__img'/>
        <Image src={ThirdBoard} alt='bill-board' className='billBoard__img'/>
        <Image src={FourthBoard} alt='bill-board' className='billBoard__img'/>
    </div>
  )
}

export default BillBoard