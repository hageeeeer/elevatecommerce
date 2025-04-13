import React from 'react'
import Service from './_components/service/Service'
import Products from './products/_components/Products'
import BestSeller from './_components/bestseller/BestSeller'
import Header from './_components/header/Header'
import About from './_components/About/About'
import Gallery from './_components/Gallery/Gallery'


export default function page() {
  return (
    <div className="container">
      <Service/>
      <Header/>
      <BestSeller/>
      <Products/>
      <About/>
      <Gallery/>
    </div>
  )
}
