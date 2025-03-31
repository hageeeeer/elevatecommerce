import React from 'react'
import { Product, productResponse } from '../types/products.type'
import ProductItem from './ProductItem'
import { AllProducts } from '../actions/Products'


export default async function Products() {

  const response: productResponse = await AllProducts()
  return (

   
     <div className='flex flex-wrap my-5'>
      {response.products.map((prod: Product) => <ProductItem key={prod._id} item={prod} ></ProductItem>)}
   </div>
  )
}
