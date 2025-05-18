import { ArrowLeftIcon, EyeOffIcon } from "lucide-react";

import pic from '../../assets/copy.png'
import { Link } from "react-router-dom";
export default function Withdraw() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Withdraw</h1>
      </header>

     <div className="mt-20 p-2 w-full space-y-6">
       <div className="mt-4" >
        <label htmlFor="" className="text-white ">Adress</label>
        <div className="border rounded-2xl mt-2 text-white flex justify-between items-center py-5 p-2">
            <h1>Usdt Adress</h1>
            <div className="flex items-center gap-4">
                <h2>Paste</h2>
                <img src="" alt="" />
            </div>
        </div>
       </div>
       <div className="mt-4" >
        <label htmlFor="" className="text-white ">Network</label>
        <div className="border rounded-2xl mt-2 text-white flex justify-between items-center py-5 p-2">
            <h1>BSC{" "}(BEP20)</h1>
            
        </div>
       </div>
       <div className="mt-4" >
        <label htmlFor="" className="text-white ">Amount</label>
        <div className="border rounded-2xl mt-2 text-white flex justify-between items-center py-5 p-2">
            <h1>0.00</h1>
            <div className="flex items-center gap-4">
                <h2>Paste</h2>
                <img src={pic} alt="" className="h-5 w-5 object-contain"/>
            </div>
        </div>
       </div>
       <div className="flex justify-between w-full">
        <h1 className="text-white">Available:</h1>
        <h1 className="text-white">20.5243USDT</h1>
       </div>
       <div className="w-full">
         <div className="mt-10 p-2 space-y-4 ">
          <div className="bg-[#2C2C30] py-5 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex  text-white text-sm">
                <h1 className="text-blue-800">Important:<span className="text-white">Only send BSC (BEP20) tokens to this address. 
                    Sending tokens via any other network may result in permanent loss of funds.</span></h1>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div>
        <h1 className="text-white">Other users</h1>
        <div className="mt-5">
         <Link to="/paying">
          <button className="w-full bg-blue-500 text-white py-4 rounded-xl text-xl">Withdraw Usdt</button>
         </Link>
        </div>
       </div>
     </div>
    </div>
  );
}
