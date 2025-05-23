'use client'
import React from 'react'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteItem } from './_actions/deleteItem'
import { updateItem } from './_actions/updatecart'
import Loading from '../_components/Loading'
import { clearcart } from './_actions/clearcart'
import img from '../../assests/cart.jpg'
import Image from 'next/image'
import {  CartItem } from './_types/cart.types'
import useQueryCart from './_hooks/useCart'
import CheckOut from '../_components/checkout/CheckOut'


export default function Cart() {
  const queryClient = useQueryClient()
  const {data:response,error,isError,isLoading} = useQueryCart()
  //delete item
  const { mutate: delfn, isLoading: delloading } = useMutation({
    mutationFn: deleteItem, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  })
  //update
  const { mutate: updatefn, isLoading: updateloading } = useMutation({
    mutationFn: updateItem, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  })
  //clear cart
  const { mutate: clearfn, isLoading:clearloading } = useMutation({
    mutationFn: clearcart, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  })


  // Handle loading state to prevent hydration errors
  if (isLoading || updateloading || delloading || clearloading) {
    return <Loading></Loading>
  }

  if (isError) {
    console.log(error);
    
    return <div>Error loading cart data</div> // Handle error if needed
  }

  return (
    <div className='container'>
      {response?.numOfCartItems ?

        <div className='flex gap-10 lg:flex-nowrap flex-wrap'>
          <div className="lg:w-2/3 w-100 relative overflow-x-auto sm:rounded-lg">

            <table className="shadow-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {response?.cart?.cartItems?.map((prod: CartItem) =>
                  <tr key={prod?.product?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <Image src={prod?.product?.imgCover} width={300} height={300} className="md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {prod?.product?.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button 
                        onClick={() => {
                          if (prod?.quantity > 1) {
                            updatefn({ product: prod?.product?._id, quantity: prod?.quantity - 1 });
                          } else {
                            delfn(prod?.product?._id);
                          }
                        }}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 1h16" />
                          </svg>
                        </button>
                        <div>
                          <input type="text" id="first_product" className="bg-gray-50 text-center w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 " placeholder={`${prod?.quantity}`} required />
                        </div>
                        <button
                          onClick={() => { updatefn({ product: prod?.product?._id, quantity: prod?.quantity + 1 }) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span className="sr-only">Quantity</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4  text-gray-900 ">
                      {prod?.price}$
                    </td>
                    <td className="px-6 py-4">

                      <i onClick={() => { delfn(prod?.product?._id) }} className="fa-solid fa-trash text-pink cursor-pointer text-xl"></i>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>

          </div>
          <div className="lg:w-1/3 w-full">
            <CheckOut  data={response?.cart}/>
            <div className="my-10">
              <button onClick={() => { clearfn() }} className="px-4 py-2 items-center text-white rounded bg-pink ">
                <i className="fa-solid fa-trash"></i>
                <span>clear cart</span>
              </button>
            </div>
            <div className="my-10">
              <Link href='/' className="px-4 py-2 items-center text-white rounded bg-pink ">
                <span>Continue shopping</span>
                <i className="fa-solid fa-arrow-left mx-2"></i>
              </Link>
            </div>

          </div>
        </div>
        :
        <div className='flex justify-center items-center'>
          <Image src={img} alt='' />
        </div>

      }


    </div>
  )
}
