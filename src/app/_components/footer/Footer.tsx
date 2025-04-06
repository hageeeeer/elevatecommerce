import React from 'react'
import img from '../../../assests/footer.png'
export default function Footer() {
  return (
    <footer className='h-80' style={{backgroundImage:`url(${img.src})`}}>
       <div className='bg-[rgba(255,255,255,.5)] h-full py-10'>
       <ul className='flex justify-around w-3/4 mx-auto font-bold'>
            <li><a>About us</a></li>
            <li><a>Store location</a></li>
            <li><a>Contact</a></li>
            <li><a>Delievery</a></li>
            <li><a>Policy</a></li>
            <li><a>FAQs</a></li>
        </ul>
        <h2 className='font-bold text-center text-[30px] my-10'>Get <span className="text-pink">20%</span> off Discount Coupon</h2>
        <p className='text-gray my-3 text-center'>By Subscribe our Newsletter</p>
       </div>
    </footer>
  )
}
