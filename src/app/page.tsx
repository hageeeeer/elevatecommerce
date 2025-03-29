import React from 'react'
import Service from './_components/service/Service'
import Products from './products/_components/Products'
import BestSeller from './_components/bestseller/BestSeller'
import Header from './_components/header/Header'


export default function page() {
  return (
    <div className="container">
      <Service/>
      <Header/>
      <Products/>
      <BestSeller/>
    </div>
  )
}
