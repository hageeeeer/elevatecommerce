import { Cart } from '@/app/cart/types/cart.types'
import Link from 'next/link'
import React from 'react'

export default function CheckOut({data}:{data:Cart}) {
  
  return (
    <div className='bg-whitepink  p-4 rounded-xl'>
                  <h2 className='font-bold my-5 text-xl'>Cart summary</h2>
                  <div className='flex justify-between my-3'>
                    <span>Sub total:</span>
                    <span className="text-slate-600">${data?.totalPrice}</span>
                  </div>
                  <div className='flex justify-between my-3'>
                    <span>discount:</span>
                    <span className="text-slate-600">${data?.discount}</span>
                  </div>
                  <div className='flex justify-between my-3'>
                    <span>shipping:</span>
                    <span className="text-slate-600">Free</span>
                  </div>
                  <div className='flex justify-between my-3'>
                    <span>price after discount:</span>
                    <span className="text-pink font-bold">${data?.totalPriceAfterDiscount}</span>
                  </div>
                  <button className="px-4 py-2 text-white rounded bg-pink my-5">
                    <Link href='/checkout' className='mx-2'> Check out now </Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
  )
}
