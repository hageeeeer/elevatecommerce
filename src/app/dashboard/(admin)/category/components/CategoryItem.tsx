import { CategoryIn } from '@/app/categories/_types/category.type'
import React from 'react'
import Image from 'next/image'
export default function CategoryItem({item}:{item:CategoryIn}) {
  return (
    <div className='w-1/3 p-4'>
       <div className='flex min-h-20 items-center p-4 justify-between bg-whitepink rounded-[20px] '>
        <div className="size-20 rounded-full bg-white flex justify-center items-center">
        <Image src={item.image} alt={item.slug} width={50} height={50} />
        </div>
         <div>
         <p>{item.name}</p>
         <p className="text-gray text-sm">{item.productsCount} items </p>
         </div>
        <i className='fa-solid fa-pencil cursor-pointer text-gray'></i>
       </div>
    </div>
  )
}
