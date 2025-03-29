import React from 'react'
import { Product } from '../types/products.type'
import { displayStars } from '@/lib/rate'
import AddBtn from './AddBtn'
import Link from 'next/link'
import Image from 'next/image'


export default function ProductItem({ item }: { item: Product }) { 
    return (
        <div className='xl:w-1/4 md:w-1/3 sm:w-1/2 w-full '>
            <div className="product p-4 ">
                <div className="relative group cursor-pointer">
                    <div className="flex justify-center items-center gap-10 transition-opacity group-hover:opacity-100 rounded-3xl product-layer absolute top-0 opacity-0 bottom-0 left-0 right-0 bg-[rgba(251,102,193,.7)]">
                       <Link href={`/productdetails/${item._id}/${item.category}`}> <i className='fa-solid fa-eye text-white'></i></Link>
                        <i className='fa-regular fa-heart text-white'></i>
                    </div>

                    <Image src={`${item?.imgCover}`} height={300} width={300} className=" object-cover rounded-3xl" alt={item.slug} />
                </div>


                <div className='p-3'>
                    <p className='font-semibold'>{item.title}</p>
                    <p className='text-lg text-orange-500'>{displayStars(item.rateAvg)}</p>
                    <div className="flex justify-between items-center">
                    {item.priceAfterDiscount?<div>
                   <span className='text-[rgb(251,102,193)] font-semibold line-through'>{(item.price / 100).toFixed(2)}$</span>
                    <br/>
                    <span className='text-[rgb(251,102,193)] font-semibold'>{(item.priceAfterDiscount / 100).toFixed(2)}$</span>
                    </div>  :<span className='text-[rgb(251,102,193)] font-semibold'>{(item.price / 100).toFixed(2)}$</span> }
                     {!item.quantity? <p className="text-red-500 font-bold">sold out</p> :  
                     <AddBtn product={item._id}/>
                     }
                    </div>

                </div>

            </div>
        </div>
    )
}
