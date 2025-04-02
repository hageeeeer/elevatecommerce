import { OrderI, OrderItem } from '@/app/allOrders/types/order.type'
import Image from 'next/image';


export default function OderItem({ord}:{ord:OrderI}) {
  
  return (
    <div className="w-3/4 mx-auto">
    <h2>orderNum: {ord?.orderNumber}</h2>
    <h2>totalPrice: {ord?.totalPrice} LE</h2>
    {ord?.orderItems.map((ele:OrderItem)=> <div key={ele?._id} className="my-3 flex items-center border-2 p-4 border-pink">
      
      <div className="w-1/4">
       <Image width={100} height={50} className="w-100" src={ele?.product?.imgCover||''} alt={ele?.product?.title||''}/>
      </div>
      <div className="w-3/4 text-center">
      
        <p>price: {ele?.product?.price}LE</p>
        <p>title: {ele?.product?.title}</p>
      </div>
    </div>)}
    </div>
   
  )
}
