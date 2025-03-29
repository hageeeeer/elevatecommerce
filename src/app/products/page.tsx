import React, { Suspense } from 'react'
import Products from './_components/Products'
import Loading from '../_components/Loading'

export default async  function page() {
  
  return (
  
      <div className='container'>
      <div className='my-5'>
        <span className='font-bold text-xl  py-1 m-8 border-b-2 border-[rgb(251,102,193)]'>Popular items</span>
      <Suspense fallback={<Loading></Loading>}>
      <Products/>
      </Suspense>
    </div>
    </div>
  )
}
