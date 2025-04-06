import { SearchData } from '@/Context/searchContext';
import React, { useContext, useEffect, useState } from 'react'
interface SearchProps {
    fn: () => void;
}
export default function Search({ fn }: SearchProps ) {

    const [toggleClose, setToggleClose] = useState(false)

    const {setSearchQuery} = useContext(SearchData)
    function handleToggleClose() {
        setToggleClose((prev) => !prev)
        fn()
    }
    useEffect(() => {
        if (!toggleClose) {
          document.body.style.overflow = "hidden";  
        } else {
          document.body.style.overflow = "auto";}
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [toggleClose]);

    return (
        <div  className={`
            ${toggleClose ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}  
            bg-[rgba(0,0,0,.5)] z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center
            transition-all duration-500 ease-in-out
            transform ${toggleClose ? 'translate-y-4' : 'translate-y-0'}
             ease-in-out
          `}>
            <div className='flex w-1/3 flex-col items-center'>
                <i onClick={handleToggleClose} className='fa-solid fa-close bg-pink cursor-pointer text-white size-6 flex justify-center items-center rounded-full'></i>
                <div className='flex justify-between items-center w-full'>
                    <input onChange={(e)=>{setSearchQuery(e.target.value.toLowerCase())}} type="text" className='block py-2.5 px-0  bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink focus:outline-none focus:ring-0 focus:border-pink  w-full mx-auto text-white font-bold' placeholder='search here' />
                    <i className='fa-solid fa-search text-white'></i>
                </div>
            </div>
        </div>
    )
}
