import { ArrowLeftIcon, EyeOffIcon } from "lucide-react";

import piz from "../../assets/im.png";
import air from "../../assets/xl.png";
import ton from "../../assets/t.png";
 import pic2 from '../../assets/waltel.png'
import { Link } from "react-router-dom";
export default function WalDetails() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Wallet</h1>
      </header>

      <div className="mt-20  w-full">
        <div className="flex justify-between items-center w-full p-2">
          <div>
            <img src={piz} alt="" className="h-14 w-14 object-contain" />
            <h1 className="text-white">@Xaus1245 </h1>
          </div>
          <button className="bg-[#FF6B02] rounded-full py-1 px-4 text-[#FFFFFF] flex gap-2 items-center">
            {" "}
            <img src={air} alt="" />
            Aidrop
          </button>
        </div>

        <div className="w-full flex-col mt-20 justify-center items-center flex">
          <h1 className="text-white flex gap-3 items-center text-xl">
            Total Balance <EyeOffIcon />
          </h1>
          <p className="text-3xl font-bold text-white mt-2">$0.00</p>
        </div>

        <div>
          <div className="flex justify-center mt-20 items-center w-full gap-2 p-2">
            <Link to="/deposite" className="w-full">
              <button className="border border-[#3B82F6] rounded-md px-10 py-3 w-full text-white ">
                Deposit
              </button>
            </Link>
            <Link to="/withdraw" className="w-full">
              <button className="border border-[#3B82F6] rounded-md px-10 py-3 text-white w-full">
                Withdraw
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-8 p-5">
            <h1 className="text-white">Assets</h1>
            <h1 className="text-white">History</h1>
          </div>
          <div className="mt-20 w-full p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={ton} alt="" className="h-10 w-10 object-contain" />
                <div>
                  <h1 className="text-white">USDT</h1>
                  <p className="text-white">0.00 USDT</p>
                </div>
              </div>
              <p className="text-white">$0.00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-2 space-y-4 min-h-[500px]">
         <div className="bg-[#2C2C30] py-4 rounded-md p-2 flex justify-between items-center">
           <div className="flex items-center gap-4">
            <img src={pic2} alt="" className="h-10 w-10 object-contain"/> 
             <div className="flex flex-col text-white text-sm">
               <h1>Received from</h1>
              <p>x0bGsu76Du...Yf4aH</p>
             </div>
           </div>
           <div>
            <h1 className="text-sm text-green-900">+ 25.63 Usdt</h1>
            <p className="text-white text-sm">14 May, 13:58</p>
           </div>
         </div>
         <div className="bg-[#2C2C30] py-4 rounded-md p-2 flex justify-between items-center">
           <div className="flex items-center gap-4">
            <img src={pic2} alt="" className="h-10 w-10 object-contain"/> 
             <div className="flex flex-col text-white text-sm">
               <h1>Received from</h1>
              <p>x0bGsu76Du...Yf4aH</p>
             </div>
           </div>
           <div>
            <h1 className="text-sm text-green-900">+ 25.63 Usdt</h1>
            <p className="text-white text-sm">14 May, 13:58</p>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
}
