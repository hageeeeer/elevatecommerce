import React from 'react'
import img1 from '../../../assests/aboutimg.png'
import img2 from '../../../assests/aboutpresent.png'
import img3 from '../../../assests/aboutpaloons.png'
import Image from 'next/image'
export default function About() {
  return (
    <div className="flex py-12 ">
      <div className="lg:w-1/2 hidden lg:flex items-center gap-10">
        <div className="w-1/2 relative">
          <Image src={img1} alt='' style={{ width: '100%', position: "relative", objectFit: 'cover', top: '15px', left: '25px', zIndex: '2', borderRadius: '50px 120px 120px 120px' }} />
          <div className="overlay rounded-tl-[50px] rounded-br-[120px] rounded-bl-[120px] rounded-tr-[120px] absolute top-0 h-full start-0 w-full border-4 border-pink"></div>
        </div>
        <div className="w-1/2">
          <Image src={img2} style={{ width: '193px', height: '193px', borderRadius: '50%' }} alt="" />
          <Image src={img3} style={{ width: '193px', height: '144px', borderRadius: '50px 100px 100px 50px' }} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <span className='text-pink about font-bold'>About us</span>
        <h2 className="font-bold my-3">We Provide Best And Quality<span className="text-pink"> Gifts Box </span>Product For You</h2>
        <p className='text-gray'>Recusandae tempora aut laborum molestias veniam. A commodi sequi accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta necessitatibus ut ad.</p>

        <button className="px-4 py-2 my-3  items-center text-white rounded bg-pink ">
          <i className="fa-solid fa-arrow-next"></i>
          <span>Discover More</span>
        </button>
        <ul className='flex flex-wrap gap-y-5 my-5 about'>
          <li className='flex items-center gap-3 md:w-1/2 w-full '>
            <i className='fa-solid fa-check  flex size-10 rounded-full bg-purble text-white justify-center items-center'></i>
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
          </li>
          <li className='flex items-center gap-3 md:w-1/2 w-full'>
            <i className='fa-solid fa-check flex size-10 rounded-full bg-purble text-white justify-center items-center'></i>
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
          </li>
          <li className='flex items-center gap-3 md:w-1/2 w-full'>
            <i className='fa-solid fa-check flex size-10 rounded-full bg-purble text-white justify-center items-center'></i>
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
          </li>
          <li className='flex items-center gap-3 md:w-1/2 w-full'>
            <i className='fa-solid fa-check flex size-10 rounded-full bg-purble text-white justify-center items-center'></i>
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
