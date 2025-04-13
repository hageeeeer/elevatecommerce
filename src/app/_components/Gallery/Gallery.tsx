import Image from 'next/image'
import gallery1 from '../../../assests/gallery1.png'
import gallery2 from '../../../assests/gallery2.png'
import gallery3 from '../../../assests/gallery3.jpg'
import gallery4 from '../../../assests/gallery4.png'
import gallery5 from '../../../assests/gallery5.png'

import React from 'react'

export default function Gallery() {
  return (
    <div className="text-center py-12">
        <span className="gallery text-pink font-bold">Our gallery</span>
        <h2 className="gallery my-3">Let&apos;s Check Our Photo Gallery</h2>
        <div className="flex flex-wrap ml-[-12px] mr-[-12px]">
            <div className='w-1/3'>
            <Image alt='pic' src={gallery1} className="w-full  p-3 rounded-[20px]" style={{height:'300px ',objectFit:'cover'}}/>
            </div>
            <div className='w-1/3'>
            <Image alt='pic' src={gallery2} className="w-full rounded-[20px] p-3" style={{height:'300px ',objectFit:'cover'}}/>
            </div>
            <div className='w-1/3'>
            <Image alt='pic' src={gallery3} className="w-full rounded-[20px] p-3" style={{height:'300px ',objectFit:'cover'}}/>
            </div>
            <div className='w-2/3'>
            <Image alt='pic' src={gallery4} className="w-full rounded-[20px] p-3" style={{height:'300px ',objectFit:'cover'}}/>
            </div>
            <div className='w-1/3'>
            <Image alt='pic' src={gallery5} className="w-full rounded-[20px] p-3" style={{height:'300px ',objectFit:'cover'}}/>
            </div>
        </div>
    </div>
  )
}

