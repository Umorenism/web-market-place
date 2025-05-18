import { ArrowLeftIcon } from "lucide-react";
import profiles from "../assets/im.png";
import { useState } from "react";

export default function ProfilePage() {
  const [profile,setProfile]=useState(null)

  const handleSelectImage = (e)=>{
    setProfile(e.target.files[0])
  }
  return (
    <div className="bg-[#0b0f1d]  flex justify-center min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl"> My Profile</h1>
      </header>
      <div className="mt-20 min-h-[500px] mb-10 p-4">
        <div className=" h-[300px] rounded-md w-full justify-center items-center bg-[#2C2C30] p-3 shadow-lg">
        <div className="flex justify-center flex-col items-center mt-10">
          <div  className="w-20 h-20 rounded-full bg-blue-500 border p-1 flex justify-center items-center">
            <img
              src={profiles}
              alt="profile"
             
              className="w-full h-full rounded-full object-contain"
            />
          </div>
          <p className="text-white mt-2 text-2xl font-bold">John Doe </p>
        </div>
        <div className="p-4">
          {/* wallet Address */}
          <h1 className="text-white mt-2 text-xl font-bold text-center">Wallet Adress: <span className="text-sm">bddyygeygygesaadsdsfsfsffttettdte</span></h1>
        </div>
      </div>
      {/* content */}
      <div className="w-full mt-10 text-white">
       <div className="space-y-4">
        <label htmlFor="" className="text-xl font-bold">FullName</label>
       <input type="text" className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"/>
       </div>
       <div className="space-y-4">
        <label htmlFor="" className="text-xl font-bold">Username</label>
       <input type="text" className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"/>
       </div>
       <div className="space-y-4">
        <label htmlFor="" className="text-xl font-bold">phone Number</label>
       <input type="number" className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"/>
       </div>
       <div className="space-y-4">
        <label htmlFor="" className="text-xl font-bold">Gender</label>
        <select name="" id="" className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl">
          <option value="" className="bg-[#2C2C30]" >Male</option>
          <option value=""  className="bg-[#2C2C30]">FeMale</option>
        </select>
       </div>       
       <div className="space-y-4">
        <label htmlFor="" className="text-xl font-bold">Date of Birth</label>
       <input type="date" className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"/>
       </div>
       <div className="space-y-4 mt-4">
       
       <button className="bg-blue-500 text-white w-full py-4 rounded-md">Save</button>
       </div>
      </div>
      </div>
    </div>
  );
}
