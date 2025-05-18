import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SendCrypto() {
  const [toggle, setToggle] = useState(null);
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col p-2">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Send Crypto</h1>
        </header>
        {/* Main content */}
        <main className="pt-[70px] px-4 mt-20 flex-col flex items-center justify-center ">
          {/* Description */}
          
          <h1 className=" text-white font-bold text-2xl">$0.00</h1>
          <p className="text-sm text-slate-500">0.00USDT</p>
        </main>
        <div className="mt-4">
          <h1 className="text-white mb-2">Address</h1>
          {/* <div className="min-h-[55px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            
        </div> */}
          <div className="border-blue-400 border mb-3 mt-3 w-full flex gap-2 items-center rounded-md py-5 p-4">
            <h1 className="text-[#A4A4A4] text-sm">USDT Address</h1>
           
          </div>
          <p className="text-white text-sm">Wallet Bal:$15.39USDT</p>
        </div>

       

      

        <div className="p-2 mt-52 flex justify-center items-center">
          <Link to="/six-task" className="w-full">
            <button className="bg-[#3B82F6] w-full py-3 px-20 rounded-md text-[#FFFF] text-xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
