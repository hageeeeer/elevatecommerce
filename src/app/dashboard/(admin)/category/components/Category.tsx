import React from 'react'
import { AllCategories } from '../_action/category.action'
import CategoryItem from './CategoryItem'
import { CategoryIn } from '@/app/categories/_types/category.type'

export default async function Category() {
  const data = await AllCategories()

  return (
    <div className="flex flex-wrap">
      {data?.categories.map((cat:CategoryIn)=><CategoryItem item={cat} key={cat._id}></CategoryItem> )}
      <div className='w-1/3 p-4'>
            <div className='flex p-4 justify-between items-center  min-h-20 bg-whitepink rounded-[20px] '>
        <div className="size-20 rounded-full bg-white flex justify-center items-center">
             
             <i className='fa-solid fa-table-columns fa-2x text-pink'></i>
             </div>
              
              <p className='cursor-pointer' data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">Add Category</p>
              
              <div>
              </div>
            </div>
         </div>

{/* modal */}

<div>
 
  {/* Main modal */}
  <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto flex overflow-x-hidden fixed bottom-0 top-0 right-0 left-0 z-50 justify-center items-center bg-[rgba(0,0,0,.5)]  w-full md:inset-0 ">
    <div className="relative p-4 w-full max-w-md max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold  text-gray-900 dark:text-white">
           <i className='fa-solid fa-pencil flex size-20 rounded-full items-center justify-center bg-pink text-white '></i>
          </h3>
          
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox"  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 " required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    
  )
}



