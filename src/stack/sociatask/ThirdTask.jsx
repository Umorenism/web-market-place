import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";


export default function ThirdTask() {
   
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col ">
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
          <h2 className="text-sm text-white">2/5</h2>
          <h1 className="text-xl text-white">Social Boost</h1>
          <p className="text-sm text-white">
            Choose the type of pool you want to create
          </p>
        </main>
        <div className="h-[80vh] w-full space-y-4 flex flex-col p-4  mt-20 rounded-t-2xl bg-[#2C2C30] ">
            <div className="flex w-full gap-4 mt-5 mb-5">
                <input type="text" placeholder="Search task" className="py-2 p-3 bg-transparent border border-white w-full rounded-full" />
                <button className="text-white">Cancel</button>
            </div>
            <div className="mt-20 space-y-4">
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl border "/>
                <p className="text-xl text-white">Follow X account</p>
                
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Like and Comments a tweet</p>
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Retweet and tweet</p>
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Comments with hashtage</p>
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Comments with hashtage</p>
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Comments with hashtage</p>
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
                <p className="text-xl text-white">Comments with hashtage</p>
            </div>
            </div>
           
        </div>  
      </div>
    </div>
  );
}
