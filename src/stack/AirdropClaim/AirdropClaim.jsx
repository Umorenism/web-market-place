import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import pic from "../../assets/xl.png";
import pic3 from "../../assets/waltel.png";

export default function AirdropClaim() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Airdrop</h1>
      </header>

      <div className="mt-[50px] relative p-2 w-full space-y-6">
        <div className="mt-5">
          <h1 className=" text-white mb-4">Total Balance</h1>
          <div className="flex items-center gap-3">
            <img src={pic} alt="airdrop" className="h-10 w-10 object-contain" />
            <p className="text-white font-bold text-2xl">256.00</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="bg-[#2C2C30] py-4 mt-10 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={pic3} alt="" className="h-10 w-10 object-contain" />
              <div className="flex flex-col text-white text-sm">
                <h1>Day-1 Check-in</h1>
                <p>Next claim 17hr 16min</p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500 rounded-xl p-2 px-8 text-white flex items-center justify-center">
                claim
              </button>
            </div>
          </div>
          <div className="bg-[#2C2C30] py-4 mt-10 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={pic3} alt="" className="h-10 w-10 object-contain" />
              <div className="flex flex-col text-white text-sm">
                <h1>Day-1 Check-in</h1>
                <p>Next claim 17hr 16min</p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500 rounded-xl p-2 px-8 text-white flex items-center justify-center">
                claim
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-6">
              <h1 className="text-white font-bold">New</h1>
              <h1 className="text-white font-bold">Socials</h1>
              <h1 className="text-white font-bold">Friends</h1>
              <h1 className="text-white font-bold">Partners</h1>
            </div>
          </div>
          <div className="min-h-screen w-full">
            <div className="border-[#2C2C30] border py-4 mt-10 rounded-md p-2 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={pic3} alt="" className="h-10 w-10 object-contain" />
                <div className="flex flex-col text-white text-sm">
                  <h1>Connect X account</h1>
                  <p>+ 300 EXP</p>
                </div>
              </div>
              <div className="">
                <button className="bg-blue-500 rounded-xl p-2 px-8 text-white flex items-center justify-center">
                  claim
                </button>
              </div>
            </div>
            <div className="border-[#2C2C30] border py-4 mt-10 rounded-md p-2 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={pic3} alt="" className="h-10 w-10 object-contain" />
                <div className="flex flex-col text-white text-sm">
                  <h1>Follow Sharp on X </h1>
                  <p>+ 300 EXP</p>
                </div>
              </div>
              <div className="">
                <button className="bg-[#42424d] rounded-xl p-2 px-8 text-white flex items-center justify-center">
                  start
                </button>
              </div>
            </div>
            <div className="border-[#2C2C30] border py-4 mt-10 rounded-md p-2 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={pic3} alt="" className="h-10 w-10 object-contain" />
                <div className="flex flex-col text-white text-sm">
                  <h1>Connect X account</h1>
                  <p>+ 300 EXP</p>
                </div>
              </div>
              <div className="">
                <button className="bg-transparent rounded-xl p-2 px-8 text-white flex items-center justify-center">
                 1/2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
