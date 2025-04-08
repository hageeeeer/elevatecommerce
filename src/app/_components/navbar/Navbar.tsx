import React, { useState } from 'react'

import logo from '../../../assests/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import SignOutCo from './SignOutCo'
import { useSession } from 'next-auth/react'

import useQueryCart from '@/app/cart/_hooks/useCart'
import Search from '../search/Search'
type NavbarProps = {
  font: {
    className: string;
  };
};


export default function Navbar({font}:NavbarProps) {

  // Retrieve the session
  const { data: session } = useSession()
  const [toggleSerach,setToggleSearch] = useState(false)
  const [toggleNav,setToggleNav] = useState(false)
  const { data: response } = useQueryCart()
  
  function handleToggle()
  {
    setToggleSearch((prev) => !prev)
  }
 
  function toggleNavFun()
  {
    setToggleNav((prev) => !prev)
  }

  // Links for navigation
  const links = [
    { path: '/', link: 'Home' },
    { path: '/products', link: 'Products' },
    { path: '/categories', link: 'Categories' },
  ]
  return (
    <nav className="py-5">
      <div className="container flex md:flex-nowrap md:justify-start gap-0 md:gap-5 justify-between flex-wrap items-center mx-auto p-4">
        <Link href="/" className="flex justify-center me-7 relative items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} className="w-20" alt="flower" />
          <span className={`${font.className} absolute logo text-3xl text-pink`}>Rosa</span>
        </Link>
        {toggleSerach &&  <Search fn={handleToggle}></Search>}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNavFun}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${!toggleNav&&"hidden"}  w-full items-center justify-between md:flex`} id="navbar-default" >
          <ul className="font-medium  w-full flex flex-col py-4 md:p-0 mt-4  rounded-lg justify-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  ">
            {links.map((ele) => (
              <li key={ele.link}>
                <Link href={ele.path} className="block py-2 px-3 rounded-sm md:bg-transparent text-gray-900 md:p-0">
                  {ele.link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links and Authentication Buttons */}
          <ul className="flex gap-5 items-center">
            {!session ? (
              <>
                <li>
                  <Link href="/auth/login" className="block px-4 py-2 rounded-3xl text-white bg-pink">Login</Link>
                </li>
                <li>
                  <a href="/auth/register" className="block px-4 py-2 rounded-3xl text-white bg-pink">Register</a>
                </li>
               
              </>
            ) : (
              <>
               <li>
               <p className="block px-4 py-2">Hi{session?.user?.firstName}</p>
                </li>
              <SignOutCo />
              </>
            )}

            {session && (
              <>
              <li><i onClick={handleToggle}  className="fa-solid fa-search text-pink cursor-pointer"></i></li>
              <li>
    
                <Link href="/cart" className="block relative py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ">
                  <i className="fa-solid fa-cart-plus text-xl text-pink"></i>

                  {response?.numOfCartItems ? 
                  <>
                  <div className="absolute  bottom-7 left-7 w-6 h-6 flex items-center justify-center rounded-full bg-pink text-white">
                    <span>{response.numOfCartItems}</span>
                  </div>
                   
                   </>: <div className="absolute  bottom-5 left-4 w-6 h-6 flex items-center justify-center rounded-full bg-pink text-white">
                    0
                  </div>}
                </Link>
              </li>
           </> )}
          </ul>
        </div>
      </div>
     
    </nav>
  )
}
