import React, { Suspense } from 'react'
import Cart from './Cart'
import Loading from '../_components/Loading'

export default function page() {
  return (
    <div>
        <Suspense fallback={<Loading></Loading>}>
          <Cart/>
        </Suspense>
    </div>
  )
}
