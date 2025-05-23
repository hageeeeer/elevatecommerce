import React, { Suspense } from 'react'
import Order from './_Order/Order'
import Loading from '../_components/Loading'

export default function page() {
  return (
    <div>
        <Suspense fallback={<Loading></Loading>}>
          <Order/>
        </Suspense>
    </div>
  )
}
