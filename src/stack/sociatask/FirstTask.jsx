import { ArrowLeftIcon } from "lucide-react";

export default function FirstTask() {
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
          <h2 className="text-sm text-white">1/5</h2>
          <h1 className="text-xl text-white">Social Boost</h1>
          <p className="text-sm text-white">
            Choose the type of pool you want to create
          </p>
        </main>
        <div className="min-h-[235px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            <div className="flex items-center gap-4">
                <input type="checkbox" name="" id="" className="h-6 w-6 rounded-2xl"/>
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
        </div>
        <div className="p-2 mt-4">
            <button className="bg-[#70707099] py-3 px-8 rounded-md text-[#3B82F6] text-xl">+ Add Task</button>
        </div>
        <div className="p-2 mt-10 flex justify-center items-center">
            <button className="bg-[#3B82F6] py-3 px-20 rounded-md text-[#FFFF] text-xl">Next</button>
        </div>
      </div>
    </div>
  );
}
