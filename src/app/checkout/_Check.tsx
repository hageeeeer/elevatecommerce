'use client'
import { useFormik } from 'formik'
import React from 'react'
import { onlinepayment } from './_action/checkout.action';
import { dataAddress } from './_type/payment.types';




export default function Check() {
    async function handleAddress(values: dataAddress) {
       
      const {session} = await onlinepayment(values)
      location.href=session.url
    }
    const formik = useFormik<dataAddress>({
        initialValues: {
            street: "",
            phone: "",
            city: "",
            lat: "",
            long: ""
          },
        onSubmit: handleAddress
    })
    return (
        <div className='container'>
            <form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
              

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">phone</label>
                        <input required type="tel" onChange={formik.handleChange} value={formik.values.phone} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""  />

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 ">street</label>
                        <input required type="text" onChange={formik.handleChange} value={formik.values.street} name="street" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" "  />

                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="lat" className="block mb-2 text-sm font-medium text-gray-900 ">lat</label>
                        <input required type="tel" onChange={formik.handleChange} name="lat" id="lat" value={formik.values.lat} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""  />

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="long" className="block mb-2 text-sm font-medium text-gray-900 ">long</label>
                        <input required type="text" onChange={formik.handleChange} value={formik.values.long} name="long" id="long" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" "  />

                    </div>
                </div>




                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 ">Select your city</label>
                <select id="city" onChange={formik.handleChange} value={formik.values.city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option >cairo</option>
                    <option>giza</option>
                    <option>aswan</option>
                    <option>luxor</option>
                </select>

                <button type='submit' className="px-4 py-2 text-white rounded bg-pink my-5">
                    <span className='mx-2'> Check out now </span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </form>


        </div>
    )
}
