import React, { Suspense } from 'react'
import Check from './_Check'
import Loading from '../_components/Loading'

export default function page() {
  return (
      <Suspense fallback={<Loading></Loading>}>
        <Check/>
      </Suspense>
  )
}
