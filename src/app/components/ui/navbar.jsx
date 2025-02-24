"use client"


import React from 'react'
import Image from 'next/image'

function Navbar() {
    

    return (
        <>
        <div className="w-full h-[6%] md:h-[10%] flex items-center justify-between text-black p-2 border-b border-gray-200 shadow-lg">
            <div className='w-2/5 md:w-[18%] h-full'>
                <img src="/whatbytes1.png" className='w-full h-full'></img>
             </div>
            <div className='flex items-center justify-center gap-2 border-2 p-2 rounded-md '>
                <div className='w-3 h-3 md:w-6 md:h-6 rounded-full '>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s " className='w-full h-full rounded-full'></img>
                </div>
                <h1 className='font-serif text-[8px] md:text-sm font-bold  '>Prashant Biradar</h1>
             </div>

         </div>
         </>
    )
}

export default Navbar
