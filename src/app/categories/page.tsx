import React, { Suspense } from 'react'
import Categories from './_Categories'
import Products from '../products/_components/Products'
import Loading from '../_components/Loading'

export default function page() {
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Categories>
                    <Products/>
                </Categories>
            </Suspense>
        </div>
    )
}
