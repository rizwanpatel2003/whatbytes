"use client"
import React from 'react'

function Sidebar() {
    return (
        <div className="w-[20%] md:w-[18%] h-full flex flex-col items-center gap-8 p-1 mt-2 md:p-[5vh] text-[8px] text-gray-500 font-semibold md:text-lg font-serif border-r border-gray-200  shadow-lg">

            <div className='w-full flex items-center'>
           
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                width="1em"
                height="1em"
                className='mr-2'
             >
              <g
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
              strokeLinejoin="round"
      >
                 <rect width="5" height="7" x="8.5" y="6.5" rx=".5"></rect>
                 <rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></rect>
                <rect width="5" height="7" x=".5" y=".5" rx=".5"></rect>
                <rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></rect>
                </g>
                </svg>
  
        
                <h1 >Dashbord</h1>
            </div>
            <div className='w-full flex items-center'>
           
    
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                    width="1em"
                height="1em"
                className='mr-2'
                    >
                 <path
                  fill="currentColor"
                   d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
               ></path>
                </svg>
                <h1 >Skillset</h1>
            </div>
            <div className='w-full flex items-center'>
         
  
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
       className='mr-2'
    >
      <path
        fill="currentColor"
        d="M4.01 2L4 22h16V8l-6-6zM13 9V3.5L18.5 9z"
      ></path>
    </svg>


              <h1 >Internship</h1>
            </div>

        </div>
            )}

export default Sidebar