'use client'
import React from 'react'
import { getorders } from '../action/order.action'
import { useEffect, useState } from 'react'
import OrderItem from '../../_components/orderItem/OderItem'
import { OrderI } from '../types/order.type'
export default function Order() {

  const [orderList, setOrderList] = useState([])
  async function fetchorder() {
    const { orders } = await getorders()
    setOrderList(orders)
  }

  useEffect(() => {
    fetchorder()
  }, [])
  return (
    <div className='container'>
      {orderList.map((ord:OrderI) => <OrderItem key={ord?._id} ord={ord}></OrderItem>)}
    </div>
  )
}
