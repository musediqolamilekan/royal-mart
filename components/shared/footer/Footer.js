import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__flex'>
        <ul>
          <li><Link href="/">Contact Us</Link></li>
          <li><Link href="/">Terms</Link></li>
          <li><Link href="/">Privacy</Link></li>
          <li><Link href="/">Payment Method</Link></li>
        </ul>
      </div>
      <div className='footer__flex'>
        <p>© 2024 RoyalMart</p>
      </div>
    </div>
  )
}

export default Footer