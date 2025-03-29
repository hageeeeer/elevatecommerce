'use client'
import {  useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import { MyFormValues } from '../types/register.type';
import * as Yup from 'yup';

export default function RegisterForm() {

    //validation

   const SignupSchema  = Yup.object().shape({
    firstName:Yup.string().min(2).max(7).required('fisrt name is required'),
    lastName:Yup.string().min(2).max(7).required('last name is required'),
    email:Yup.string().email('email is not valid').required('email is required'),
    password:Yup.string().matches(/^[A-Z][a-z][@0-9]/).required('password is required'),
    rePassword:Yup.string().oneOf(['password'],'not match password').required('repassword is required'),
    phone:Yup.string().matches(/^01[0-25]\d{8}$/,'not valid phone number').required('phone is required'),
    gender:Yup.string().required('gender is required')
   })

    function handleRegister(values: MyFormValues) {
        console.log(values);
    }

    const formik = useFormik<MyFormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
            gender: ''
        },
        validationSchema:SignupSchema
        ,
        onSubmit: handleRegister
    })

    return (
        <div className=' '>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mx-auto max-w-xs">
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="firstName" name="firstName" />
                                       
                                         {(formik.errors.firstName&&formik.touched.firstName)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.firstName}
                                         </div>
                                       </div>
                                         :''} 
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="lastName" name='lastName' />
                                        {(formik.errors.lastName&&formik.touched.lastName)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.lastName}
                                         </div>
                                       </div>
                                         :''} 
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" name="email" />
                                        {(formik.errors.email&&formik.touched.email)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.email}
                                         </div>
                                       </div>
                                         :''} 
                                        <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Password" name='password' />
                                        {(formik.errors.password&&formik.touched.password)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.password}
                                         </div>
                                       </div>
                                         :''} 
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" name='rePassword' placeholder="re-Password" />
                                        {(formik.errors.rePassword&&formik.touched.rePassword)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.rePassword}
                                         </div>
                                       </div>
                                         :''} 
                                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="tel" placeholder="Phone" name='phone' />
                                        {(formik.errors.phone&&formik.touched.phone)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                           {formik.errors.phone}
                                         </div>
                                       </div>
                                         :''} 
                                        <div className='mt-5 flex justify-between'>

                                            <div>
                                                <div className="flex mx-4 items-center mb-4">
                                                    <input onChange={formik.handleChange} id="female" value="female" type="radio" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                </div>
                                                <div className="flex mx-4 items-center">
                                                    <input onChange={formik.handleChange} id="male" type="radio" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='male' />
                                                    <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
                                                </div>
                                            </div>
                                            {(formik.errors.gender&&formik.touched.gender)?
                                         <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                         <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                         </svg>
                                         <span className="sr-only">Info</span>
                                         <div>
                                         
                                         </div>
                                       </div>
                                         :''} 

                                        </div>
                                        <button className="mt-5 tracking-wide font-semibold bg-pink text-gray-100 w-full py-4 rounded-lg hover:bg-pink transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy={7} r={4} />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Sign Up
                                            </span>
                                        </button>
                                        <p className="mt-6 text-xs text-gray-600 text-center">


                                            <Link href="/auth/login" className="flex items-center justify-center gap-3  text-xl">
                                                <span>Login</span> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-whitepink text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
