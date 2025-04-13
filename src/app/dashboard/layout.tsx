import React from 'react'
import Sidebar from './_components/sidebar/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <div className="w-1/4">
                <Sidebar />
            </div>
            <div className="w-3/4">
             {children}
            </div>
        </div>
    )
}
