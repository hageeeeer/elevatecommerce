'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module
import { Product, productResponse } from '@/app/products/types/products.type';
import { AllProducts } from '@/app/products/actions/allproducts';
import Image from 'next/image';
export default  function BestSeller() {
 const[data,setdata] = useState<Product[]>([])
  async function getProducts()
  {
    const response:productResponse = await AllProducts()
    setdata(response?.products);
    
  }
  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div className=' p-4  lg:block hidden'>
       <span className='font-bold text-xl  py-1 m-8 border-b-2 border-[rgb(251,102,193)]'>Best seller</span>
      <div className="flex">
        <div className="w-1/4 px-8 py-3">
        <h2 className="font-bold text-2xl ">Pest<span className='text-[rgb(251,102,193)]'> Seller Gifts</span> And Products</h2>
        <p>There are few options on how to include/import Swiper into your project</p>
        </div>
        <div className='w-3/4'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            pagination={{ type: 'fraction' }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {data?.sort((a:Product,b:Product)=>b.rateAvg - a.rateAvg).map((prod: Product) => <SwiperSlide key={prod._id}>
              <Image width={300} height={300} className='rounded object-cover' src={prod.imgCover} alt='pic'/>
            </SwiperSlide>)}


          </Swiper>
        </div>
      </div>


    </div>
  )
}
