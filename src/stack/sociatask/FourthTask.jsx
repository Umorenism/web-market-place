import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import load from '../../assets/load.png'

export default function FourthTask() {
    const [toggle,setToggle] =useState(null)
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col p-2">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Create pool</h1>
        </header>
        {/* Main content */}
        <main className="pt-[70px] px-4 flex flex-col gap-2">
          {/* Description */}
          <h2 className="text-sm text-white">3/5</h2>
          <h1 className="text-xl text-white">Task Details</h1>
          <p className="text-sm text-white">
            Choose the type of pool you want to create
          </p>
        </main>
        <div className="mt-4">
        <h1 className="text-white mb-2">Your task title</h1>
        {/* <div className="min-h-[55px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            
        </div> */}
        <input type="text" placeholder="Your task title" className="bg-[#393838] w-full rounded-md py-5 p-4"/>
        </div>
       
        <div className="mt-4">
        <h1 className="text-white mb-2">Description (Optional)</h1>
        {/* <div className="min-h-[55px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            
        </div> */}
        <input type="text" placeholder="Task description here" className="bg-[#393838] w-full rounded-md py-10 p-4"/>
        </div>
       
        <div className="mt-4">
        <h1 className="text-white mb-2">Upload Banner (Optional)</h1>
        {/* <div className="min-h-[55px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            
        </div> */}
        <div  className="bg-[#393838] w-full flex flex-col justify-center items-center rounded-md py-20 p-4">
            <img src={load} alt="" className="object-contain h-10 w-10 " />
            <h1 className="text-blue-700">Upload Image here</h1>
        </div>
        </div>
       
       
        <div className="p-2 mt-10 flex justify-center items-center">
            <Link to="/fivth-task">
            <button className="bg-[#3B82F6] py-3 px-20 rounded-md text-[#FFFF] text-xl">Next</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
