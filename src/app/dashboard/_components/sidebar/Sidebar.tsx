'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <ul className='font-bold w-1/2 flex flex-col gap-10 px-1'>
            <Link href='/dashboard' className={`${pathname=='/dashboard'?'active':'text-pink'} flex gap-4 p-4 rounded-e-2xl items-center`}>
                <i className="fa-solid fa-table-columns fa-2x"></i>
                <p>Dashboard</p>
            </Link>
            <Link href='/dashboard/product' className={`${pathname=='/dashboard/product'?'active':'text-pink'} flex gap-4 p-4 rounded-e-2xl items-center`}>
                <i className="fa-regular fa-share-from-square fa-2x"></i>
                <p>Product form</p>
            </Link>
            <Link href='/dashboard/category' className={`${pathname=='/dashboard/category'?'active':'text-pink'} flex gap-4 p-4 rounded-e-2xl items-center`}>
                <i className="fa-regular fa-share-from-square fa-2x"></i>
                <p>Category</p>
            </Link>
        </ul>

    )
}
