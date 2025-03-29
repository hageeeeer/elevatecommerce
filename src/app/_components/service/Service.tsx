import React from 'react'

export default function Service() {
  return (
    <div className='hidden md:block'>
        <div className='flex bg-[rgba(251,102,193,.2)] p-6 rounded-lg my-5'>
            <div className='w-1/4'>
                <div className='flex items-center gap-4'>
                <i className="fa-2x bg-[rgb(251,102,193)] text-white fa-solid fa-truck flex justify-center items-center size-16 rounded-full"></i>
                <div>
                    <h4 className='font-bold'>Free delivery</h4>
                    <span className='text-sm text-slate-600'>order over 120$</span>
                </div>
                </div>
            </div>
            <div className='w-1/4'>
                <div className='flex items-center gap-4'>
                <i className="fa-2x bg-[rgb(251,102,193)] text-white fa-solid fa-wallet flex justify-center items-center size-16 rounded-full"></i>
                <div>
                    <h4 className='font-bold'>Safe payemnt</h4>
                    <span className='text-sm text-slate-600'>within 30 days Returns</span>
                </div>
                </div>
            </div>
            <div className='w-1/4'>
                <div className='flex items-center gap-4'>
                <i className="fa-2x bg-[rgb(251,102,193)] text-white fa-brands fa-stripe-s flex justify-center items-center size-16 rounded-full"></i>
                <div>
                    <h4 className='font-bold'>Pay online</h4>
                    <span className='text-sm text-slate-600'>within 30 days Returns</span>
                </div>
                </div>
            </div>
            <div className='w-1/4'>
                <div className='flex items-center gap-4'>
                <i className="fa-2x bg-[rgb(251,102,193)] text-white fa-solid fa-headset flex justify-center items-center size-16 rounded-full"></i>
                <div>
                    <h4 className='font-bold'>Support team</h4>
                    <span className='text-sm text-slate-600'>within 30 days Returns</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
