"use client"
import Image from "next/image";
import Navbar from "./components/ui/navbar";
import Sidebar from "./components/ui/sidebar";
import Leftcontent from "./components/ui/leftcontent";
import Rightcontent from "./components/ui/rightcontent";
import ContextScoreProvider from './Context/ContextScoreProvider'
export default function Home() {
  return (
    <ContextScoreProvider>
      <div className=" w-full h-screen overflow-hidden">
           <Navbar></Navbar>
           
          <div className="w-full h-[90%] flex">
                 <Sidebar></Sidebar>
                
                 <div className="w-[80%] md:w-[82%]   flex flex-col md:flex-row overflow-auto p-[5vh][&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        
                        <Leftcontent></Leftcontent>
                        <Rightcontent></Rightcontent>
                 </div>
                       
        </div>

      </div>
    </ContextScoreProvider>
  );
}
