'use client'
import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className='bg-gray-300 z-[999] bg-opacity-25 fixed top-0 bottom-0 start-0 end-0 flex justify-center items-center'>
            <Circles
                height="80"
                width="80"
                color="pink"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
