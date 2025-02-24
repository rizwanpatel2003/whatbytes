"use client"
import React from 'react'
import Subject from './subject'
import Staticts from './staticts'
import Comparision from "./comparision"
import Syllabus from "./syllabus"
import ScoreChart from './scorechart'
function Leftcontent() {
    return (
        <div className='w-full md:w-[55%] flex flex-col gap-8 p-4  '>
            <h1 className=" font-serif text-slate-500">Skill Test</h1>
           <Subject></Subject>
            <Staticts></Staticts>
             <div className='w-full shadow-lg p-4'>
             <h1 className='text-xs md:text-xl font-semibold'>Comprison Graph</h1>
             <p className='text-[8px] md:text-lg font-serif'>You Scored 90 percentile which is which is lower than the average percentile 72% of the all enginees who took this assignment</p>
             <Comparision></Comparision>
             </div>

             
        </div>
    )
}

export default Leftcontent
