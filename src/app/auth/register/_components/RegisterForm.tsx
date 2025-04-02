'use client'
import { useFormik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { fetchregister } from '../action/register.action';
import { RegisterData } from '../types/register.type';
import { InfinitySpin } from 'react-loader-spinner';

export default function RegisterForm() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [isError, seterror] = useState('')

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(7).required('fisrt name is required'),
    lastName: Yup.string().min(2).max(7).required('last name is required'),
    email: Yup.string().email('email is not valid').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z]+@[0-9]+$/).required('password is required'),
    rePassword: Yup.string().required().oneOf([Yup.ref('password')], 'not match password').required('repassword is required'),
    phone: Yup.string().matches(/^\+201[0-25][0-9]{8}$/, 'not valid phone number').required('phone is required'),
    gender: Yup.string().required('gender is required')
  })

  async function handleRegister(values: RegisterData) {
    setLoading(true)
    try {
      const data = await fetchregister(values)
      if (data?.message == "success") {
        setMsg('account created')
        seterror('')
        setLoading(false)
      }

    } catch (error) {
      console.log(error);
      seterror('account already exist')
      setLoading(false)
    }
  }

  const formik = useFormik<RegisterData>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
      gender: ''
    },
    validationSchema: SignupSchema
    ,
    onSubmit: handleRegister
  })

  return (
    <div className=' '>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
              {msg && <p>{msg}</p>}
              {isError && <p>{isError}</p>}
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign up
              </h1>
              <div className="w-full flex-1 mt-8">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mx-auto max-w-xs">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="firstName" name="firstName" />

                    {(formik.errors.firstName && formik.touched.firstName) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.firstName}
                        </div>
                      </div>
                      : ''}
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="lastName" name='lastName' />
                    {(formik.errors.lastName && formik.touched.lastName) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.lastName}
                        </div>
                      </div>
                      : ''}
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" name="email" />
                    {(formik.errors.email && formik.touched.email) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.email}
                        </div>
                      </div>
                      : ''}
                    <div className="relative">
                      <input name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" />
                      <button
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute right-4 top-[50%] text-sm"
                      >
                        {isPasswordVisible ?
                          <i className="fa-solid fa-eye-slash"></i>
                          :
                          <i className="fa-solid fa-eye"></i>
                        }
                      </button>
                    </div>
                    {(formik.errors.password && formik.touched.password) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.password}
                        </div>
                      </div>
                      : ''}
                    <div className="relative">
                      <input name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type={isRePasswordVisible ? 'text' : 'password'} placeholder="rePassword" />
                      <button
                        type="button"
                        onClick={() => setIsRePasswordVisible(!isRePasswordVisible)}
                        className="absolute right-4 top-[50%] text-sm"
                      >
                        {isRePasswordVisible ?
                          <i className="fa-solid fa-eye-slash"></i>
                          :
                          <i className="fa-solid fa-eye"></i>
                        }
                      </button>
                    </div>
                    {(formik.errors.rePassword && formik.touched.rePassword) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.rePassword}
                        </div>
                      </div>
                      : ''}
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="tel" placeholder="Phone" name='phone' />
                    {(formik.errors.phone && formik.touched.phone) ?
                      <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          {formik.errors.phone}
                        </div>
                      </div>
                      : ''}
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
                      {(formik.errors.gender && formik.touched.gender) ?
                        <div className="flex items-center p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div>

                          </div>
                        </div>
                        : ''}

                    </div>
                    <button type="submit" className="mt-5 tracking-wide font-semibold bg-pink text-gray-100 w-full py-4 rounded-lg hover:bg-pink transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">
                        {loading ? <InfinitySpin

                          width="70"
                          color="#fff"
                          aria-label="infinity-spin-loading"
                        /> :
                          "Sign Up"}
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
