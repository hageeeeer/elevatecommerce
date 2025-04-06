'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Product } from '../types/products.type'
import ProductItem from './ProductItem'
import { AllProducts } from '../actions/Products'
import { SearchData } from '@/Context/searchContext'


export default function Products() {
  const { searchQuery } = useContext(SearchData)
  const [productList, setProductList] = useState([])
  async function fetchproductData() {
    const { products } = await AllProducts()
    setProductList(products)
  }
  useEffect(() => {
    fetchproductData()
  }, [])
  return (
    <div className='flex flex-wrap my-5 ml-[-12px] mr-[-12px]'>
      {productList.filter((prod: Product) => prod.title.toLowerCase().includes(searchQuery)).map((prod: Product) => <div key={prod._id} className='lg:w-1/4  sm:w-1/2 w-full p-3'> <ProductItem item={prod} ></ProductItem></div>
      )
      }
    </div>
  )
}
