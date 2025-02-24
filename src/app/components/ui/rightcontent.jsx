"use client"
import React from 'react'
import Syllabus from "./syllabus"
import ScoreChart from './scorechart'
import Scorecontext from '../../Context/Scorecontext';
import { useContext } from 'react';

function Rightcontent() {
    const contextvalue=useContext(Scorecontext)
  const {crct}= contextvalue[2];
return (
        <div className='w-full md:w-[45%] flex flex-col '>
               
                <Syllabus></Syllabus>
                <div className='w-[88%] bg-white flex flex-col items-center font-serif p-1 md:p-8 shadow-lg  self-center rounded-lg mt-5 mb-[200px]'>
                    <div className='w-full flex justify-between items-center '>
                   <h1 className=' text-[10px] md:text-xl font-semibold'>Question Analysis</h1>  
                    <h1 className='text-[10px]  md:text-lg'>{crct}/15</h1>
                   </div>
                   <h1 className='text-[6px] md:text-sm'>You scored 12 Question correct out of 15 ,however you still need improvement</h1>  
                   <ScoreChart></ScoreChart>
                 </div>
              
        </div>
    )
}

export default Rightcontent
