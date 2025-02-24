"use client"
import React from 'react'

function Syllabus() {
    return (
        <div className="p-1 md:p-8 font-serif">
      <div className="max-w-2xl h-[350px] md:h-[450px] mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
        <h1 className="text-sm md:text-2xl font-bold mb-3">Syllabus Wise Analysis</h1>

        <div className="space-y-12">
        
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] md:text-lg font-medium mb-1">HTML Tools, Forms, History</span>
              <span className="text-[10px] md:text-lg font-medium">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5">
              <div
                className="bg-blue-600 h-1.5 md:h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

         
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] md:text-lg font-medium mb-1">Tags & References in HTML</span>
              <span className="text-[10px] md:text-lg font-medium">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5">
              <div
                className="bg-green-600 h-1.5 md:h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

        
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] md:text-lg font-medium mb-1">Tables & References in HTML</span>
              <span className="text-[10px] md:text-lg font-medium">24%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5">
              <div
                className="bg-yellow-600 h-1.5 md:h-2.5 rounded-full"
                style={{ width: "24%" }}
              ></div>
            </div>
          </div>

          
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] md:text-lg font-medium mb-1">Tables & CSS Basics</span>
              <span className="text-[10px] md:text-lg font-medium">96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-fullh-1.5 md:h-2.5">
              <div
                className="bg-red-600 h-1.5 md:h-2.5 rounded-full"
                style={{ width: "96%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Syllabus
